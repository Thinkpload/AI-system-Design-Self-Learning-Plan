"""
Ingestion pipeline: .md files → chunks → Ollama embeddings → Qdrant

Usage:
    python -m backend.ingest              # uses ROADMAP_ROOT from .env
    python -m backend.ingest /path/to/md  # explicit path
"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path

import httpx
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, PointStruct, VectorParams

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
EMBED_MODEL = os.getenv("EMBED_MODEL", "nomic-embed-text")
COLLECTION = os.getenv("COLLECTION", "roadmap")
VECTOR_SIZE = 768
CHUNK_SIZE = 600
CHUNK_OVERLAP_LINES = 2

# Directories and file patterns to skip
SKIP_DIRS = {"node_modules", ".git", ".next", "__pycache__", "Old", "dist", ".venv", "venv"}


# ── File discovery ────────────────────────────────────────────────────────────

def find_md_files(root: str) -> list[Path]:
    result: list[Path] = []
    for p in Path(root).rglob("*.md"):
        if any(part in SKIP_DIRS for part in p.parts):
            continue
        result.append(p)
    return sorted(result)


# ── Chunking ──────────────────────────────────────────────────────────────────

def _header_level(line: str) -> int:
    """Return markdown header level (1-3) or 0 if not a header."""
    m = re.match(r'^(#{1,3})\s', line)
    return len(m.group(1)) if m else 0


def chunk_document(text: str, source_name: str) -> list[dict]:
    """
    Split a markdown document into semantically-aware chunks.
    Each chunk carries its nearest H1/H2 breadcrumb so the LLM has context.
    """
    lines = text.splitlines()
    chunks: list[dict] = []

    current_h1 = ""
    current_h2 = ""
    buffer: list[str] = []

    def flush(h1: str, h2: str, buf: list[str]) -> None:
        content = "\n".join(buf).strip()
        if not content:
            return
        # Add breadcrumb header to give the chunk context
        breadcrumb = " › ".join(filter(None, [h1, h2]))
        if breadcrumb:
            content = f"## {breadcrumb}\n\n{content}"

        # If still over limit, split further
        if len(content) <= CHUNK_SIZE * 2:
            chunks.append({"text": content, "source": source_name})
            return

        # Hard-split oversized sections
        words = content.split()
        part: list[str] = []
        for word in words:
            part.append(word)
            if len(" ".join(part)) >= CHUNK_SIZE:
                chunks.append({"text": " ".join(part), "source": source_name})
                # carry overlap
                part = part[-CHUNK_OVERLAP_LINES * 8:]
        if part:
            chunks.append({"text": " ".join(part), "source": source_name})

    for line in lines:
        lvl = _header_level(line)
        if lvl == 1:
            flush(current_h1, current_h2, buffer)
            buffer = []
            current_h1 = line.lstrip("#").strip()
            current_h2 = ""
        elif lvl == 2:
            flush(current_h1, current_h2, buffer)
            buffer = []
            current_h2 = line.lstrip("#").strip()
        else:
            buffer.append(line)

    flush(current_h1, current_h2, buffer)
    return chunks


# ── Embeddings ────────────────────────────────────────────────────────────────

def embed_batch(texts: list[str]) -> list[list[float]]:
    vectors: list[list[float]] = []
    with httpx.Client(timeout=60) as client:
        for text in texts:
            r = client.post(
                f"{OLLAMA_URL}/api/embeddings",
                json={"model": EMBED_MODEL, "prompt": text},
            )
            r.raise_for_status()
            vectors.append(r.json()["embedding"])
    return vectors


# ── Qdrant upsert ─────────────────────────────────────────────────────────────

def upsert_chunks(client: QdrantClient, all_chunks: list[dict]) -> None:
    texts = [c["text"] for c in all_chunks]
    print(f"  Embedding {len(texts)} chunks …")
    vectors = embed_batch(texts)

    points = [
        PointStruct(
            id=i,
            vector=vec,
            payload={"text": chunk["text"], "source": chunk["source"]},
        )
        for i, (chunk, vec) in enumerate(zip(all_chunks, vectors))
    ]

    batch = 64
    for start in range(0, len(points), batch):
        client.upsert(collection_name=COLLECTION, points=points[start : start + batch])

    print(f"  ✓ {len(points)} points upserted into '{COLLECTION}'")


# ── Main ──────────────────────────────────────────────────────────────────────

def ingest(root: str) -> None:
    files = find_md_files(root)
    if not files:
        print(f"No markdown files found under '{root}'")
        sys.exit(1)

    print(f"Found {len(files)} markdown file(s) under '{root}'")

    all_chunks: list[dict] = []
    for path in files:
        rel = str(path.relative_to(root))
        text = path.read_text(encoding="utf-8", errors="ignore")
        doc_chunks = chunk_document(text, rel)
        print(f"  {rel}: {len(doc_chunks)} chunks")
        all_chunks.extend(doc_chunks)

    print(f"\nTotal chunks: {len(all_chunks)}")

    client = QdrantClient(url=QDRANT_URL)
    client.recreate_collection(
        collection_name=COLLECTION,
        vectors_config=VectorParams(size=VECTOR_SIZE, distance=Distance.COSINE),
    )
    print(f"Collection '{COLLECTION}' (re)created in Qdrant")

    upsert_chunks(client, all_chunks)
    print("\nIngestion complete.")


if __name__ == "__main__":
    root_path = sys.argv[1] if len(sys.argv) > 1 else os.getenv("ROADMAP_ROOT", "../..")
    ingest(os.path.abspath(root_path))

"""
Query pipeline: question → embed → Qdrant search → Ollama LLM → answer + sources
"""

from __future__ import annotations

import os

import httpx
from dotenv import load_dotenv
from qdrant_client import QdrantClient

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
EMBED_MODEL = os.getenv("EMBED_MODEL", "nomic-embed-text")
LLM_MODEL = os.getenv("LLM_MODEL", "llama3.2")
COLLECTION = os.getenv("COLLECTION", "roadmap")
TOP_K = 5

SYSTEM_PROMPT = """You are an AI systems design expert and learning coach.
Answer the question using ONLY the provided context excerpts from the learner's roadmap.
Be concise but thorough. Use bullet points where helpful.
If the context does not contain enough information to answer, say so explicitly.
Always cite which source document your answer is based on."""


def embed_question(text: str) -> list[float]:
    with httpx.Client(timeout=60) as client:
        r = client.post(
            f"{OLLAMA_URL}/api/embeddings",
            json={"model": EMBED_MODEL, "prompt": text},
        )
        r.raise_for_status()
        return r.json()["embedding"]


def retrieve(question: str) -> list[dict]:
    client = QdrantClient(url=QDRANT_URL)
    vec = embed_question(question)
    hits = client.search(
        collection_name=COLLECTION,
        query_vector=vec,
        limit=TOP_K,
        with_payload=True,
    )
    return [
        {
            "text": h.payload["text"],
            "source": h.payload["source"],
            "score": round(h.score, 3),
        }
        for h in hits
    ]


def generate(question: str, chunks: list[dict]) -> str:
    context_parts = []
    for i, c in enumerate(chunks, 1):
        context_parts.append(f"[{i}] Source: {c['source']} (score {c['score']})\n{c['text']}")
    context = "\n\n---\n\n".join(context_parts)

    prompt = f"""{SYSTEM_PROMPT}

--- Context ---
{context}
--- End Context ---

Question: {question}

Answer:"""

    with httpx.Client(timeout=180) as client:
        r = client.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": LLM_MODEL, "prompt": prompt, "stream": False},
        )
        r.raise_for_status()
        return r.json()["response"].strip()


def answer_question(question: str) -> dict:
    chunks = retrieve(question)
    if not chunks:
        return {
            "answer": "No relevant content found in the knowledge base. Run the ingestion pipeline first.",
            "sources": [],
        }
    answer = generate(question, chunks)
    # Deduplicate sources preserving relevance order
    seen: set[str] = set()
    sources: list[str] = []
    for c in chunks:
        if c["source"] not in seen:
            seen.add(c["source"])
            sources.append(c["source"])
    return {"answer": answer, "sources": sources}

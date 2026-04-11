"""
FastAPI application — AI Design Auditor

POST /ask  {question: str}  →  {answer: str, sources: list[str]}
GET  /health
GET  /stats
"""

from __future__ import annotations

import os

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from qdrant_client import QdrantClient
from qdrant_client.http.exceptions import UnexpectedResponse

from backend.query import answer_question

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
COLLECTION = os.getenv("COLLECTION", "roadmap")

app = FastAPI(
    title="AI Design Auditor",
    description="RAG system over the AI System Design roadmap",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# ── Schemas ───────────────────────────────────────────────────────────────────

class AskRequest(BaseModel):
    question: str = Field(..., min_length=3, max_length=1000)


class AskResponse(BaseModel):
    answer: str
    sources: list[str]


class StatsResponse(BaseModel):
    collection: str
    points: int
    ollama_models: list[str]


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.get("/stats", response_model=StatsResponse)
def stats() -> StatsResponse:
    try:
        qdrant = QdrantClient(url=QDRANT_URL)
        info = qdrant.get_collection(COLLECTION)
        points = info.points_count or 0
    except (UnexpectedResponse, Exception):
        points = 0

    try:
        r = httpx.get(f"{OLLAMA_URL}/api/tags", timeout=5)
        models = [m["name"] for m in r.json().get("models", [])]
    except Exception:
        models = []

    return StatsResponse(collection=COLLECTION, points=points, ollama_models=models)


@app.post("/ask", response_model=AskResponse)
def ask(req: AskRequest) -> AskResponse:
    try:
        result = answer_question(req.question)
        return AskResponse(**result)
    except httpx.ConnectError as e:
        raise HTTPException(
            status_code=503,
            detail=f"Cannot reach Ollama at {OLLAMA_URL}. Is it running? ({e})",
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

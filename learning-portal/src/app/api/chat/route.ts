import { NextRequest, NextResponse } from 'next/server';
import { phases } from '@/data/curriculum';

const CURRICULUM_SUMMARY = phases
  .map(
    (p) =>
      `Phase ${p.id}: ${p.title} (${p.dateRange})\nGoal: ${p.goal}\nTopics: ${p.topics.map((t) => t.title).join(', ')}`
  )
  .join('\n\n');

const SYSTEM_PROMPT_EN = `You are an AI learning assistant for Alexey's 6-month AI System Design curriculum, curated by Roman Yustin from EPAM. Your role is to explain concepts, suggest study approaches, answer questions, and help Alexey navigate the curriculum.

Curriculum overview:
${CURRICULUM_SUMMARY}

Be concise, practical, and encouraging. When explaining technical concepts, use concrete examples. If Alexey asks about a specific topic, relate it back to the curriculum context. Always respond in English.`;

const SYSTEM_PROMPT_RU = `Ты — AI-ассистент по обучению для 6-месячной программы Алексея по AI System Design, составленной Романом Юстиным из EPAM. Твоя задача — объяснять концепции, предлагать подходы к изучению, отвечать на вопросы и помогать Алексею ориентироваться в программе.

Обзор программы:
${CURRICULUM_SUMMARY}

Отвечай кратко, практично и воодушевляюще. Объясняя технические концепции, используй конкретные примеры. Если Алексей спрашивает о конкретной теме, связывай её с программой обучения. Всегда отвечай на русском языке.`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: NextRequest) {
  const { message, history, lang } = (await req.json()) as {
    message: string;
    history: ChatMessage[];
    lang?: 'en' | 'ru';
  };

  const project = process.env.GOOGLE_CLOUD_PROJECT;
  const location = process.env.GOOGLE_CLOUD_LOCATION ?? 'us-central1';
  const model = process.env.VERTEX_MODEL ?? 'gemini-2.0-flash-001';

  if (!project) {
    return NextResponse.json({ reply: 'VertexAI is not configured. Set GOOGLE_CLOUD_PROJECT in .env.local.' });
  }

  // Parse service account credentials from env
  let accessToken: string;
  try {
    const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (!credentialsJson) throw new Error('No credentials');

    const credentials = JSON.parse(credentialsJson);

    // Get access token using service account JWT
    const { GoogleAuth } = await import('google-auth-library');
    const auth = new GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    const client = await auth.getClient();
    const tokenResponse = await client.getAccessToken();
    accessToken = tokenResponse.token as string;
  } catch {
    return NextResponse.json({
      reply: 'Failed to authenticate with Google Cloud. Check GOOGLE_APPLICATION_CREDENTIALS_JSON.',
    });
  }

  // Build messages for Vertex AI
  const contents = [
    ...history.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    })),
    { role: 'user', parts: [{ text: message }] },
  ];

  const endpoint = `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google/models/${model}:generateContent`;

  const systemPrompt = lang === 'ru' ? SYSTEM_PROMPT_RU : SYSTEM_PROMPT_EN;

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents,
    generationConfig: { maxOutputTokens: 1024, temperature: 0.7 },
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      'No response received from the AI.';
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: 'Error calling VertexAI. Please try again.' });
  }
}

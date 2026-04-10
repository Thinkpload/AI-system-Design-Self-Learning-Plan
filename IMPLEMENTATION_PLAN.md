# Implementation Plan: Self-Learning Web Portal with VertexAI Agent

## Context
Alexey has a 6-month AI System Design learning curriculum (from Roman/EPAM) currently stored as static HTML dashboards and markdown. The goal is to build an interactive web portal with an AI chat assistant (VertexAI Agent) that guides through the learning process, deployed to Vercel.

## Tech Stack
- **Next.js 14** (App Router, TypeScript) — ideal for Vercel
- **Tailwind CSS** — styling
- **VertexAI Agent** (Google Cloud) — chat assistant via API route
- **localStorage** — progress persistence (v1)
- **Vercel** — hosting

## File Structure

```
learning-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with nav
│   │   ├── page.tsx                # Dashboard overview
│   │   ├── phase/[id]/page.tsx     # Phase detail page
│   │   └── api/chat/route.ts       # VertexAI Agent proxy
│   ├── components/
│   │   ├── Dashboard.tsx           # Progress overview + phase grid
│   │   ├── PhaseCard.tsx           # Phase summary card
│   │   ├── TaskList.tsx            # Checkable tasks
│   │   ├── ProgressBar.tsx         # Reusable progress bar
│   │   ├── ChatWidget.tsx          # Floating chat panel
│   │   ├── ChatMessages.tsx        # Message rendering
│   │   └── Sidebar.tsx             # Phase navigation
│   ├── data/
│   │   └── curriculum.ts           # All 6 phases as typed data
│   ├── lib/
│   │   ├── vertex.ts               # VertexAI client
│   │   └── progress.ts             # localStorage read/write
│   ├── context/
│   │   └── ProgressContext.tsx      # React context for progress state
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── tailwind.config.ts
├── package.json
└── .env.local                      # GOOGLE_CLOUD_PROJECT, credentials
```

## Data Model

```typescript
interface Phase {
  id: number;           // 1-6
  title: string;        // "Core Agentic Patterns"
  dateRange: string;    // "Mar 15 - Apr 15, 2026"
  topics: Topic[];
  tasks: Task[];
  milestones: string[];
  resources: Resource[];
}

interface Task {
  id: string;
  phaseId: number;
  title: string;
}

interface UserProgress {
  tasks: Record<string, boolean>;  // taskId → completed
}
```

Curriculum data extracted from existing `learning-plan.md` and `AI_MLOps_SMART_Plan_Alexey.html`.

## Implementation Steps

### Step 1: Project Setup
- `npx create-next-app@latest learning-portal --typescript --tailwind --app --src-dir`
- Configure Tailwind with warm color palette (cream `#faf9f5`, accent `#D97757`)

### Step 2: Curriculum Data (`src/data/curriculum.ts`)
- Extract all 6 phases from existing files into typed TypeScript data
- Each phase: title, date range, topics (with descriptions), tasks, milestones, resources

### Step 3: Types & Progress Logic
- Define interfaces in `src/types/index.ts`
- Build `src/lib/progress.ts` with localStorage get/set
- Create `ProgressContext` for app-wide state

### Step 4: Dashboard Page
- Overall progress bar (X/N tasks completed)
- 6 PhaseCards in a grid — each shows title, date, mini progress bar, task count
- Click card → navigate to `/phase/[id]`

### Step 5: Phase Detail Page
- Topics list with descriptions
- Checkable TaskList (toggles persist to localStorage)
- Milestones section
- Resources with links
- Back navigation

### Step 6: Chat Widget
- Floating button (bottom-right corner)
- Expands to chat panel with message history and input
- Messages state managed in React
- Typing indicator during API calls

### Step 7: VertexAI API Route (`/api/chat`)
- POST endpoint: receives `{ message, history }`
- Uses `@google-cloud/aiplatform` SDK
- System prompt includes curriculum summary so agent can reference phases/topics
- Returns AI response
- Env vars: `GOOGLE_CLOUD_PROJECT`, `GOOGLE_APPLICATION_CREDENTIALS_JSON`

### Step 8: Deploy to Vercel
- Push to GitHub, connect in Vercel dashboard
- Set env vars for Google Cloud credentials
- Zero-config Next.js deployment

## Verification
1. `npm run dev` — dashboard renders with all 6 phases
2. Click phase → detail page with tasks, check/uncheck persists on reload
3. Open chat → send message → receive VertexAI response about the curriculum
4. `vercel deploy` → production URL works end-to-end

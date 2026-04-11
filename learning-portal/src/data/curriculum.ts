import { Phase } from '@/types';

export const phases: Phase[] = [
  {
    id: 1,
    title: { en: 'Core Agentic Patterns', ru: 'Базовые агентные паттерны' },
    subtitle: { en: 'Foundations of Agentic AI Systems', ru: 'Основы агентных AI-систем' },
    dateRange: 'Mar 15 – Apr 15, 2026',
    goal: {
      en: 'Understand fundamental agentic patterns and implement them in code.',
      ru: 'Понять базовые паттерны агентных систем и научиться их реализовывать в коде.',
    },
    topics: [
      {
        id: '1.1',
        title: { en: 'Prompt Chaining', ru: 'Цепочки промптов' },
        description: {
          en: 'Sequential connection of prompts where output of one step becomes input of the next. The foundation of any complex AI pipeline.',
          ru: 'Последовательное соединение промптов, где выход одного шага становится входом следующего. Основа любого сложного AI-пайплайна.',
        },
      },
      {
        id: '1.2',
        title: { en: 'Routing', ru: 'Маршрутизация' },
        description: {
          en: 'How an agent decides which processing path to take based on input data. Request classification and routing to the right tool.',
          ru: 'Как агент принимает решение — какой путь обработки выбрать в зависимости от входных данных. Классификация запросов, маршрутизация к нужному инструменту.',
        },
      },
      {
        id: '1.3',
        title: { en: 'Parallelization', ru: 'Параллелизация' },
        description: {
          en: "Running multiple tasks simultaneously — when it's safe, how to collect results, fan-out/fan-in patterns.",
          ru: 'Запуск нескольких задач одновременно — когда это безопасно, как собирать результаты, паттерны fan-out/fan-in.',
        },
      },
      {
        id: '1.4',
        title: { en: 'Reflection', ru: 'Рефлексия' },
        description: {
          en: 'Agent evaluates its own result and decides if the answer is good enough or needs rework. Self-critique and iterative improvement.',
          ru: 'Агент оценивает собственный результат и решает, достаточно ли хорош ответ или нужна переработка. Self-critique и итеративное улучшение.',
        },
      },
      {
        id: '1.5',
        title: { en: 'Tool Use', ru: 'Использование инструментов' },
        description: {
          en: 'Connecting external tools: APIs, databases, file systems, calculators. Function calling in LLMs.',
          ru: 'Подключение внешних инструментов: API, базы данных, файловые системы, калькуляторы. Function calling в LLM.',
        },
      },
      {
        id: '1.6',
        title: { en: 'Planning', ru: 'Планирование' },
        description: {
          en: 'How an agent breaks a complex task into subtasks and builds an execution plan. Decomposition strategies.',
          ru: 'Как агент разбивает сложную задачу на подзадачи и выстраивает план выполнения. Стратегии декомпозиции.',
        },
      },
      {
        id: '1.7',
        title: { en: 'Multi-Agent Coordination', ru: 'Координация мультиагентов' },
        description: {
          en: 'Multiple agents working together: role separation, context passing, coordination patterns.',
          ru: 'Несколько агентов работают вместе: разделение ролей, передача контекста, паттерны координации.',
        },
      },
      {
        id: '1.8',
        title: { en: 'Orchestration vs. Choreography', ru: 'Оркестрация vs. Хореография' },
        description: {
          en: 'Two coordination models: a central orchestrator directing agents vs. agents reacting to events. Trade-offs for each approach.',
          ru: 'Две модели координации: центральный оркестратор управляет агентами vs. агенты реагируют на события. Компромиссы каждого подхода.',
        },
      },
    ],
    tasks: [
      { id: 't1-1', phaseId: 1, title: { en: 'Read Anthropic Cookbook: Prompt Chaining examples', ru: 'Изучить Anthropic Cookbook: примеры Prompt Chaining' } },
      { id: 't1-2', phaseId: 1, title: { en: 'Implement a basic prompt chain in LangChain', ru: 'Реализовать базовую цепочку промптов в LangChain' } },
      { id: 't1-3', phaseId: 1, title: { en: 'Study routing patterns — build a classifier agent', ru: 'Изучить паттерны маршрутизации — построить агент-классификатор' } },
      { id: 't1-4', phaseId: 1, title: { en: 'Implement parallelization with fan-out/fan-in', ru: 'Реализовать параллелизацию с паттерном fan-out/fan-in' } },
      { id: 't1-5', phaseId: 1, title: { en: 'Build a reflection loop (self-critique agent)', ru: 'Построить цикл рефлексии (агент с самокритикой)' } },
      { id: 't1-6', phaseId: 1, title: { en: 'Add tool use: connect agent to a real API', ru: 'Добавить использование инструментов: подключить агент к реальному API' } },
      { id: 't1-7', phaseId: 1, title: { en: 'Implement a planning agent with task decomposition', ru: 'Реализовать агент-планировщик с декомпозицией задач' } },
      { id: 't1-8', phaseId: 1, title: { en: 'Build a 2-agent collaboration demo', ru: 'Построить демо взаимодействия двух агентов' } },
      { id: 't1-9', phaseId: 1, title: { en: 'Compare orchestrator vs. choreography in a real example', ru: 'Сравнить оркестрацию и хореографию на реальном примере' } },
      { id: 't1-p1', phaseId: 1, project: true, title: { en: 'Project: Research Assistant Agent — chains search → summarize → reflect to produce a structured report on any topic', ru: 'Проект: Агент-исследователь — цепочка поиск → суммаризация → рефлексия для создания структурированного отчёта' }, description: { en: 'Build an AI agent that can research any topic by chaining together search, summarization, and reflection. The agent should take a user query, search for relevant information, summarize findings, reflect on the quality, and produce a well-structured report with citations. Use LangChain or similar framework to implement the chain pattern.', ru: 'Построй AI-агента, который может исследовать любую тему, объединяя поиск, суммаризацию и рефлексию. Агент должен принимать запрос пользователя, искать релевантную информацию, суммировать findings, рефлексировать о качестве и создавать структурированный отчёт с цитатами. Используй LangChain или аналогичный фреймворк.' } },
    ],
    milestones: [
      { en: 'Can explain all 8 agentic patterns from memory', ru: 'Могу объяснить все 8 паттернов по памяти' },
      { en: 'Working code demo for each pattern', ru: 'Рабочее демо кода для каждого паттерна' },
      { en: 'Agent that chains prompt → routes → uses tool in one pipeline', ru: 'Агент, который объединяет цепочку промптов → маршрутизацию → инструменты в одном пайплайне' },
    ],
    resources: [
      { title: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', type: 'tool' },
      { title: 'Building Effective Agents — Anthropic Blog', url: 'https://www.anthropic.com/research/building-effective-agents', type: 'article', free: true },
      { title: 'DeepLearning.AI: AI Agentic Design Patterns with AutoGen', url: 'https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/', type: 'course', free: true },
      { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'tool', free: true },
      { title: 'Building LLM Powered Applications — Valentina Alto', type: 'book' },
      { title: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai', type: 'article', free: true },
      { title: 'AutoGen: Multi-Agent Conversation Framework (paper)', url: 'https://arxiv.org/abs/2308.08155', type: 'article', free: true },
      {
        title: 'Andrew Ng — What\'s Next for AI Agentic Workflows',
        url: 'https://www.youtube.com/watch?v=sal78ACtGTc',
        videoId: 'sal78ACtGTc',
        type: 'video',
        description: 'Andrew Ng explains the 4 key agentic patterns: reflection, tools, planning, multi-agent',
      },
      {
        title: 'Building Effective Agents — Insights from Anthropic',
        url: 'https://www.youtube.com/watch?v=0v7TQIh_kes',
        videoId: '0v7TQIh_kes',
        type: 'video',
        description: 'Official walkthrough from Anthropic: prompt chaining, routing, parallelization, orchestration',
      },
      {
        title: 'LangGraph Complete Course for Beginners (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=jGg_1h0qzaM',
        videoId: 'jGg_1h0qzaM',
        type: 'video',
        description: 'Full LangGraph course: state, tools, multi-agent, RAG agents (3+ hours)',
      },
    ],
  },
  {
    id: 2,
    title: { en: 'Adaptive & Contextual Intelligence', ru: 'Адаптивный и контекстуальный интеллект' },
    subtitle: { en: 'Memory, Learning, and Adaptation', ru: 'Память, обучение и адаптация' },
    dateRange: 'Apr 15 – May 15, 2026',
    goal: {
      en: 'Learn to manage agent state, memory, learning, and adaptation to new data.',
      ru: 'Научиться управлять состоянием агентов, их памятью, обучением и адаптацией к новым данным.',
    },
    topics: [
      {
        id: '2.1',
        title: { en: 'Memory Architecture', ru: 'Архитектура памяти' },
        description: {
          en: 'Short-term (within session) vs. long-term (between sessions) memory. Context compression, prioritization, and summarization strategies.',
          ru: 'Короткосрочная (в рамках сессии) vs. долгосрочная (между сессиями) память. Стратегии сжатия, приоритизации и суммаризации контекста.',
        },
      },
      {
        id: '2.2',
        title: { en: 'Learning and Feedback Loops', ru: 'Обучение и петли обратной связи' },
        description: {
          en: 'Agents that improve over time: RLHF, preference learning, adaptive prompts based on user feedback.',
          ru: 'Агенты, которые улучшаются со временем: RLHF, обучение на предпочтениях, адаптивные промпты на основе обратной связи.',
        },
      },
      {
        id: '2.3',
        title: { en: 'Model Context Protocol (MCP)', ru: 'Протокол контекста модели (MCP)' },
        description: {
          en: 'Anthropic\'s open standard for connecting LLMs to tools and data. MCP servers, clients, and transport layers.',
          ru: 'Открытый стандарт Anthropic для подключения LLM к инструментам и данным. MCP-серверы, клиенты и транспортные слои.',
        },
      },
      {
        id: '2.4',
        title: { en: 'Goal Setting and Progress Tracking', ru: 'Постановка целей и отслеживание прогресса' },
        description: {
          en: 'Dynamic goal-setting: how an agent tracks progress, adjusts goals, and decides when a task is complete.',
          ru: 'Динамическое целеполагание: как агент отслеживает прогресс, корректирует цели и принимает решение о завершении задачи.',
        },
      },
      {
        id: '2.5',
        title: { en: 'Prompt Caching', ru: 'Кэширование промптов' },
        description: {
          en: 'Reducing latency and cost by caching large context blocks. Anthropic prompt caching, cache breakpoints, and when to apply it.',
          ru: 'Снижение латенси и стоимости за счёт кэширования больших блоков контекста. Prompt caching в Anthropic, точки кэширования и когда это применять.',
        },
      },
      {
        id: '2.6',
        title: { en: 'Context Window Engineering', ru: 'Инженерия контекстного окна' },
        description: {
          en: 'Managing the finite context window: hierarchical summarization, sliding window, retrieval-augmented context insertion.',
          ru: 'Управление конечным контекстным окном: иерархическая суммаризация, скользящее окно, вставка контекста через поиск.',
        },
      },
      {
        id: '2.7',
        title: { en: 'Personalization Patterns', ru: 'Паттерны персонализации' },
        description: {
          en: 'Building agents that adapt to individual users: preference profiles, user-specific memory stores, persona adaptation.',
          ru: 'Создание агентов, адаптирующихся к конкретным пользователям: профили предпочтений, пользовательские хранилища памяти, адаптация персоны.',
        },
      },
    ],
    tasks: [
      { id: 't2-1', phaseId: 2, title: { en: 'Compare short-term vs. long-term memory — write analysis', ru: 'Сравнить модели короткосрочной и долгосрочной памяти — написать анализ' } },
      { id: 't2-2', phaseId: 2, title: { en: 'Implement a memory-aware agent with session persistence', ru: 'Реализовать агент с памятью и сохранением между сессиями' } },
      { id: 't2-3', phaseId: 2, title: { en: 'Build a feedback loop that improves agent responses', ru: 'Построить петлю обратной связи для улучшения ответов агента' } },
      { id: 't2-4', phaseId: 2, title: { en: 'Study MCP spec and implement a context management template', ru: 'Изучить спецификацию MCP и реализовать шаблон управления контекстом' } },
      { id: 't2-5', phaseId: 2, title: { en: 'Build an agent with dynamic goal tracking', ru: 'Построить агент с динамическим отслеживанием целей' } },
      { id: 't2-6', phaseId: 2, title: { en: 'Implement prompt caching and measure latency/cost savings', ru: 'Реализовать prompt caching и измерить снижение латенси/стоимости' } },
      { id: 't2-7', phaseId: 2, title: { en: 'Build context window manager with hierarchical summarization', ru: 'Построить менеджер контекстного окна с иерархической суммаризацией' } },
      { id: 't2-p1', phaseId: 2, project: true, title: { en: 'Project: Personal Knowledge Assistant — chat with your own notes using long-term memory + MCP + personalized prompts', ru: 'Проект: Персональный ассистент знаний — чат со своими заметками через долгосрочную память + MCP + персонализированные промпты' }, description: { en: 'Create a personal AI assistant that can chat with your notes and documents. Implement long-term memory to persist context across sessions, use MCP (Model Context Protocol) to connect to your knowledge base, and create personalized prompts that adapt to your writing style and preferences.', ru: 'Создай персонального AI-ассистента, который может общаться с твоими заметками и документами. Реализуй долгосрочную память для сохранения контекста между сессиями, используй MCP для подключения к базе знаний и создай персонализированные промпты, адаптирующиеся к твоему стилю.' } },
    ],
    milestones: [
      { en: 'Agent with working long-term memory between sessions', ru: 'Агент с рабочей долгосрочной памятью между сессиями' },
      { en: 'MCP integration implemented and reusable', ru: 'Интеграция MCP реализована и готова к переиспользованию' },
      { en: 'Feedback loop that demonstrably improves outputs', ru: 'Петля обратной связи, которая наглядно улучшает результаты' },
      { en: 'Prompt caching reducing API costs by ≥ 30%', ru: 'Prompt caching снижает стоимость API на ≥ 30%' },
    ],
    resources: [
      { title: 'MCP Documentation', url: 'https://modelcontextprotocol.io', type: 'tool', free: true },
      { title: 'Claude Agent SDK', url: 'https://docs.anthropic.com/en/docs/claude-code/sdk', type: 'tool', free: true },
      { title: 'Anthropic: Prompt Caching Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching', type: 'article', free: true },
      { title: 'MemGPT: Towards LLMs as Operating Systems (paper)', url: 'https://arxiv.org/abs/2310.08560', type: 'article', free: true },
      { title: 'DeepLearning.AI: Building AI Applications with Haystack', url: 'https://www.deeplearning.ai/short-courses/building-ai-applications-with-haystack/', type: 'course', free: true },
      { title: 'Designing Machine Learning Systems — Chip Huyen', type: 'book' },
      { title: 'LangGraph: Memory & Persistence guide', url: 'https://langchain-ai.github.io/langgraph/concepts/memory/', type: 'article', free: true },
      { title: 'OpenAI Cookbook: How to work with long context', url: 'https://cookbook.openai.com/examples/how_to_work_with_large_language_models', type: 'article', free: true },
    ],
  },
  {
    id: 3,
    title: { en: 'Robustness, HITL & Knowledge Integration', ru: 'Устойчивость, HITL и интеграция знаний' },
    subtitle: { en: 'Reliability, Human Collaboration & RAG', ru: 'Надёжность, сотрудничество с человеком и RAG' },
    dateRange: 'May 15 – Jun 15, 2026',
    goal: {
      en: 'Make agents robust to failures, integrate humans into the process, and connect external knowledge.',
      ru: 'Сделать агентов устойчивыми к ошибкам, научиться интегрировать человека в процесс и подключать внешние знания.',
    },
    topics: [
      {
        id: '3.1',
        title: { en: 'Exception Handling and Recovery', ru: 'Обработка исключений и восстановление' },
        description: {
          en: 'What to do when things go wrong: retry strategies, fallback chains, graceful degradation. Agent must adapt, not crash.',
          ru: 'Что делать, когда что-то идёт не так: retry-стратегии, fallback-цепочки, graceful degradation. Агент не должен падать — он должен адаптироваться.',
        },
      },
      {
        id: '3.2',
        title: { en: 'Human-in-the-Loop (HITL)', ru: 'Человек в контуре управления (HITL)' },
        description: {
          en: 'When and how to involve humans: approval checkpoints, escalation, collaborative decision-making. Balance between automation and control.',
          ru: 'Когда и как подключать человека: точки одобрения, эскалация, совместное принятие решений. Баланс между автоматизацией и контролем.',
        },
      },
      {
        id: '3.3',
        title: { en: 'Basic RAG Pipeline', ru: 'Базовый RAG-пайплайн' },
        description: {
          en: 'Retrieval-Augmented Generation fundamentals: chunking, embedding, vector search, and generation with retrieved context.',
          ru: 'Основы Retrieval-Augmented Generation: чанкинг, эмбеддинги, векторный поиск и генерация с найденным контекстом.',
        },
      },
      {
        id: '3.4',
        title: { en: 'Advanced RAG Techniques', ru: 'Продвинутые техники RAG' },
        description: {
          en: 'HyDE (Hypothetical Document Embeddings), hybrid search (BM25 + vector), re-ranking, multi-query retrieval, and RAG fusion.',
          ru: 'HyDE (гипотетические эмбеддинги документов), гибридный поиск (BM25 + векторный), re-ranking, multi-query retrieval и RAG fusion.',
        },
      },
      {
        id: '3.5',
        title: { en: 'Semantic Caching', ru: 'Семантическое кэширование' },
        description: {
          en: 'Cache LLM responses by semantic similarity of inputs rather than exact string match. Reduces cost and latency for repeated queries.',
          ru: 'Кэширование ответов LLM по семантической схожести запросов, а не точному совпадению строк. Снижает стоимость и латенси при повторяющихся запросах.',
        },
      },
      {
        id: '3.6',
        title: { en: 'Agentic RAG', ru: 'Агентный RAG' },
        description: {
          en: 'RAG where an agent decides what to retrieve, when, and how many times. Self-querying, iterative retrieval, and adaptive search depth.',
          ru: 'RAG, где агент сам решает что, когда и сколько раз искать. Self-querying, итеративный поиск, адаптивная глубина поиска.',
        },
      },
    ],
    tasks: [
      { id: 't3-1', phaseId: 3, title: { en: 'Simulate failure scenarios and implement retry/fallback chains', ru: 'Смоделировать сценарии отказов и реализовать retry/fallback-цепочки' } },
      { id: 't3-2', phaseId: 3, title: { en: 'Build a HITL checkpoint in an agent pipeline', ru: 'Построить HITL-checkpoint в агентном пайплайне' } },
      { id: 't3-3', phaseId: 3, title: { en: 'Implement a basic RAG system with a vector store', ru: 'Реализовать базовую RAG-систему с векторным хранилищем' } },
      { id: 't3-4', phaseId: 3, title: { en: 'Add re-ranking to RAG retrieval results', ru: 'Добавить re-ranking к результатам поиска в RAG' } },
      { id: 't3-5', phaseId: 3, title: { en: 'Combine HITL + RAG in one end-to-end pipeline', ru: 'Объединить HITL + RAG в одном end-to-end пайплайне' } },
      { id: 't3-6', phaseId: 3, title: { en: 'Implement HyDE and measure retrieval quality improvement', ru: 'Реализовать HyDE и измерить улучшение качества поиска' } },
      { id: 't3-7', phaseId: 3, title: { en: 'Build an agentic RAG that self-queries iteratively', ru: 'Построить агентный RAG с итеративным self-querying' } },
      { id: 't3-p1', phaseId: 3, project: true, title: { en: 'Project: Customer Support Bot — RAG over product docs + HITL escalation to human agent + semantic cache for repeated queries', ru: 'Проект: Бот техподдержки — RAG по документации + HITL эскалация + семантический кэш для повторных вопросов' }, description: { en: 'Build a customer support chatbot that uses RAG to answer questions from product documentation. Implement HITL (Human-in-the-Loop) for complex issues that need human escalation. Add semantic caching to reduce costs for repeated or similar queries. This is a production-ready prototype of a real support system.', ru: 'Построй чат-бот техподдержки, который использует RAG для ответов на вопросы из документации продукта. Реализуй HITL для сложных вопросов, требующих эскалации человеку. Добавь семантическое кэширование для снижения стоимости повторных запросов. Это production-ready прототип реальной системы поддержки.' } },
    ],
    milestones: [
      { en: 'Agent that recovers gracefully from 3 types of failures', ru: 'Агент, который корректно восстанавливается после 3 типов сбоев' },
      { en: 'Working HITL checkpoint with escalation logic', ru: 'Рабочий HITL-checkpoint с логикой эскалации' },
      { en: 'RAG pipeline over a real document corpus', ru: 'RAG-пайплайн поверх реального корпуса документов' },
      { en: 'Advanced RAG with HyDE + re-ranking beating baseline by ≥ 15%', ru: 'Продвинутый RAG с HyDE + re-ranking превосходит базовый на ≥ 15%' },
    ],
    resources: [
      { title: 'LangChain RAG Docs', url: 'https://python.langchain.com/docs/use_cases/question_answering/', type: 'tool', free: true },
      { title: 'Advanced RAG Techniques — Towards Data Science', url: 'https://towardsdatascience.com/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6', type: 'article', free: true },
      { title: 'HyDE Paper: Precise Zero-Shot Retrieval', url: 'https://arxiv.org/abs/2212.10496', type: 'article', free: true },
      { title: 'GPTCache — Semantic Caching Library', url: 'https://github.com/zilliztech/GPTCache', type: 'tool', free: true },
      { title: 'DeepLearning.AI: Building and Evaluating Advanced RAG', url: 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/', type: 'course', free: true },
      { title: 'AI Engineering — Chip Huyen', type: 'book' },
      { title: 'RAG vs Fine-tuning: Choosing the right approach (Pinecone)', url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/', type: 'article', free: true },
      { title: 'Ragas — RAG Evaluation Framework', url: 'https://docs.ragas.io', type: 'tool', free: true },
    ],
  },
  {
    id: 4,
    title: { en: 'Advanced Architectures & Optimization', ru: 'Продвинутые архитектуры и оптимизация' },
    subtitle: { en: 'Multi-Agent Systems, Safety & Evaluation', ru: 'Мультиагентные системы, безопасность и оценка' },
    dateRange: 'Jun 15 – Aug 1, 2026',
    goal: {
      en: 'Move to advanced architectures: multi-agent systems, resource optimization, safety, and quality evaluation.',
      ru: 'Перейти к продвинутым архитектурам: мультиагентные системы, оптимизация ресурсов, безопасность и оценка качества.',
    },
    topics: [
      {
        id: '4.1',
        title: { en: 'Inter-Agent Communication (A2A)', ru: 'Взаимодействие агентов (A2A)' },
        description: {
          en: 'Protocols for agent-to-agent communication: message formats, coordination patterns (blackboard, message passing, shared state).',
          ru: 'Протоколы общения между агентами: форматы сообщений, паттерны координации (blackboard, message passing, shared state).',
        },
      },
      {
        id: '4.2',
        title: { en: 'Resource-Aware Optimization', ru: 'Ресурсно-осознанная оптимизация' },
        description: {
          en: 'Optimizing under constraints: token budget, latency, API call costs. Making an agent efficient, not just functional.',
          ru: 'Оптимизация под ограничения: бюджет токенов, латенси, стоимость API-вызовов. Как сделать агента эффективным, а не просто работающим.',
        },
      },
      {
        id: '4.3',
        title: { en: 'Reasoning Techniques', ru: 'Техники рассуждений' },
        description: {
          en: 'Chain-of-Thought, Tree-of-Thought, ReAct, Self-Consistency — advanced reasoning techniques. When each works best.',
          ru: 'Chain-of-Thought, Tree-of-Thought, ReAct, Self-Consistency — продвинутые техники рассуждений. Когда какая работает лучше.',
        },
      },
      {
        id: '4.4',
        title: { en: 'Guardrails & Safety Patterns', ru: 'Ограждения и паттерны безопасности' },
        description: {
          en: 'Protecting agents from unwanted behavior: input/output filtering, constitutional constraints, sandboxes.',
          ru: 'Как защитить агента от нежелательного поведения: фильтрация входа/выхода, конституционные ограничения, sandbox-ы.',
        },
      },
      {
        id: '4.5',
        title: { en: 'Evaluation Frameworks (Evals)', ru: 'Фреймворки оценки (Evals)' },
        description: {
          en: 'Systematic quality measurement for agentic systems: LLM-as-judge, task-specific metrics, regression suites, and A/B testing pipelines.',
          ru: 'Систематическое измерение качества агентных систем: LLM-as-judge, предметные метрики, регрессионные наборы тестов и A/B-тестовые пайплайны.',
        },
      },
      {
        id: '4.6',
        title: { en: 'Structured Outputs & Schema Enforcement', ru: 'Структурированный вывод и валидация схем' },
        description: {
          en: 'Getting reliable JSON/structured data from LLMs: JSON mode, function calling schemas, Pydantic validation, instructor library.',
          ru: 'Получение надёжного JSON/структурированных данных из LLM: JSON mode, схемы function calling, валидация Pydantic, библиотека instructor.',
        },
      },
      {
        id: '4.7',
        title: { en: 'Agent Benchmarking', ru: 'Бенчмаркинг агентов' },
        description: {
          en: 'Standard benchmarks for agentic systems: GAIA, AgentBench, SWE-bench. How to interpret results and run your own evals.',
          ru: 'Стандартные бенчмарки для агентных систем: GAIA, AgentBench, SWE-bench. Как интерпретировать результаты и запускать собственные оценки.',
        },
      },
    ],
    tasks: [
      { id: 't4-1', phaseId: 4, title: { en: 'Build a multi-agent system with A2A communication', ru: 'Построить мультиагентную систему с A2A-взаимодействием' } },
      { id: 't4-2', phaseId: 4, title: { en: 'Implement token-budget-aware optimization in a pipeline', ru: 'Реализовать оптимизацию с учётом бюджета токенов' } },
      { id: 't4-3', phaseId: 4, title: { en: 'Compare CoT vs. ToT vs. ReAct on a reasoning task', ru: 'Сравнить CoT vs. ToT vs. ReAct на задаче рассуждений' } },
      { id: 't4-4', phaseId: 4, title: { en: 'Add input/output guardrails to an existing agent', ru: 'Добавить guardrails на вход/выход существующего агента' } },
      { id: 't4-5', phaseId: 4, title: { en: 'Build an eval suite with LLM-as-judge scoring', ru: 'Построить набор тестов оценки с LLM-as-judge' } },
      { id: 't4-6', phaseId: 4, title: { en: 'Enforce structured JSON output with Pydantic validation', ru: 'Обеспечить структурированный JSON-вывод с валидацией Pydantic' } },
      { id: 't4-7', phaseId: 4, title: { en: 'CrewAI: build a crew with role-based agents', ru: 'CrewAI: построить команду агентов с распределёнными ролями' } },
      { id: 't4-p1', phaseId: 4, project: true, title: { en: 'Project: Code Review Multi-Agent — planner + reviewer + security-checker agents with guardrails and an eval suite', ru: 'Проект: Мультиагентное код-ревью — агенты планировщик + рецензент + проверка безопасности с guardrails и набором тестов' }, description: { en: 'Create a multi-agent system for automated code review. Implement three agents: a planner that breaks down the review into steps, a reviewer that analyzes code quality, and a security-checker that identifies vulnerabilities. Add guardrails to prevent harmful outputs and build an evaluation suite to measure performance.', ru: 'Создай мультиагентную систему для автоматического код-ревью. Реализуй трёх агентов: планировщик (разбивает ревью на шаги), рецензент (анализирует качество кода) и проверка безопасности (находит уязвимости). Добавь guardrails для защиты от вредоносных выводов и построй набор тестов для оценки производительности.' } },
    ],
    milestones: [
      { en: 'Multi-agent system with 3+ agents coordinating via A2A', ru: 'Мультиагентная система с 3+ агентами, координирующимися через A2A' },
      { en: 'Guardrails that block at least 2 categories of unsafe outputs', ru: 'Guardrails, блокирующие минимум 2 категории небезопасных выводов' },
      { en: 'Eval pipeline with automated quality scoring', ru: 'Пайплайн оценки с автоматической оценкой качества' },
    ],
    resources: [
      { title: 'CrewAI Documentation', url: 'https://docs.crewai.com', type: 'tool', free: true },
      { title: 'AgentBench: Evaluating LLMs as Agents (paper)', url: 'https://arxiv.org/abs/2308.03688', type: 'article', free: true },
      { title: 'Instructor — Structured LLM Outputs', url: 'https://python.useinstructor.com', type: 'tool', free: true },
      { title: 'DeepLearning.AI: AI Agents in LangGraph', url: 'https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/', type: 'course', free: true },
      { title: 'ByteByteGo (YouTube) — System Design', url: 'https://www.youtube.com/@ByteByteGo', type: 'course', free: true },
      { title: 'Stanford CS329S — ML Systems Design', url: 'https://stanford-cs329s.github.io', type: 'course', free: true },
      { title: 'System Design Interview — Alex Xu', type: 'book' },
      { title: 'LLM Evals Crash Course (Hamel Husain)', url: 'https://hamel.dev/blog/posts/evals/', type: 'article', free: true },
      { title: 'OpenAI Evals Framework', url: 'https://github.com/openai/evals', type: 'tool', free: true },
    ],
  },
  {
    id: 5,
    title: { en: 'Software Architecture Fundamentals', ru: 'Основы архитектуры ПО' },
    subtitle: { en: 'General System Design Principles for AI', ru: 'Общие принципы проектирования AI-систем' },
    dateRange: 'Aug 2026',
    goal: {
      en: 'Apply software architecture principles to AI system design. Scalability, reliability, and trade-offs.',
      ru: 'Применить принципы архитектуры ПО к проектированию AI-систем. Масштабируемость, надёжность и компромиссы.',
    },
    topics: [
      {
        id: '5.1',
        title: { en: 'Scalability Patterns', ru: 'Паттерны масштабируемости' },
        description: {
          en: 'Horizontal vs. vertical scaling, sharding, load balancing for AI services. Stateless vs. stateful agent scaling.',
          ru: 'Горизонтальное vs. вертикальное масштабирование, шардинг, балансировка нагрузки для AI-сервисов. Масштабирование stateless vs. stateful агентов.',
        },
      },
      {
        id: '5.2',
        title: { en: 'Reliability and Fault Tolerance', ru: 'Надёжность и отказоустойчивость' },
        description: {
          en: 'CAP theorem in practice, replication strategies, circuit breakers, bulkheads, and SLAs for AI services.',
          ru: 'Теорема CAP на практике, стратегии репликации, circuit breaker, bulkhead и SLA для AI-сервисов.',
        },
      },
      {
        id: '5.3',
        title: { en: 'API Design for AI Systems', ru: 'Проектирование API для AI-систем' },
        description: {
          en: 'Designing APIs that expose AI capabilities: streaming responses, webhooks, async patterns, and rate limiting.',
          ru: 'Проектирование API, предоставляющих AI-возможности: стриминг ответов, вебхуки, асинхронные паттерны и rate limiting.',
        },
      },
      {
        id: '5.4',
        title: { en: 'Event-Driven Architecture', ru: 'Событийно-ориентированная архитектура' },
        description: {
          en: 'Using message queues and event streams (Kafka, SQS) to decouple AI components. Event sourcing and CQRS for AI pipelines.',
          ru: 'Использование очередей сообщений и потоков событий (Kafka, SQS) для декаплинга AI-компонентов. Event sourcing и CQRS для AI-пайплайнов.',
        },
      },
      {
        id: '5.5',
        title: { en: 'Data Pipeline Design', ru: 'Проектирование дата-пайплайнов' },
        description: {
          en: 'Batch vs. streaming ingestion for AI. Building robust ETL pipelines for model training data and RAG knowledge bases.',
          ru: 'Batch vs. streaming ingestion для AI. Построение надёжных ETL-пайплайнов для данных обучения моделей и RAG баз знаний.',
        },
      },
      {
        id: '5.6',
        title: { en: 'Cost Architecture', ru: 'Архитектура стоимости' },
        description: {
          en: 'Managing and forecasting LLM API costs at scale. Token budget design, model routing by cost tier, caching layers.',
          ru: 'Управление и прогнозирование стоимости LLM API в масштабе. Проектирование бюджета токенов, маршрутизация по ценовым уровням, слои кэширования.',
        },
      },
    ],
    tasks: [
      { id: 't5-1', phaseId: 5, title: { en: 'Design a scalable multi-agent architecture diagram', ru: 'Спроектировать диаграмму архитектуры масштабируемой мультиагентной системы' } },
      { id: 't5-2', phaseId: 5, title: { en: 'Read DDIA chapters on scalability and reliability', ru: 'Прочитать главы DDIA о масштабируемости и надёжности' } },
      { id: 't5-3', phaseId: 5, title: { en: 'Implement a circuit breaker for an AI service call', ru: 'Реализовать circuit breaker для вызова AI-сервиса' } },
      { id: 't5-4', phaseId: 5, title: { en: 'Design a streaming API for an agentic response', ru: 'Спроектировать streaming API для агентного ответа' } },
      { id: 't5-5', phaseId: 5, title: { en: 'Set up a Kafka-based event pipeline for agent events', ru: 'Настроить Kafka-based пайплайн событий для агентов' } },
      { id: 't5-6', phaseId: 5, title: { en: 'Build a cost-tracking dashboard for LLM API usage', ru: 'Построить дашборд отслеживания стоимости использования LLM API' } },
      { id: 't5-p1', phaseId: 5, project: true, title: { en: 'Project: AI Design Auditor — RAG over this roadmap using Ollama + Qdrant + FastAPI. Ask questions, get answers with cited sources', ru: 'Проект: AI Design Auditor — RAG по этому роадмапу с Ollama + Qdrant + FastAPI. Задавай вопросы, получай ответы с источниками' }, description: { en: 'Build an AI system that can answer questions about this very roadmap. Use Ollama for local LLM inference, Qdrant as the vector database, and FastAPI for the backend. Implement RAG to retrieve relevant sections when users ask questions, and provide answers with citations to specific sources. This connects everything you have learned into a practical tool.', ru: 'Построй AI-систему, которая может отвечать на вопросы об этом роадмапе. Используй Ollama для локального LLM, Qdrant как векторную базу данных и FastAPI для бэкенда. Реализуй RAG для поиска релевантных секций, когда пользователи задают вопросы, и предоставляй ответы с цитатами источников. Это объединяет всё, что ты изучил, в практический инструмент.' } },
    ],
    milestones: [
      { en: 'Can design a scalable AI system from scratch on a whiteboard', ru: 'Могу спроектировать масштабируемую AI-систему с нуля на доске' },
      { en: 'Architecture doc for a real-world AI system', ru: 'Документ архитектуры для реальной AI-системы' },
      { en: 'Event-driven agent pipeline running in a local Kafka environment', ru: 'Событийно-ориентированный агентный пайплайн в локальном Kafka-окружении' },
    ],
    resources: [
      { title: 'Designing Data-Intensive Applications (DDIA) — Kleppmann', type: 'book' },
      { title: 'System Design Interview Vol. 1 & 2 — Alex Xu', type: 'book' },
      { title: 'ByteByteGo (YouTube)', url: 'https://www.youtube.com/@ByteByteGo', type: 'course', free: true },
      { title: 'Martin Fowler: Event-Driven Architecture', url: 'https://martinfowler.com/articles/201701-event-driven.html', type: 'article', free: true },
      { title: 'AWS Well-Architected Framework for ML', url: 'https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/welcome.html', type: 'article', free: true },
      { title: 'Kafka: The Definitive Guide (free online)', url: 'https://www.confluent.io/resources/kafka-the-definitive-guide/', type: 'book', free: true },
      { title: 'The Pragmatic Engineer: AI system design patterns', url: 'https://newsletter.pragmaticengineer.com', type: 'article' },
    ],
  },
  {
    id: 6,
    title: { en: 'Specific Languages, Frameworks & Stack', ru: 'Языки, фреймворки и стек' },
    subtitle: { en: 'Production-Ready AI Implementation', ru: 'AI-реализация для продакшна' },
    dateRange: 'Fall 2026',
    goal: {
      en: 'Master the specific tech stack for production AI system implementation.',
      ru: 'Освоить конкретный технологический стек для реализации AI-систем в продакшне.',
    },
    topics: [
      {
        id: '6.1',
        title: { en: 'LangChain / LangGraph Deep Dive', ru: 'Глубокое погружение в LangChain / LangGraph' },
        description: {
          en: 'Advanced LangGraph patterns: stateful graphs, checkpointers, subgraphs, and human-in-the-loop flows.',
          ru: 'Продвинутые паттерны LangGraph: stateful-графы, checkpointer-ы, подграфы и HITL-потоки.',
        },
      },
      {
        id: '6.2',
        title: { en: 'Vector Databases in Production', ru: 'Векторные БД в продакшне' },
        description: {
          en: 'Pinecone, Weaviate, Chroma, pgvector — choosing, tuning HNSW indexes, namespacing, and metadata filtering at scale.',
          ru: 'Pinecone, Weaviate, Chroma, pgvector — выбор, настройка индексов HNSW, namespacing и фильтрация метаданных в масштабе.',
        },
      },
      {
        id: '6.3',
        title: { en: 'CI/CD and Deployment Patterns', ru: 'CI/CD и паттерны деплоя' },
        description: {
          en: 'Containerization (Docker, K8s) for AI workloads, model versioning, blue-green and canary deployments for AI services.',
          ru: 'Контейнеризация (Docker, K8s) для AI-нагрузок, версионирование моделей, blue-green и canary деплои для AI-сервисов.',
        },
      },
      {
        id: '6.4',
        title: { en: 'Observability & Tracing', ru: 'Наблюдаемость и трейсинг' },
        description: {
          en: 'LangSmith, Weights & Biases, OpenTelemetry for AI systems. Tracing token usage, latency, and quality metrics across agent chains.',
          ru: 'LangSmith, Weights & Biases, OpenTelemetry для AI-систем. Трейсинг токенов, латенси и метрик качества в цепочках агентов.',
        },
      },
      {
        id: '6.5',
        title: { en: 'Fine-Tuning & Model Management', ru: 'Дообучение и управление моделями' },
        description: {
          en: 'When to fine-tune vs. prompt-engineer. LoRA/QLoRA, PEFT, model registries, and serving fine-tuned models.',
          ru: 'Когда дообучать модель, а не усложнять промпт. LoRA/QLoRA, PEFT, реестры моделей и деплой дообученных моделей.',
        },
      },
      {
        id: '6.6',
        title: { en: 'TypeScript / Python AI Stack', ru: 'TypeScript / Python AI стек' },
        description: {
          en: 'Choosing between Python and TypeScript/Node for AI backends. Vercel AI SDK, tRPC, and building full-stack AI products.',
          ru: 'Выбор между Python и TypeScript/Node для AI-бэкендов. Vercel AI SDK, tRPC и создание full-stack AI-продуктов.',
        },
      },
    ],
    tasks: [
      { id: 't6-1', phaseId: 6, title: { en: 'Build a production-ready LangGraph agent with checkpointing', ru: 'Построить production-ready агент на LangGraph с checkpointing' } },
      { id: 't6-2', phaseId: 6, title: { en: 'Deploy a vector DB and benchmark retrieval performance', ru: 'Развернуть векторную БД и провести бенчмарк производительности поиска' } },
      { id: 't6-3', phaseId: 6, title: { en: 'Set up CI/CD pipeline for an AI application', ru: 'Настроить CI/CD пайплайн для AI-приложения' } },
      { id: 't6-4', phaseId: 6, title: { en: 'Integrate LangSmith for full agent chain observability', ru: 'Интегрировать LangSmith для полной наблюдаемости цепочки агентов' } },
      { id: 't6-5', phaseId: 6, title: { en: 'Fine-tune a model with LoRA and deploy it', ru: 'Дообучить модель с помощью LoRA и развернуть её' } },
      { id: 't6-6', phaseId: 6, title: { en: 'Build a full-stack AI app with Vercel AI SDK (TypeScript)', ru: 'Построить full-stack AI-приложение на Vercel AI SDK (TypeScript)' } },
      { id: 't6-p1', phaseId: 6, project: true, title: { en: 'Project: Production AI App — deploy the RAG Auditor with LangSmith tracing, CI/CD pipeline, vector DB, and a public chat interface', ru: 'Проект: Продакшн AI-приложение — деплой RAG Auditor с трейсингом LangSmith, CI/CD, векторной БД и публичным чат-интерфейсом' }, description: { en: 'Deploy the AI Design Auditor from Phase 5 to production. Add LangSmith for full observability and tracing, set up a CI/CD pipeline for automated testing and deployment, use a production vector database, and build a public chat interface. This is your final capstone project demonstrating end-to-end AI system deployment.', ru: 'Задеплой AI Design Auditor из Фазы 5 в продакшн. Добавь LangSmith для полной наблюдаемости и трейсинга, настрой CI/CD для автоматического тестирования и деплоя, используй продакшн векторную базу данных и построй публичный чат-интерфейс. Это твой финальный capstone-проект, демонстрирующий end-to-end деплой AI-системы.' } },
    ],
    milestones: [
      { en: 'Production-deployed AI application with monitoring', ru: 'AI-приложение в продакшне с мониторингом' },
      { en: 'Full stack: LangGraph + vector DB + API + frontend', ru: 'Полный стек: LangGraph + векторная БД + API + фронтенд' },
      { en: 'Fine-tuned model outperforming base model on target task', ru: 'Дообученная модель превосходит базовую на целевой задаче' },
    ],
    resources: [
      { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'tool', free: true },
      { title: 'LangSmith', url: 'https://smith.langchain.com', type: 'tool', free: true },
      { title: 'Weights & Biases', url: 'https://wandb.ai', type: 'tool', free: true },
      { title: 'Vercel AI SDK', url: 'https://sdk.vercel.ai', type: 'tool', free: true },
      { title: 'DeepLearning.AI: Finetuning Large Language Models', url: 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/', type: 'course', free: true },
      { title: 'Hugging Face PEFT Library', url: 'https://huggingface.co/docs/peft', type: 'tool', free: true },
      { title: 'Full Stack LLM Bootcamp (Berkeley, free videos)', url: 'https://fullstackdeeplearning.com/llm-bootcamp/', type: 'course', free: true },
      { title: 'OpenTelemetry for LLM Observability (Arize Phoenix)', url: 'https://docs.arize.com/phoenix', type: 'tool', free: true },
    ],
  },
];

export const allTasks = phases.flatMap((p) => p.tasks);
export const totalTaskCount = allTasks.length;

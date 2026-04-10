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
        title: { en: 'Multi-Agent', ru: 'Мультиагентность' },
        description: {
          en: 'Multiple agents working together: role separation, context passing, coordination.',
          ru: 'Несколько агентов работают вместе: разделение ролей, передача контекста, координация.',
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
    ],
    milestones: [
      { en: 'Can explain all 7 agentic patterns from memory', ru: 'Могу объяснить все 7 паттернов по памяти' },
      { en: 'Working code demo for each pattern', ru: 'Рабочее демо кода для каждого паттерна' },
      { en: 'Agent that chains prompt → routes → uses tool in one pipeline', ru: 'Агент, который объединяет цепочку промптов → маршрутизацию → инструменты в одном пайплайне' },
    ],
    resources: [
      { title: 'Anthropic Cookbook', url: 'https://github.com/anthropics/anthropic-cookbook', type: 'tool' },
      { title: 'DeepLearning.AI Agentic Courses (Andrew Ng)', url: 'https://www.deeplearning.ai', type: 'course' },
      { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'tool' },
      { title: 'Building LLM Powered Applications — Valentina Alto', type: 'book' },
      {
        title: 'Andrew Ng — What\'s Next for AI Agentic Workflows',
        url: 'https://www.youtube.com/watch?v=sal78ACtGTc',
        videoId: 'sal78ACtGTc',
        type: 'video',
        description: 'Эндрю Ын объясняет 4 ключевых агентных паттерна: рефлексия, инструменты, планирование, мультиагентность',
      },
      {
        title: 'Building Effective Agents — Insights from Anthropic',
        url: 'https://www.youtube.com/watch?v=0v7TQIh_kes',
        videoId: '0v7TQIh_kes',
        type: 'video',
        description: 'Официальный разбор от Anthropic: цепочки промптов, маршрутизация, параллелизация, оркестровка',
      },
      {
        title: 'LangGraph Complete Course for Beginners (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=jGg_1h0qzaM',
        videoId: 'jGg_1h0qzaM',
        type: 'video',
        description: 'Полный курс по LangGraph: state, инструменты, мультиагентность, RAG-агенты (3+ часа, EN)',
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
        title: { en: 'Memory Management', ru: 'Управление памятью' },
        description: {
          en: 'How agents store and use context. Short-term memory (within session) vs. long-term (between sessions). Context compression and prioritization strategies.',
          ru: 'Как агенты хранят и используют контекст. Короткосрочная память (в рамках сессии) vs. долгосрочная (между сессиями). Стратегии сжатия и приоритизации контекста.',
        },
      },
      {
        id: '2.2',
        title: { en: 'Learning and Adaptation', ru: 'Обучение и адаптация' },
        description: {
          en: 'Agents that improve over time: feedback loops, fine-tuning on usage data, adaptive prompts.',
          ru: 'Агенты, которые улучшаются со временем: петли обратной связи, fine-tuning на данных использования, адаптивные промпты.',
        },
      },
      {
        id: '2.3',
        title: { en: 'Model Context Protocol (MCP)', ru: 'Протокол контекста модели (MCP)' },
        description: {
          en: 'Protocol for managing model context: how to structure, pass, and update context in multi-step interactions. MCP templates for reuse.',
          ru: 'Протокол управления контекстом модели: как структурировать, передавать и обновлять контекст в многошаговых взаимодействиях. Шаблоны MCP для переиспользования.',
        },
      },
      {
        id: '2.4',
        title: { en: 'Goal Setting and Monitoring', ru: 'Постановка и мониторинг целей' },
        description: {
          en: 'Dynamic goal-setting: how an agent tracks progress, adjusts goals, and decides when a task is complete.',
          ru: 'Динамическое целеполагание: как агент отслеживает прогресс, корректирует цели и принимает решение о завершении задачи.',
        },
      },
    ],
    tasks: [
      { id: 't2-1', phaseId: 2, title: { en: 'Compare short-term vs. long-term memory models — write analysis', ru: 'Сравнить модели короткосрочной и долгосрочной памяти — написать анализ' } },
      { id: 't2-2', phaseId: 2, title: { en: 'Implement a memory-aware agent with session persistence', ru: 'Реализовать агент с памятью и сохранением между сессиями' } },
      { id: 't2-3', phaseId: 2, title: { en: 'Build a feedback loop that improves agent responses', ru: 'Построить петлю обратной связи для улучшения ответов агента' } },
      { id: 't2-4', phaseId: 2, title: { en: 'Study MCP spec and implement a context management template', ru: 'Изучить спецификацию MCP и реализовать шаблон управления контекстом' } },
      { id: 't2-5', phaseId: 2, title: { en: 'Build an agent with dynamic goal tracking', ru: 'Построить агент с динамическим отслеживанием целей' } },
    ],
    milestones: [
      { en: 'Agent with working long-term memory between sessions', ru: 'Агент с рабочей долгосрочной памятью между сессиями' },
      { en: 'MCP template implemented and reusable', ru: 'Шаблон MCP реализован и готов к переиспользованию' },
      { en: 'Feedback loop that demonstrably improves outputs', ru: 'Петля обратной связи, которая наглядно улучшает результаты' },
    ],
    resources: [
      { title: 'MCP Documentation', url: 'https://modelcontextprotocol.io', type: 'tool' },
      { title: 'Claude Agent SDK', url: 'https://docs.anthropic.com/en/docs/claude-code/sdk', type: 'tool' },
      { title: 'Designing Machine Learning Systems — Chip Huyen', type: 'book' },
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
        title: { en: 'Knowledge Retrieval (RAG)', ru: 'Поиск знаний (RAG)' },
        description: {
          en: 'Retrieval-Augmented Generation: connecting an agent to a knowledge base. Indexing, search, ranking, generation with context.',
          ru: 'Retrieval-Augmented Generation: как подключить агента к базе знаний. Индексирование, поиск, ранжирование, генерация с контекстом.',
        },
      },
    ],
    tasks: [
      { id: 't3-1', phaseId: 3, title: { en: 'Simulate failure scenarios and implement retry/fallback chains', ru: 'Смоделировать сценарии отказов и реализовать retry/fallback-цепочки' } },
      { id: 't3-2', phaseId: 3, title: { en: 'Build a HITL checkpoint in an agent pipeline', ru: 'Построить HITL-checkpoint в агентном пайплайне' } },
      { id: 't3-3', phaseId: 3, title: { en: 'Implement a basic RAG system with a vector store', ru: 'Реализовать базовую RAG-систему с векторным хранилищем' } },
      { id: 't3-4', phaseId: 3, title: { en: 'Add ranking to RAG retrieval results', ru: 'Добавить ранжирование результатов поиска в RAG' } },
      { id: 't3-5', phaseId: 3, title: { en: 'Combine HITL + RAG in one end-to-end pipeline', ru: 'Объединить HITL + RAG в одном end-to-end пайплайне' } },
    ],
    milestones: [
      { en: 'Agent that recovers gracefully from 3 types of failures', ru: 'Агент, который корректно восстанавливается после 3 типов сбоев' },
      { en: 'Working HITL checkpoint with escalation logic', ru: 'Рабочий HITL-checkpoint с логикой эскалации' },
      { en: 'RAG pipeline over a real document corpus', ru: 'RAG-пайплайн поверх реального корпуса документов' },
    ],
    resources: [
      { title: 'LangChain RAG Docs', url: 'https://python.langchain.com/docs/use_cases/question_answering/', type: 'tool' },
      { title: 'AI Engineering — Chip Huyen', type: 'book' },
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
          en: 'Protocols for agent-to-agent communication: who talks to whom, message formats, coordination patterns (blackboard, message passing, shared state).',
          ru: 'Протоколы общения между агентами: кто с кем говорит, форматы сообщений, паттерны координации (blackboard, message passing, shared state).',
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
        title: { en: 'Evaluation and Monitoring', ru: 'Оценка и мониторинг' },
        description: {
          en: 'Quality metrics for agentic systems: accuracy, cost, latency, user satisfaction. A/B testing for AI pipelines.',
          ru: 'Метрики качества агентных систем: точность, стоимость, латенси, user satisfaction. A/B тесты для AI-пайплайнов.',
        },
      },
      {
        id: '4.6',
        title: { en: 'Prioritization', ru: 'Приоритизация' },
        description: {
          en: 'How an agent decides what to do first when there are multiple tasks. Prioritization strategies and queue management.',
          ru: 'Как агент решает, что делать первым, когда задач несколько. Стратегии приоритизации и управления очередью.',
        },
      },
      {
        id: '4.7',
        title: { en: 'Exploration and Discovery', ru: 'Исследование и открытие' },
        description: {
          en: 'Agent as explorer: autonomous search for new solutions, experimentation, self-expanding capabilities.',
          ru: 'Агент как исследователь: автономный поиск новых решений, эксперименты, самостоятельное расширение возможностей.',
        },
      },
    ],
    tasks: [
      { id: 't4-1', phaseId: 4, title: { en: 'Build a multi-agent system with A2A communication', ru: 'Построить мультиагентную систему с A2A-взаимодействием' } },
      { id: 't4-2', phaseId: 4, title: { en: 'Implement token-budget-aware optimization in a pipeline', ru: 'Реализовать оптимизацию с учётом бюджета токенов' } },
      { id: 't4-3', phaseId: 4, title: { en: 'Compare CoT vs. ToT vs. ReAct on a reasoning task', ru: 'Сравнить CoT vs. ToT vs. ReAct на задаче рассуждений' } },
      { id: 't4-4', phaseId: 4, title: { en: 'Add input/output guardrails to an existing agent', ru: 'Добавить guardrails на вход/выход существующего агента' } },
      { id: 't4-5', phaseId: 4, title: { en: 'Set up evaluation metrics and monitoring dashboard', ru: 'Настроить метрики оценки и дашборд мониторинга' } },
      { id: 't4-6', phaseId: 4, title: { en: 'CrewAI: build a crew with role-based agents', ru: 'CrewAI: построить команду агентов с распределёнными ролями' } },
    ],
    milestones: [
      { en: 'Multi-agent system with 3+ agents coordinating via A2A', ru: 'Мультиагентная система с 3+ агентами, координирующимися через A2A' },
      { en: 'Guardrails that block at least 2 categories of unsafe outputs', ru: 'Guardrails, блокирующие минимум 2 категории небезопасных выводов' },
      { en: 'Evaluation pipeline with automated quality scoring', ru: 'Пайплайн оценки с автоматической оценкой качества' },
    ],
    resources: [
      { title: 'CrewAI Documentation', url: 'https://docs.crewai.com', type: 'tool' },
      { title: 'ByteByteGo (YouTube) — System Design', url: 'https://www.youtube.com/@ByteByteGo', type: 'course' },
      { title: 'Stanford CS329S — ML Systems Design', url: 'https://stanford-cs329s.github.io', type: 'course' },
      { title: 'System Design Interview — Alex Xu', type: 'book' },
    ],
  },
  {
    id: 5,
    title: { en: 'Software Architecture Fundamentals', ru: 'Основы архитектуры ПО' },
    subtitle: { en: 'General System Design Principles', ru: 'Общие принципы проектирования систем' },
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
          en: 'Horizontal vs. vertical scaling, sharding, load balancing for AI systems.',
          ru: 'Горизонтальное vs. вертикальное масштабирование, шардинг, балансировка нагрузки для AI-систем.',
        },
      },
      {
        id: '5.2',
        title: { en: 'Reliability and Fault Tolerance', ru: 'Надёжность и отказоустойчивость' },
        description: {
          en: 'CAP theorem in practice, replication strategies, circuit breakers for AI services.',
          ru: 'Теорема CAP на практике, стратегии репликации, circuit breaker для AI-сервисов.',
        },
      },
      {
        id: '5.3',
        title: { en: 'API Design for AI Systems', ru: 'Проектирование API для AI-систем' },
        description: {
          en: 'Designing APIs that expose AI capabilities: streaming, webhooks, async patterns.',
          ru: 'Проектирование API, предоставляющих AI-возможности: стриминг, вебхуки, асинхронные паттерны.',
        },
      },
    ],
    tasks: [
      { id: 't5-1', phaseId: 5, title: { en: 'Design a scalable multi-agent system architecture diagram', ru: 'Спроектировать диаграмму архитектуры масштабируемой мультиагентной системы' } },
      { id: 't5-2', phaseId: 5, title: { en: 'Read System Design Interview chapters on scalability', ru: 'Прочитать главы System Design Interview о масштабируемости' } },
      { id: 't5-3', phaseId: 5, title: { en: 'Implement a circuit breaker for an AI service call', ru: 'Реализовать circuit breaker для вызова AI-сервиса' } },
    ],
    milestones: [
      { en: 'Can design a scalable AI system from scratch on a whiteboard', ru: 'Могу спроектировать масштабируемую AI-систему с нуля на доске' },
      { en: 'Architecture doc for a real-world AI system', ru: 'Документ архитектуры для реальной AI-системы' },
    ],
    resources: [
      { title: 'System Design Interview — Alex Xu', type: 'book' },
      { title: 'ByteByteGo (YouTube)', url: 'https://www.youtube.com/@ByteByteGo', type: 'course' },
    ],
  },
  {
    id: 6,
    title: { en: 'Specific Languages, Frameworks & Stack', ru: 'Языки, фреймворки и стек' },
    subtitle: { en: 'Production-Ready Implementation', ru: 'Реализация для продакшна' },
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
          en: 'Advanced LangGraph patterns: stateful graphs, checkpointers, human-in-the-loop flows.',
          ru: 'Продвинутые паттерны LangGraph: stateful-графы, checkpointer-ы, HITL-потоки.',
        },
      },
      {
        id: '6.2',
        title: { en: 'Vector Databases', ru: 'Векторные базы данных' },
        description: {
          en: 'Pinecone, Weaviate, Chroma — choosing and optimizing vector stores for production.',
          ru: 'Pinecone, Weaviate, Chroma — выбор и оптимизация векторных хранилищ для продакшна.',
        },
      },
      {
        id: '6.3',
        title: { en: 'Production Deployment Patterns', ru: 'Паттерны продакшн-деплоя' },
        description: {
          en: 'Containerization, CI/CD for AI, monitoring in production (LangSmith, Weights & Biases).',
          ru: 'Контейнеризация, CI/CD для AI, мониторинг в продакшне (LangSmith, Weights & Biases).',
        },
      },
    ],
    tasks: [
      { id: 't6-1', phaseId: 6, title: { en: 'Build a production-ready LangGraph agent with checkpointing', ru: 'Построить production-ready агент на LangGraph с checkpointing' } },
      { id: 't6-2', phaseId: 6, title: { en: 'Deploy a vector DB and benchmark retrieval performance', ru: 'Развернуть векторную БД и провести бенчмарк производительности поиска' } },
      { id: 't6-3', phaseId: 6, title: { en: 'Set up CI/CD pipeline for an AI application', ru: 'Настроить CI/CD пайплайн для AI-приложения' } },
      { id: 't6-4', phaseId: 6, title: { en: 'Integrate LangSmith for production monitoring', ru: 'Интегрировать LangSmith для мониторинга в продакшне' } },
    ],
    milestones: [
      { en: 'Production-deployed AI application with monitoring', ru: 'AI-приложение в продакшне с мониторингом' },
      { en: 'Full stack: LangGraph + vector DB + API + frontend', ru: 'Полный стек: LangGraph + векторная БД + API + фронтенд' },
    ],
    resources: [
      { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/', type: 'tool' },
      { title: 'LangSmith', url: 'https://smith.langchain.com', type: 'tool' },
    ],
  },
];

export const allTasks = phases.flatMap((p) => p.tasks);
export const totalTaskCount = allTasks.length;

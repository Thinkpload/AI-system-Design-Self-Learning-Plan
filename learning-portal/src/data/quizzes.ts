import { PhaseQuiz } from '@/types';

export const quizzes: PhaseQuiz[] = [
  // ─── Phase 1: Core Agentic Patterns ────────────────────────────────────────
  {
    phaseId: 1,
    questions: [
      {
        id: 'q1-1',
        question: {
          en: 'What is the primary purpose of prompt chaining?',
          ru: 'В чём основная цель цепочек промптов (prompt chaining)?',
        },
        options: [
          { en: 'To run multiple prompts simultaneously', ru: 'Запускать несколько промптов одновременно' },
          { en: 'To connect prompts sequentially so each output becomes the next input', ru: 'Соединять промпты последовательно, чтобы выход одного был входом следующего' },
          { en: 'To reduce the number of API calls needed', ru: 'Сократить количество необходимых API-вызовов' },
          { en: 'To cache and reuse prompt responses', ru: 'Кэшировать и переиспользовать ответы на промпты' },
        ],
        correct: 1,
        explanation: {
          en: 'Prompt chaining creates sequential pipelines where each step refines or augments the previous output, forming the backbone of complex AI workflows.',
          ru: 'Цепочки промптов создают последовательные пайплайны, где каждый шаг уточняет или дополняет предыдущий результат — это основа сложных AI-рабочих процессов.',
        },
      },
      {
        id: 'q1-2',
        question: {
          en: 'In the reflection pattern, what does the agent do with its own output?',
          ru: 'В паттерне рефлексии что агент делает со своим собственным выводом?',
        },
        options: [
          { en: 'Sends it to another agent for review', ru: 'Отправляет его другому агенту на проверку' },
          { en: 'Stores it in long-term memory for future use', ru: 'Сохраняет в долгосрочную память для будущего использования' },
          { en: 'Evaluates it and iteratively improves if insufficient', ru: 'Оценивает его и итеративно улучшает, если результат недостаточен' },
          { en: 'Sends it directly to the user without modification', ru: 'Отправляет его пользователю напрямую без изменений' },
        ],
        correct: 2,
        explanation: {
          en: 'Reflection allows an agent to self-critique its output and refine it iteratively — enabling higher quality results without human intervention.',
          ru: 'Рефлексия позволяет агенту самостоятельно критиковать и итеративно улучшать свой результат — это даёт более высокое качество без участия человека.',
        },
      },
      {
        id: 'q1-3',
        question: {
          en: 'What is the fan-out/fan-in parallelization pattern?',
          ru: 'Что такое паттерн параллелизации fan-out/fan-in?',
        },
        options: [
          { en: 'Distributing tasks to multiple workers, then collecting and merging results', ru: 'Распределение задач по нескольким исполнителям с последующим сбором и объединением результатов' },
          { en: 'Reducing task complexity by breaking into smaller sequential steps', ru: 'Снижение сложности задачи путём разбиения на меньшие последовательные шаги' },
          { en: 'Filtering irrelevant data before processing', ru: 'Фильтрация нерелевантных данных перед обработкой' },
          { en: 'Routing requests to different geographic regions', ru: 'Маршрутизация запросов по разным географическим регионам' },
        ],
        correct: 0,
        explanation: {
          en: 'Fan-out distributes work to multiple parallel workers (e.g., multiple LLM calls), while fan-in collects and merges all results into a single output.',
          ru: 'Fan-out распределяет работу по нескольким параллельным исполнителям (например, несколько вызовов LLM), а fan-in собирает и объединяет все результаты в один.',
        },
      },
      {
        id: 'q1-4',
        question: {
          en: 'In multi-agent systems, what is the role of a router/classifier agent?',
          ru: 'В мультиагентных системах какова роль агента-маршрутизатора/классификатора?',
        },
        options: [
          { en: 'Execute all subtasks independently', ru: 'Выполнять все подзадачи независимо' },
          { en: 'Analyze incoming requests and direct them to the appropriate specialized agent', ru: 'Анализировать входящие запросы и направлять их к нужному специализированному агенту' },
          { en: 'Monitor other agents for failures', ru: 'Отслеживать сбои других агентов' },
          { en: 'Maintain shared memory between agents', ru: 'Поддерживать общую память между агентами' },
        ],
        correct: 1,
        explanation: {
          en: 'Routing agents classify incoming inputs and direct them to the specialized agent best suited for that task type, enabling efficient workload distribution.',
          ru: 'Агенты маршрутизации классифицируют входящие данные и направляют их к специализированному агенту, наиболее подходящему для данного типа задач.',
        },
      },
      {
        id: 'q1-5',
        question: {
          en: 'What enables function/tool calling in large language models?',
          ru: 'Что обеспечивает вызов функций/инструментов в больших языковых моделях?',
        },
        options: [
          { en: 'Special hardware accelerators in the inference server', ru: 'Специальные аппаратные ускорители на inference-сервере' },
          { en: 'Browser plugins that intercept model responses', ru: 'Браузерные плагины, перехватывающие ответы модели' },
          { en: 'The model generating structured requests (JSON) that the system executes as function calls', ru: 'Модель генерирует структурированные запросы (JSON), которые система выполняет как вызовы функций' },
          { en: 'Fine-tuning on millions of API documentation examples', ru: 'Fine-tuning на миллионах примеров API-документации' },
        ],
        correct: 2,
        explanation: {
          en: 'Function calling works by training the model to emit structured JSON tool calls which the surrounding system intercepts, executes, and feeds the result back to the model.',
          ru: 'Вызов функций работает так: модель генерирует структурированные JSON-вызовы инструментов, которые система перехватывает, выполняет и возвращает результат обратно в модель.',
        },
      },
    ],
  },

  // ─── Phase 2: Adaptive & Contextual Intelligence ────────────────────────────
  {
    phaseId: 2,
    questions: [
      {
        id: 'q2-1',
        question: {
          en: 'What is the key difference between short-term and long-term agent memory?',
          ru: 'В чём ключевое отличие краткосрочной и долгосрочной памяти агентов?',
        },
        options: [
          { en: 'Short-term is faster to access, long-term has larger capacity', ru: 'Краткосрочная быстрее, долгосрочная вмещает больше' },
          { en: 'Short-term persists within a session; long-term persists across sessions', ru: 'Краткосрочная существует в рамках сессии; долгосрочная сохраняется между сессиями' },
          { en: 'Short-term stores facts, long-term stores procedures', ru: 'Краткосрочная хранит факты, долгосрочная — процедуры' },
          { en: 'Short-term uses RAM, long-term uses disk storage', ru: 'Краткосрочная в RAM, долгосрочная на диске' },
        ],
        correct: 1,
        explanation: {
          en: 'Short-term (in-context) memory lives within a single session window and is lost when it ends. Long-term memory is persisted externally and can be retrieved in future sessions.',
          ru: 'Краткосрочная (контекстная) память существует в рамках одной сессии и теряется при её окончании. Долгосрочная память сохраняется внешне и доступна в будущих сессиях.',
        },
      },
      {
        id: 'q2-2',
        question: {
          en: 'What does the Model Context Protocol (MCP) primarily standardize?',
          ru: 'Что в первую очередь стандартизирует Model Context Protocol (MCP)?',
        },
        options: [
          { en: 'GPU memory allocation during model inference', ru: 'Распределение памяти GPU во время инференса' },
          { en: 'How AI assistants connect to external tools and data sources', ru: 'Как AI-ассистенты подключаются к внешним инструментам и источникам данных' },
          { en: 'The format of training datasets for LLMs', ru: 'Формат обучающих данных для LLM' },
          { en: 'Multi-cloud deployment configuration', ru: 'Конфигурация мультиоблачного деплоя' },
        ],
        correct: 1,
        explanation: {
          en: 'MCP is Anthropic\'s open protocol that standardizes how AI applications connect to external tools, databases, and services — enabling reusable integrations across models.',
          ru: 'MCP — открытый протокол Anthropic, стандартизирующий подключение AI-приложений к внешним инструментам, базам данных и сервисам, обеспечивая переиспользуемые интеграции.',
        },
      },
      {
        id: 'q2-3',
        question: {
          en: 'What is the purpose of a feedback loop in an adaptive agent?',
          ru: 'Какова цель петли обратной связи в адаптивном агенте?',
        },
        options: [
          { en: 'To detect and handle infinite recursion bugs', ru: 'Обнаруживать и обрабатывать ошибки бесконечной рекурсии' },
          { en: 'To allow the agent to improve over time based on outcomes and user signals', ru: 'Дать агенту возможность улучшаться со временем на основе результатов и сигналов пользователя' },
          { en: 'To synchronize state between multiple agent instances', ru: 'Синхронизировать состояние между несколькими экземплярами агента' },
          { en: 'To create a user interface for collecting ratings', ru: 'Создать пользовательский интерфейс для сбора оценок' },
        ],
        correct: 1,
        explanation: {
          en: 'Feedback loops enable agents to learn from successes and failures — via fine-tuning, updated prompts, or in-context examples — making them progressively more effective.',
          ru: 'Петли обратной связи позволяют агентам учиться на успехах и ошибках — через fine-tuning, обновлённые промпты или примеры в контексте — делая их постепенно эффективнее.',
        },
      },
      {
        id: 'q2-4',
        question: {
          en: 'Why is context compression important in long-running agent tasks?',
          ru: 'Почему сжатие контекста важно в долгосрочных задачах агентов?',
        },
        options: [
          { en: 'To reduce network bandwidth between the agent and the LLM API', ru: 'Уменьшить полосу пропускания сети между агентом и API LLM' },
          { en: 'Because context windows are finite; compression keeps the most relevant info within the limit', ru: 'Контекстное окно конечно; сжатие сохраняет наиболее релевантную информацию в пределах лимита' },
          { en: 'To speed up tokenization on the client side', ru: 'Ускорить токенизацию на стороне клиента' },
          { en: 'To comply with data privacy regulations', ru: 'Соответствовать требованиям конфиденциальности данных' },
        ],
        correct: 1,
        explanation: {
          en: 'LLMs have a finite context window. In long tasks, context grows; compression techniques (summarization, trimming, priority-based retention) keep the most critical info within limits.',
          ru: 'LLM имеют конечное контекстное окно. В длительных задачах контекст растёт; методы сжатия (суммаризация, обрезка, приоритетное удержание) сохраняют важнейшую информацию в рамках ограничений.',
        },
      },
      {
        id: 'q2-5',
        question: {
          en: 'In goal-oriented agent design, how does the agent determine when a task is complete?',
          ru: 'В целеориентированном дизайне агентов как агент определяет, что задача выполнена?',
        },
        options: [
          { en: 'After executing a fixed predetermined number of steps', ru: 'После выполнения фиксированного заранее определённого числа шагов' },
          { en: 'Only when the user explicitly says the task is done', ru: 'Только когда пользователь явно говорит, что задача выполнена' },
          { en: 'When defined success criteria or termination conditions are evaluated as satisfied', ru: 'Когда определённые критерии успеха или условия завершения оцениваются как выполненные' },
          { en: 'After a configurable timeout period expires', ru: 'По истечении настраиваемого тайм-аута' },
        ],
        correct: 2,
        explanation: {
          en: 'Well-designed goal monitoring means the agent evaluates its progress against explicit success criteria at each step, enabling dynamic and appropriate termination.',
          ru: 'Хорошо спроектированный мониторинг целей означает, что агент на каждом шаге оценивает свой прогресс по чётким критериям успеха, обеспечивая динамичное и своевременное завершение.',
        },
      },
    ],
  },

  // ─── Phase 3: Robustness, HITL & RAG ───────────────────────────────────────
  {
    phaseId: 3,
    questions: [
      {
        id: 'q3-1',
        question: {
          en: 'What does RAG stand for and what problem does it solve?',
          ru: 'Что означает RAG и какую проблему он решает?',
        },
        options: [
          { en: 'Recursive Agent Graph — enables hierarchical planning', ru: 'Recursive Agent Graph — обеспечивает иерархическое планирование' },
          { en: 'Retrieval-Augmented Generation — grounds LLM responses in real documents', ru: 'Retrieval-Augmented Generation — подкрепляет ответы LLM реальными документами' },
          { en: 'Realtime Adaptive Generation — speeds up LLM inference', ru: 'Realtime Adaptive Generation — ускоряет инференс LLM' },
          { en: 'Robust Agent Guardrails — prevents unsafe model outputs', ru: 'Robust Agent Guardrails — предотвращает небезопасные выводы модели' },
        ],
        correct: 1,
        explanation: {
          en: 'RAG retrieves relevant documents at inference time and injects them as context, solving the problem of LLMs having stale or incomplete knowledge.',
          ru: 'RAG извлекает релевантные документы во время инференса и добавляет их как контекст, решая проблему устаревших или неполных знаний LLM.',
        },
      },
      {
        id: 'q3-2',
        question: {
          en: 'What is the main benefit of Human-in-the-Loop (HITL) approval checkpoints?',
          ru: 'В чём главное преимущество контрольных точек одобрения в HITL (Human-in-the-Loop)?',
        },
        options: [
          { en: 'They slow down agent execution to prevent resource exhaustion', ru: 'Они замедляют выполнение агента для предотвращения исчерпания ресурсов' },
          { en: 'They allow human oversight and intervention at critical decision points', ru: 'Они обеспечивают человеческий контроль и возможность вмешательства в критических точках принятия решений' },
          { en: 'They provide an audit log of all agent actions', ru: 'Они предоставляют журнал аудита всех действий агента' },
          { en: 'They authenticate API requests before execution', ru: 'Они аутентифицируют API-запросы перед выполнением' },
        ],
        correct: 1,
        explanation: {
          en: 'HITL checkpoints insert human review at high-stakes or uncertain moments, allowing a person to approve, reject, or redirect agent actions before they are executed.',
          ru: 'HITL-контрольные точки вставляют проверку человеком в критических или неопределённых моментах, позволяя одобрить, отклонить или перенаправить действия агента до их выполнения.',
        },
      },
      {
        id: 'q3-3',
        question: {
          en: 'What is graceful degradation in the context of agent error handling?',
          ru: 'Что такое graceful degradation в контексте обработки ошибок агентов?',
        },
        options: [
          { en: 'Gradually reducing model quality over long sessions to save tokens', ru: 'Постепенное снижение качества модели в длинных сессиях для экономии токенов' },
          { en: 'Maintaining partial functionality when components fail rather than crashing completely', ru: 'Сохранение частичной функциональности при сбое компонентов вместо полного краша' },
          { en: 'Removing advanced features to save compute during peak load', ru: 'Отключение продвинутых функций для экономии ресурсов в пиковой нагрузке' },
          { en: 'Reducing batch size when GPU memory is nearly exhausted', ru: 'Уменьшение размера батча при почти исчерпанной памяти GPU' },
        ],
        correct: 1,
        explanation: {
          en: 'Graceful degradation means when one component fails, the system falls back to a reduced but still functional mode rather than failing completely — maximising availability.',
          ru: 'Graceful degradation означает, что при сбое одного компонента система переходит в сниженный, но всё ещё функциональный режим вместо полного отказа — максимизируя доступность.',
        },
      },
      {
        id: 'q3-4',
        question: {
          en: 'What is the purpose of reranking in a RAG pipeline?',
          ru: 'Какова цель переранжирования (reranking) в RAG-пайплайне?',
        },
        options: [
          { en: 'Sorting documents by creation date before retrieval', ru: 'Сортировка документов по дате создания перед извлечением' },
          { en: 'Selecting the most relevant chunks from a larger candidate set to improve answer quality', ru: 'Выбор наиболее релевантных чанков из большего набора кандидатов для улучшения качества ответа' },
          { en: 'Ranking users by their query frequency', ru: 'Ранжирование пользователей по частоте запросов' },
          { en: 'Ordering GPU jobs by priority level', ru: 'Упорядочивание GPU-задач по уровню приоритета' },
        ],
        correct: 1,
        explanation: {
          en: 'Reranking applies a more accurate (but slower) relevance model on the initial retrieval results, selecting the top-k most contextually relevant chunks for generation.',
          ru: 'Переранжирование применяет более точную (но медленную) модель релевантности к начальным результатам поиска, выбирая top-k наиболее контекстуально релевантных чанков для генерации.',
        },
      },
      {
        id: 'q3-5',
        question: {
          en: 'Why is exponential backoff used in retry strategies?',
          ru: 'Зачем в retry-стратегиях используется экспоненциальная выдержка (exponential backoff)?',
        },
        options: [
          { en: 'To exponentially increase the quality of each retry attempt', ru: 'Для экспоненциального повышения качества каждой повторной попытки' },
          { en: 'To increase the wait time between retries, reducing load on a struggling service', ru: 'Увеличивать время ожидания между попытками, снижая нагрузку на перегруженный сервис' },
          { en: 'To batch multiple failed requests into a single retry', ru: 'Объединять несколько неудачных запросов в один повторный' },
          { en: 'To limit the total cost of API calls during failures', ru: 'Ограничивать общую стоимость API-вызовов при сбоях' },
        ],
        correct: 1,
        explanation: {
          en: 'Exponential backoff progressively increases wait time (e.g., 1s, 2s, 4s, 8s) between retries, preventing thundering-herd problems that could worsen an already strained service.',
          ru: 'Exponential backoff прогрессивно увеличивает время ожидания (например, 1с, 2с, 4с, 8с) между попытками, предотвращая проблему "стада грома", которая может усугубить перегруженный сервис.',
        },
      },
    ],
  },

  // ─── Phase 4: Advanced Architectures & Optimization ────────────────────────
  {
    phaseId: 4,
    questions: [
      {
        id: 'q4-1',
        question: {
          en: 'What distinguishes Chain-of-Thought (CoT) prompting from standard prompting?',
          ru: 'Чем Chain-of-Thought (CoT) промптинг отличается от стандартного?',
        },
        options: [
          { en: 'CoT chains multiple separate API calls in sequence', ru: 'CoT объединяет несколько отдельных API-вызовов последовательно' },
          { en: 'CoT instructs the model to show intermediate reasoning steps before the final answer', ru: 'CoT инструктирует модель показывать промежуточные шаги рассуждения перед финальным ответом' },
          { en: 'CoT uses a chain of retrieval steps before generating a response', ru: 'CoT использует цепочку шагов поиска перед генерацией ответа' },
          { en: 'CoT enables multiple users to collaborate on a single prompt', ru: 'CoT позволяет нескольким пользователям совместно работать над одним промптом' },
        ],
        correct: 1,
        explanation: {
          en: 'CoT prompting explicitly elicits reasoning traces ("think step by step"), dramatically improving accuracy on complex reasoning, math, and logic tasks.',
          ru: 'CoT-промптинг явно вызывает цепочки рассуждений ("думай шаг за шагом"), значительно повышая точность на сложных задачах рассуждения, математики и логики.',
        },
      },
      {
        id: 'q4-2',
        question: {
          en: 'What is the primary purpose of guardrails in AI agent systems?',
          ru: 'Какова основная цель guardrails (ограждений) в AI-агентных системах?',
        },
        options: [
          { en: 'Physical server protection against hardware failures', ru: 'Физическая защита серверов от аппаратных сбоев' },
          { en: 'Rate limiting incoming API requests to prevent overload', ru: 'Ограничение частоты входящих API-запросов для предотвращения перегрузки' },
          { en: 'Filtering inputs/outputs to prevent harmful, off-topic, or policy-violating behavior', ru: 'Фильтрация входных/выходных данных для предотвращения вредоносного или нарушающего политику поведения' },
          { en: 'Balancing compute load across multiple GPUs', ru: 'Балансировка вычислительной нагрузки между несколькими GPU' },
        ],
        correct: 2,
        explanation: {
          en: 'Guardrails are safety layers that intercept and filter model inputs/outputs — blocking harmful content, enforcing topic constraints, and ensuring policy compliance.',
          ru: 'Guardrails — это защитные уровни, которые перехватывают и фильтруют входные/выходные данные модели, блокируют вредоносный контент и обеспечивают соблюдение политик.',
        },
      },
      {
        id: 'q4-3',
        question: {
          en: 'In ReAct (Reasoning + Acting), what makes it different from pure CoT?',
          ru: 'В чём отличие ReAct (Reasoning + Acting) от чистого CoT?',
        },
        options: [
          { en: 'ReAct uses reinforcement learning while CoT uses supervised learning', ru: 'ReAct использует обучение с подкреплением, а CoT — контролируемое обучение' },
          { en: 'ReAct interleaves reasoning traces with real tool actions in a loop', ru: 'ReAct чередует цепочки рассуждений с реальными действиями инструментов в цикле' },
          { en: 'ReAct requires multiple LLM calls while CoT uses one', ru: 'ReAct требует нескольких вызовов LLM, а CoT — одного' },
          { en: 'ReAct works only for code generation tasks', ru: 'ReAct работает только для задач генерации кода' },
        ],
        correct: 1,
        explanation: {
          en: 'ReAct agents alternate between Thought (reasoning) and Act (tool use/observation) steps, grounding their reasoning in real-world feedback from tools or the environment.',
          ru: 'ReAct-агенты чередуют шаги Thought (рассуждение) и Act (использование инструментов/наблюдение), опирая рассуждения на реальную обратную связь из инструментов или среды.',
        },
      },
      {
        id: 'q4-4',
        question: {
          en: 'What does token budget optimization address in agentic workflows?',
          ru: 'Что решает оптимизация бюджета токенов в агентных рабочих процессах?',
        },
        options: [
          { en: 'Reducing the cost of GPU tokens used during training', ru: 'Снижение стоимости GPU-токенов, используемых при обучении' },
          { en: 'Managing context window usage to balance API cost, latency, and response quality', ru: 'Управление использованием контекстного окна для баланса стоимости API, задержки и качества ответа' },
          { en: 'Allocating compute resources between multiple model instances', ru: 'Распределение вычислительных ресурсов между несколькими экземплярами модели' },
          { en: 'Compressing model weights for faster inference', ru: 'Сжатие весов модели для более быстрого инференса' },
        ],
        correct: 1,
        explanation: {
          en: 'In long-running or complex agents, token costs accumulate. Budget-aware optimization selectively includes context, truncates conversation history, or uses cheaper models for subtasks.',
          ru: 'В долгосрочных или сложных агентах токен-стоимость накапливается. Бюджетно-ориентированная оптимизация выборочно включает контекст, обрезает историю или использует более дешёвые модели для подзадач.',
        },
      },
      {
        id: 'q4-5',
        question: {
          en: 'What is the blackboard pattern in multi-agent coordination?',
          ru: 'Что такое паттерн "blackboard" (доска) в координации мультиагентных систем?',
        },
        options: [
          { en: 'A shared whiteboarding tool for real-time visual agent collaboration', ru: 'Общий инструмент для совместной визуальной работы агентов в реальном времени' },
          { en: 'A shared data structure all agents read from and write to for coordination', ru: 'Общая структура данных, из которой все агенты читают и в которую пишут для координации' },
          { en: 'A message queue system for ordered agent communication', ru: 'Система очередей сообщений для упорядоченного взаимодействия агентов' },
          { en: 'A visual debugging interface for agent state inspection', ru: 'Визуальный интерфейс отладки для проверки состояния агентов' },
        ],
        correct: 1,
        explanation: {
          en: 'The blackboard pattern uses a centralized shared state. Agents read from and write to the blackboard asynchronously, coordinating without direct point-to-point communication.',
          ru: 'Паттерн blackboard использует централизованное общее состояние. Агенты асинхронно читают из него и пишут в него, координируясь без прямой связи точка-точка.',
        },
      },
    ],
  },

  // ─── Phase 5: Software Architecture Fundamentals ────────────────────────────
  {
    phaseId: 5,
    questions: [
      {
        id: 'q5-1',
        question: {
          en: 'In the CAP theorem, what are the three properties?',
          ru: 'Что означают три свойства теоремы CAP?',
        },
        options: [
          { en: 'Caching, Availability, Performance', ru: 'Кэширование, Доступность, Производительность' },
          { en: 'Consistency, Availability, Partition tolerance', ru: 'Согласованность, Доступность, Устойчивость к разделению' },
          { en: 'Concurrency, Atomicity, Persistence', ru: 'Параллелизм, Атомарность, Постоянство' },
          { en: 'Clustering, Autoscaling, Partitioning', ru: 'Кластеризация, Автомасштабирование, Разбиение' },
        ],
        correct: 1,
        explanation: {
          en: 'CAP theorem states that a distributed system can guarantee at most 2 of: Consistency (all nodes see the same data), Availability (every request gets a response), Partition Tolerance (system works despite network splits).',
          ru: 'Теорема CAP утверждает, что распределённая система может гарантировать максимум 2 из: Согласованность (все узлы видят одинаковые данные), Доступность (каждый запрос получает ответ), Устойчивость к разделению (система работает при сетевых разрывах).',
        },
      },
      {
        id: 'q5-2',
        question: {
          en: 'What is horizontal scaling (scale-out)?',
          ru: 'Что такое горизонтальное масштабирование (scale-out)?',
        },
        options: [
          { en: 'Upgrading a single server with more CPU, RAM, and storage', ru: 'Обновление одного сервера: больше CPU, RAM и хранилища' },
          { en: 'Adding more server instances to distribute load across multiple machines', ru: 'Добавление новых серверных экземпляров для распределения нагрузки по нескольким машинам' },
          { en: 'Widening network pipes to increase throughput', ru: 'Расширение сетевых каналов для увеличения пропускной способности' },
          { en: 'Expanding disk capacity on existing servers', ru: 'Расширение дискового пространства на существующих серверах' },
        ],
        correct: 1,
        explanation: {
          en: 'Horizontal scaling adds more machines to the resource pool, distributing load. It is preferred for AI systems because it provides near-linear capacity increases with no single point of failure.',
          ru: 'Горизонтальное масштабирование добавляет машины в пул ресурсов, распределяя нагрузку. Предпочтительно для AI-систем: даёт почти линейный прирост мощности без единой точки отказа.',
        },
      },
      {
        id: 'q5-3',
        question: {
          en: 'What does a circuit breaker pattern do in microservice architectures?',
          ru: 'Что делает паттерн circuit breaker (автоматический выключатель) в микросервисных архитектурах?',
        },
        options: [
          { en: 'Physically disconnects servers during power failures', ru: 'Физически отключает серверы при перебоях питания' },
          { en: 'Stops calling a failing service, allowing it time to recover', ru: 'Прекращает вызывать отказывающий сервис, давая ему время на восстановление' },
          { en: 'Breaks large requests into smaller pieces for parallel processing', ru: 'Разбивает большие запросы на части для параллельной обработки' },
          { en: 'Interrupts long-running database queries to free locks', ru: 'Прерывает долгие запросы к БД для освобождения блокировок' },
        ],
        correct: 1,
        explanation: {
          en: 'A circuit breaker detects repeated failures and "opens" — rejecting requests immediately instead of waiting for timeouts — preventing cascade failures and giving the failing service time to recover.',
          ru: 'Circuit breaker обнаруживает повторяющиеся сбои и "открывается" — отклоняет запросы немедленно вместо ожидания таймаутов, предотвращая каскадные отказы и давая сервису время восстановиться.',
        },
      },
      {
        id: 'q5-4',
        question: {
          en: 'What advantage does streaming offer for AI APIs?',
          ru: 'Какое преимущество даёт стриминг для AI API?',
        },
        options: [
          { en: 'Reduces the total number of tokens generated by the model', ru: 'Уменьшает общее количество токенов, сгенерированных моделью' },
          { en: 'Lets users see partial results as they are generated, reducing perceived latency', ru: 'Позволяет пользователям видеть частичные результаты по мере генерации, снижая воспринимаемую задержку' },
          { en: 'Encrypts data in transit for better security', ru: 'Шифрует данные при передаче для повышения безопасности' },
          { en: 'Enables multiple requests to share a single connection', ru: 'Позволяет нескольким запросам использовать одно соединение' },
        ],
        correct: 1,
        explanation: {
          en: 'Streaming delivers tokens incrementally over SSE/WebSocket, so users see output appear in real-time rather than waiting seconds for the full response — dramatically improving perceived performance.',
          ru: 'Стриминг доставляет токены инкрементально через SSE/WebSocket: пользователи видят вывод в реальном времени, не ожидая секундами полного ответа — это значительно улучшает воспринимаемую производительность.',
        },
      },
      {
        id: 'q5-5',
        question: {
          en: 'What is database sharding?',
          ru: 'Что такое шардинг базы данных?',
        },
        options: [
          { en: 'Encrypting database records for security', ru: 'Шифрование записей базы данных для безопасности' },
          { en: 'Partitioning data horizontally across multiple database instances', ru: 'Горизонтальное разбиение данных по нескольким экземплярам базы данных' },
          { en: 'Creating redundant backups of the entire database', ru: 'Создание избыточных резервных копий всей базы данных' },
          { en: 'Compressing database tables to reduce storage costs', ru: 'Сжатие таблиц базы данных для снижения стоимости хранения' },
        ],
        correct: 1,
        explanation: {
          en: 'Sharding splits data horizontally — e.g., user IDs 0-999 on shard 1, 1000-1999 on shard 2 — allowing the database layer to scale beyond a single machine\'s capacity.',
          ru: 'Шардинг делит данные горизонтально — например, ID пользователей 0-999 на шарде 1, 1000-1999 на шарде 2 — позволяя слою базы данных масштабироваться за пределы возможностей одной машины.',
        },
      },
    ],
  },

  // ─── Phase 6: Languages, Frameworks & Stack ─────────────────────────────────
  {
    phaseId: 6,
    questions: [
      {
        id: 'q6-1',
        question: {
          en: 'What is LangGraph primarily designed for?',
          ru: 'Для чего в первую очередь предназначен LangGraph?',
        },
        options: [
          { en: 'Querying graph databases like Neo4j', ru: 'Запросы к графовым базам данных типа Neo4j' },
          { en: 'Visualizing neural network architectures', ru: 'Визуализация архитектур нейронных сетей' },
          { en: 'Building stateful, cyclical multi-actor agent workflows as graphs', ru: 'Построение stateful циклических мультиагентных рабочих процессов в виде графов' },
          { en: 'Generating knowledge graphs from unstructured text', ru: 'Генерация графов знаний из неструктурированного текста' },
        ],
        correct: 2,
        explanation: {
          en: 'LangGraph extends LangChain with graph-based execution, enabling stateful agents with cycles, conditional edges, and human-in-the-loop flows that can\'t be expressed as simple chains.',
          ru: 'LangGraph расширяет LangChain граф-ориентированным выполнением, обеспечивая stateful агентов с циклами, условными рёбрами и HITL-потоками, которые нельзя выразить простыми цепочками.',
        },
      },
      {
        id: 'q6-2',
        question: {
          en: 'What are vector databases specifically optimized for?',
          ru: 'Для чего специально оптимизированы векторные базы данных?',
        },
        options: [
          { en: 'Storing time-series sensor data', ru: 'Хранение временных рядов данных датчиков' },
          { en: 'Complex relational queries with foreign keys', ru: 'Сложные реляционные запросы с внешними ключами' },
          { en: 'Storing high-dimensional embeddings and performing semantic similarity search', ru: 'Хранение высокоразмерных эмбеддингов и выполнение семантического поиска по сходству' },
          { en: 'Graph traversal queries for social networks', ru: 'Обход графов для социальных сетей' },
        ],
        correct: 2,
        explanation: {
          en: 'Vector DBs (Pinecone, Weaviate, Chroma, pgvector) store embedding vectors and enable approximate nearest-neighbor search — the key operation powering RAG and semantic search.',
          ru: 'Векторные БД (Pinecone, Weaviate, Chroma, pgvector) хранят векторы эмбеддингов и обеспечивают приближённый поиск ближайших соседей — ключевая операция для RAG и семантического поиска.',
        },
      },
      {
        id: 'q6-3',
        question: {
          en: 'What does a LangGraph checkpointer enable?',
          ru: 'Что обеспечивает checkpointer в LangGraph?',
        },
        options: [
          { en: 'Code review automation for LangGraph workflows', ru: 'Автоматизация code review для LangGraph-рабочих процессов' },
          { en: 'Persisting and restoring graph state for long-running and human-in-the-loop flows', ru: 'Сохранение и восстановление состояния графа для долгосрочных и HITL-потоков' },
          { en: 'Model checkpoint management for fine-tuning experiments', ru: 'Управление чекпоинтами модели для экспериментов с fine-tuning' },
          { en: 'Setting debugging breakpoints in agent code', ru: 'Установка точек отладки в коде агента' },
        ],
        correct: 1,
        explanation: {
          en: 'LangGraph checkpointers save the full graph state at each step to a store (SQLite, Redis, etc.), enabling pause/resume, human approval flows, and fault tolerance.',
          ru: 'LangGraph checkpointers сохраняют полное состояние графа на каждом шаге в хранилище (SQLite, Redis и др.), обеспечивая приостановку/возобновление, HITL-потоки и отказоустойчивость.',
        },
      },
      {
        id: 'q6-4',
        question: {
          en: 'What is LangSmith primarily used for in production AI systems?',
          ru: 'Для чего в первую очередь используется LangSmith в продакшн AI-системах?',
        },
        options: [
          { en: 'Generating synthetic training data for fine-tuning', ru: 'Генерация синтетических обучающих данных для fine-tuning' },
          { en: 'Tracing, evaluating, debugging, and monitoring LLM application runs', ru: 'Трассировка, оценка, отладка и мониторинг запусков LLM-приложений' },
          { en: 'Hosting and serving open-source language models', ru: 'Хостинг и обслуживание open-source языковых моделей' },
          { en: 'Fine-tuning Claude and GPT models on custom datasets', ru: 'Fine-tuning моделей Claude и GPT на пользовательских датасетах' },
        ],
        correct: 1,
        explanation: {
          en: 'LangSmith provides full observability for LLM apps: tracing every chain/agent run, evaluation datasets, automated testing, and production monitoring dashboards.',
          ru: 'LangSmith обеспечивает полную наблюдаемость LLM-приложений: трассировку каждого запуска цепочки/агента, датасеты для оценки, автоматизированное тестирование и дашборды мониторинга.',
        },
      },
      {
        id: 'q6-5',
        question: {
          en: 'Why is CI/CD especially important for AI applications compared to traditional software?',
          ru: 'Почему CI/CD особенно важен для AI-приложений по сравнению с традиционным ПО?',
        },
        options: [
          { en: 'AI applications are larger in file size and require longer build times', ru: 'AI-приложения больше по размеру файлов и требуют более длительного времени сборки' },
          { en: 'AI systems need automated quality evaluation of model outputs alongside code tests', ru: 'AI-системам нужна автоматизированная оценка качества вывода модели наряду с тестами кода' },
          { en: 'Regulatory requirements mandate CI/CD for all AI deployments', ru: 'Регуляторные требования обязывают использовать CI/CD для всех AI-деплоев' },
          { en: 'AI models can only be updated during low-traffic periods', ru: 'AI-модели можно обновлять только в периоды низкого трафика' },
        ],
        correct: 1,
        explanation: {
          en: 'AI CI/CD must test not just code correctness but also model output quality — running eval suites, checking for regressions, and gating deployments on both code and behavior metrics.',
          ru: 'CI/CD для AI должен тестировать не только корректность кода, но и качество вывода модели: запускать eval-наборы, проверять регрессии и управлять деплоями на основе метрик кода и поведения.',
        },
      },
    ],
  },
];

export const quizMap: Record<number, PhaseQuiz> = Object.fromEntries(
  quizzes.map((q) => [q.phaseId, q])
);

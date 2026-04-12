import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  // ── Progress ──────────────────────────────────────────────────────────────
  {
    id: 'first_step',
    title: { en: 'First Step', ru: 'Первый шаг' },
    description: { en: 'Complete your very first task', ru: 'Выполни первое задание' },
    icon: '🌱',
    xpReward: 50,
    category: 'progress',
  },
  {
    id: 'five_tasks',
    title: { en: 'Getting Started', ru: 'Хорошее начало' },
    description: { en: 'Complete 5 tasks', ru: 'Выполни 5 заданий' },
    icon: '✋',
    xpReward: 75,
    category: 'progress',
  },
  {
    id: 'ten_tasks',
    title: { en: 'On a Roll', ru: 'В потоке' },
    description: { en: 'Complete 10 tasks', ru: 'Выполни 10 заданий' },
    icon: '🎯',
    xpReward: 100,
    category: 'progress',
  },
  {
    id: 'halfway',
    title: { en: 'Halfway There', ru: 'Полпути пройдено' },
    description: { en: 'Complete half of all tasks (24/48)', ru: 'Выполни половину всех заданий (24/48)' },
    icon: '⚡',
    xpReward: 200,
    category: 'progress',
  },
  {
    id: 'all_complete',
    title: { en: 'AI Architect', ru: 'AI Архитектор' },
    description: { en: 'Complete every single task in the curriculum', ru: 'Выполни все задания в программе обучения' },
    icon: '🏆',
    xpReward: 1000,
    category: 'mastery',
  },

  // ── Phase Mastery ─────────────────────────────────────────────────────────
  {
    id: 'phase_1_complete',
    title: { en: 'Agentic Foundations', ru: 'Агентный фундамент' },
    description: { en: 'Complete all Phase 1 tasks', ru: 'Выполни все задания Модуля 1' },
    icon: '🤖',
    xpReward: 300,
    category: 'mastery',
  },
  {
    id: 'phase_2_complete',
    title: { en: 'Memory Master', ru: 'Мастер памяти' },
    description: { en: 'Complete all Phase 2 tasks', ru: 'Выполни все задания Модуля 2' },
    icon: '🧠',
    xpReward: 300,
    category: 'mastery',
  },
  {
    id: 'phase_3_complete',
    title: { en: 'Reliability Engineer', ru: 'Инженер надёжности' },
    description: { en: 'Complete all Phase 3 tasks', ru: 'Выполни все задания Модуля 3' },
    icon: '🛡️',
    xpReward: 300,
    category: 'mastery',
  },
  {
    id: 'phase_4_complete',
    title: { en: 'Advanced Architect', ru: 'Продвинутый архитектор' },
    description: { en: 'Complete all Phase 4 tasks', ru: 'Выполни все задания Модуля 4' },
    icon: '🔬',
    xpReward: 300,
    category: 'mastery',
  },
  {
    id: 'phase_5_complete',
    title: { en: 'System Thinker', ru: 'Системный мыслитель' },
    description: { en: 'Complete all Phase 5 tasks', ru: 'Выполни все задания Модуля 5' },
    icon: '🏗️',
    xpReward: 300,
    category: 'mastery',
  },
  {
    id: 'phase_6_complete',
    title: { en: 'Production Ready', ru: 'Готов к продакшну' },
    description: { en: 'Complete all Phase 6 tasks', ru: 'Выполни все задания Модуля 6' },
    icon: '🚀',
    xpReward: 300,
    category: 'mastery',
  },

  // ── Streaks ───────────────────────────────────────────────────────────────
  {
    id: 'streak_3',
    title: { en: 'Consistent', ru: 'Постоянство' },
    description: { en: 'Study 3 days in a row', ru: 'Учись 3 дня подряд' },
    icon: '🔥',
    xpReward: 100,
    category: 'streak',
  },
  {
    id: 'streak_7',
    title: { en: 'Week Warrior', ru: 'Недельный воин' },
    description: { en: 'Study 7 days in a row', ru: 'Учись 7 дней подряд' },
    icon: '🔥🔥',
    xpReward: 250,
    category: 'streak',
  },
  {
    id: 'streak_14',
    title: { en: 'Dedicated Learner', ru: 'Преданный ученик' },
    description: { en: 'Study 14 days in a row', ru: 'Учись 14 дней подряд' },
    icon: '💎',
    xpReward: 500,
    category: 'streak',
  },

  // ── Quizzes ───────────────────────────────────────────────────────────────
  {
    id: 'first_quiz',
    title: { en: 'Test Taker', ru: 'Первый тест' },
    description: { en: 'Pass your first phase quiz', ru: 'Сдай первый тест по модулю' },
    icon: '📝',
    xpReward: 100,
    category: 'quiz',
  },
  {
    id: 'perfect_quiz',
    title: { en: 'Perfect Score', ru: 'Идеальный результат' },
    description: { en: 'Get 100% on any quiz', ru: 'Получи 100% на любом тесте' },
    icon: '⭐',
    xpReward: 200,
    category: 'quiz',
  },
  {
    id: 'quiz_master',
    title: { en: 'Quiz Master', ru: 'Мастер тестов' },
    description: { en: 'Pass quizzes for all 6 phases', ru: 'Сдай тесты по всем 6 модулям' },
    icon: '🎓',
    xpReward: 500,
    category: 'quiz',
  },
];

export const achievementMap: Record<string, Achievement> = Object.fromEntries(
  achievements.map((a) => [a.id, a])
);

// Check which achievements should unlock given current stats
export interface AchievementStats {
  tasksCompleted: number;
  phaseTaskCounts: Record<number, { done: number; total: number }>;
  streak: number;
  quizzesPassed: number;
  perfectQuiz: boolean;
  allQuizzesPassed: boolean;
}

export function checkNewAchievements(
  stats: AchievementStats,
  alreadyUnlocked: string[]
): string[] {
  const unlocked = new Set(alreadyUnlocked);
  const newOnes: string[] = [];

  function check(id: string, condition: boolean) {
    if (!unlocked.has(id) && condition) newOnes.push(id);
  }

  check('first_step', stats.tasksCompleted >= 1);
  check('five_tasks', stats.tasksCompleted >= 5);
  check('ten_tasks', stats.tasksCompleted >= 10);
  check('halfway', stats.tasksCompleted >= 24);
  check('all_complete', stats.tasksCompleted >= 48);

  check(
    'phase_1_complete',
    !!stats.phaseTaskCounts[1] && stats.phaseTaskCounts[1].done >= stats.phaseTaskCounts[1].total
  );
  check(
    'phase_2_complete',
    !!stats.phaseTaskCounts[2] && stats.phaseTaskCounts[2].done >= stats.phaseTaskCounts[2].total
  );
  check(
    'phase_3_complete',
    !!stats.phaseTaskCounts[3] && stats.phaseTaskCounts[3].done >= stats.phaseTaskCounts[3].total
  );
  check(
    'phase_4_complete',
    !!stats.phaseTaskCounts[4] && stats.phaseTaskCounts[4].done >= stats.phaseTaskCounts[4].total
  );
  check(
    'phase_5_complete',
    !!stats.phaseTaskCounts[5] && stats.phaseTaskCounts[5].done >= stats.phaseTaskCounts[5].total
  );
  check(
    'phase_6_complete',
    !!stats.phaseTaskCounts[6] && stats.phaseTaskCounts[6].done >= stats.phaseTaskCounts[6].total
  );

  check('streak_3', stats.streak >= 3);
  check('streak_7', stats.streak >= 7);
  check('streak_14', stats.streak >= 14);

  check('first_quiz', stats.quizzesPassed >= 1);
  check('perfect_quiz', stats.perfectQuiz);
  check('quiz_master', stats.allQuizzesPassed);

  return newOnes;
}

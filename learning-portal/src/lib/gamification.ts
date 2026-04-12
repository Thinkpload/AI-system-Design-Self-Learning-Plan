import { GamificationData, LevelInfo } from '@/types';

const STORAGE_KEY = 'learning-portal-gamification';

export const levels: LevelInfo[] = [
  { level: 1, name: { en: 'Novice',      ru: 'Новичок'      }, icon: '🌱', minXP: 0,    nextXP: 200  },
  { level: 2, name: { en: 'Learner',     ru: 'Ученик'       }, icon: '📚', minXP: 200,  nextXP: 500  },
  { level: 3, name: { en: 'Practitioner',ru: 'Практик'      }, icon: '🔧', minXP: 500,  nextXP: 1000 },
  { level: 4, name: { en: 'Developer',   ru: 'Разработчик'  }, icon: '💻', minXP: 1000, nextXP: 1800 },
  { level: 5, name: { en: 'Engineer',    ru: 'Инженер'      }, icon: '⚙️', minXP: 1800, nextXP: 3000 },
  { level: 6, name: { en: 'Architect',   ru: 'Архитектор'   }, icon: '🏗️', minXP: 3000, nextXP: null },
];

export function getLevelInfo(xp: number): LevelInfo {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].minXP) return levels[i];
  }
  return levels[0];
}

export function computeXP(
  data: GamificationData,
  achievementXpMap: Record<string, number>
): number {
  return data.achievements.reduce((sum, id) => sum + (achievementXpMap[id] ?? 0), 0);
}

export function loadGamification(): GamificationData {
  if (typeof window === 'undefined') return defaultGamification();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultGamification();
    return JSON.parse(raw) as GamificationData;
  } catch {
    return defaultGamification();
  }
}

export function saveGamification(data: GamificationData): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function defaultGamification(): GamificationData {
  return { achievements: [], quizScores: {}, streak: 0, lastActiveDate: '', pendingToasts: [] };
}

/** Update streak based on today's date; returns unchanged data if already recorded today. */
export function updateStreak(data: GamificationData): GamificationData {
  const today = new Date().toISOString().slice(0, 10);
  if (data.lastActiveDate === today) return data;

  const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
  const newStreak = data.lastActiveDate === yesterday ? data.streak + 1 : 1;

  return { ...data, streak: newStreak, lastActiveDate: today };
}

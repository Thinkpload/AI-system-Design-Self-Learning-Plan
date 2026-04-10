import { UserProgress } from '@/types';

const STORAGE_KEY = 'learning-portal-progress';

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return { tasks: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { tasks: {} };
    return JSON.parse(raw) as UserProgress;
  } catch {
    return { tasks: {} };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function toggleTask(progress: UserProgress, taskId: string): UserProgress {
  return {
    ...progress,
    tasks: {
      ...progress.tasks,
      [taskId]: !progress.tasks[taskId],
    },
  };
}

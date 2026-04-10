'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProgress } from '@/types';
import { loadProgress, saveProgress, toggleTask } from '@/lib/progress';

interface ProgressContextValue {
  progress: UserProgress;
  toggle: (taskId: string) => void;
  completedCount: (taskIds: string[]) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>({ tasks: {} });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const toggle = (taskId: string) => {
    setProgress((prev) => {
      const next = toggleTask(prev, taskId);
      saveProgress(next);
      return next;
    });
  };

  const completedCount = (taskIds: string[]) =>
    taskIds.filter((id) => progress.tasks[id]).length;

  return (
    <ProgressContext.Provider value={{ progress, toggle, completedCount }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}

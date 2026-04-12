'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { GamificationData, LevelInfo } from '@/types';
import {
  loadGamification,
  saveGamification,
  computeXP,
  getLevelInfo,
  updateStreak,
} from '@/lib/gamification';
import { achievements, achievementMap, checkNewAchievements } from '@/data/achievements';
import { phases } from '@/data/curriculum';
import { useProgress } from './ProgressContext';

const xpMap: Record<string, number> = Object.fromEntries(
  achievements.map((a) => [a.id, a.xpReward])
);

interface GamificationContextValue {
  gamification: GamificationData;
  xp: number;
  level: LevelInfo;
  recordQuiz: (phaseId: number, scorePct: number) => void;
  dismissToast: (achievementId: string) => void;
}

const GamificationContext = createContext<GamificationContextValue | null>(null);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();
  const [gamification, setGamification] = useState<GamificationData>(() => loadGamification());
  const initialized = useRef(false);

  // Persist whenever state changes (after first hydration)
  useEffect(() => {
    if (!initialized.current) { initialized.current = true; return; }
    saveGamification(gamification);
  }, [gamification]);

  // Watch task progress → check achievements + update streak
  useEffect(() => {
    setGamification((prev) => {
      const withStreak = updateStreak(prev);

      const tasksCompleted = Object.values(progress.tasks).filter(Boolean).length;

      const phaseTaskCounts: Record<number, { done: number; total: number }> = {};
      for (const phase of phases) {
        const total = phase.tasks.length;
        const done = phase.tasks.filter((t) => progress.tasks[t.id]).length;
        phaseTaskCounts[phase.id] = { done, total };
      }

      const quizScores = withStreak.quizScores;
      const quizzesPassed = Object.keys(quizScores).length;
      const perfectQuiz = Object.values(quizScores).some((s) => s >= 100);
      const allQuizzesPassed = quizzesPassed >= phases.length;

      const newIds = checkNewAchievements(
        { tasksCompleted, phaseTaskCounts, streak: withStreak.streak, quizzesPassed, perfectQuiz, allQuizzesPassed },
        withStreak.achievements
      );

      if (newIds.length === 0 && withStreak === prev) return prev;

      return {
        ...withStreak,
        achievements: [...withStreak.achievements, ...newIds],
        pendingToasts: [...withStreak.pendingToasts, ...newIds],
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.tasks]);

  const recordQuiz = (phaseId: number, scorePct: number) => {
    setGamification((prev) => {
      const best = Math.max(prev.quizScores[phaseId] ?? 0, scorePct);
      const updated: GamificationData = {
        ...prev,
        quizScores: { ...prev.quizScores, [phaseId]: best },
      };

      // Re-check quiz achievements
      const quizzesPassed = Object.keys(updated.quizScores).length;
      const perfectQuiz = Object.values(updated.quizScores).some((s) => s >= 100);
      const allQuizzesPassed = quizzesPassed >= phases.length;
      const tasksCompleted = Object.values(progress.tasks).filter(Boolean).length;

      const phaseTaskCounts: Record<number, { done: number; total: number }> = {};
      for (const phase of phases) {
        phaseTaskCounts[phase.id] = {
          done: phase.tasks.filter((t) => progress.tasks[t.id]).length,
          total: phase.tasks.length,
        };
      }

      const newIds = checkNewAchievements(
        { tasksCompleted, phaseTaskCounts, streak: updated.streak, quizzesPassed, perfectQuiz, allQuizzesPassed },
        updated.achievements
      );

      return {
        ...updated,
        achievements: [...updated.achievements, ...newIds],
        pendingToasts: [...updated.pendingToasts, ...newIds],
      };
    });
  };

  const dismissToast = (achievementId: string) => {
    setGamification((prev) => ({
      ...prev,
      pendingToasts: prev.pendingToasts.filter((id) => id !== achievementId),
    }));
  };

  const xp = computeXP(gamification, xpMap);
  const level = getLevelInfo(xp);

  // Eager-load achievement details so achievementMap is accessible via context if needed
  void achievementMap;

  return (
    <GamificationContext.Provider value={{ gamification, xp, level, recordQuiz, dismissToast }}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const ctx = useContext(GamificationContext);
  if (!ctx) throw new Error('useGamification must be used inside GamificationProvider');
  return ctx;
}

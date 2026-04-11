'use client';

import { useEffect } from 'react';
import { useGamification } from '@/context/GamificationContext';
import { achievementMap } from '@/data/achievements';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/lib/i18n';

const TOAST_DURATION = 4000;

export default function AchievementToast() {
  const { gamification, dismissToast } = useGamification();
  const { lang, t } = useLang();

  const pending = gamification.pendingToasts;
  const currentId = pending[0] ?? null;
  const achievement = currentId ? achievementMap[currentId] : null;

  useEffect(() => {
    if (!currentId) return;
    const timer = setTimeout(() => dismissToast(currentId), TOAST_DURATION);
    return () => clearTimeout(timer);
  }, [currentId, dismissToast]);

  if (!achievement) return null;

  return (
    <div
      key={currentId}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up"
      style={{ animation: 'slideUp 0.35s ease-out' }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
      <div
        className="flex items-center gap-3 bg-white border border-amber-300 shadow-xl rounded-2xl px-5 py-3.5 cursor-pointer"
        onClick={() => dismissToast(currentId)}
      >
        <span className="text-3xl">{achievement.icon}</span>
        <div>
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
            {ui('achievement_unlocked', lang)}
          </p>
          <p className="font-bold text-stone-800 text-sm">{t(achievement.title)}</p>
          <p className="text-xs text-stone-500">{t(achievement.description)}</p>
        </div>
        <span className="ml-2 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
          +{achievement.xpReward} XP
        </span>
      </div>
    </div>
  );
}

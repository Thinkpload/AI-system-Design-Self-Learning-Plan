'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { useGamification } from '@/context/GamificationContext';
import { ui } from '@/lib/i18n';
import { levels } from '@/lib/gamification';

export default function NavBar() {
  const { lang, setLang } = useLang();
  const { xp, level, gamification } = useGamification();

  const nextXP = level.nextXP;
  const prevXP = levels.find((l) => l.level === level.level)?.minXP ?? 0;
  const progressPct = nextXP
    ? Math.round(((xp - prevXP) / (nextXP - prevXP)) * 100)
    : 100;

  return (
    <nav className="sticky top-0 z-40 bg-[#faf9f5]/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-stone-800 tracking-tight shrink-0">
          {ui('nav_title', lang)}
        </Link>

        {/* XP / Level bar */}
        <div className="hidden sm:flex items-center gap-2 flex-1 max-w-xs">
          <span className="text-base" title={`${ui('level_label', lang)} ${level.level}`}>
            {level.icon}
          </span>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[10px] font-semibold text-stone-500">
                {ui('level_label', lang)} {level.level}
              </span>
              <span className="text-[10px] text-stone-400">{xp} {ui('xp_label', lang)}</span>
            </div>
            <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak badge */}
          {gamification.streak > 0 && (
            <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1">
              🔥 {gamification.streak} {ui('streak_label', lang)}
            </span>
          )}

          <span className="text-xs text-stone-400 hidden lg:block">
            {ui('nav_subtitle', lang)}
          </span>

          <button
            onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 transition-colors"
          >
            {ui('lang_switch', lang)}
          </button>
        </div>
      </div>
    </nav>
  );
}

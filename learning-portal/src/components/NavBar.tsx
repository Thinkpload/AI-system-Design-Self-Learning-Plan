'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/lib/i18n';

export default function NavBar() {
  const { lang, setLang } = useLang();

  return (
    <nav className="sticky top-0 z-40 bg-[#faf9f5]/90 backdrop-blur border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-stone-800 tracking-tight">
          {ui('nav_title', lang)}
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs text-stone-400 hidden sm:block">
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

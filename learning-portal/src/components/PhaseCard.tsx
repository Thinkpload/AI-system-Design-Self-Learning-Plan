'use client';

import Link from 'next/link';
import { Phase } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/lib/i18n';
import ProgressBar from './ProgressBar';

const phaseColors = [
  'bg-amber-50 border-amber-200',
  'bg-sky-50 border-sky-200',
  'bg-emerald-50 border-emerald-200',
  'bg-violet-50 border-violet-200',
  'bg-rose-50 border-rose-200',
  'bg-orange-50 border-orange-200',
];

interface PhaseCardProps {
  phase: Phase;
  index: number;
}

export default function PhaseCard({ phase, index }: PhaseCardProps) {
  const { completedCount } = useProgress();
  const { lang, t } = useLang();
  const taskIds = phase.tasks.map((task) => task.id);
  const done = completedCount(taskIds);
  const total = taskIds.length;
  const colorClass = phaseColors[index % phaseColors.length];

  return (
    <Link href={`/phase/${phase.id}`} className="block h-full">
      <div className={`flex flex-col h-full rounded-xl border-2 p-5 cursor-pointer hover:shadow-md transition-all duration-200 ${colorClass}`}>
        <div className="flex items-start justify-between mb-1 shrink-0">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
            {ui('phase_label', lang)} {phase.id}
          </span>
          <span className="text-xs text-stone-400">{phase.dateRange}</span>
        </div>
        <h3 className="font-bold text-stone-800 text-lg leading-tight mb-1 shrink-0">{t(phase.title)}</h3>
        <p className="text-xs text-stone-500 mb-4 min-h-[2.5em]">{t(phase.subtitle)}</p>
        <div className="mt-auto shrink-0">
          <ProgressBar completed={done} total={total} showLabel lang={lang} />
        </div>
      </div>
    </Link>
  );
}

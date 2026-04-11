'use client';

import { phases, totalTaskCount } from '@/data/curriculum';
import PhaseCard from '@/components/PhaseCard';
import ProgressBar from '@/components/ProgressBar';
import { useProgress } from '@/context/ProgressContext';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/lib/i18n';

export default function DashboardPage() {
  const { completedCount } = useProgress();
  const { lang } = useLang();
  const allTaskIds = phases.flatMap((p) => p.tasks.map((t) => t.id));
  const done = completedCount(allTaskIds);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-1">
          {ui('dashboard_title', lang)}
        </h1>
        <p className="text-stone-500 mb-6">{ui('dashboard_subtitle', lang)}</p>
        <div className="bg-white rounded-xl border border-stone-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-stone-700">{ui('overall_progress', lang)}</span>
            <span className="text-sm text-stone-400">
              {done} / {totalTaskCount} {ui('tasks_label', lang)}
            </span>
          </div>
          <ProgressBar completed={done} total={totalTaskCount} lang={lang} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {phases.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} index={i} />
        ))}
      </div>
    </div>
  );
}

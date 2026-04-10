'use client';

import { Lang } from '@/types';
import { ui } from '@/lib/i18n';

interface ProgressBarProps {
  completed: number;
  total: number;
  showLabel?: boolean;
  lang?: Lang;
}

export default function ProgressBar({ completed, total, showLabel = false, lang = 'en' }: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm text-stone-500 mb-1">
          <span>
            {completed}/{total} {ui('tasks_label', lang)}
          </span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="progress-fill h-full bg-amber-600 rounded-full transition-all duration-500"
          style={{ '--progress-width': `${pct}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

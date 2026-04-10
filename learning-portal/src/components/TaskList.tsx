'use client';

import { Task } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import { useLang } from '@/context/LanguageContext';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const { progress, toggle } = useProgress();
  const { t } = useLang();

  return (
    <ul className="space-y-2">
      {tasks.map((task) => {
        const done = !!progress.tasks[task.id];
        return (
          <li
            key={task.id}
            onClick={() => toggle(task.id)}
            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer select-none transition-colors ${
              done
                ? 'bg-stone-100 border-stone-200 text-stone-400 line-through'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                done ? 'bg-amber-600 border-amber-600' : 'border-stone-300'
              }`}
            >
              {done && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <span className="text-sm">{t(task.title)}</span>
          </li>
        );
      })}
    </ul>
  );
}

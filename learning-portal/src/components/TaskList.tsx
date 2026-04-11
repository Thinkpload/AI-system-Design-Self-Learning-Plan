'use client';

import { useState } from 'react';
import { Task } from '@/types';
import { useProgress } from '@/context/ProgressContext';
import { useLang } from '@/context/LanguageContext';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const { progress, toggle } = useProgress();
  const { t, lang } = useLang();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const regular = tasks.filter((task) => !task.project);
  const projects = tasks.filter((task) => task.project);

  function renderRegularTask(task: Task) {
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
        <span className="text-sm flex-1">{t(task.title)}</span>
      </li>
    );
  }

  function renderProjectTask(task: Task) {
    const done = !!progress.tasks[task.id];
    const isExpanded = expandedProject === task.id;

    return (
      <li key={task.id} className="relative">
        <div
          onClick={() => setExpandedProject(isExpanded ? null : task.id)}
          className="flex items-center gap-3 p-3 rounded-lg border bg-violet-50 border-violet-200 text-stone-700 hover:bg-violet-100 transition-colors cursor-pointer"
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              toggle(task.id);
            }}
            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              done ? 'bg-violet-600 border-violet-600' : 'border-violet-400'
            }`}
          >
            {done && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <span className="text-sm flex-1">{t(task.title)}</span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-violet-500 bg-violet-100 border border-violet-200 rounded px-1.5 py-0.5">
            {lang === 'ru' ? 'Проект' : 'Project'}
          </span>
          <svg
            className={`w-4 h-4 text-violet-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isExpanded && task.description && (
          <div className="mt-2 p-4 bg-white border border-violet-200 rounded-lg">
            <p className="text-sm text-stone-600">{t(task.description)}</p>
          </div>
        )}
      </li>
    );
  }

  return (
    <div className="space-y-4">
      <ul className="space-y-2">{regular.map(renderRegularTask)}</ul>

      {projects.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-2">
            {lang === 'ru' ? '🏗 Итоговые проекты' : '🏗 Capstone Projects'}
          </p>
          <ul className="space-y-2">{projects.map(renderProjectTask)}</ul>
        </div>
      )}
    </div>
  );
}
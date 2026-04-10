'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { phases } from '@/data/curriculum';
import TaskList from '@/components/TaskList';
import ProgressBar from '@/components/ProgressBar';
import VideoEmbed from '@/components/VideoEmbed';
import { useProgress } from '@/context/ProgressContext';
import { useLang } from '@/context/LanguageContext';
import { ui } from '@/lib/i18n';

const resourceTypeIcon: Record<string, string> = {
  book: '📖',
  course: '🎓',
  tool: '🛠',
  video: '▶️',
  other: '🔗',
};

export default function PhasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const phase = phases.find((p) => p.id === Number(id));
  if (!phase) notFound();

  const { completedCount } = useProgress();
  const { lang, t } = useLang();
  const taskIds = phase.tasks.map((task) => task.id);
  const done = completedCount(taskIds);

  return (
    <div className="max-w-3xl">
      <Link href="/" className="text-sm text-stone-400 hover:text-stone-600 flex items-center gap-1 mb-6">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {ui('back_all_phases', lang)}
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
            {ui('phase_label', lang)} {phase.id}
          </span>
          <span className="text-xs text-stone-400">{phase.dateRange}</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 mb-1">{t(phase.title)}</h1>
        <p className="text-stone-500 mb-4">{t(phase.subtitle)}</p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 mb-4">
          <strong>{ui('goal_label', lang)}:</strong> {t(phase.goal)}
        </div>
        <ProgressBar completed={done} total={taskIds.length} showLabel lang={lang} />
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-stone-800 mb-4">{ui('section_topics', lang)}</h2>
        <div className="space-y-3">
          {phase.topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-lg border border-stone-200 p-4">
              <div className="font-semibold text-stone-800 mb-1">
                <span className="text-stone-400 mr-2">{topic.id}</span>
                {t(topic.title)}
              </div>
              <p className="text-sm text-stone-500">{t(topic.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-stone-800 mb-4">{ui('section_tasks', lang)}</h2>
        <TaskList tasks={phase.tasks} />
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-stone-800 mb-4">{ui('section_milestones', lang)}</h2>
        <ul className="space-y-2">
          {phase.milestones.map((m, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
              <span className="text-amber-600 font-bold mt-0.5">✓</span>
              {t(m)}
            </li>
          ))}
        </ul>
      </section>

      {phase.resources.some((r) => r.videoId) && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-stone-800 mb-4">▶️ Видео</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {phase.resources
              .filter((r) => r.videoId)
              .map((r, i) => (
                <VideoEmbed key={i} videoId={r.videoId!} title={r.title} description={r.description} />
              ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-lg font-bold text-stone-800 mb-4">{ui('section_resources', lang)}</h2>
        <div className="space-y-2">
          {phase.resources.filter((r) => !r.videoId).map((r, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-stone-200 rounded-lg px-4 py-3">
              <span className="text-lg">{resourceTypeIcon[r.type]}</span>
              {r.url ? (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-amber-700 hover:underline"
                >
                  {r.title}
                </a>
              ) : (
                <span className="text-sm text-stone-700">{r.title}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { PhaseQuiz } from '@/types';
import { useLang } from '@/context/LanguageContext';
import { useGamification } from '@/context/GamificationContext';
import { ui } from '@/lib/i18n';

interface QuizModalProps {
  quiz: PhaseQuiz;
  onClose: () => void;
}

type Stage = 'question' | 'explanation' | 'result';

export default function QuizModal({ quiz, onClose }: QuizModalProps) {
  const { lang, t } = useLang();
  const { recordQuiz } = useGamification();

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [stage, setStage] = useState<Stage>('question');

  const question = quiz.questions[current];
  const isLast = current === quiz.questions.length - 1;

  const handleSelect = (idx: number) => {
    if (stage !== 'question') return;
    setSelected(idx);
    if (idx === question.correct) setCorrect((c) => c + 1);
    setStage('explanation');
  };

  const handleNext = () => {
    if (isLast) {
      recordQuiz(quiz.phaseId, Math.round((correct / quiz.questions.length) * 100));
      setStage('result');
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setStage('question');
    }
  };

  const finalScore = Math.round((correct / quiz.questions.length) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <span className="font-bold text-stone-800">
            {ui('quiz_title', lang)} — {ui('phase_label', lang)} {quiz.phaseId}
          </span>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          {stage === 'result' ? (
            /* ── Result screen ── */
            <div className="text-center py-4">
              <div className="text-6xl mb-4">
                {finalScore >= 80 ? '🎉' : finalScore >= 50 ? '👍' : '📖'}
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-1">{ui('quiz_result', lang)}</h2>
              <p className="text-5xl font-black text-amber-600 my-4">{finalScore}%</p>
              <p className="text-stone-500 mb-6">
                {correct} / {quiz.questions.length} {ui('quiz_correct_of', lang)}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50 text-sm font-medium"
                >
                  {ui('quiz_close', lang)}
                </button>
              </div>
            </div>
          ) : (
            /* ── Question screen ── */
            <>
              {/* Progress */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs text-stone-400 font-medium">
                  {current + 1} / {quiz.questions.length}
                </span>
                <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all"
                    style={{ width: `${((current + 1) / quiz.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <p className="text-stone-800 font-semibold text-base mb-4 leading-snug">
                {t(question.question)}
              </p>

              {/* Options */}
              <ul className="space-y-2 mb-4">
                {question.options.map((opt, idx) => {
                  let cls = 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50 cursor-pointer';
                  if (stage === 'explanation') {
                    if (idx === question.correct) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800';
                    else if (idx === selected) cls = 'border-rose-400 bg-rose-50 text-rose-800';
                    else cls = 'border-stone-100 bg-stone-50 text-stone-400 cursor-default';
                  }
                  return (
                    <li
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors select-none ${cls}`}
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 text-xs font-bold border-current">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {t(opt)}
                    </li>
                  );
                })}
              </ul>

              {/* Explanation */}
              {stage === 'explanation' && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4 text-sm text-amber-800">
                  <span className="font-semibold">{ui('quiz_explanation', lang)}: </span>
                  {t(question.explanation)}
                </div>
              )}

              {/* Next button */}
              {stage === 'explanation' && (
                <button
                  onClick={handleNext}
                  className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors"
                >
                  {isLast ? ui('quiz_finish', lang) : ui('quiz_next', lang)}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

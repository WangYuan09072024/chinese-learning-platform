'use client';

import { useState, useTransition } from 'react';
import { submitQuizAttempt } from '@/actions/quiz';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}

export function TakeQuizForm({ revalidateTo, quizId, questions }: { revalidateTo: string; quizId: string; questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ score: number; correctCount: number; total: number }>();
  const [error, setError] = useState<string>();
  const [pending, startTransition] = useTransition();

  function handleSubmit() {
    setError(undefined);
    startTransition(async () => {
      const res = await submitQuizAttempt(revalidateTo, quizId, answers);
      if (res.error) setError(res.error);
      else setResult(res as { score: number; correctCount: number; total: number });
    });
  }

  if (result) {
    return (
      <p className="text-sm font-medium">
        Kết quả: {result.correctCount}/{result.total} câu đúng — {result.score} điểm
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 text-sm">
      {questions.map((q, i) => (
        <div key={q.id} className="flex flex-col gap-1">
          <span className="font-medium">
            {i + 1}. {q.question}
          </span>
          {q.options.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="radio"
                name={q.id}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={pending}
        className="self-start rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? 'Đang nộp...' : 'Nộp bài'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

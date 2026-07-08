'use client';

import { useState, useTransition } from 'react';
import { createQuiz, type QuizQuestionInput } from '@/actions/quiz';

const emptyQuestion = (): QuizQuestionInput => ({ question: '', type: 'SINGLE_CHOICE', options: ['', ''], correctAnswer: '' });

export function CreateQuizForm({ revalidateTo, lessonId }: { revalidateTo: string; lessonId: string }) {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<QuizQuestionInput[]>([emptyQuestion()]);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();

  function updateQuestion(index: number, patch: Partial<QuizQuestionInput>) {
    setQuestions((qs) => qs.map((q, i) => (i === index ? { ...q, ...patch } : q)));
  }

  function updateOption(qIndex: number, oIndex: number, value: string) {
    setQuestions((qs) =>
      qs.map((q, i) => (i === qIndex ? { ...q, options: q.options.map((o, j) => (j === oIndex ? value : o)) } : q)),
    );
  }

  function handleSubmit() {
    setError(undefined);
    setSuccess(false);
    startTransition(async () => {
      const result = await createQuiz(revalidateTo, lessonId, title, questions);
      if (result.error) setError(result.error);
      else {
        setSuccess(true);
        setTitle('');
        setQuestions([emptyQuestion()]);
      }
    });
  }

  return (
    <div className="flex flex-col gap-3 text-sm">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tên bài quiz"
        className="rounded-md border px-3 py-2 dark:bg-zinc-900"
      />
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="flex flex-col gap-2 rounded-md border border-dashed border-zinc-300 p-3 dark:border-zinc-700">
          <input
            value={q.question}
            onChange={(e) => updateQuestion(qIndex, { question: e.target.value })}
            placeholder={`Câu hỏi ${qIndex + 1}`}
            className="rounded-md border px-3 py-2 dark:bg-zinc-900"
          />
          {q.options.map((opt, oIndex) => (
            <input
              key={oIndex}
              value={opt}
              onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
              placeholder={`Lựa chọn ${oIndex + 1}`}
              className="rounded-md border px-3 py-2 dark:bg-zinc-900"
            />
          ))}
          <button
            type="button"
            onClick={() => updateQuestion(qIndex, { options: [...q.options, ''] })}
            className="self-start text-xs text-zinc-500 hover:underline"
          >
            + Thêm lựa chọn
          </button>
          <input
            value={q.correctAnswer}
            onChange={(e) => updateQuestion(qIndex, { correctAnswer: e.target.value })}
            placeholder="Đáp án đúng (phải khớp một trong các lựa chọn)"
            className="rounded-md border px-3 py-2 dark:bg-zinc-900"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setQuestions((qs) => [...qs, emptyQuestion()])}
        className="self-start text-xs text-zinc-500 hover:underline"
      >
        + Thêm câu hỏi
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={pending}
        className="self-start rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? 'Đang tạo...' : 'Tạo quiz'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">Tạo quiz thành công!</p>}
    </div>
  );
}

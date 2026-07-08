'use client';

import { useActionState } from 'react';
import { submitHomework } from '@/actions/homework';

export function HomeworkSubmissionForm({ revalidateTo, homeworkId }: { revalidateTo: string; homeworkId: string }) {
  const action = submitHomework.bind(null, revalidateTo, homeworkId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-col gap-2 text-sm">
      <textarea name="content" placeholder="Nội dung bài làm" required className="rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <button type="submit" disabled={pending} className="self-start rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang nộp...' : 'Nộp bài'}
      </button>
      {state.error && <p className="text-red-500">{state.error}</p>}
      {state.success && <p className="text-green-600">Nộp bài thành công!</p>}
    </form>
  );
}

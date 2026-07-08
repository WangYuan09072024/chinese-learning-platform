'use client';

import { useActionState } from 'react';
import { createHomework } from '@/actions/homework';

export function CreateHomeworkForm({ revalidateTo, lessonId }: { revalidateTo: string; lessonId: string }) {
  const action = createHomework.bind(null, revalidateTo, lessonId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-col gap-2 text-sm">
      <input name="title" placeholder="Tên bài tập" required className="rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <textarea name="description" placeholder="Yêu cầu bài tập" className="rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <button type="submit" disabled={pending} className="self-start rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang tạo...' : 'Giao bài tập'}
      </button>
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}

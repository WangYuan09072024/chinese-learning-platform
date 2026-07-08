'use client';

import { useActionState } from 'react';
import { createChapter } from '@/actions/chapters';

export function CreateChapterForm({ courseSlug, courseId, nextOrder }: { courseSlug: string; courseId: string; nextOrder: number }) {
  const action = createChapter.bind(null, courseSlug, courseId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-wrap items-end gap-2 rounded-md border border-dashed border-zinc-300 p-3 dark:border-zinc-700">
      <input type="hidden" name="order" value={nextOrder} />
      <input name="title" placeholder="Tên chương mới" required className="flex-1 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <button type="submit" disabled={pending} className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang thêm...' : '+ Thêm chương'}
      </button>
      {state.error && <p className="w-full text-sm text-red-500">{state.error}</p>}
    </form>
  );
}

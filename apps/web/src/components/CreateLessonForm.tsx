'use client';

import { useActionState } from 'react';
import { createLesson } from '@/actions/lessons';

export function CreateLessonForm({ courseSlug, chapterId, nextOrder }: { courseSlug: string; chapterId: string; nextOrder: number }) {
  const action = createLesson.bind(null, courseSlug, chapterId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-col gap-2 rounded-md border border-dashed border-zinc-300 p-3 text-sm dark:border-zinc-700">
      <input type="hidden" name="order" value={nextOrder} />
      <input name="title" placeholder="Tên bài học" required className="rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <input name="videoUrl" placeholder="Link video (YouTube embed, vd: https://www.youtube.com/embed/xxxx)" className="rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <textarea name="content" placeholder="Nội dung bài học" className="rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <label className="flex items-center gap-2 text-zinc-500">
        <input type="checkbox" name="isFreePreview" />
        Cho học thử miễn phí (không cần ghi danh)
      </label>
      <button type="submit" disabled={pending} className="self-start rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang thêm...' : '+ Thêm bài học'}
      </button>
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}

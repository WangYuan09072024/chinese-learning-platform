'use client';

import { useActionState } from 'react';
import { createSession } from '@/actions/sessions';

export function CreateSessionForm({ courseSlug, courseId }: { courseSlug: string; courseId: string }) {
  const action = createSession.bind(null, courseSlug, courseId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-col gap-3 rounded-xl border border-dashed border-brand-200 p-4 text-sm dark:border-white/10">
      <input name="title" placeholder="Tên tiết học (vd: Bài 3 - Luyện nói)" required className="field" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-xs text-zinc-500">Bắt đầu</span>
          <input name="startTime" type="datetime-local" required className="field" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-zinc-500">Kết thúc</span>
          <input name="endTime" type="datetime-local" required className="field" />
        </label>
      </div>
      <input name="joinUrl" placeholder="Link vào lớp (Zoom/Meet…) — nên thêm trước ít nhất 1 ngày" className="field" />
      <button type="submit" disabled={pending} className="btn-primary w-fit">
        {pending ? 'Đang tạo...' : '+ Thêm tiết học'}
      </button>
      {state.error && <p className="text-brand-600">{state.error}</p>}
      {state.success && <p className="text-mint-600">Đã thêm tiết học!</p>}
    </form>
  );
}

'use client';

import { useActionState, useState } from 'react';
import { createAnnouncement } from '@/actions/announcements';

interface CourseOption {
  id: string;
  title: string;
}

export function CreateAnnouncementForm({ courses }: { courses: CourseOption[] }) {
  const [courseId, setCourseId] = useState(courses[0]?.id ?? '');
  const action = createAnnouncement.bind(null, courseId);
  const [state, formAction, pending] = useActionState(action, {});

  if (courses.length === 0) {
    return <p className="text-sm text-zinc-500">Bạn cần được phân công một lớp trước khi đăng thông báo.</p>;
  }

  return (
    <form action={formAction} className="card flex flex-col gap-3 p-5 text-sm">
      <label className="flex flex-col gap-1">
        <span className="text-xs font-semibold text-zinc-500">Khóa học</span>
        <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className="field">
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.title}</option>
          ))}
        </select>
      </label>
      <input name="title" placeholder="Tiêu đề thông báo" required className="field" />
      <textarea name="body" placeholder="Nội dung..." required rows={4} className="field resize-y" />
      <button type="submit" disabled={pending} className="btn-primary w-fit">
        {pending ? 'Đang đăng...' : '📣 Đăng thông báo'}
      </button>
      {state.error && <p className="text-brand-600">{state.error}</p>}
      {state.success && <p className="text-mint-600">Đã đăng! Học viên trong lớp sẽ nhận được thông báo.</p>}
    </form>
  );
}

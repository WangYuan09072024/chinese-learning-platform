'use client';

import { useActionState } from 'react';
import { enrollStudent } from '@/actions/enrollments';

export function EnrollStudentForm({ courseSlug, courseId }: { courseSlug: string; courseId: string }) {
  const action = enrollStudent.bind(null, courseSlug, courseId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-wrap items-end gap-2">
      <input
        name="email"
        type="email"
        placeholder="Email học viên"
        required
        className="flex-1 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900"
      />
      <button type="submit" disabled={pending} className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang ghi danh...' : 'Ghi danh'}
      </button>
      {state.error && <p className="w-full text-sm text-red-500">{state.error}</p>}
      {state.success && <p className="w-full text-sm text-green-600">Ghi danh thành công!</p>}
    </form>
  );
}

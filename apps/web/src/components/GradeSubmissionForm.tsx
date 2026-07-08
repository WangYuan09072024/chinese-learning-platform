'use client';

import { useActionState } from 'react';
import { gradeSubmission } from '@/actions/homework';

export function GradeSubmissionForm({ revalidateTo, submissionId }: { revalidateTo: string; submissionId: string }) {
  const action = gradeSubmission.bind(null, revalidateTo, submissionId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-wrap items-end gap-2 text-sm">
      <input
        name="grade"
        type="number"
        min={0}
        max={100}
        placeholder="Điểm (0-100)"
        required
        className="w-32 rounded-md border px-3 py-2 dark:bg-zinc-900"
      />
      <input name="feedback" placeholder="Nhận xét" className="flex-1 rounded-md border px-3 py-2 dark:bg-zinc-900" />
      <button type="submit" disabled={pending} className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang lưu...' : 'Chấm điểm'}
      </button>
      {state.error && <p className="w-full text-red-500">{state.error}</p>}
    </form>
  );
}

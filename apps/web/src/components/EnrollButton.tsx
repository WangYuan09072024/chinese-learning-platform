'use client';

import { useActionState } from 'react';
import { GraduationCap } from 'lucide-react';
import { selfEnrollCourse } from '@/actions/self-enroll';

export function EnrollButton({ courseId, slug }: { courseId: string; slug: string }) {
  const action = selfEnrollCourse.bind(null, courseId, slug);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <button type="submit" disabled={pending} className="btn-primary w-fit px-6 py-3 text-base">
        <GraduationCap className="h-5 w-5" />
        {pending ? 'Đang đăng ký...' : 'Đăng ký học miễn phí'}
      </button>
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
    </form>
  );
}

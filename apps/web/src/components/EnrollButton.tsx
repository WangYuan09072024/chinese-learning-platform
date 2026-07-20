'use client';

import { useActionState } from 'react';
import { GraduationCap } from 'lucide-react';
import { selfEnrollCourse } from '@/actions/self-enroll';
import type { Locale } from '@/lib/i18n/config';
import { makeT } from '@/lib/i18n/client';

export function EnrollButton({ courseId, slug, locale }: { courseId: string; slug: string; locale: Locale }) {
  const action = selfEnrollCourse.bind(null, courseId, slug);
  const [state, formAction, pending] = useActionState(action, {});
  const t = makeT(locale);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <button type="submit" disabled={pending} className="btn-primary w-fit px-6 py-3 text-base">
        <GraduationCap className="h-5 w-5" />
        {pending ? t('courses.enrollPending') : t('courses.enrollFree')}
      </button>
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
    </form>
  );
}

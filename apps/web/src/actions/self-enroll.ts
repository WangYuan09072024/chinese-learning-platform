'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';

export interface EnrollState {
  error?: string;
}

export async function selfEnrollCourse(courseId: string, slug: string, _prev: EnrollState): Promise<EnrollState> {
  const token = await getToken();
  if (!token) redirect('/login');

  try {
    await apiFetch(`/courses/${courseId}/self-enroll`, { method: 'POST', token });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Đăng ký thất bại.' };
  }

  revalidatePath('/student/dashboard');
  redirect(`/student/courses/${slug}`);
}

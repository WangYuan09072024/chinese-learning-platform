'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch } from '@/lib/api';
import { getToken } from '@/lib/session';

export async function markLessonComplete(revalidateTo: string, lessonId: string) {
  const token = await getToken();
  await apiFetch(`/lessons/${lessonId}/complete`, { method: 'POST', token });
  revalidatePath(revalidateTo);
  revalidatePath('/student/progress');
  revalidatePath('/student/dashboard');
}

'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function enrollStudent(
  courseSlug: string,
  courseId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const email = String(formData.get('email') ?? '');

  try {
    await apiFetch(`/courses/${courseId}/enroll`, { method: 'POST', token, body: { email } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Ghi danh thất bại.' };
  }

  revalidatePath(`/teacher/courses/${courseSlug}`);
  return { success: true };
}

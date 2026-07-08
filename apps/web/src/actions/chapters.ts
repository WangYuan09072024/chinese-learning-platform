'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';

export interface ActionState {
  error?: string;
  success?: boolean;
}

export async function createChapter(courseSlug: string, courseId: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const order = Number(formData.get('order') ?? 0);

  try {
    await apiFetch(`/courses/${courseId}/chapters`, { method: 'POST', token, body: { title, order } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo chương thất bại.' };
  }

  revalidatePath(`/teacher/courses/${courseSlug}`);
  return { success: true };
}

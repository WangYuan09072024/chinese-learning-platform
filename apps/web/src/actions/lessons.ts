'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function createLesson(
  courseSlug: string,
  chapterId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const order = Number(formData.get('order') ?? 0);
  const videoUrl = String(formData.get('videoUrl') ?? '') || undefined;
  const content = String(formData.get('content') ?? '') || undefined;
  const isFreePreview = formData.get('isFreePreview') === 'on';

  try {
    await apiFetch(`/chapters/${chapterId}/lessons`, {
      method: 'POST',
      token,
      body: { title, order, videoUrl, content, isFreePreview },
    });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo bài học thất bại.' };
  }

  revalidatePath(`/teacher/courses/${courseSlug}`);
  return { success: true };
}

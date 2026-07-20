'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function createSession(
  courseSlug: string,
  courseId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const startTime = String(formData.get('startTime') ?? '');
  const endTime = String(formData.get('endTime') ?? '');
  const joinUrl = String(formData.get('joinUrl') ?? '') || undefined;

  if (!startTime || !endTime) return { error: 'Vui lòng chọn giờ bắt đầu và kết thúc.' };

  try {
    await apiFetch(`/courses/${courseId}/sessions`, {
      method: 'POST',
      token,
      body: {
        title,
        startTime: new Date(startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        joinUrl,
      },
    });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo tiết học thất bại.' };
  }

  revalidatePath(`/teacher/courses/${courseSlug}`);
  return { success: true };
}

export async function deleteSession(courseSlug: string, id: string) {
  const token = await getToken();
  await apiFetch(`/sessions/${id}`, { method: 'DELETE', token });
  revalidatePath(`/teacher/courses/${courseSlug}`);
}

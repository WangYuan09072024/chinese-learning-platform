'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function createAnnouncement(
  courseId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const body = String(formData.get('body') ?? '');

  if (!courseId) return { error: 'Vui lòng chọn khóa học.' };

  try {
    await apiFetch(`/courses/${courseId}/announcements`, { method: 'POST', token, body: { title, body } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Đăng thông báo thất bại.' };
  }

  revalidatePath('/teacher/announcements');
  return { success: true };
}

export async function deleteAnnouncement(id: string) {
  const token = await getToken();
  await apiFetch(`/announcements/${id}`, { method: 'DELETE', token });
  revalidatePath('/teacher/announcements');
}

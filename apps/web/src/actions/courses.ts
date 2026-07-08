'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';

export interface CreateCourseState {
  error?: string;
  success?: boolean;
}

export async function createCourse(_prevState: CreateCourseState, formData: FormData): Promise<CreateCourseState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const slug = String(formData.get('slug') ?? '');
  const level = String(formData.get('level') ?? '');
  const description = String(formData.get('description') ?? '');

  try {
    await apiFetch('/courses', {
      method: 'POST',
      token,
      body: { title, slug, level, description, isFree: true },
    });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo khóa học thất bại.' };
  }

  revalidatePath('/teacher/dashboard');
  revalidatePath('/student/dashboard');
  return { success: true };
}

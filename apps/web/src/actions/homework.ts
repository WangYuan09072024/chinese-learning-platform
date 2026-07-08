'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function createHomework(
  revalidateTo: string,
  lessonId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const description = String(formData.get('description') ?? '') || undefined;

  try {
    await apiFetch(`/lessons/${lessonId}/homework`, { method: 'POST', token, body: { title, description } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo bài tập thất bại.' };
  }

  revalidatePath(revalidateTo);
  return { success: true };
}

export async function submitHomework(
  revalidateTo: string,
  homeworkId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const content = String(formData.get('content') ?? '');

  try {
    await apiFetch(`/homework/${homeworkId}/submissions`, { method: 'POST', token, body: { content } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Nộp bài thất bại.' };
  }

  revalidatePath(revalidateTo);
  return { success: true };
}

export async function gradeSubmission(
  revalidateTo: string,
  submissionId: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = await getToken();
  const grade = Number(formData.get('grade') ?? 0);
  const feedback = String(formData.get('feedback') ?? '') || undefined;

  try {
    await apiFetch(`/submissions/${submissionId}/grade`, { method: 'PATCH', token, body: { grade, feedback } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Chấm điểm thất bại.' };
  }

  revalidatePath(revalidateTo);
  return { success: true };
}

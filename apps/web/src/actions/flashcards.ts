'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function createFlashcard(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const hanzi = String(formData.get('hanzi') ?? '');
  const pinyin = String(formData.get('pinyin') ?? '');
  const meaning = String(formData.get('meaning') ?? '');

  try {
    await apiFetch('/flashcards', { method: 'POST', token, body: { hanzi, pinyin, meaning } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo thẻ thất bại.' };
  }

  revalidatePath('/student/flashcards');
  return { success: true };
}

export async function deleteFlashcard(id: string) {
  const token = await getToken();
  await apiFetch(`/flashcards/${id}`, { method: 'DELETE', token });
  revalidatePath('/student/flashcards');
}

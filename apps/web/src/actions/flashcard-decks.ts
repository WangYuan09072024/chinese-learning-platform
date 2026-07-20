'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function createDeck(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const topic = String(formData.get('topic') ?? '').trim();
  const description = String(formData.get('description') ?? '').trim() || undefined;
  const hskLevel = String(formData.get('hskLevel') ?? '') || undefined;
  if (!topic) return { error: 'Vui lòng nhập tên chủ đề.' };
  try {
    await apiFetch('/flashcard-decks', { method: 'POST', token, body: { topic, description, hskLevel } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo bộ thẻ thất bại.' };
  }
  revalidatePath('/admin/flashcards');
  return { success: true };
}

export async function addCard(deckId: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const hanzi = String(formData.get('hanzi') ?? '').trim();
  const pinyin = String(formData.get('pinyin') ?? '').trim();
  const meaning = String(formData.get('meaning') ?? '').trim();
  if (!hanzi || !pinyin || !meaning) return { error: 'Vui lòng nhập đủ chữ Hán, pinyin và nghĩa.' };
  try {
    await apiFetch(`/flashcard-decks/${deckId}/cards`, { method: 'POST', token, body: { hanzi, pinyin, meaning } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Thêm thẻ thất bại.' };
  }
  revalidatePath(`/admin/flashcards/${deckId}`);
  return { success: true };
}

export async function deleteCard(deckId: string, cardId: string) {
  const token = await getToken();
  await apiFetch(`/flashcard-decks/cards/${cardId}`, { method: 'DELETE', token });
  revalidatePath(`/admin/flashcards/${deckId}`);
}

export async function deleteDeck(id: string) {
  const token = await getToken();
  await apiFetch(`/flashcard-decks/${id}`, { method: 'DELETE', token });
  revalidatePath('/admin/flashcards');
}

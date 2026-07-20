'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

interface EntryBody {
  hanzi: string;
  pinyin: string;
  meaning: string;
  hskLevel?: string;
}

function parse(formData: FormData): EntryBody {
  return {
    hanzi: String(formData.get('hanzi') ?? '').trim(),
    pinyin: String(formData.get('pinyin') ?? '').trim(),
    meaning: String(formData.get('meaning') ?? '').trim(),
    hskLevel: String(formData.get('hskLevel') ?? '') || undefined,
  };
}

export async function createEntry(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const body = parse(formData);
  if (!body.hanzi || !body.pinyin || !body.meaning) return { error: 'Vui lòng nhập chữ Hán, pinyin và nghĩa.' };
  try {
    await apiFetch('/dictionary', { method: 'POST', token, body });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Thêm từ thất bại.' };
  }
  revalidatePath('/admin/dictionary');
  return { success: true };
}

export async function updateEntry(id: string, _prev: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const body = parse(formData);
  try {
    await apiFetch(`/dictionary/${id}`, { method: 'PATCH', token, body });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Cập nhật thất bại.' };
  }
  revalidatePath('/admin/dictionary');
  return { success: true };
}

export async function deleteEntry(id: string) {
  const token = await getToken();
  await apiFetch(`/dictionary/${id}`, { method: 'DELETE', token });
  revalidatePath('/admin/dictionary');
}

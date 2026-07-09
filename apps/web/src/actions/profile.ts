'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function updateProfile(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const name = String(formData.get('name') ?? '');
  const phone = String(formData.get('phone') ?? '') || undefined;

  try {
    await apiFetch('/users/me', { method: 'PATCH', token, body: { name, phone } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Cập nhật thất bại.' };
  }

  revalidatePath('/', 'layout');
  return { success: true };
}

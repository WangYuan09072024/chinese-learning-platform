'use server';

import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';
import type { ActionState } from './chapters';

export async function broadcast(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const title = String(formData.get('title') ?? '');
  const message = String(formData.get('message') ?? '');
  const role = String(formData.get('role') ?? '') || undefined;

  try {
    const res = await apiFetch<{ sent: number }>('/admin/broadcast', {
      method: 'POST',
      token,
      body: { title, message, role },
    });
    return { success: true, sent: res.sent } as ActionState & { sent: number };
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Gửi thông báo thất bại.' };
  }
}

export async function changePassword(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const token = await getToken();
  const currentPassword = String(formData.get('currentPassword') ?? '');
  const newPassword = String(formData.get('newPassword') ?? '');
  const confirmPassword = String(formData.get('confirmPassword') ?? '');

  if (newPassword !== confirmPassword) return { error: 'Mật khẩu mới không khớp.' };
  if (newPassword.length < 6) return { error: 'Mật khẩu mới cần ít nhất 6 ký tự.' };

  try {
    await apiFetch('/users/me/password', { method: 'PATCH', token, body: { currentPassword, newPassword } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Đổi mật khẩu thất bại.' };
  }

  return { success: true };
}

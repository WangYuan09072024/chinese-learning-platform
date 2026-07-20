'use server';

import { redirect } from 'next/navigation';
import { apiFetch, ApiError } from '@/lib/api';
import { setSession, clearSession } from '@/lib/session';
import { roleHomePath } from '@/lib/roles';

export interface AuthFormState {
  error?: string;
}

interface AuthResponse {
  accessToken: string;
  user: { id: string; email: string; name: string; roles: string[] };
}

export async function login(_prevState: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  let data: AuthResponse;
  try {
    data = await apiFetch<AuthResponse>('/auth/login', { method: 'POST', body: { email, password } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Đăng nhập thất bại.' };
  }

  await setSession(data.accessToken);
  redirect(roleHomePath(data.user.roles));
}

export async function register(_prevState: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const name = String(formData.get('name') ?? '');
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  let data: AuthResponse;
  try {
    data = await apiFetch<AuthResponse>('/auth/register', { method: 'POST', body: { name, email, password } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Đăng ký thất bại.' };
  }

  await setSession(data.accessToken);
  redirect(roleHomePath(data.user.roles));
}

export async function logout() {
  await clearSession();
  redirect('/login');
}

export interface MessageState {
  error?: string;
  success?: string;
}

export async function forgotPassword(_prev: MessageState, formData: FormData): Promise<MessageState> {
  const email = String(formData.get('email') ?? '');
  try {
    const res = await apiFetch<{ message: string }>('/auth/forgot-password', {
      method: 'POST',
      body: { email },
    });
    return { success: res.message };
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Có lỗi xảy ra, vui lòng thử lại.' };
  }
}

export async function resetPassword(token: string, _prev: MessageState, formData: FormData): Promise<MessageState> {
  const newPassword = String(formData.get('newPassword') ?? '');
  const confirmPassword = String(formData.get('confirmPassword') ?? '');
  if (newPassword !== confirmPassword) return { error: 'Mật khẩu nhập lại không khớp.' };
  if (newPassword.length < 6) return { error: 'Mật khẩu cần ít nhất 6 ký tự.' };

  try {
    const res = await apiFetch<{ message: string }>('/auth/reset-password', {
      method: 'POST',
      body: { token, newPassword },
    });
    return { success: res.message };
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Đặt lại mật khẩu thất bại.' };
  }
}

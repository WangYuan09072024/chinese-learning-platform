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

'use server';

import { apiFetch, ApiError } from '@/lib/api';

export interface ContactFormState {
  error?: string;
  success?: boolean;
}

export async function submitContactMessage(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '');
  const email = String(formData.get('email') ?? '');
  const message = String(formData.get('message') ?? '');

  try {
    await apiFetch('/contact', { method: 'POST', body: { name, email, message } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Gửi thất bại, vui lòng thử lại.' };
  }

  return { success: true };
}

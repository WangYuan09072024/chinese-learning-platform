'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch } from '@/lib/api';
import { getToken } from '@/lib/session';

export async function markNotificationRead(revalidateTo: string, id: string) {
  const token = await getToken();
  await apiFetch(`/notifications/${id}/read`, { method: 'PATCH', token });
  revalidatePath(revalidateTo);
}

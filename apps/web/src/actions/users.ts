'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';

export interface UsersActionState {
  error?: string;
  success?: string;
}

const ALL_ROLES = [
  'STUDENT',
  'TEACHER',
  'TEACHING_ASSISTANT',
  'CONTENT_MANAGER',
  'FINANCE_STAFF',
  'CUSTOMER_SUPPORT',
  'ADMIN',
  'SUPER_ADMIN',
];

export async function updateUserRoles(
  userId: string,
  _prevState: UsersActionState,
  formData: FormData,
): Promise<UsersActionState> {
  const token = await getToken();
  const roles = ALL_ROLES.filter((r) => formData.get(`role_${r}`) === 'on');

  if (roles.length === 0) {
    return { error: 'Phải chọn ít nhất một vai trò.' };
  }

  try {
    await apiFetch(`/users/${userId}/roles`, { method: 'PATCH', token, body: { roles } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Cập nhật vai trò thất bại.' };
  }

  revalidatePath('/admin/users');
  return { success: 'Đã cập nhật vai trò.' };
}

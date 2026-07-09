'use client';

import { useActionState } from 'react';
import { updateUserRoles } from '@/actions/users';

const ROLE_LABELS: Record<string, string> = {
  STUDENT: 'Học viên',
  TEACHER: 'Giáo viên',
  TEACHING_ASSISTANT: 'Trợ giảng',
  CONTENT_MANAGER: 'Quản lý nội dung',
  FINANCE_STAFF: 'Kế toán',
  CUSTOMER_SUPPORT: 'Hỗ trợ',
  ADMIN: 'Quản trị viên',
  SUPER_ADMIN: 'Super Admin',
};

const ROLE_ORDER = Object.keys(ROLE_LABELS);

interface AppUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

export function UserRoleEditor({ user }: { user: AppUser }) {
  const action = updateUserRoles.bind(null, user.id);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-zinc-500">{user.email}</p>
        </div>
        <span className="text-xs text-zinc-400">{user.roles.join(', ')}</span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
        {ROLE_ORDER.map((role) => (
          <label key={role} className="flex items-center gap-2">
            <input type="checkbox" name={`role_${role}`} defaultChecked={user.roles.includes(role)} />
            {ROLE_LABELS[role]}
          </label>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {pending ? 'Đang lưu...' : 'Cập nhật vai trò'}
        </button>
        {state.error && <span className="text-sm text-red-500">{state.error}</span>}
        {state.success && <span className="text-sm text-green-600">{state.success}</span>}
      </div>
    </form>
  );
}

'use client';

import { useActionState } from 'react';
import { updateProfile } from '@/actions/profile';

interface Profile {
  name: string;
  email: string;
  phone: string | null;
  roles: string[];
}

export function ProfileForm({ profile }: { profile: Profile }) {
  const [state, formAction, pending] = useActionState(updateProfile, {});

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-3">
      <div>
        <label className="text-sm text-zinc-500">Email</label>
        <input value={profile.email} disabled className="mt-1 w-full rounded-md border px-3 py-2 text-sm text-zinc-400 dark:bg-zinc-900" />
      </div>
      <div>
        <label className="text-sm text-zinc-500">Vai trò</label>
        <input value={profile.roles.join(', ')} disabled className="mt-1 w-full rounded-md border px-3 py-2 text-sm text-zinc-400 dark:bg-zinc-900" />
      </div>
      <div>
        <label className="text-sm text-zinc-500">Họ và tên</label>
        <input name="name" defaultValue={profile.name} required className="mt-1 w-full rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      </div>
      <div>
        <label className="text-sm text-zinc-500">Số điện thoại</label>
        <input name="phone" defaultValue={profile.phone ?? ''} className="mt-1 w-full rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? 'Đang lưu...' : 'Lưu thay đổi'}
      </button>
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
      {state.success && <p className="text-sm text-green-600">Đã lưu thành công!</p>}
    </form>
  );
}

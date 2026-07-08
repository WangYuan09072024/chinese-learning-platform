'use client';

import { useActionState } from 'react';
import { login } from '@/actions/auth';

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});

  return (
    <form action={action} className="flex w-full max-w-sm flex-col gap-3">
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900"
      />
      <input
        name="password"
        type="password"
        placeholder="Mật khẩu"
        required
        className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900"
      />
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>
    </form>
  );
}

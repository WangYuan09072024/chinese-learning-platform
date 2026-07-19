'use client';

import { useActionState } from 'react';
import { login } from '@/actions/auth';

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});

  return (
    <form action={action} className="flex w-full flex-col gap-3">
      <input name="email" type="email" placeholder="Email" required className="field" />
      <input name="password" type="password" placeholder="Mật khẩu" required className="field" />
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn-primary mt-1 py-3">
        {pending ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>
    </form>
  );
}

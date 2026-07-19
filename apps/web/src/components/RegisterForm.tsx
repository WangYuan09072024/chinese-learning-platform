'use client';

import { useActionState } from 'react';
import { register } from '@/actions/auth';

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, {});

  return (
    <form action={action} className="flex w-full flex-col gap-3">
      <input name="name" placeholder="Họ và tên" required className="field" />
      <input name="email" type="email" placeholder="Email" required className="field" />
      <input name="password" type="password" placeholder="Mật khẩu (tối thiểu 8 ký tự)" required minLength={8} className="field" />
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn-primary mt-1 py-3">
        {pending ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>
    </form>
  );
}

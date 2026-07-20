'use client';

import { useActionState } from 'react';
import { forgotPassword } from '@/actions/auth';

export function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(forgotPassword, {});

  if (state.success) {
    return (
      <div className="rounded-xl bg-mint-50 p-4 text-sm text-mint-700 dark:bg-mint-500/10">
        {state.success} Hãy kiểm tra hộp thư (kể cả mục Spam) và bấm vào liên kết để tạo mật khẩu mới.
      </div>
    );
  }

  return (
    <form action={action} className="flex w-full flex-col gap-3">
      <input name="email" type="email" placeholder="Email của bạn" required className="field" />
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn-primary mt-1 py-3">
        {pending ? 'Đang gửi...' : 'Gửi liên kết đặt lại'}
      </button>
    </form>
  );
}

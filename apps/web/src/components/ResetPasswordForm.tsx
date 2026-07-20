'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { resetPassword } from '@/actions/auth';

export function ResetPasswordForm({ token }: { token: string }) {
  const action = resetPassword.bind(null, token);
  const [state, formAction, pending] = useActionState(action, {});

  if (!token) {
    return <p className="text-sm text-brand-600">Liên kết không hợp lệ. Vui lòng yêu cầu đặt lại mật khẩu lần nữa.</p>;
  }

  if (state.success) {
    return (
      <div className="flex flex-col gap-4">
        <div className="rounded-xl bg-mint-50 p-4 text-sm text-mint-700 dark:bg-mint-500/10">{state.success}</div>
        <Link href="/login" className="btn-primary justify-center py-3">Đăng nhập</Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-3">
      <input name="newPassword" type="password" placeholder="Mật khẩu mới (≥ 6 ký tự)" required className="field" />
      <input name="confirmPassword" type="password" placeholder="Nhập lại mật khẩu mới" required className="field" />
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn-primary mt-1 py-3">
        {pending ? 'Đang lưu...' : 'Đặt lại mật khẩu'}
      </button>
    </form>
  );
}

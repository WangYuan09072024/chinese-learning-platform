'use client';

import { useActionState } from 'react';
import { KeyRound } from 'lucide-react';
import { changePassword } from '@/actions/admin';

export function ChangePasswordForm() {
  const [state, formAction, pending] = useActionState(changePassword, {});

  return (
    <form action={formAction} className="card flex flex-col gap-3 p-5 text-sm">
      <h2 className="flex items-center gap-2 font-bold"><KeyRound className="h-5 w-5 text-brand-500" /> Đổi mật khẩu</h2>
      <input name="currentPassword" type="password" placeholder="Mật khẩu hiện tại" required className="field" />
      <input name="newPassword" type="password" placeholder="Mật khẩu mới (≥ 6 ký tự)" required className="field" />
      <input name="confirmPassword" type="password" placeholder="Nhập lại mật khẩu mới" required className="field" />
      <button type="submit" disabled={pending} className="btn-primary w-fit">
        {pending ? 'Đang lưu...' : 'Cập nhật mật khẩu'}
      </button>
      {state.error && <p className="text-brand-600">{state.error}</p>}
      {state.success && <p className="text-mint-600">Đã đổi mật khẩu thành công!</p>}
    </form>
  );
}

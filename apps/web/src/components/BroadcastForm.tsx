'use client';

import { useActionState } from 'react';
import { Send } from 'lucide-react';
import { broadcast } from '@/actions/admin';

const ROLES = [
  { value: '', label: 'Tất cả người dùng' },
  { value: 'STUDENT', label: 'Chỉ học viên' },
  { value: 'TEACHER', label: 'Chỉ giáo viên' },
];

export function BroadcastForm() {
  const [state, formAction, pending] = useActionState(broadcast, {});
  const sent = (state as { sent?: number }).sent;

  return (
    <form action={formAction} className="card flex flex-col gap-3 p-5 text-sm">
      <label className="flex flex-col gap-1">
        <span className="text-xs font-semibold text-zinc-500">Gửi tới</span>
        <select name="role" className="field">
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </label>
      <input name="title" placeholder="Tiêu đề thông báo" required className="field" />
      <textarea name="message" placeholder="Nội dung..." required rows={4} className="field resize-y" />
      <button type="submit" disabled={pending} className="btn-primary w-fit">
        <Send className="h-4 w-4" /> {pending ? 'Đang gửi...' : 'Gửi thông báo'}
      </button>
      {state.error && <p className="text-brand-600">{state.error}</p>}
      {state.success && <p className="text-mint-600">Đã gửi tới {sent} người dùng! 🎉</p>}
    </form>
  );
}

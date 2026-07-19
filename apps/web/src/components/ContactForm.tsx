'use client';

import { useActionState } from 'react';
import { submitContactMessage } from '@/actions/contact';

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactMessage, {});

  if (state.success) {
    return <p className="text-sm font-medium text-mint-600">Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.</p>;
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input name="name" placeholder="Họ và tên" required className="field" />
      <input name="email" type="email" placeholder="Email" required className="field" />
      <textarea name="message" placeholder="Nội dung" required rows={5} className="field" />
      <button type="submit" disabled={pending} className="btn-primary mt-1 self-start py-3">
        {pending ? 'Đang gửi...' : 'Gửi liên hệ'}
      </button>
      {state.error && <p className="text-sm font-medium text-brand-600">{state.error}</p>}
    </form>
  );
}

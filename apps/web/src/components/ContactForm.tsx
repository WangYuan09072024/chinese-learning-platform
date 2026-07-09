'use client';

import { useActionState } from 'react';
import { submitContactMessage } from '@/actions/contact';

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactMessage, {});

  if (state.success) {
    return <p className="text-sm text-green-600">Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.</p>;
  }

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-3">
      <input name="name" placeholder="Họ và tên" required className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <input name="email" type="email" placeholder="Email" required className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <textarea name="message" placeholder="Nội dung" required rows={5} className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? 'Đang gửi...' : 'Gửi liên hệ'}
      </button>
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
    </form>
  );
}

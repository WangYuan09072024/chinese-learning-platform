'use client';

import { useActionState } from 'react';
import { createFlashcard } from '@/actions/flashcards';

export function CreateFlashcardForm() {
  const [state, formAction, pending] = useActionState(createFlashcard, {});

  return (
    <form action={formAction} className="flex flex-wrap items-end gap-2">
      <input name="hanzi" placeholder="Chữ Hán" required className="w-24 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <input name="pinyin" placeholder="Pinyin" required className="w-28 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <input name="meaning" placeholder="Nghĩa" required className="flex-1 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <button type="submit" disabled={pending} className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900">
        {pending ? 'Đang thêm...' : '+ Thêm thẻ'}
      </button>
      {state.error && <p className="w-full text-sm text-red-500">{state.error}</p>}
    </form>
  );
}

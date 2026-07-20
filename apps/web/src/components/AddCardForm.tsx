'use client';

import { useActionState } from 'react';
import { Plus } from 'lucide-react';
import { addCard } from '@/actions/flashcard-decks';

export function AddCardForm({ deckId }: { deckId: string }) {
  const action = addCard.bind(null, deckId);
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="card grid grid-cols-1 gap-3 p-4 text-sm sm:grid-cols-4">
      <input name="hanzi" placeholder="汉字" required className="field" />
      <input name="pinyin" placeholder="pinyin" required className="field" />
      <input name="meaning" placeholder="Nghĩa" required className="field" />
      <button type="submit" disabled={pending} className="btn-primary">
        <Plus className="h-4 w-4" /> {pending ? '...' : 'Thêm thẻ'}
      </button>
      {(state.error || state.success) && (
        <p className={`sm:col-span-4 ${state.error ? 'text-brand-600' : 'text-mint-600'}`}>
          {state.error ?? 'Đã thêm thẻ!'}
        </p>
      )}
    </form>
  );
}

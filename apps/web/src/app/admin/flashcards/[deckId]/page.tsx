import Link from 'next/link';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { AddCardForm } from '@/components/AddCardForm';
import { deleteCard } from '@/actions/flashcard-decks';

interface Card {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
}

interface Deck {
  id: string;
  topic: string;
  description: string | null;
  level: string | null;
  cards: Card[];
}

export default async function AdminDeckDetailPage({ params }: { params: Promise<{ deckId: string }> }) {
  const { deckId } = await params;
  const deck = await apiFetch<Deck>(`/flashcard-decks/${deckId}`, { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <Link href="/admin/flashcards" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Tất cả bộ thẻ
      </Link>

      <div>
        <h1 className="text-2xl font-extrabold">{deck.topic} {deck.level && <span className="chip bg-brand-100 text-brand-700">{deck.level}</span>}</h1>
        {deck.description && <p className="text-sm text-zinc-500">{deck.description}</p>}
      </div>

      <AddCardForm deckId={deckId} />

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Thẻ trong bộ ({deck.cards.length})</h2>
        {deck.cards.length === 0 ? (
          <p className="text-sm text-zinc-500">Chưa có thẻ nào. Thêm thẻ ở trên.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {deck.cards.map((c) => (
              <li key={c.id} className="card flex items-center gap-3 p-3">
                <span className="text-2xl font-bold">{c.hanzi}</span>
                <div className="min-w-0">
                  <p className="text-sm text-brand-600">{c.pinyin}</p>
                  <p className="truncate text-sm text-zinc-500">{c.meaning}</p>
                </div>
                <form action={deleteCard.bind(null, deckId, c.id)} className="ml-auto">
                  <button type="submit" className="text-zinc-400 hover:text-brand-600" aria-label="Xóa thẻ"><Trash2 className="h-4 w-4" /></button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

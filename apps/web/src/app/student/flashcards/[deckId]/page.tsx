import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { FlashcardStudy } from '@/components/FlashcardStudy';

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

export default async function StudentDeckStudyPage({ params }: { params: Promise<{ deckId: string }> }) {
  const { deckId } = await params;
  const deck = await apiFetch<Deck>(`/flashcard-decks/${deckId}`, { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <Link href="/student/flashcards" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Tất cả bộ thẻ
      </Link>

      <div>
        <h1 className="text-2xl font-extrabold">{deck.topic} {deck.level && <span className="chip bg-brand-100 text-brand-700">{deck.level}</span>}</h1>
        {deck.description && <p className="text-sm text-zinc-500">{deck.description}</p>}
      </div>

      {deck.cards.length === 0 ? (
        <p className="text-sm text-zinc-500">Bộ thẻ này chưa có thẻ nào.</p>
      ) : (
        <FlashcardStudy cards={deck.cards} />
      )}
    </div>
  );
}

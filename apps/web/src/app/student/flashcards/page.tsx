import Link from 'next/link';
import { Layers, Sparkles } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CreateFlashcardForm } from '@/components/CreateFlashcardForm';
import { FlashcardStudy } from '@/components/FlashcardStudy';
import { deleteFlashcard } from '@/actions/flashcards';

interface Flashcard {
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
  cardCount: number;
}

export default async function StudentFlashcardsPage() {
  const token = await getToken();
  const [cards, decks] = await Promise.all([
    apiFetch<Flashcard[]>('/flashcards/me', { token }),
    apiFetch<Deck[]>('/flashcard-decks', { token }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="flex items-center gap-2 text-2xl font-extrabold">
        <Layers className="h-6 w-6 text-brand-500" /> Flashcards
      </h1>

      {/* Topic decks from admin */}
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Bộ thẻ theo chủ đề</h2>
        {decks.length === 0 ? (
          <p className="text-sm text-zinc-500">Chưa có bộ thẻ nào. Hãy quay lại sau nhé!</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {decks.map((d) => (
              <Link key={d.id} href={`/student/flashcards/${d.id}`} className="card group flex flex-col gap-2 p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-grape-400 text-white">
                  <Layers className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold group-hover:text-brand-600">{d.topic}</h3>
                {d.description && <p className="text-xs text-zinc-500">{d.description}</p>}
                <div className="mt-auto flex items-center gap-2 pt-1 text-xs text-zinc-500">
                  <span>{d.cardCount} thẻ</span>
                  {d.level && <span className="chip bg-brand-100 text-brand-700">{d.level}</span>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Personal flashcards */}
      <section className="flex flex-col gap-3">
        <h2 className="flex items-center gap-2 text-lg font-bold"><Sparkles className="h-5 w-5 text-sun-500" /> Thẻ của tôi</h2>
        {cards.length === 0 ? (
          <p className="text-sm text-zinc-500">Chưa có thẻ nào. Thêm thẻ ở dưới để bắt đầu học.</p>
        ) : (
          <FlashcardStudy cards={cards} />
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Thêm thẻ mới</h2>
        <CreateFlashcardForm />
      </section>

      {cards.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Danh sách thẻ ({cards.length})</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {cards.map((c) => (
              <li key={c.id} className="card flex items-center justify-between px-3 py-2 text-sm">
                <span>{c.hanzi} ({c.pinyin}) — {c.meaning}</span>
                <form action={deleteFlashcard.bind(null, c.id)}>
                  <button type="submit" className="text-xs text-brand-600 hover:underline">Xóa</button>
                </form>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

import Link from 'next/link';
import { Layers, Trash2, ChevronRight } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { CreateDeckForm } from '@/components/CreateDeckForm';
import { deleteDeck } from '@/actions/flashcard-decks';

interface Deck {
  id: string;
  topic: string;
  description: string | null;
  level: string | null;
  cardCount: number;
}

export default async function AdminFlashcardsPage() {
  const decks = await apiFetch<Deck[]>('/flashcard-decks', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold">
          <Layers className="h-6 w-6 text-brand-500" /> Bộ thẻ theo chủ đề
        </h1>
        <p className="text-sm text-zinc-500">Tạo bộ thẻ flashcard theo chủ đề để học viên tự học.</p>
      </div>

      <CreateDeckForm />

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Danh sách bộ thẻ ({decks.length})</h2>
        {decks.length === 0 ? (
          <p className="text-sm text-zinc-500">Chưa có bộ thẻ nào.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {decks.map((d) => (
              <li key={d.id} className="card flex items-center gap-3 p-4">
                <Link href={`/admin/flashcards/${d.id}`} className="flex flex-1 items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-600 dark:bg-white/10">
                    <Layers className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">{d.topic} {d.level && <span className="chip bg-brand-100 text-brand-700">{d.level}</span>}</p>
                    <p className="text-xs text-zinc-500">{d.cardCount} thẻ{d.description ? ` · ${d.description}` : ''}</p>
                  </div>
                </Link>
                <form action={deleteDeck.bind(null, d.id)}>
                  <button type="submit" className="text-zinc-400 hover:text-brand-600" aria-label="Xóa bộ thẻ"><Trash2 className="h-4 w-4" /></button>
                </form>
                <Link href={`/admin/flashcards/${d.id}`} className="text-zinc-300"><ChevronRight className="h-5 w-5" /></Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

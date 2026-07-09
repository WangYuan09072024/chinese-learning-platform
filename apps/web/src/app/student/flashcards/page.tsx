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

export default async function StudentFlashcardsPage() {
  const cards = await apiFetch<Flashcard[]>('/flashcards/me', { token: await getToken() });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Flashcards</h1>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Học với flashcard</h2>
        {cards.length === 0 ? (
          <p className="text-sm text-zinc-500">Chưa có thẻ nào. Thêm thẻ ở dưới để bắt đầu học.</p>
        ) : (
          <FlashcardStudy cards={cards} />
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Thêm thẻ mới</h2>
        <CreateFlashcardForm />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-medium">Danh sách thẻ ({cards.length})</h2>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.id} className="flex items-center justify-between rounded-md border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-800">
              <span>
                {c.hanzi} ({c.pinyin}) — {c.meaning}
              </span>
              <form action={deleteFlashcard.bind(null, c.id)}>
                <button type="submit" className="text-xs text-red-500 hover:underline">
                  Xóa
                </button>
              </form>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface Flashcard {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export function FlashcardStudy({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) return null;
  const card = cards[index];

  function next() {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  }

  function prev() {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="flex h-48 w-full max-w-sm cursor-pointer items-center justify-center rounded-lg border border-zinc-200 p-6 text-center dark:border-zinc-800"
      >
        {flipped ? (
          <div>
            <p className="text-lg">{card.pinyin}</p>
            <p className="mt-2 text-zinc-500">{card.meaning}</p>
          </div>
        ) : (
          <p className="text-4xl">{card.hanzi}</p>
        )}
      </button>
      <p className="text-xs text-zinc-400">
        {index + 1}/{cards.length} — bấm vào thẻ để lật
      </p>
      <div className="flex gap-3">
        <button type="button" onClick={prev} className="rounded-md border px-4 py-2 text-sm">
          Trước
        </button>
        <button type="button" onClick={next} className="rounded-md border px-4 py-2 text-sm">
          Tiếp
        </button>
      </div>
    </div>
  );
}

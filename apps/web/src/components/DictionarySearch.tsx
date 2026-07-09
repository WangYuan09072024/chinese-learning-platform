'use client';

import { useState, useTransition } from 'react';

interface DictionaryEntry {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  hskLevel: string | null;
  radical: string | null;
  synonyms: string[];
  antonyms: string[];
}

export function DictionarySearch({ apiBaseUrl }: { apiBaseUrl: string }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const [pending, startTransition] = useTransition();

  function search() {
    startTransition(async () => {
      const res = await fetch(`${apiBaseUrl}/dictionary?q=${encodeURIComponent(query)}`);
      setResults(await res.json());
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && search()}
          placeholder="Tìm theo chữ Hán, Pinyin hoặc nghĩa..."
          className="flex-1 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900"
        />
        <button
          type="button"
          onClick={search}
          disabled={pending}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {pending ? 'Đang tìm...' : 'Tìm kiếm'}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {results.map((r) => (
          <div key={r.id} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl">{r.hanzi}</span>
              <span className="text-zinc-500">{r.pinyin}</span>
              {r.hskLevel && <span className="text-xs text-zinc-400">{r.hskLevel}</span>}
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{r.meaning}</p>
            {r.radical && <p className="mt-1 text-xs text-zinc-400">Bộ thủ: {r.radical}</p>}
            {r.synonyms.length > 0 && <p className="mt-1 text-xs text-zinc-400">Đồng nghĩa: {r.synonyms.join(', ')}</p>}
            {r.antonyms.length > 0 && <p className="mt-1 text-xs text-zinc-400">Trái nghĩa: {r.antonyms.join(', ')}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

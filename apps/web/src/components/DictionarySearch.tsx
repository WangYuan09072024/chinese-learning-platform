'use client';

import { useEffect, useState, useTransition } from 'react';
import { Search, Volume2 } from 'lucide-react';

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

  function search(q: string) {
    startTransition(async () => {
      const res = await fetch(`${apiBaseUrl}/dictionary?q=${encodeURIComponent(q)}`);
      setResults(await res.json());
    });
  }

  // Load a starter set on first render so the page isn't empty.
  useEffect(() => {
    search('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && search(query)}
            placeholder="Tìm theo chữ Hán, Pinyin hoặc nghĩa..."
            className="field w-full pl-9"
          />
        </div>
        <button type="button" onClick={() => search(query)} disabled={pending} className="btn-primary">
          {pending ? 'Đang tìm...' : 'Tìm'}
        </button>
      </div>

      {results.length === 0 && !pending && (
        <p className="text-center text-sm text-zinc-500">Không tìm thấy từ nào. Thử từ khóa khác nhé!</p>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {results.map((r) => (
          <div key={r.id} className="card p-4">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">{r.hanzi}</span>
              <span className="text-brand-600 dark:text-brand-300">{r.pinyin}</span>
              {r.hskLevel && <span className="chip ml-auto bg-brand-100 text-brand-700">{r.hskLevel}</span>}
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">{r.meaning}</p>
            {r.radical && <p className="mt-1 text-xs text-zinc-400">Bộ thủ: {r.radical}</p>}
            {r.synonyms.length > 0 && <p className="mt-1 text-xs text-mint-600">Đồng nghĩa: {r.synonyms.join(', ')}</p>}
            {r.antonyms.length > 0 && <p className="mt-1 text-xs text-sun-600">Trái nghĩa: {r.antonyms.join(', ')}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

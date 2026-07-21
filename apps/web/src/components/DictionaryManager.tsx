'use client';

import { useEffect, useState, useTransition } from 'react';
import { Pencil, Trash2, Plus, Search, X, Check } from 'lucide-react';
import { createEntry, updateEntry, deleteEntry } from '@/actions/dictionary';
import { DictionaryBulkImport } from './DictionaryBulkImport';

interface Entry {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  hskLevel: string | null;
}

const LEVELS = ['', 'HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'];

export function DictionaryManager({ apiBaseUrl }: { apiBaseUrl: string }) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function load(q = '') {
    startTransition(async () => {
      const res = await fetch(`${apiBaseUrl}/dictionary?q=${encodeURIComponent(q)}`);
      setEntries(await res.json());
    });
  }
  useEffect(() => { load(''); /* eslint-disable-next-line */ }, []);

  async function onCreate(formData: FormData) {
    const res = await createEntry({}, formData);
    if (res.error) { setMsg(res.error); return; }
    setMsg('Đã thêm từ mới!');
    (document.getElementById('add-entry-form') as HTMLFormElement)?.reset();
    load(query);
  }

  async function onUpdate(id: string, formData: FormData) {
    const res = await updateEntry(id, {}, formData);
    if (res.error) { setMsg(res.error); return; }
    setEditing(null);
    setMsg('Đã cập nhật!');
    load(query);
  }

  async function onDelete(id: string) {
    await deleteEntry(id);
    load(query);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Bulk import from Excel */}
      <DictionaryBulkImport onDone={() => load(query)} />

      {/* Add form */}
      <form id="add-entry-form" action={onCreate} className="card grid grid-cols-1 gap-3 p-4 sm:grid-cols-5">
        <input name="hanzi" placeholder="汉字" required className="field" />
        <input name="pinyin" placeholder="pinyin" required className="field" />
        <input name="meaning" placeholder="Nghĩa tiếng Việt" required className="field sm:col-span-2" />
        <div className="flex gap-2">
          <select name="hskLevel" className="field flex-1">
            {LEVELS.map((l) => <option key={l} value={l}>{l || 'HSK?'}</option>)}
          </select>
          <button type="submit" className="btn-primary shrink-0"><Plus className="h-4 w-4" /></button>
        </div>
      </form>
      {msg && <p className="text-sm text-mint-600">{msg}</p>}

      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); load(e.target.value); }}
          placeholder="Tìm để sửa/xóa..."
          className="field w-full pl-9"
        />
      </div>

      <p className="text-xs text-zinc-400">{pending ? 'Đang tải...' : `${entries.length} từ`}</p>

      {/* List */}
      <ul className="flex flex-col gap-2">
        {entries.map((e) => (
          <li key={e.id} className="card p-3">
            {editing === e.id ? (
              <form action={(fd) => onUpdate(e.id, fd)} className="grid grid-cols-1 gap-2 sm:grid-cols-5">
                <input name="hanzi" defaultValue={e.hanzi} className="field" />
                <input name="pinyin" defaultValue={e.pinyin} className="field" />
                <input name="meaning" defaultValue={e.meaning} className="field sm:col-span-2" />
                <div className="flex gap-1">
                  <select name="hskLevel" defaultValue={e.hskLevel ?? ''} className="field flex-1">
                    {LEVELS.map((l) => <option key={l} value={l}>{l || 'HSK?'}</option>)}
                  </select>
                  <button type="submit" className="rounded-lg bg-mint-500 px-2 text-white"><Check className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setEditing(null)} className="rounded-lg bg-zinc-200 px-2 dark:bg-white/10"><X className="h-4 w-4" /></button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold">{e.hanzi}</span>
                <span className="text-sm text-brand-600">{e.pinyin}</span>
                <span className="text-sm text-zinc-500">{e.meaning}</span>
                {e.hskLevel && <span className="chip bg-brand-100 text-brand-700">{e.hskLevel}</span>}
                <div className="ml-auto flex gap-1">
                  <button onClick={() => { setEditing(e.id); setMsg(null); }} className="text-zinc-400 hover:text-brand-600"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => onDelete(e.id)} className="text-zinc-400 hover:text-brand-600"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

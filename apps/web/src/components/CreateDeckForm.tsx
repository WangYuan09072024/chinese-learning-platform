'use client';

import { useActionState } from 'react';
import { Plus } from 'lucide-react';
import { createDeck } from '@/actions/flashcard-decks';

const LEVELS = ['', 'HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'];

export function CreateDeckForm() {
  const [state, formAction, pending] = useActionState(createDeck, {});

  return (
    <form action={formAction} className="card flex flex-col gap-3 p-4 text-sm">
      <h2 className="font-bold">Tạo bộ thẻ mới</h2>
      <input name="topic" placeholder="Tên chủ đề (vd: Gia đình, Màu sắc, Số đếm)" required className="field" />
      <input name="description" placeholder="Mô tả ngắn (không bắt buộc)" className="field" />
      <select name="hskLevel" className="field">
        {LEVELS.map((l) => <option key={l} value={l}>{l || 'Cấp độ (tùy chọn)'}</option>)}
      </select>
      <button type="submit" disabled={pending} className="btn-primary w-fit">
        <Plus className="h-4 w-4" /> {pending ? 'Đang tạo...' : 'Tạo bộ thẻ'}
      </button>
      {state.error && <p className="text-brand-600">{state.error}</p>}
      {state.success && <p className="text-mint-600">Đã tạo bộ thẻ!</p>}
    </form>
  );
}

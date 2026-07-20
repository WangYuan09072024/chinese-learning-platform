'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, Video } from 'lucide-react';

export interface ClassSession {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  joinUrl: string | null;
  course: { title: string; slug: string };
  teacher: { name: string };
}

const WEEKDAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const MONTHS = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
  'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
];

function dayKey(d: Date) {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}

export function CalendarGrid({ sessions }: { sessions: ClassSession[] }) {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selected, setSelected] = useState<string | null>(dayKey(today));

  const byDay = useMemo(() => {
    const map = new Map<string, ClassSession[]>();
    for (const s of sessions) {
      const k = dayKey(new Date(s.startTime));
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(s);
    }
    return map;
  }, [sessions]);

  // Build the 6x7 grid starting Monday.
  const cells = useMemo(() => {
    const first = new Date(view.year, view.month, 1);
    const startOffset = (first.getDay() + 6) % 7; // Mon=0
    const gridStart = new Date(view.year, view.month, 1 - startOffset);
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + i);
      return d;
    });
  }, [view]);

  function move(delta: number) {
    const m = view.month + delta;
    setView({ year: view.year + Math.floor(m / 12), month: ((m % 12) + 12) % 12 });
  }

  const selectedSessions = selected ? byDay.get(selected) ?? [] : [];
  const selectedLabel = (() => {
    if (!selected) return 'Chọn một ngày';
    const [y, m, d] = selected.split('-').map(Number);
    return `Tiết học ngày ${d}/${m + 1}/${y}`;
  })();

  return (
    <div className="flex flex-col gap-4">
      <div className="card p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <button onClick={() => move(-1)} className="rounded-lg p-2 hover:bg-brand-50 dark:hover:bg-white/5">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-extrabold">
            {MONTHS[view.month]} {view.year}
          </h2>
          <button onClick={() => move(1)} className="rounded-lg p-2 hover:bg-brand-50 dark:hover:bg-white/5">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-400">
          {WEEKDAYS.map((w) => (
            <div key={w} className="py-1">{w}</div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((d) => {
            const k = dayKey(d);
            const inMonth = d.getMonth() === view.month;
            const isToday = k === dayKey(today);
            const daySessions = byDay.get(k) ?? [];
            const isSelected = k === selected;
            return (
              <button
                key={k}
                onClick={() => setSelected(k)}
                className={`flex min-h-[52px] flex-col items-stretch gap-0.5 rounded-lg border p-1 text-left transition sm:min-h-[76px] ${
                  isSelected ? 'border-brand-400 bg-brand-50 dark:bg-white/5' : 'border-transparent hover:bg-brand-50/60 dark:hover:bg-white/5'
                } ${inMonth ? '' : 'opacity-40'}`}
              >
                <span
                  className={`text-xs font-semibold ${
                    isToday ? 'mx-auto grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-white' : 'text-zinc-500'
                  }`}
                >
                  {d.getDate()}
                </span>
                <span className="flex flex-col gap-0.5">
                  {daySessions.slice(0, 2).map((s) => (
                    <span
                      key={s.id}
                      title={`${s.title} · ${fmtTime(s.startTime)} · ${s.teacher.name}`}
                      className="truncate rounded bg-gradient-to-r from-mint-400 to-sun-400 px-1 py-0.5 text-[10px] font-medium text-white"
                    >
                      {fmtTime(s.startTime)} {s.title}
                    </span>
                  ))}
                  {daySessions.length > 2 && (
                    <span className="text-[10px] font-medium text-brand-500">+{daySessions.length - 2}</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected day details */}
      <div className="card p-5">
        <h3 className="mb-3 font-bold">{selectedLabel}</h3>
        {selectedSessions.length === 0 ? (
          <p className="text-sm text-zinc-500">Không có tiết học nào trong ngày này.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {selectedSessions.map((s) => (
              <li key={s.id} className="rounded-xl border border-brand-100 p-4 text-sm dark:border-white/10">
                <p className="font-bold">{s.title}</p>
                <p className="mt-1 text-zinc-500">{s.course.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-zinc-600 dark:text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-brand-400" /> {fmtTime(s.startTime)} – {fmtTime(s.endTime)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-mint-500" /> {s.teacher.name}
                  </span>
                </div>
                {s.joinUrl ? (
                  <a href={s.joinUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-fit px-4 py-2 text-sm">
                    <Video className="h-4 w-4" /> Vào lớp
                  </a>
                ) : (
                  <p className="mt-3 text-xs text-zinc-400">Giáo viên chưa thêm link vào lớp.</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useTransition } from 'react';
import { Check } from 'lucide-react';
import { saveAttendance, type AttendanceStatus } from '@/actions/attendance';

interface RosterRow {
  studentId: string;
  name: string;
  email: string;
  status: AttendanceStatus | null;
  note: string | null;
}

const OPTIONS: { value: AttendanceStatus; label: string; active: string }[] = [
  { value: 'PRESENT', label: 'Có mặt', active: 'bg-mint-500 text-white' },
  { value: 'LATE', label: 'Muộn', active: 'bg-sun-500 text-white' },
  { value: 'ABSENT', label: 'Vắng', active: 'bg-brand-500 text-white' },
  { value: 'EXCUSED', label: 'Có phép', active: 'bg-sky-500 text-white' },
];

export function AttendanceMarker({ sessionId, roster }: { sessionId: string; roster: RosterRow[] }) {
  const [marks, setMarks] = useState<Record<string, AttendanceStatus>>(
    Object.fromEntries(roster.filter((r) => r.status).map((r) => [r.studentId, r.status as AttendanceStatus])),
  );
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);

  function setAll(status: AttendanceStatus) {
    setMarks(Object.fromEntries(roster.map((r) => [r.studentId, status])));
  }

  function save() {
    const records = Object.entries(marks).map(([studentId, status]) => ({ studentId, status }));
    startTransition(async () => {
      const res = await saveAttendance(sessionId, records);
      setResult(res.error ?? 'Đã lưu điểm danh!');
    });
  }

  if (roster.length === 0) {
    return <p className="text-sm text-zinc-500">Lớp này chưa có học viên ghi danh để điểm danh.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-zinc-500">Đánh dấu tất cả:</span>
        {OPTIONS.map((o) => (
          <button key={o.value} onClick={() => setAll(o.value)} className="chip bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-white/10 dark:text-zinc-300">
            {o.label}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-2">
        {roster.map((r) => (
          <li key={r.studentId} className="card flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-xs text-zinc-400">{r.email}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {OPTIONS.map((o) => {
                const active = marks[r.studentId] === o.value;
                return (
                  <button
                    key={o.value}
                    onClick={() => setMarks((m) => ({ ...m, [r.studentId]: o.value }))}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${active ? o.active : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-white/10 dark:text-zinc-300'}`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button onClick={save} disabled={pending} className="btn-primary w-fit">
          <Check className="h-4 w-4" /> {pending ? 'Đang lưu...' : 'Lưu điểm danh'}
        </button>
        {result && <span className="text-sm text-mint-600">{result}</span>}
      </div>
    </div>
  );
}

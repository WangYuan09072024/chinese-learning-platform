import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { AttendanceMarker } from '@/components/AttendanceMarker';
import type { AttendanceStatus } from '@/actions/attendance';

interface RosterResponse {
  session: { id: string; title: string; startTime: string; courseTitle: string };
  roster: { studentId: string; name: string; email: string; status: AttendanceStatus | null; note: string | null }[];
}

export default async function AttendanceDetailPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  const data = await apiFetch<RosterResponse>(`/sessions/${sessionId}/attendance`, { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <Link href="/teacher/attendance" className="flex w-fit items-center gap-1 text-sm text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" /> Tất cả tiết học
      </Link>

      <div>
        <h1 className="text-2xl font-extrabold">{data.session.title}</h1>
        <p className="text-sm text-zinc-500">
          {data.session.courseTitle} · {new Date(data.session.startTime).toLocaleString('vi-VN')}
        </p>
      </div>

      <AttendanceMarker sessionId={sessionId} roster={data.roster} />
    </div>
  );
}

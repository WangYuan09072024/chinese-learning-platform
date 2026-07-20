'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';

export interface AttendanceEntry {
  studentId: string;
  status: AttendanceStatus;
  note?: string;
}

export async function saveAttendance(
  sessionId: string,
  records: AttendanceEntry[],
): Promise<{ error?: string; success?: boolean }> {
  const token = await getToken();
  if (records.length === 0) return { error: 'Chưa có học viên nào để điểm danh.' };

  try {
    await apiFetch(`/sessions/${sessionId}/attendance`, { method: 'POST', token, body: { records } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Lưu điểm danh thất bại.' };
  }

  revalidatePath(`/teacher/attendance/${sessionId}`);
  return { success: true };
}

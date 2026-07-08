'use server';

import { revalidatePath } from 'next/cache';
import { apiFetch, ApiError } from '@/lib/api';
import { getToken } from '@/lib/session';

export interface QuizQuestionInput {
  question: string;
  type: 'SINGLE_CHOICE' | 'FILL_IN_BLANK';
  options: string[];
  correctAnswer: string;
}

export async function createQuiz(
  revalidateTo: string,
  lessonId: string,
  title: string,
  questions: QuizQuestionInput[],
): Promise<{ error?: string; success?: boolean }> {
  const token = await getToken();

  try {
    await apiFetch(`/lessons/${lessonId}/quiz`, { method: 'POST', token, body: { title, questions } });
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Tạo quiz thất bại.' };
  }

  revalidatePath(revalidateTo);
  return { success: true };
}

export async function submitQuizAttempt(
  revalidateTo: string,
  quizId: string,
  answers: Record<string, string>,
): Promise<{ error?: string; score?: number; correctCount?: number; total?: number }> {
  const token = await getToken();

  try {
    const result = await apiFetch<{ score: number; correctCount: number; total: number }>(`/quiz/${quizId}/attempt`, {
      method: 'POST',
      token,
      body: { answers },
    });
    revalidatePath(revalidateTo);
    return result;
  } catch (err) {
    return { error: err instanceof ApiError ? err.message : 'Nộp quiz thất bại.' };
  }
}

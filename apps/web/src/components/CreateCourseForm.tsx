'use client';

import { useActionState } from 'react';
import { createCourse } from '@/actions/courses';

export function CreateCourseForm() {
  const [state, action, pending] = useActionState(createCourse, {});

  return (
    <form action={action} className="flex max-w-md flex-col gap-3 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <h3 className="font-medium">Tạo khóa học mới</h3>
      <input name="title" placeholder="Tên khóa học" required className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <input name="slug" placeholder="Slug (vd: hsk1-basic)" required className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      <select name="level" required className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900">
        <option value="HSK1">HSK1</option>
        <option value="HSK2">HSK2</option>
        <option value="HSK3">HSK3</option>
        <option value="HSK4">HSK4</option>
        <option value="HSK5">HSK5</option>
        <option value="HSK6">HSK6</option>
      </select>
      <textarea name="description" placeholder="Mô tả" className="rounded-md border px-3 py-2 text-sm dark:bg-zinc-900" />
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
      {state.success && <p className="text-sm text-green-600">Tạo khóa học thành công!</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? 'Đang tạo...' : 'Tạo khóa học'}
      </button>
    </form>
  );
}

import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { UserRoleEditor } from '@/components/UserRoleEditor';

interface AppUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

export default async function AdminUsersPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const path = q ? `/users?q=${encodeURIComponent(q)}` : '/users';
  const users = await apiFetch<AppUser[]>(path, { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Quản lý người dùng</h1>
        <p className="text-sm text-zinc-500">Cấp quyền giáo viên, quản lý nội dung và các vai trò khác.</p>
      </div>

      <form className="flex gap-2">
        <input
          name="q"
          defaultValue={q ?? ''}
          placeholder="Tìm theo tên hoặc email..."
          className="flex-1 rounded-md border px-3 py-2 text-sm dark:bg-zinc-900"
        />
        <button type="submit" className="rounded-md border px-4 py-2 text-sm">
          Tìm
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {users.length === 0 ? (
          <p className="text-sm text-zinc-500">Không tìm thấy người dùng nào.</p>
        ) : (
          users.map((user) => <UserRoleEditor key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

import { getToken } from '@/lib/session';
import { apiFetch } from '@/lib/api';
import { ProfileForm } from '@/components/ProfileForm';

interface Profile {
  name: string;
  email: string;
  phone: string | null;
  roles: string[];
}

export default async function TeacherProfilePage() {
  const profile = await apiFetch<Profile>('/users/me', { token: await getToken() });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Hồ sơ cá nhân</h1>
      <ProfileForm profile={profile} />
    </div>
  );
}

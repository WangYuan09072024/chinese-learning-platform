import 'server-only';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';

const COOKIE_NAME = 'session';

export interface SessionUser {
  userId: string;
  email: string;
  roles: string[];
}

// The JWT is issued and verified by the NestJS API (apps/api). We only decode
// it here for optimistic UI/redirect decisions; every real data request is
// re-authorized by the API itself, which holds the signing secret.
export async function getSession(): Promise<SessionUser | null> {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const payload = decodeJwt(token);
    if (!payload.exp || payload.exp * 1000 < Date.now()) return null;
    return {
      userId: payload.sub as string,
      email: payload.email as string,
      roles: (payload.roles as string[]) ?? [],
    };
  } catch {
    return null;
  }
}

export async function getToken(): Promise<string | undefined> {
  return (await cookies()).get(COOKIE_NAME)?.value;
}

export async function setSession(token: string) {
  const payload = decodeJwt(token);
  const expires = payload.exp ? new Date(payload.exp * 1000) : undefined;

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires,
  });
}

export async function clearSession() {
  (await cookies()).delete(COOKIE_NAME);
}

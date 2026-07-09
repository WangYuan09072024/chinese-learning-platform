import { NextRequest, NextResponse } from 'next/server';
import { decodeJwt } from 'jose';

const ROLE_PREFIXES: Record<string, string[]> = {
  '/student': ['STUDENT'],
  '/teacher': ['TEACHER', 'TEACHING_ASSISTANT', 'CONTENT_MANAGER', 'ADMIN', 'SUPER_ADMIN'],
  '/admin': ['CONTENT_MANAGER', 'FINANCE_STAFF', 'CUSTOMER_SUPPORT', 'ADMIN', 'SUPER_ADMIN'],
};

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const matchedPrefix = Object.keys(ROLE_PREFIXES).find((prefix) => pathname.startsWith(prefix));
  if (!matchedPrefix) return NextResponse.next();

  const token = req.cookies.get('session')?.value;
  if (!token) return NextResponse.redirect(new URL('/login', req.url));

  try {
    const payload = decodeJwt(token);
    const roles = (payload.roles as string[]) ?? [];
    const allowed = ROLE_PREFIXES[matchedPrefix];
    if (!roles.some((r) => allowed.includes(r)) && !roles.includes('SUPER_ADMIN')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } catch {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/student/:path*', '/teacher/:path*', '/admin/:path*'],
};

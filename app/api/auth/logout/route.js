import { NextResponse } from 'next/server';
import { COOKIE_NAME } from '@/lib/auth';
import { ADMIN_FLAG_COOKIE, ADMIN_FLAG_OPTIONS } from '@/lib/adminFlag';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });
  response.cookies.set(ADMIN_FLAG_COOKIE, '', { ...ADMIN_FLAG_OPTIONS, maxAge: 0 });
  return response;
}

import { NextResponse } from 'next/server';
import { signToken, verifyAdminPassword, COOKIE_NAME } from '@/lib/auth';
import { ADMIN_FLAG_COOKIE, ADMIN_FLAG_OPTIONS } from '@/lib/adminFlag';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (username !== process.env.ADMIN_USERNAME) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const valid = await verifyAdminPassword(password);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = signToken({ role: 'admin', username });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    response.cookies.set(ADMIN_FLAG_COOKIE, '1', ADMIN_FLAG_OPTIONS);
    return response;
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

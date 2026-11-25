import { NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { ADMIN_FLAG_COOKIE, ADMIN_FLAG_OPTIONS } from '@/lib/adminFlag';
import { cookies } from 'next/headers';

// Clears the flag cookie too, so a browser with an expired login stops calling this route.
function notAuthenticated() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(ADMIN_FLAG_COOKIE, '', { ...ADMIN_FLAG_OPTIONS, maxAge: 0 });
  return response;
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return notAuthenticated();
    const payload = verifyToken(token);
    if (!payload) return notAuthenticated();
    return NextResponse.json({ authenticated: true });
  } catch {
    return notAuthenticated();
  }
}

import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { ADMIN_FLAG_COOKIE, ADMIN_FLAG_OPTIONS } from './lib/adminFlag';

const COOKIE_NAME = 'nfrg_admin_token';

export async function middleware(request) {
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    const response = NextResponse.next();
    // Admins who signed in before the flag cookie existed get it on their next /admin visit.
    if (request.cookies.get(ADMIN_FLAG_COOKIE)?.value !== '1') {
      response.cookies.set(ADMIN_FLAG_COOKIE, '1', ADMIN_FLAG_OPTIONS);
    }
    return response;
  } catch {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin', '/admin/((?!login).*)'],
};

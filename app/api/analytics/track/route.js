import { NextResponse } from 'next/server';
import { trackPageView } from '@/lib/db';

export async function POST(request) {
  try {
    const { page } = await request.json();
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    await trackPageView(page || '/', ip);
  } catch {
    // Silent fail — never break the user experience
  }
  return NextResponse.json({ ok: true });
}

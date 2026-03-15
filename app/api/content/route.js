import { NextResponse } from 'next/server';
import { getSiteContent, upsertSiteContent } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const keysParam = searchParams.get('keys') || '';
    const keys = keysParam.split(',').map(k => k.trim()).filter(Boolean);
    if (keys.length === 0) return NextResponse.json({});
    const content = await getSiteContent(keys);
    return NextResponse.json(content);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { key, value, type } = await request.json();
    if (!key) return NextResponse.json({ error: 'key is required' }, { status: 400 });
    await upsertSiteContent(key, value, type || 'text');
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

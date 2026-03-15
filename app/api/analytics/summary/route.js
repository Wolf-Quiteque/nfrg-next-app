import { NextResponse } from 'next/server';
import { getAnalyticsSummary } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const summary = await getAnalyticsSummary();
    return NextResponse.json(summary);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

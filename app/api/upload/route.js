import { NextResponse } from 'next/server';
import { uploadFileToR2 } from '@/lib/r2';
import { upsertSiteContent } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');
    const contentKey = formData.get('contentKey');

    if (!file || file.size === 0) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split('.').pop();
    const safeKey = (contentKey || 'upload').replace(/[^a-z0-9-_]/gi, '-');
    const r2Key = `site/${safeKey}-${Date.now()}.${ext}`;
    const url = await uploadFileToR2(buffer, r2Key, file.type);

    if (contentKey) {
      await upsertSiteContent(contentKey, url, 'image');
    }

    return NextResponse.json({ url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

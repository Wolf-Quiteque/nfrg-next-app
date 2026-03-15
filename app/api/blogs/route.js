import { NextResponse } from 'next/server';
import { getBlogPosts, createBlogPost } from '@/lib/db';
import { uploadFileToR2 } from '@/lib/r2';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

function isAdmin(cookieStore) {
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const admin = isAdmin(cookieStore);
    const { searchParams } = new URL(request.url);
    const all = searchParams.get('all') === '1' && admin;
    const limit = parseInt(searchParams.get('limit') || '0');

    const posts = await getBlogPosts({
      published: all ? undefined : true,
      limit,
    });
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    if (!isAdmin(cookieStore)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const title = formData.get('title');
    const slug = formData.get('slug');
    const content = formData.get('content');
    const excerpt = formData.get('excerpt');
    const author = formData.get('author');
    const category = formData.get('category');
    const date = formData.get('date');
    const published = formData.get('published') === 'true';
    const imageFile = formData.get('image');

    let imageUrl = formData.get('imageUrl') || '';

    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const ext = imageFile.name.split('.').pop();
      const key = `blogs/${Date.now()}-${slug || 'post'}.${ext}`;
      imageUrl = await uploadFileToR2(buffer, key, imageFile.type);
    }

    const post = await createBlogPost({
      title, slug, content, excerpt, author, category, date, published,
      image: imageUrl,
    });
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/db';
import { uploadFileToR2, deleteFileFromR2, keyFromUrl } from '@/lib/r2';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

function isAdmin(cookieStore) {
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const post = await getBlogPost(id);
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const cookieStore = await cookies();
    if (!isAdmin(cookieStore)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    const existing = await getBlogPost(id);
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const formData = await request.formData();
    const data = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      content: formData.get('content'),
      excerpt: formData.get('excerpt'),
      author: formData.get('author'),
      category: formData.get('category'),
      date: formData.get('date'),
      published: formData.get('published') === 'true',
      image: existing.image,
    };

    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
      // Delete old image if it was an R2 file
      if (existing.image) {
        const oldKey = keyFromUrl(existing.image);
        if (oldKey) await deleteFileFromR2(oldKey);
      }
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const ext = imageFile.name.split('.').pop();
      const key = `blogs/${Date.now()}-${data.slug || id}.${ext}`;
      data.image = await uploadFileToR2(buffer, key, imageFile.type);
    }

    const updated = await updateBlogPost(id, data);
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const cookieStore = await cookies();
    if (!isAdmin(cookieStore)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    const post = await deleteBlogPost(id);
    if (post?.image) {
      const key = keyFromUrl(post.image);
      if (key) await deleteFileFromR2(key);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getListing, updateListing, deleteListing } from '@/lib/db';
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
    const listing = await getListing(id);
    if (!listing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(listing);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const cookieStore = await cookies();
    if (!isAdmin(cookieStore)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    const existing = await getListing(id);
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const formData = await request.formData();
    const data = {
      title: formData.get('title'),
      address: formData.get('address'),
      price: formData.get('price'),
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      sqft: formData.get('sqft'),
      status: formData.get('status') || 'Active',
      harUrl: formData.get('harUrl'),
      displayOrder: parseInt(formData.get('displayOrder') || '99'),
      active: formData.get('active') === 'true',
      image: existing.image,
    };

    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
      if (existing.image) {
        const oldKey = keyFromUrl(existing.image);
        if (oldKey) await deleteFileFromR2(oldKey);
      }
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const ext = imageFile.name.split('.').pop();
      const key = `listings/${Date.now()}.${ext}`;
      data.image = await uploadFileToR2(buffer, key, imageFile.type);
    }

    const updated = await updateListing(id, data);
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const cookieStore = await cookies();
    if (!isAdmin(cookieStore)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    const listing = await deleteListing(id);
    if (listing?.image) {
      const key = keyFromUrl(listing.image);
      if (key) await deleteFileFromR2(key);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

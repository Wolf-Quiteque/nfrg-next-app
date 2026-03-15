import { NextResponse } from 'next/server';
import { getListings, createListing } from '@/lib/db';
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
    const listings = await getListings({ activeOnly: !all });
    return NextResponse.json(listings);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    if (!isAdmin(cookieStore)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const formData = await request.formData();
    const imageFile = formData.get('image');
    let imageUrl = formData.get('imageUrl') || '';

    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const ext = imageFile.name.split('.').pop();
      const key = `listings/${Date.now()}.${ext}`;
      imageUrl = await uploadFileToR2(buffer, key, imageFile.type);
    }

    const listing = await createListing({
      title: formData.get('title'),
      address: formData.get('address'),
      price: formData.get('price'),
      beds: formData.get('beds'),
      baths: formData.get('baths'),
      sqft: formData.get('sqft'),
      status: formData.get('status') || 'Active',
      harUrl: formData.get('harUrl'),
      image: imageUrl,
      displayOrder: parseInt(formData.get('displayOrder') || '99'),
      active: formData.get('active') === 'true',
    });
    return NextResponse.json(listing, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

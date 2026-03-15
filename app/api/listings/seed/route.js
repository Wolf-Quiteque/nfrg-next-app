import { NextResponse } from 'next/server';
import { getListings, createListing } from '@/lib/db';
import { verifyToken, COOKIE_NAME } from '@/lib/auth';
import { cookies } from 'next/headers';

const DEFAULT_LISTINGS = [
  {
    title: '1406 Fairview Ave',
    address: '1406 Fairview Ave, Houston, TX 77006',
    price: '$1,195,000',
    beds: '3', baths: '4.5', sqft: '3,186',
    status: 'Active',
    image: '/images/properties/property1.jpg',
    harUrl: 'https://www.har.com/homedetail/1406-fairview-ave-houston-tx-77006/14945608?cid=jescott',
    displayOrder: 0, active: true,
  },
  {
    title: '9922 Pennymill Drive',
    address: '9922 Pennymill Drive, Humble, TX 77396',
    price: '$370K – $420K',
    beds: '4', baths: '3.5', sqft: '3,553',
    status: 'Sold',
    image: '/images/properties/property2.jpeg',
    harUrl: 'https://www.har.com/idx/mls/listing/details?sitetype=aws&cid=567537&mlsnum=76985961&type=sold',
    displayOrder: 1, active: true,
  },
  {
    title: '5015 Ossineke Ct',
    address: '5015 Ossineke Ct, Spring, TX 77386',
    price: '$2.5M – $2.9M',
    beds: '4', baths: '5.5', sqft: '7,321',
    status: 'Sold',
    image: '/images/properties/property3.jpg',
    harUrl: 'https://www.har.com/idx/mls/listing/details?sitetype=aws&cid=567537&mlsnum=82577251&type=sold',
    displayOrder: 2, active: true,
  },
  {
    title: '6103 Yorkglen Manor Ln',
    address: '6103 Yorkglen Manor Ln, Houston, TX 77084',
    price: '$201,099',
    beds: '3', baths: '2.5', sqft: '1,659',
    status: 'Active',
    image: '/images/properties/property4.jpeg',
    harUrl: 'https://www.har.com/idx/mls/listing/details?sitetype=aws&cid=567537&mlsnum=40959529&type=active&allmls=n',
    displayOrder: 3, active: true,
  },
];

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token || !verifyToken(token)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const existing = await getListings({ activeOnly: false });
    if (existing.length > 0) {
      return NextResponse.json({ message: `Already seeded (${existing.length} listings exist). Delete them first if you want to re-seed.` });
    }

    for (const listing of DEFAULT_LISTINGS) {
      await createListing(listing);
    }
    return NextResponse.json({ ok: true, seeded: DEFAULT_LISTINGS.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

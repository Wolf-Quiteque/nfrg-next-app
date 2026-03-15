'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ListingForm from '../../../components/ListingForm';

export default function EditListing() {
  const router = useRouter();
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then(r => r.json())
      .then(data => { setListing(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  async function handleSubmit(fd) {
    const res = await fetch(`/api/listings/${id}`, { method: 'PUT', body: fd });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to update listing');
    router.push('/admin/listings');
  }

  if (loading) return <p style={{ padding: 32, color: '#888' }}>Loading...</p>;
  if (!listing) return <p style={{ padding: 32, color: '#dc2626' }}>Listing not found.</p>;

  return (
    <>
      <div className="admin-page-header">
        <h1>Edit Listing</h1>
      </div>
      <ListingForm initial={listing} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </>
  );
}

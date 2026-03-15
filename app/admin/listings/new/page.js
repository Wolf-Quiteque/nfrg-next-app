'use client';
import { useRouter } from 'next/navigation';
import ListingForm from '../../components/ListingForm';

export default function NewListing() {
  const router = useRouter();

  async function handleSubmit(fd) {
    const res = await fetch('/api/listings', { method: 'POST', body: fd });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Failed to create listing');
    router.push('/admin/listings');
  }

  return (
    <>
      <div className="admin-page-header">
        <h1>New Listing</h1>
      </div>
      <ListingForm onSubmit={handleSubmit} submitLabel="Create Listing" />
    </>
  );
}

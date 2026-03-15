'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  function load() {
    fetch('/api/listings?all=1')
      .then(r => r.json())
      .then(data => { setListings(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/listings/${id}`, { method: 'DELETE' });
    load();
  }

  async function handleSeed() {
    setSeeding(true);
    setSeedMsg('');
    const res = await fetch('/api/listings/seed', { method: 'POST' });
    const data = await res.json();
    setSeedMsg(data.message || (data.ok ? `Seeded ${data.seeded} listings!` : data.error));
    setSeeding(false);
    load();
  }

  return (
    <>
      <div className="admin-page-header">
        <h1>Featured Listings</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={handleSeed} disabled={seeding} className="btn btn-outline-secondary btn-sm">
            {seeding ? 'Seeding...' : '🌱 Seed Default Listings'}
          </button>
          <Link href="/admin/listings/new" className="btn btn-primary btn-sm">+ New Listing</Link>
        </div>
      </div>

      {seedMsg && (
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', color: '#166534', padding: '10px 14px', borderRadius: 8, marginBottom: 16 }}>
          {seedMsg}
        </div>
      )}

      {loading ? (
        <p style={{ color: '#888' }}>Loading...</p>
      ) : listings.length === 0 ? (
        <div style={{ background: 'white', borderRadius: 12, padding: 32, textAlign: 'center', color: '#888', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          No listings yet. <button onClick={handleSeed} className="btn btn-sm btn-outline-primary ms-2">Seed default listings</button>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Status</th>
              <th>Price</th>
              <th>Beds / Baths / Sqft</th>
              <th>Order</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map(l => (
              <tr key={l._id}>
                <td>
                  {l.image ? (
                    <img src={l.image} alt={l.title} style={{ width: 70, height: 50, objectFit: 'cover', borderRadius: 6 }} />
                  ) : (
                    <div style={{ width: 70, height: 50, background: '#e5e7eb', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏠</div>
                  )}
                </td>
                <td>
                  <strong>{l.title}</strong>
                  {l.address && <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{l.address}</div>}
                </td>
                <td>
                  <span style={{
                    padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700,
                    background: l.status === 'Active' ? '#dcfce7' : l.status === 'Sold' ? '#fee2e2' : '#fef9c3',
                    color: l.status === 'Active' ? '#166534' : l.status === 'Sold' ? '#991b1b' : '#854d0e',
                  }}>{l.status}</span>
                </td>
                <td>{l.price}</td>
                <td style={{ fontSize: 13, color: '#555' }}>{l.beds}bd / {l.baths}ba / {l.sqft} sqft</td>
                <td>{l.displayOrder}</td>
                <td>{l.active ? '✅' : '❌'}</td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Link href={`/admin/listings/${l._id}/edit`} className="btn btn-sm btn-outline-primary">Edit</Link>
                    <button onClick={() => handleDelete(l._id, l.title)} className="btn btn-sm btn-outline-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

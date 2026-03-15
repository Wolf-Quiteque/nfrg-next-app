'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const STATUSES = ['Active', 'Sold', 'Pending', 'Off Market'];

export default function ListingForm({ initial = {}, onSubmit, submitLabel = 'Save Listing' }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initial.title || '',
    address: initial.address || '',
    price: initial.price || '',
    beds: initial.beds || '',
    baths: initial.baths || '',
    sqft: initial.sqft || '',
    status: initial.status || 'Active',
    harUrl: initial.harUrl || '',
    displayOrder: initial.displayOrder ?? 99,
    active: initial.active ?? true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initial.image || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = ev => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      if (imageFile) fd.append('image', imageFile);
      await onSubmit(fd);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-form-card">
        <div className="row g-4">

          <div className="col-md-8">
            <label className="form-label">Title *</label>
            <input type="text" required className="form-control" value={form.title}
              onChange={e => set('title', e.target.value)} placeholder="1406 Fairview Ave" />
          </div>

          <div className="col-md-4">
            <label className="form-label">Status</label>
            <select className="form-control" value={form.status} onChange={e => set('status', e.target.value)}>
              {STATUSES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Full Address</label>
            <input type="text" className="form-control" value={form.address}
              onChange={e => set('address', e.target.value)} placeholder="1406 Fairview Ave, Houston, TX 77006" />
          </div>

          <div className="col-md-4">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" value={form.price}
              onChange={e => set('price', e.target.value)} placeholder="$1,195,000" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Beds</label>
            <input type="text" className="form-control" value={form.beds}
              onChange={e => set('beds', e.target.value)} placeholder="3" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Baths</label>
            <input type="text" className="form-control" value={form.baths}
              onChange={e => set('baths', e.target.value)} placeholder="4.5" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Sqft</label>
            <input type="text" className="form-control" value={form.sqft}
              onChange={e => set('sqft', e.target.value)} placeholder="3,186" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Display Order</label>
            <input type="number" className="form-control" value={form.displayOrder}
              onChange={e => set('displayOrder', e.target.value)} min={0} />
          </div>

          <div className="col-12">
            <label className="form-label">HAR.com Link</label>
            <input type="url" className="form-control" value={form.harUrl}
              onChange={e => set('harUrl', e.target.value)} placeholder="https://www.har.com/..." />
          </div>

          <div className="col-12">
            <label className="form-label">Property Image</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <div style={{ marginTop: 12 }}>
                <img src={imagePreview} alt="Preview"
                  style={{ maxHeight: 200, maxWidth: '100%', borderRadius: 8, objectFit: 'cover' }} />
              </div>
            )}
          </div>

          <div className="col-12">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="active"
                checked={form.active} onChange={e => set('active', e.target.checked)} />
              <label className="form-check-label" htmlFor="active">
                Show on website carousel
              </label>
            </div>
          </div>

          {error && (
            <div className="col-12">
              <div style={{ background: '#fee2e2', color: '#dc2626', padding: '10px 14px', borderRadius: 8 }}>
                {error}
              </div>
            </div>
          )}

          <div className="col-12" style={{ display: 'flex', gap: 12 }}>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving...' : submitLabel}
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => router.push('/admin/listings')}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

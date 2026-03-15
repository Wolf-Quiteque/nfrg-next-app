'use client';
import { useState, useEffect } from 'react';

export default function EditImageModal({ contentKey, currentSrc, onSave, onClose }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(currentSrc);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  function handleFileChange(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = ev => setPreview(ev.target.result);
    reader.readAsDataURL(f);
  }

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('contentKey', contentKey);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      const { url } = await res.json();
      onSave(url);
    } catch {
      setError('Upload failed. Make sure you are logged in as admin.');
      setUploading(false);
    }
  }

  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999999,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: 'white', borderRadius: 16, padding: 32,
        width: '100%', maxWidth: 520, boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h5 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#1a1a2e' }}>
            Change Image
          </h5>
          <button onClick={onClose} style={{ border: 'none', background: 'none', fontSize: 24, cursor: 'pointer', color: '#888', lineHeight: 1 }}>×</button>
        </div>

        <div style={{ fontSize: 12, color: '#888', marginBottom: 16, fontFamily: 'monospace' }}>
          Key: {contentKey}
        </div>

        {preview && (
          <div style={{ marginBottom: 16, borderRadius: 8, overflow: 'hidden', maxHeight: 220 }}>
            <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: 220, objectFit: 'cover' }} />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            display: 'block', width: '100%', padding: '10px 12px',
            border: '1px dashed #ccc', borderRadius: 8, marginBottom: 16,
            cursor: 'pointer', background: '#f8f9fa',
          }}
        />

        {error && (
          <div style={{ background: '#fee2e2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            style={{
              padding: '10px 24px', background: '#1a1a2e', color: 'white',
              border: 'none', borderRadius: 8, fontWeight: 600,
              cursor: (!file || uploading) ? 'not-allowed' : 'pointer',
              opacity: (!file || uploading) ? 0.6 : 1,
            }}
          >
            {uploading ? 'Uploading...' : 'Upload & Save'}
          </button>
          <button
            onClick={onClose}
            style={{
              padding: '10px 24px', background: '#f3f4f6', color: '#444',
              border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

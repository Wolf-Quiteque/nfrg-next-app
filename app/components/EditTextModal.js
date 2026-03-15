'use client';
import { useState, useRef, useEffect } from 'react';

export default function EditTextModal({ contentKey, currentValue, html, onSave, onClose }) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const editorRef = useRef(null);
  const textareaRef = useRef(null);

  function execFormat(cmd, value = null) {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
  }

  async function handleSave() {
    setSaving(true);
    setError('');
    const value = html ? editorRef.current?.innerHTML : textareaRef.current?.value;
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: contentKey, value, type: html ? 'html' : 'text' }),
      });
      if (!res.ok) throw new Error('Failed to save');
      onSave(value);
    } catch {
      setError('Failed to save. Make sure you are logged in as admin.');
      setSaving(false);
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
        width: '100%', maxWidth: 680, boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h5 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#1a1a2e' }}>
            Edit Content
          </h5>
          <button onClick={onClose} style={{ border: 'none', background: 'none', fontSize: 24, cursor: 'pointer', color: '#888', lineHeight: 1 }}>×</button>
        </div>

        <div style={{ fontSize: 12, color: '#888', marginBottom: 12, fontFamily: 'monospace' }}>
          Key: {contentKey}
        </div>

        {html ? (
          <>
            <div style={{ display: 'flex', gap: 4, marginBottom: 0, flexWrap: 'wrap' }}>
              {[
                ['B', () => execFormat('bold')],
                ['I', () => execFormat('italic')],
                ['U', () => execFormat('underline')],
                ['H2', () => execFormat('formatBlock', 'h2')],
                ['H3', () => execFormat('formatBlock', 'h3')],
                ['¶', () => execFormat('formatBlock', 'p')],
                ['• List', () => execFormat('insertUnorderedList')],
                ['🔗', () => { const u = prompt('URL:'); if (u) execFormat('createLink', u); }],
              ].map(([label, fn]) => (
                <button key={label} type="button" onClick={fn} style={{
                  padding: '4px 10px', fontSize: 12, border: '1px solid #ddd',
                  background: '#f8f9fa', borderRadius: 4, cursor: 'pointer',
                }}>
                  {label}
                </button>
              ))}
            </div>
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              dangerouslySetInnerHTML={{ __html: currentValue }}
              style={{
                minHeight: 180, border: '1px solid #dee2e6', borderTop: 'none',
                padding: 12, fontSize: 15, lineHeight: 1.6, outline: 'none',
                borderRadius: '0 0 4px 4px',
              }}
            />
          </>
        ) : (
          <textarea
            ref={textareaRef}
            defaultValue={currentValue}
            rows={6}
            style={{
              width: '100%', padding: 12, border: '1px solid #dee2e6',
              borderRadius: 8, fontSize: 15, lineHeight: 1.6,
              resize: 'vertical', boxSizing: 'border-box',
            }}
          />
        )}

        {error && (
          <div style={{ background: '#fee2e2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginTop: 12, fontSize: 14 }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '10px 24px', background: '#1a1a2e', color: 'white',
              border: 'none', borderRadius: 8, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Saving...' : 'Save'}
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

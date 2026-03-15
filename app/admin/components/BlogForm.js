'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = ['Agent Growth', 'Market Insights', 'VA Homebuying', 'Company News', 'Other'];

function slugify(text) {
  return text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function BlogForm({ initial = {}, onSubmit, submitLabel = 'Save Post' }) {
  const router = useRouter();
  const editorRef = useRef(null);
  const [form, setForm] = useState({
    title: initial.title || '',
    slug: initial.slug || '',
    author: initial.author || '',
    category: initial.category || CATEGORIES[0],
    date: initial.date ? initial.date.slice(0, 10) : new Date().toISOString().slice(0, 10),
    excerpt: initial.excerpt || '',
    published: initial.published ?? false,
    imageUrl: initial.image || '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initial.image || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Set initial editor content once — do NOT use dangerouslySetInnerHTML on contentEditable
  // because React re-applies it on every re-render, wiping user edits
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initial.content || '';
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-slug from title (only when slug is empty or matches previous auto-slug)
  function handleTitleChange(e) {
    const title = e.target.value;
    setForm(f => ({
      ...f,
      title,
      slug: f.slug === slugify(f.title) || !f.slug ? slugify(title) : f.slug,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = ev => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
  }

  function execFormat(cmd, value = null) {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      fd.set('content', editorRef.current?.innerHTML || '');
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

          {/* Title */}
          <div className="col-12">
            <label className="form-label">Title *</label>
            <input
              type="text" required className="form-control"
              value={form.title} onChange={handleTitleChange}
              placeholder="Enter post title"
            />
          </div>

          {/* Slug */}
          <div className="col-md-6">
            <label className="form-label">Slug (URL)</label>
            <input
              type="text" className="form-control"
              value={form.slug}
              onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
              placeholder="auto-generated-from-title"
            />
          </div>

          {/* Author */}
          <div className="col-md-6">
            <label className="form-label">Author</label>
            <input
              type="text" className="form-control"
              value={form.author}
              onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
              placeholder="James Scott"
            />
          </div>

          {/* Category */}
          <div className="col-md-6">
            <label className="form-label">Category</label>
            <select
              className="form-control"
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
            >
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Date */}
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date" className="form-control"
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
            />
          </div>

          {/* Excerpt */}
          <div className="col-12">
            <label className="form-label">Excerpt (short description)</label>
            <textarea
              className="form-control" rows={2}
              value={form.excerpt}
              onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
              placeholder="Brief summary shown on the blog listing page..."
            />
          </div>

          {/* Featured Image */}
          <div className="col-12">
            <label className="form-label">Featured Image</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <div style={{ marginTop: 12 }}>
                <img src={imagePreview} alt="Preview" style={{ maxHeight: 200, maxWidth: '100%', borderRadius: 8, objectFit: 'cover' }} />
              </div>
            )}
          </div>

          {/* Rich Text Content */}
          <div className="col-12">
            <label className="form-label">Content</label>
            <div className="editor-toolbar">
              <button type="button" onClick={() => execFormat('bold')}><b>B</b></button>
              <button type="button" onClick={() => execFormat('italic')}><i>I</i></button>
              <button type="button" onClick={() => execFormat('underline')}><u>U</u></button>
              <button type="button" onClick={() => {
                const url = prompt('Enter URL:');
                if (url) execFormat('createLink', url);
              }}>🔗</button>
              <button type="button" onClick={() => execFormat('insertUnorderedList')}>• List</button>
              <button type="button" onClick={() => execFormat('insertOrderedList')}>1. List</button>
              <button type="button" onClick={() => execFormat('formatBlock', 'h2')}>H2</button>
              <button type="button" onClick={() => execFormat('formatBlock', 'h3')}>H3</button>
              <button type="button" onClick={() => execFormat('formatBlock', 'p')}>¶</button>
            </div>
            <div
              ref={editorRef}
              className="rich-editor"
              contentEditable
              suppressContentEditableWarning
              dangerouslySetInnerHTML={{ __html: initial.content || '' }}
            />
          </div>

          {/* Published */}
          <div className="col-12">
            <div className="form-check">
              <input
                type="checkbox" className="form-check-input" id="published"
                checked={form.published}
                onChange={e => setForm(f => ({ ...f, published: e.target.checked }))}
              />
              <label className="form-check-label" htmlFor="published">
                Published (visible on the site)
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

          {/* Actions */}
          <div className="col-12" style={{ display: 'flex', gap: 12 }}>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving...' : submitLabel}
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => router.push('/admin/blogs')}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetch('/api/blogs?all=1')
      .then(r => r.json())
      .then(data => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  async function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      setPosts(posts.filter(p => p._id !== id));
    } catch {
      alert('Failed to delete post.');
    } finally {
      setDeleting(null);
    }
  }

  return (
    <>
      <div className="admin-page-header">
        <h1>Blog Posts</h1>
        <Link href="/admin/blogs/new" className="btn btn-primary btn-sm">+ New Post</Link>
      </div>

      {loading ? (
        <p style={{ color: '#888' }}>Loading posts...</p>
      ) : posts.length === 0 ? (
        <div style={{ background: 'white', borderRadius: 12, padding: 48, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <p style={{ color: '#888', marginBottom: 16 }}>No blog posts yet.</p>
          <Link href="/admin/blogs/new" className="btn btn-primary">Create Your First Post</Link>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td style={{ maxWidth: 260 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#1a1a2e' }}>{post.title}</div>
                  {post.slug && <div style={{ fontSize: 12, color: '#888' }}>/{post.slug}</div>}
                </td>
                <td style={{ fontSize: 14 }}>{post.author || '—'}</td>
                <td style={{ fontSize: 14 }}>{post.category || '—'}</td>
                <td style={{ fontSize: 13, color: '#666' }}>{formatDate(post.date)}</td>
                <td>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: 50,
                    fontSize: 12, fontWeight: 600,
                    background: post.published ? '#dcfce7' : '#f3f4f6',
                    color: post.published ? '#166534' : '#6b7280',
                  }}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Link href={`/admin/blogs/${post._id}/edit`} className="btn btn-sm btn-outline-secondary" style={{ fontSize: 12 }}>
                      Edit
                    </Link>
                    <a href={`/blogs/${post.slug || post._id}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary" style={{ fontSize: 12 }}>
                      View
                    </a>
                    <button
                      onClick={() => handleDelete(post._id, post.title)}
                      disabled={deleting === post._id}
                      className="btn btn-sm btn-outline-danger"
                      style={{ fontSize: 12 }}
                    >
                      {deleting === post._id ? '...' : 'Delete'}
                    </button>
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

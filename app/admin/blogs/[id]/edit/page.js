'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogForm from '../../../components/BlogForm';

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(r => { if (!r.ok) throw new Error('not found'); return r.json(); })
      .then(data => { setPost(data); setLoading(false); })
      .catch(() => { setNotFound(true); setLoading(false); });
  }, [id]);

  async function handleSubmit(formData) {
    const res = await fetch(`/api/blogs/${id}`, { method: 'PUT', body: formData });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to update post');
    }
    router.push('/admin/blogs');
  }

  if (loading) return <p style={{ color: '#888' }}>Loading post...</p>;
  if (notFound) return <p style={{ color: '#dc2626' }}>Post not found.</p>;

  return (
    <>
      <div className="admin-page-header">
        <h1>Edit Post</h1>
      </div>
      <BlogForm initial={post} onSubmit={handleSubmit} submitLabel="Save Changes" />
    </>
  );
}

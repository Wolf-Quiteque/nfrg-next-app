'use client';
import { useRouter } from 'next/navigation';
import BlogForm from '../../components/BlogForm';

export default function NewBlogPage() {
  const router = useRouter();

  async function handleSubmit(formData) {
    const res = await fetch('/api/blogs', { method: 'POST', body: formData });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to create post');
    }
    router.push('/admin/blogs');
  }

  return (
    <>
      <div className="admin-page-header">
        <h1>New Blog Post</h1>
      </div>
      <BlogForm onSubmit={handleSubmit} submitLabel="Create Post" />
    </>
  );
}

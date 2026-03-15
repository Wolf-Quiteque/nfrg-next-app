'use client';
import { useRouter } from 'next/navigation';

export default function AdminSidebar() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <img src="/images/logo/logo.png" alt="NFRG" style={{ maxWidth: 140, padding: '20px 20px 10px' }} />
      </div>
      <nav className="admin-nav">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li><a href="/admin" className="admin-nav-link">📊 Dashboard</a></li>
          <li><a href="/admin/blogs" className="admin-nav-link">📝 Blog Posts</a></li>
          <li><a href="/admin/blogs/new" className="admin-nav-link">➕ New Post</a></li>
          <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 8, paddingTop: 8 }}><a href="/admin/listings" className="admin-nav-link">🏠 Listings</a></li>
          <li><a href="/admin/listings/new" className="admin-nav-link">➕ New Listing</a></li>
          <li style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 }}>
            <a href="/" target="_blank" className="admin-nav-link">🌐 View Site</a>
          </li>
          <li>
            <button onClick={handleLogout} className="admin-nav-link admin-logout-btn">
              🚪 Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

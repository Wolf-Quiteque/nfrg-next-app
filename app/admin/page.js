'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics/summary')
      .then(r => r.json())
      .then(data => { setStats(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <Link href="/admin/blogs/new" className="btn btn-primary btn-sm">+ New Blog Post</Link>
      </div>

      {/* Stat Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="admin-stat-card">
            <div className="stat-number">{loading ? '—' : (stats?.totalViews ?? 0).toLocaleString()}</div>
            <div className="stat-label">Total Page Views</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="admin-stat-card">
            <div className="stat-number">{loading ? '—' : (stats?.uniqueVisitors ?? 0).toLocaleString()}</div>
            <div className="stat-label">Unique Visitors</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="admin-stat-card">
            <div className="stat-number">{loading ? '—' : (stats?.byPage?.length ?? 0)}</div>
            <div className="stat-label">Pages Tracked</div>
          </div>
        </div>
      </div>

      {/* Page Breakdown Table */}
      <div className="mb-4">
        <h5 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 16 }}>Traffic by Page</h5>
        {loading ? (
          <p style={{ color: '#888' }}>Loading analytics...</p>
        ) : !stats?.byPage?.length ? (
          <div style={{ background: 'white', borderRadius: 12, padding: 32, textAlign: 'center', color: '#888', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            No analytics data yet. Visit the site to start tracking.
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Unique Visitors</th>
              </tr>
            </thead>
            <tbody>
              {stats.byPage.map(row => (
                <tr key={row.page}>
                  <td><code style={{ fontSize: 13 }}>{row.page}</code></td>
                  <td>{row.views.toLocaleString()}</td>
                  <td>{row.uniqueVisitors.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Edit Site Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        borderRadius: 16, padding: 28, marginBottom: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 4px 16px rgba(245,158,11,0.35)',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 40 }}>✏️</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 20, color: '#1a1a2e' }}>Edit Mode</div>
            <div style={{ fontSize: 14, color: '#1a1a2e', opacity: 0.8, marginTop: 4 }}>
              Visit the site, then click <strong>"✏️ Edit Mode: OFF"</strong> (bottom-right corner) to start editing text and images inline.
            </div>
          </div>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#1a1a2e', color: 'white',
            padding: '12px 28px', borderRadius: 50, fontWeight: 700, fontSize: 15,
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
        >
          🌐 Open Site to Edit
        </a>
      </div>

      {/* Quick Links */}
      <div className="row g-3">
        <div className="col-md-4">
          <Link href="/admin/blogs" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 32 }}>📝</span>
              <div>
                <div style={{ fontWeight: 700, color: '#1a1a2e' }}>Blog Posts</div>
                <div style={{ fontSize: 13, color: '#888' }}>Manage all blog content</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="/admin/blogs/new" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 32 }}>➕</span>
              <div>
                <div style={{ fontWeight: 700, color: '#1a1a2e' }}>New Post</div>
                <div style={{ fontSize: 13, color: '#888' }}>Create a new blog article</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="/admin/listings" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 32 }}>🏠</span>
              <div>
                <div style={{ fontWeight: 700, color: '#1a1a2e' }}>Listings</div>
                <div style={{ fontSize: 13, color: '#888' }}>Manage featured properties</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

import AdminSidebar from './components/AdminSidebar';
import './admin.css';

export const metadata = {
  title: 'NFRG Admin',
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}

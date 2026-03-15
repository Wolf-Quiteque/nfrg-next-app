'use client';
import { useState, useEffect } from 'react';
import { EditModeContext } from './EditModeContext';

export function EditModeProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetch('/api/auth/check')
      .then(r => r.json())
      .then(data => {
        if (data.authenticated) {
          setIsAdmin(true);
          const stored = localStorage.getItem('nfrg_edit_mode');
          if (stored === 'true') setIsEditMode(true);
        }
      })
      .catch(() => {});
  }, []);

  function toggleEditMode() {
    setIsEditMode(prev => {
      const next = !prev;
      localStorage.setItem('nfrg_edit_mode', String(next));
      return next;
    });
  }

  return (
    <EditModeContext value={{ isEditMode, toggleEditMode, isAdmin }}>
      {children}
      {isAdmin && (
        <div style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
        }}>
          {!isEditMode && (
            <div style={{
              background: '#1a1a2e',
              color: 'white',
              fontSize: 12,
              padding: '6px 12px',
              borderRadius: 20,
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 0.3s ease',
            }}>
              👆 Click to edit the site
            </div>
          )}
          <button
            onClick={toggleEditMode}
            style={{
              background: isEditMode ? '#f59e0b' : '#1a1a2e',
              color: isEditMode ? '#1a1a2e' : '#fff',
              border: 'none',
              borderRadius: 50,
              padding: '14px 26px',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: isEditMode
                ? '0 4px 20px rgba(245,158,11,0.6)'
                : '0 4px 20px rgba(0,0,0,0.4)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              outline: isEditMode ? '3px solid #fbbf24' : 'none',
              outlineOffset: 2,
            }}
            title={isEditMode ? 'Click to exit edit mode' : 'Click to start editing the site'}
          >
            {isEditMode ? '✏️ Editing — Click to Exit' : '✏️ Edit This Page'}
          </button>
        </div>
      )}
    </EditModeContext>
  );
}

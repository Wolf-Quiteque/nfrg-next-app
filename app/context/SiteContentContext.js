'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { EditModeContext } from './EditModeContext';

// Holds every editable text/image value for the page, keyed by contentKey.
// null means no provider, and EditableText/EditableImage then fetch their own value.
export const SiteContentContext = createContext(null);

export function SiteContentProvider({ initialContent, children }) {
  const { isAdmin } = useContext(EditModeContext);
  const [content, setContent] = useState(initialContent || {});

  // Visitors get the cached page. Admins load the live values once (a single request),
  // so they never see a stale copy right after saving an edit.
  useEffect(() => {
    if (!isAdmin) return;
    fetch('/api/content?all=1', { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(data => { if (data && !data.error) setContent(data); })
      .catch(() => {});
  }, [isAdmin]);

  return <SiteContentContext value={content}>{children}</SiteContentContext>;
}

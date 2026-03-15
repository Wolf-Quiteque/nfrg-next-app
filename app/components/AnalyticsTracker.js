'use client';
import { useEffect } from 'react';

export default function AnalyticsTracker({ page }) {
  useEffect(() => {
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page }),
    }).catch(() => {});
  }, [page]);

  return null;
}

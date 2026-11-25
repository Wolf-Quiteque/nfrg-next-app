'use client';
import { useState, useEffect, useContext, useRef } from 'react';
import { EditModeContext } from '../context/EditModeContext';
import { SiteContentContext } from '../context/SiteContentContext';
import EditTextModal from './EditTextModal';

export default function EditableText({
  contentKey,
  defaultValue,
  tag: Tag = 'span',
  className,
  html = false,
  initialValue,
  style,
}) {
  const { isEditMode } = useContext(EditModeContext);
  const siteContent = useContext(SiteContentContext);
  // Set by saving in the edit modal, or by the standalone fetch below.
  const [localValue, setLocalValue] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasFetched = useRef(false);

  const value = localValue ?? initialValue ?? siteContent?.[contentKey] ?? defaultValue;

  // Only fetch on its own when the page didn't provide its content (no SiteContentProvider).
  useEffect(() => {
    if (siteContent || initialValue !== undefined || hasFetched.current) return;
    hasFetched.current = true;
    fetch(`/api/content?keys=${encodeURIComponent(contentKey)}`)
      .then(r => r.json())
      .then(data => { if (data[contentKey] !== undefined) setLocalValue(data[contentKey]); })
      .catch(() => {});
  }, [contentKey, initialValue, siteContent]);

  const content = html
    ? <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: value }} />
    : <Tag className={className} style={style}>{value}</Tag>;

  if (!isEditMode) return content;

  return (
    <>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={e => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }}
        title="Click to edit"
        style={{
          display: 'inline-block',
          position: 'relative',
          cursor: 'pointer',
          outline: hovered ? '2px solid #f59e0b' : '2px dashed rgba(245,158,11,0.5)',
          outlineOffset: 3,
          borderRadius: 4,
          transition: 'outline 0.15s',
          background: hovered ? 'rgba(245,158,11,0.08)' : 'transparent',
        }}
      >
        {content}
        <span style={{
          position: 'absolute',
          top: -22,
          left: 0,
          background: '#f59e0b',
          color: '#1a1a2e',
          fontSize: 11,
          fontWeight: 700,
          padding: '2px 7px',
          borderRadius: 4,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.15s',
          zIndex: 9999,
          fontFamily: 'sans-serif',
          letterSpacing: 0.3,
        }}>
          ✏️ Click to edit
        </span>
      </span>
      {modalOpen && (
        <EditTextModal
          contentKey={contentKey}
          currentValue={value}
          html={html}
          onSave={newVal => { setLocalValue(newVal); setModalOpen(false); }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

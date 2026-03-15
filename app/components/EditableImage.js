'use client';
import { useState, useEffect, useContext, useRef } from 'react';
import { EditModeContext } from '../context/EditModeContext';
import EditImageModal from './EditImageModal';

export default function EditableImage({
  contentKey,
  defaultSrc,
  alt = '',
  className,
  style,
  initialValue,
  ...imgProps
}) {
  const { isEditMode } = useContext(EditModeContext);
  const [src, setSrc] = useState(initialValue ?? defaultSrc);
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (initialValue !== undefined || hasFetched.current) return;
    hasFetched.current = true;
    fetch(`/api/content?keys=${encodeURIComponent(contentKey)}`)
      .then(r => r.json())
      .then(data => { if (data[contentKey]) setSrc(data[contentKey]); })
      .catch(() => {});
  }, [contentKey, initialValue]);

  const img = <img src={src} alt={alt} className={className} style={style} {...imgProps} />;

  if (!isEditMode) return img;

  return (
    <>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={e => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }}
        title="Click to change image"
        style={{
          display: 'inline-block',
          position: 'relative',
          cursor: 'pointer',
          outline: hovered ? '3px solid #f59e0b' : '3px dashed rgba(245,158,11,0.5)',
          outlineOffset: 2,
          borderRadius: 6,
          transition: 'outline 0.15s',
        }}
      >
        {img}
        {/* Always-visible camera badge */}
        <span style={{
          position: 'absolute',
          top: 8,
          left: 8,
          background: '#f59e0b',
          color: '#1a1a2e',
          fontSize: 13,
          fontWeight: 700,
          padding: '5px 10px',
          borderRadius: 20,
          pointerEvents: 'none',
          zIndex: 9999,
          fontFamily: 'sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          📷 Change image
        </span>
        {/* Hover overlay */}
        {hovered && (
          <span style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(245,158,11,0.15)',
            borderRadius: 4,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              background: '#f59e0b',
              color: '#1a1a2e',
              fontSize: 15,
              fontWeight: 700,
              padding: '8px 20px',
              borderRadius: 50,
              fontFamily: 'sans-serif',
            }}>
              Click to replace
            </span>
          </span>
        )}
      </span>
      {modalOpen && (
        <EditImageModal
          contentKey={contentKey}
          currentSrc={src}
          onSave={newSrc => { setSrc(newSrc); setModalOpen(false); }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

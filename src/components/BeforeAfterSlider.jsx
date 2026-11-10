import React, { useState, useRef, useEffect, useCallback } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After'
}) {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percent);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(prev - 5, 0));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(prev + 5, 100));
    }
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchMove={handleTouchMove}
      tabIndex={0}
      role="slider"
      aria-label="Before and after interior comparison slider"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
    >
      {/* After image (Underneath - Full Width: Completed Luxury Interior) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="ba-image ba-image-after"
        loading="eager"
        draggable={false}
      />
      <div className="ba-badge ba-badge-after">
        <span className="badge-status-dot after-dot"></span>
        <span>{afterLabel}</span>
      </div>

      {/* Before image (Clipped to slider position: Unfinished Developer Handover) */}
      <div
        className="ba-image-before-wrapper"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="ba-image ba-image-before"
          loading="eager"
          draggable={false}
        />
        <div className="ba-badge ba-badge-before">
          <span className="badge-status-dot before-dot"></span>
          <span>{beforeLabel}</span>
        </div>
        {/* Subtle architectural grid indicator on before side */}
        <div className="before-grid-overlay" aria-hidden="true"></div>
      </div>

      {/* Vertical Slider Handle Line */}
      <div
        className="ba-handle-line"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="ba-handle-button" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="ba-drag-hint">
        <span>Drag slider to reveal transformation</span>
      </div>
    </div>
  );
}


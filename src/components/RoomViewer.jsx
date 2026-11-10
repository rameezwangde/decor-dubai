import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import './RoomViewer.css';

export default function RoomViewer({
  category,
  activeMode,
  selectedStyle,
  activeViewpointIndex,
  onViewpointChange,
  activeGalleryIndex,
  onGallerySelect,
  isImageLoading,
  onImageLoaded
}) {
  // Determine current image based on mode
  let currentImage = selectedStyle.image;
  let currentTitle = selectedStyle.name;

  if (activeMode === 'room-view') {
    const vp = category.viewpoints[activeViewpointIndex] || category.viewpoints[0];
    currentImage = vp.image;
    currentTitle = vp.name;
  } else if (activeMode === 'gallery') {
    const item = category.gallery[activeGalleryIndex] || category.gallery[0];
    currentImage = item.image;
    currentTitle = item.title;
  }

  const handlePrevViewpoint = () => {
    const nextIdx = (activeViewpointIndex - 1 + category.viewpoints.length) % category.viewpoints.length;
    onViewpointChange(nextIdx);
  };

  const handleNextViewpoint = () => {
    const nextIdx = (activeViewpointIndex + 1) % category.viewpoints.length;
    onViewpointChange(nextIdx);
  };

  return (
    <div className="room-viewer-container" aria-label="Room preview display">
      {/* Mode B: Before / After Slider */}
      {activeMode === 'before-after' ? (
        <BeforeAfterSlider
          beforeImage={category.beforeAfter.beforeImage}
          afterImage={category.beforeAfter.afterImage}
          beforeLabel={category.beforeAfter.beforeLabel}
          afterLabel={category.beforeAfter.afterLabel}
        />
      ) : (
        /* Standard High-Res Image Viewer for Room View, Customize, and Gallery */
        <div className="room-image-stage">
          {/* Subtle loading spinner */}
          {isImageLoading && (
            <div className="viewer-loader" aria-live="polite">
              <div className="loader-ring"></div>
              <span>Rendering Scene...</span>
            </div>
          )}

          <img
            key={currentImage}
            src={currentImage}
            alt={`${category.name} - ${currentTitle}`}
            className={`viewer-main-image ${isImageLoading ? 'loading' : 'loaded'}`}
            onLoad={onImageLoaded}
            decoding="async"
          />

          {/* Viewpoint Navigation Controls (Mode A) */}
          {activeMode === 'room-view' && category.viewpoints.length > 1 && (
            <div className="viewpoint-controls">
              <button
                type="button"
                className="btn-vp-nav"
                onClick={handlePrevViewpoint}
                aria-label="Previous viewpoint"
              >
                ‹
              </button>
              <div className="vp-indicator">
                <span className="vp-count">
                  {activeViewpointIndex + 1} / {category.viewpoints.length}
                </span>
                <span className="vp-name">{category.viewpoints[activeViewpointIndex].name}</span>
              </div>
              <button
                type="button"
                className="btn-vp-nav"
                onClick={handleNextViewpoint}
                aria-label="Next viewpoint"
              >
                ›
              </button>
            </div>
          )}

          {/* Gallery Overlay Strip (Mode D) */}
          {activeMode === 'gallery' && (
            <div className="gallery-strip" role="tablist" aria-label="Design gallery preview choices">
              {category.gallery.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeGalleryIndex === idx}
                  className={`gallery-thumb-btn ${activeGalleryIndex === idx ? 'active' : ''}`}
                  onClick={() => onGallerySelect(idx)}
                >
                  <img src={item.image} alt={item.title} />
                  <span className="gallery-thumb-label">{item.title}</span>
                </button>
              ))}
            </div>
          )}

          {/* Watermark / Badge */}
          <div className="viewer-brand-badge">
            <span className="badge-dot"></span>
            <span>Room Preview • Dubai Studio</span>
          </div>
        </div>
      )}
    </div>
  );
}


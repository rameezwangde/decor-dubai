import React, { useState, useEffect, useRef } from 'react';
import RoomViewer from './RoomViewer';
import StyleSelector from './StyleSelector';
import CustomizationPanel from './CustomizationPanel';
import QuoteAction from './QuoteAction';
import { studioCategories } from '../data/studioCategories';
import './DecorStudioModal.css';

export default function DecorStudioModal({
  categoryId,
  onClose
}) {
  const category = studioCategories[categoryId] || studioCategories['living-room'];

  // Interactive View Modes: 'room-view', 'before-after', 'customize', 'gallery'
  const [activeMode, setActiveMode] = useState('room-view');

  // Selected Style
  const [selectedStyle, setSelectedStyle] = useState(category.styles[0]);

  // Selected Viewpoint Index (for Room View)
  const [activeViewpointIndex, setActiveViewpointIndex] = useState(0);

  // Selected Gallery Index (for Gallery)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Selected Customization Options (groupId -> optionId)
  const [customizationChoices, setCustomizationChoices] = useState(() => {
    const initial = {};
    category.customizationGroups.forEach((g) => {
      initial[g.id] = g.options[0]?.id;
    });
    return initial;
  });

  const [isImageLoading, setIsImageLoading] = useState(false);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // When category changes, reset states to category defaults
  useEffect(() => {
    setSelectedStyle(category.styles[0]);
    setActiveViewpointIndex(0);
    setActiveGalleryIndex(0);
    const initial = {};
    category.customizationGroups.forEach((g) => {
      initial[g.id] = g.options[0]?.id;
    });
    setCustomizationChoices(initial);
    setActiveMode('room-view');
  }, [category]);

  // Scroll lock on body
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // Focus close button on mount
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleStyleSelect = (style) => {
    setIsImageLoading(true);
    setSelectedStyle(style);
  };

  const handleOptionSelect = (groupId, optId) => {
    setCustomizationChoices((prev) => ({
      ...prev,
      [groupId]: optId
    }));
  };

  const handleImageLoaded = () => {
    setIsImageLoading(false);
  };

  return (
    <div
      className="decor-studio-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-room-title"
    >
      <div
        className="decor-studio-modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Sticky Top Bar */}
        <div className="studio-mobile-top-bar">
          <div className="mobile-title-wrap">
            <span className="mobile-badge">Interactive Studio</span>
            <span className="mobile-heading">{category.name}</span>
          </div>
          <button
            type="button"
            className="btn-studio-close-mobile"
            onClick={onClose}
            aria-label="Close studio modal"
          >
            ✕
          </button>
        </div>

        {/* LEFT 65%: Interactive Room Viewer */}
        <div className="studio-viewer-column">
          {/* Viewer Mode Navigation Tabs */}
          <div className="studio-mode-tabs" role="tablist" aria-label="Viewer modes">
            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'room-view'}
              className={`mode-tab-btn ${activeMode === 'room-view' ? 'active' : ''}`}
              onClick={() => setActiveMode('room-view')}
            >
              <span className="tab-icon">🏠</span>
              <span>Room View</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'before-after'}
              className={`mode-tab-btn ${activeMode === 'before-after' ? 'active' : ''}`}
              onClick={() => setActiveMode('before-after')}
            >
              <span className="tab-icon">⇄</span>
              <span>Before / After</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'customize'}
              className={`mode-tab-btn ${activeMode === 'customize' ? 'active' : ''}`}
              onClick={() => setActiveMode('customize')}
            >
              <span className="tab-icon">✨</span>
              <span>Customize</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'gallery'}
              className={`mode-tab-btn ${activeMode === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveMode('gallery')}
            >
              <span className="tab-icon">🖼️</span>
              <span>Gallery</span>
            </button>
          </div>

          {/* Interactive Screen Container */}
          <div className="studio-screen-frame">
            <RoomViewer
              category={category}
              activeMode={activeMode}
              selectedStyle={selectedStyle}
              activeViewpointIndex={activeViewpointIndex}
              onViewpointChange={setActiveViewpointIndex}
              activeGalleryIndex={activeGalleryIndex}
              onGallerySelect={setActiveGalleryIndex}
              isImageLoading={isImageLoading}
              onImageLoaded={handleImageLoaded}
            />
          </div>
        </div>

        {/* RIGHT 35%: Room Title, Style Selection & Customization Options */}
        <div className="studio-controls-column">
          {/* Desktop Close Button */}
          <button
            type="button"
            ref={closeBtnRef}
            className="btn-studio-close-desktop"
            onClick={onClose}
            aria-label="Close studio showroom"
          >
            ✕
          </button>

          {/* Category Header */}
          <div className="studio-info-header">
            <div className="studio-eyebrow">HOME DECOR DUBAI STUDIO</div>
            <h2 id="studio-room-title" className="studio-category-title">
              {category.name}
            </h2>
            <p className="studio-tagline">{category.tagline}</p>
            <p className="studio-description">{category.description}</p>
          </div>

          {/* Scrollable Configuration Sections */}
          <div className="studio-scrollable-body">
            {/* Style Selector */}
            <div className="studio-module">
              <StyleSelector
                styles={category.styles}
                selectedStyleId={selectedStyle.id}
                onSelectStyle={handleStyleSelect}
              />
            </div>

            {/* Customization Details */}
            <div className="studio-module">
              <CustomizationPanel
                customizationGroups={category.customizationGroups}
                customizationChoices={customizationChoices}
                onOptionSelect={handleOptionSelect}
              />
            </div>
          </div>

          {/* Sticky Bottom Quotation CTA */}
          <div className="studio-bottom-action">
            <QuoteAction
              category={category}
              selectedStyle={selectedStyle}
              customizationChoices={customizationChoices}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


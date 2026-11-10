import React from 'react';
import './StyleSelector.css';

export default function StyleSelector({
  styles,
  selectedStyleId,
  onSelectStyle
}) {
  return (
    <div className="style-selector-container">
      <h3 className="section-subheading">Select Decor Style</h3>
      <div className="style-grid" role="radiogroup" aria-label="Decor Styles">
        {styles.map((style) => {
          const isSelected = style.id === selectedStyleId;
          return (
            <button
              key={style.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`style-card-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectStyle(style)}
            >
              <div className="style-thumb-box">
                <img src={style.thumbnail} alt={style.name} loading="lazy" />
                {isSelected && (
                  <div className="style-check-badge" aria-label="Selected">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="style-meta">
                <span className="style-name">{style.name}</span>
                <span className="style-sub">{style.subtitle}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


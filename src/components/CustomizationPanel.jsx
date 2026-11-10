import React from 'react';
import './CustomizationPanel.css';

export default function CustomizationPanel({
  customizationGroups,
  customizationChoices,
  onOptionSelect
}) {
  return (
    <div className="customization-panel-container">
      <h3 className="section-subheading">Fine-Tune Materials & Details</h3>
      <div className="customization-groups-list">
        {customizationGroups.map((group) => {
          const selectedOptionId = customizationChoices[group.id];
          return (
            <div key={group.id} className="custom-group-block">
              <span className="custom-group-title">{group.title}</span>
              <div className="swatches-row" role="radiogroup" aria-label={group.title}>
                {group.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      title={opt.name}
                      className={`swatch-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => onOptionSelect(group.id, opt.id)}
                    >
                      <span
                        className="swatch-circle"
                        style={{ backgroundColor: opt.color }}
                      ></span>
                      <span className="swatch-label">{opt.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


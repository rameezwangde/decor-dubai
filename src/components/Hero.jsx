import React from 'react';
import './Hero.css';

export default function Hero({ onOpenStudio }) {
  return (
    <section className="hero-section" id="hero" aria-label="Hero Introduction">
      {/* Subtle tint overlay to guarantee contrast over the texture wall */}
      <div className="hero-backdrop-tint" aria-hidden="true"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow fade-up delay-1">
            HOME DECOR DUBAI
          </div>

          {/* Headline */}
          <h1 className="hero-title fade-up delay-2">
            Transform Your Home<br />
            with <span className="highlight">Timeless Décor</span>
          </h1>

          {/* Description */}
          <p className="hero-description fade-up delay-3">
            Elegant interiors, curated décor, and premium design solutions for every space.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions fade-up delay-4">
            <a
              href="#quote"
              className="btn-primary"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                onOpenStudio && onOpenStudio('living-room');
              }}
            >
              <span>Get a Free Quote</span>
              <span className="arrow-icon" aria-hidden="true">→</span>
            </a>
            <a href="#services" className="btn-secondary">
              <span>Explore Our Services</span>
              <span className="arrow-diag" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Image (rendered underneath text on screens < 768px to keep sofa fully framed) */}
      <div className="mobile-visual-wrapper">
        <img
          src="/hero-bg.jpg"
          alt="Warm luxury Dubai living room with curved architectural wall, brass table, and tailored sofa retreat"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}


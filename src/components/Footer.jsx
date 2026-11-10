import React, { useState } from 'react';
import './Footer.css';

export default function Footer({ onOpenStudio }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="site-footer" id="contact" role="contentinfo">
      {/* Top Pre-Footer Brand Consultation Banner */}
      <div className="footer-consultation-banner">
        <div className="consultation-wrapper">
          <div className="consultation-text">
            <span className="consultation-eyebrow">READY TO TRANSFORM YOUR SPACE?</span>
            <h3 className="consultation-heading">
              Let’s Craft an Interior That <span className="highlight-bronze">Inspires Every Day</span>
            </h3>
            <p className="consultation-desc">
              Schedule a bespoke consultation with our Dubai interior architectural team or visit our showroom.
            </p>
          </div>
          <div className="consultation-actions">
            <button
              type="button"
              className="btn-footer-consultation"
              onClick={() => onOpenStudio && onOpenStudio('living-room')}
            >
              <span>Launch Decor Studio</span>
              <span className="arrow" aria-hidden="true">→</span>
            </button>
            <a
              href="https://wa.me/971501234567?text=Hello%20Home%20Decor%20Dubai%2C%20I%20would%20like%20to%20schedule%20an%20interior%20design%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-footer-whatsapp"
            >
              <span>WhatsApp Us</span>
              <span className="wa-icon" aria-hidden="true">💬</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Philosophy */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-brand-title">DECOR DUBAI</a>
            <p className="brand-statement">
              Home Decor Dubai is a premier interior architecture and bespoke decor studio. We curate timeless residences, luxury penthouses, and bespoke commercial environments across the UAE.
            </p>
            <div className="brand-showroom-badge">
              <span className="pin-icon">📍</span>
              <span>Design District (d3), Building 7, Dubai, UAE</span>
            </div>
          </div>

          {/* Column 2: Specializations */}
          <div className="footer-col">
            <h4 className="footer-col-title">Specializations</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenStudio && onOpenStudio('living-room')}
                >
                  Living Room Decor
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenStudio && onOpenStudio('bed-room')}
                >
                  Bed Room Decor
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenStudio && onOpenStudio('window-decor')}
                >
                  Window Treatments & Curtains
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenStudio && onOpenStudio('kitchen-decor')}
                >
                  Bespoke Kitchen Joinery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenStudio && onOpenStudio('wall-decor')}
                >
                  Acoustic & Marble Wall Decor
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Studio & Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Our Specializations</a></li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onOpenStudio && onOpenStudio('living-room')}
                >
                  Interactive Decor Studio
                </button>
              </li>
              <li><a href="#portfolio">Featured Residences</a></li>
              <li><a href="#about">Design Philosophy</a></li>
              <li><a href="#materials">Material Library</a></li>
              <li><a href="#faq">Consultation FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-col-title">The Dubai Editorial</h4>
            <p className="newsletter-text">
              Subscribe to receive curated interior trends, private villa reveals, and seasonal design lookbooks.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  →
                </button>
              </form>
            ) : (
              <div className="newsletter-subscribed-msg">
                ✓ Thank you for subscribing to The Dubai Editorial.
              </div>
            )}

            <div className="footer-direct-contact">
              <a href="tel:+97141234567" className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+971 4 123 4567</span>
              </a>
              <a href="mailto:inquire@decor-dubai.ae" className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>inquire@decor-dubai.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} HOME DECOR DUBAI. All Rights Reserved. Crafted with distinction in Dubai.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="legal-dot">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="legal-dot">•</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


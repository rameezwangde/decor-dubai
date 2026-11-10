import React, { useState } from 'react';
import './QuoteAction.css';

export default function QuoteAction({
  category,
  selectedStyle,
  customizationChoices
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Villa',
    location: 'Dubai',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Compile summary of selections
  const choicesSummary = Object.entries(customizationChoices)
    .map(([groupId, optId]) => {
      const group = category.customizationGroups.find((g) => g.id === groupId);
      const opt = group?.options.find((o) => o.id === optId);
      return `${group?.title}: ${opt?.name || optId}`;
    })
    .join('\n');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Home Decor Dubai,\n\nI would like a quotation for:\n` +
      `• Category: ${category.name}\n` +
      `• Style: ${selectedStyle.name}\n` +
      `• Selections:\n${choicesSummary}\n\n` +
      `Please contact me regarding design consultation and pricing.`
    );
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  return (
    <div className="quote-action-container">
      <button
        type="button"
        className="btn-studio-quote"
        onClick={() => setIsModalOpen(true)}
      >
        <span>Get a Free Quote</span>
        <span className="quote-arrow" aria-hidden="true">→</span>
      </button>

      {/* Inquiry Dialog Modal */}
      {isModalOpen && (
        <div
          className="quote-dialog-backdrop"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-dialog-title"
        >
          <div
            className="quote-dialog-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="quote-dialog-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close quote modal"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="quote-form">
                <span className="quote-form-eyebrow">DECOR STUDIO INQUIRY</span>
                <h3 id="quote-dialog-title" className="quote-form-title">
                  Request Your Custom Quote
                </h3>

                <div className="quote-summary-card">
                  <div className="summary-badge">{category.name}</div>
                  <div className="summary-style">Selected Style: <strong>{selectedStyle.name}</strong></div>
                </div>

                <div className="form-fields">
                  <div className="form-row">
                    <label className="field-label">
                      Full Name *
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Sheikh Mohammed"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </label>
                    <label className="field-label">
                      Phone / WhatsApp *
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </label>
                  </div>

                  <div className="form-row">
                    <label className="field-label">
                      Email Address
                      <input
                        type="email"
                        name="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </label>
                    <label className="field-label">
                      Property Type
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="Villa">Luxury Villa</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Office">Commercial / Office</option>
                      </select>
                    </label>
                  </div>

                  <label className="field-label">
                    Additional Project Notes
                    <textarea
                      name="notes"
                      rows="2"
                      placeholder="Special requirements, approximate room dimensions, or timeline..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="form-textarea"
                    ></textarea>
                  </label>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit-quote">
                    Submit Inquiry Directly
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="btn-whatsapp-quote"
                  >
                    <span>Instant WhatsApp Quote</span>
                    <span aria-hidden="true">💬</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="quote-success-state">
                <div className="success-icon-ring">✓</div>
                <h3 className="success-title">Inquiry Received</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Our senior Dubai design consultant will review your specifications for <strong>{category.name} ({selectedStyle.name})</strong> and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  className="btn-submit-quote"
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsModalOpen(false);
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


import React from 'react';
import './Services.css';

// Custom clean outline SVG icons in bronze matching the reference perfectly
const SofaIcon = () => (
  <svg className="service-icon" viewBox="0 0 32 24" fill="none" stroke="#A36522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Sofa back */}
    <path d="M4 11V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v5" />
    {/* Cushions divider */}
    <line x1="16" y1="4" x2="16" y2="15" />
    {/* Left armrest */}
    <rect x="2" y="10" width="4" height="8" rx="1.5" />
    {/* Right armrest */}
    <rect x="26" y="10" width="4" height="8" rx="1.5" />
    {/* Seat cushions */}
    <path d="M6 15h20v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2z" />
    {/* Legs */}
    <line x1="6" y1="18" x2="5" y2="21" />
    <line x1="26" y1="18" x2="27" y2="21" />
  </svg>
);

const BedIcon = () => (
  <svg className="service-icon" viewBox="0 0 32 24" fill="none" stroke="#A36522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Headboard */}
    <path d="M4 17V5a1.5 1.5 0 0 1 1.5-1.5h21A1.5 1.5 0 0 1 28 5v12" />
    {/* Headboard panel dividers */}
    <line x1="12" y1="3.5" x2="12" y2="11" />
    <line x1="20" y1="3.5" x2="20" y2="11" />
    {/* Pillows */}
    <rect x="6" y="9" width="8" height="4" rx="1" />
    <rect x="18" y="9" width="8" height="4" rx="1" />
    {/* Bed base / mattress */}
    <rect x="3" y="13" width="26" height="5" rx="1" />
    {/* Legs */}
    <line x1="5" y1="18" x2="5" y2="21" />
    <line x1="27" y1="18" x2="27" y2="21" />
  </svg>
);

const CurtainIcon = () => (
  <svg className="service-icon" viewBox="0 0 32 24" fill="none" stroke="#A36522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Curtain rod */}
    <line x1="2" y1="3" x2="30" y2="3" />
    <circle cx="2" cy="3" r="1.5" fill="#A36522" />
    <circle cx="30" cy="3" r="1.5" fill="#A36522" />
    {/* Left draped curtain with tieback */}
    <path d="M5 3c2 5 1 8 0 18" />
    <path d="M11 3c-1 5-4 8-1 18" />
    <path d="M5 12c2.5 0 3.5 1 5 1" strokeWidth="1.2" />
    {/* Right draped curtain with tieback */}
    <path d="M27 3c-2 5-1 8 0 18" />
    <path d="M21 3c1 5 4 8 1 18" />
    <path d="M27 12c-2.5 0-3.5 1-5 1" strokeWidth="1.2" />
    {/* Sheer inner window lines */}
    <line x1="14" y1="5" x2="14" y2="21" strokeDasharray="1.5 2" strokeWidth="1" />
    <line x1="18" y1="5" x2="18" y2="21" strokeDasharray="1.5 2" strokeWidth="1" />
  </svg>
);

const KitchenHoodIcon = () => (
  <svg className="service-icon" viewBox="0 0 32 24" fill="none" stroke="#A36522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Chimney duct */}
    <rect x="13" y="2" width="6" height="8" rx="0.5" />
    {/* Hood canopy flared */}
    <path d="M13 10L6 17h20l-7-7H13z" />
    {/* Lower filter rim */}
    <line x1="6" y1="17" x2="26" y2="17" />
    <line x1="8" y1="19" x2="24" y2="19" strokeWidth="1" />
  </svg>
);

const WallDecorIcon = () => (
  <svg className="service-icon" viewBox="0 0 32 24" fill="none" stroke="#A36522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Back picture frame */}
    <rect x="3" y="3" width="16" height="13" rx="1" />
    {/* Front overlapping picture frame */}
    <rect x="11" y="8" width="17" height="14" rx="1" fill="#FAF6F0" />
    {/* Inner photo art mat */}
    <rect x="14" y="11" width="11" height="8" rx="0.5" strokeWidth="1" />
  </svg>
);

const CircularArrowIcon = () => (
  <div className="card-arrow-circle" aria-hidden="true">
    <svg viewBox="0 0 20 20" fill="none" stroke="#A36522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="9" />
      <path d="M8 10h4.5M10.5 7.5L13 10l-2.5 2.5" />
    </svg>
  </div>
);

const servicesData = [
  {
    id: 'living-room',
    titleLine1: 'Living Room',
    titleLine2: 'Decor',
    image: '/services/living-room.jpg',
    alt: 'Living Room Decor - Cream sectional sofa, warm drapery, coffee table, and greenery',
    icon: <SofaIcon />,
    link: '#living-room-decor'
  },
  {
    id: 'bed-room',
    titleLine1: 'Bed Room',
    titleLine2: 'Decor',
    image: '/services/bed-room.jpg',
    alt: 'Bed Room Decor - Luxury bedroom with upholstered paneled headboard and warm ambient light',
    icon: <BedIcon />,
    link: '#bedroom-decor'
  },
  {
    id: 'window-decor',
    titleLine1: 'Window',
    titleLine2: 'Decor',
    image: '/services/window.jpg',
    alt: 'Window Decor - Floor-to-ceiling draped curtains and elegant sheer panels',
    icon: <CurtainIcon />,
    link: '#window-decor'
  },
  {
    id: 'kitchen-decor',
    titleLine1: 'Kitchen',
    titleLine2: 'Decor',
    image: '/services/kitchen.jpg',
    alt: 'Kitchen Decor - Sophisticated modern kitchen with marble island and pendant lighting',
    icon: <KitchenHoodIcon />,
    link: '#kitchen-decor'
  },
  {
    id: 'wall-decor',
    titleLine1: 'Wall',
    titleLine2: 'Decor',
    image: '/services/wall.jpg',
    alt: 'Wall Decor - Contemporary vertical wood slats with abstract framed art and console',
    icon: <WallDecorIcon />,
    link: '#wall-decor'
  }
];

export default function Services({ onOpenStudio }) {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-wrapper">

        {/* Header Block */}
        <div className="services-header">
          <div className="eyebrow-container">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">OUR SPECIALIZATIONS</span>
            <span className="eyebrow-line"></span>
          </div>

          <h2 id="services-heading" className="services-title">
            See What We <span className="title-highlight">Offer to You</span>
          </h2>

          <p className="services-subtitle">
            Comprehensive décor and interior solutions to enhance every space in your home or office.
          </p>
        </div>

        {/* 5 Equal Cards Grid */}
        <div className="services-grid" role="list">
          {servicesData.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="service-card"
              role="listitem"
              onClick={(e) => {
                e.preventDefault();
                onOpenStudio && onOpenStudio(service.id);
              }}
            >
              {/* Image Container with high-res object-fit image */}
              <div className="card-image-wrapper">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card Footer with icon, 2-line title, and circle arrow */}
              <div className="card-footer">
                <div className="card-footer-left">
                  <div className="icon-container">
                    {service.icon}
                  </div>
                  <h3 className="card-title">
                    <span>{service.titleLine1}</span>
                    <span>{service.titleLine2}</span>
                  </h3>
                </div>

                <CircularArrowIcon />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Button with flanking horizontal divider lines */}
        <div className="services-bottom-action">
          <span className="bottom-divider-line"></span>
          <a
            href="#all-services"
            className="btn-explore-services"
            onClick={(e) => {
              e.preventDefault();
              onOpenStudio && onOpenStudio('living-room');
            }}
          >
            <span>Explore All Services</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <span className="bottom-divider-line"></span>
        </div>

      </div>
    </section>
  );
}


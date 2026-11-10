import React, { useState } from 'react';
import './Portfolio.css';

const portfolioProjects = [
  {
    id: 1,
    title: 'Palm Jumeirah Signature Villa',
    category: 'Living Room Decor',
    categoryId: 'living-room',
    location: 'Palm Jumeirah, Dubai',
    image: '/services/portfolio-1.jpg',
    tag: 'Villa Renovation',
  },
  {
    id: 2,
    title: 'Emirates Hills Grand Master Suite',
    category: 'Bed Room Decor',
    categoryId: 'bed-room',
    location: 'Emirates Hills, Dubai',
    image: '/services/portfolio-2.jpg',
    tag: 'Private Residence',
  },
  {
    id: 3,
    title: 'Downtown Sky Penthouse Drapery',
    category: 'Window Decor',
    categoryId: 'window-decor',
    location: 'Downtown Dubai',
    image: '/services/portfolio-3.jpg',
    tag: 'Motorized System',
  },
  {
    id: 4,
    title: 'Dubai Hills Estate Culinary Space',
    category: 'Kitchen Decor',
    categoryId: 'kitchen-decor',
    location: 'Dubai Hills, Dubai',
    image: '/services/portfolio-4.jpg',
    tag: 'Custom Joinery',
  },
  {
    id: 5,
    title: 'Jumeirah Bay Island Slat Accent Wall',
    category: 'Wall Decor',
    categoryId: 'wall-decor',
    location: 'Jumeirah Bay, Dubai',
    image: '/services/portfolio-5.jpg',
    tag: 'Architectural Wall',
  },
  {
    id: 6,
    title: 'Al Barari Living Room & Lounge',
    category: 'Living Room Decor',
    categoryId: 'living-room',
    location: 'Al Barari, Dubai',
    image: '/services/portfolio-6.jpg',
    tag: 'Full Turnkey',
  },
];

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'living-room', label: 'Living Rooms' },
  { id: 'bed-room', label: 'Bedrooms' },
  { id: 'window-decor', label: 'Window Curtains' },
  { id: 'kitchen-decor', label: 'Kitchens' },
  { id: 'wall-decor', label: 'Wall Decor' },
];

export default function Portfolio({ onOpenStudio }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.categoryId === activeFilter);

  return (
    <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="portfolio-wrapper">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="portfolio-eyebrow-wrap">
            <span className="p-line"></span>
            <span className="p-eyebrow">CURATED PORTFOLIO</span>
            <span className="p-line"></span>
          </div>

          <h2 id="portfolio-heading" className="portfolio-title">
            Featured <span className="highlight-bronze">Dubai Residences</span>
          </h2>

          <p className="portfolio-subtitle">
            Explore our curated residential transformations across Dubai's most prestigious enclaves.
          </p>

          {/* Filter Pills */}
          <div className="portfolio-filters" role="tablist" aria-label="Portfolio filters">
            {filterCategories.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              onClick={() => onOpenStudio && onOpenStudio(project.categoryId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenStudio && onOpenStudio(project.categoryId);
                }
              }}
            >
              <div className="portfolio-image-box">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="portfolio-tag-badge">{project.tag}</span>
                <div className="portfolio-hover-overlay">
                  <span className="hover-explore-btn">
                    <span>Inspect in Studio</span>
                    <span className="arrow" aria-hidden="true">→</span>
                  </span>
                </div>
              </div>

              <div className="portfolio-card-info">
                <span className="portfolio-cat-label">{project.category}</span>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <span className="portfolio-loc">{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


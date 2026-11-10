import React from 'react';
import './Navbar.css';

export default function Navbar({ onOpenStudio }) {
  return (
    <header>
      <nav className="site-nav" aria-label="Main Navigation">
        <a href="#" className="brand-mark">Decor Dubai</a>
        <ul className="nav-links">
          <li>
            <a
              href="#studio"
              onClick={(e) => {
                e.preventDefault();
                onOpenStudio && onOpenStudio('living-room');
              }}
            >
              Decor Studio
            </a>
          </li>
          <li><a href="#services">Services</a></li>
          <li><a href="#philosophy">Philosophy</a></li>
        </ul>
        <a
          href="#inquire"
          className="nav-contact-btn"
          onClick={(e) => {
            e.preventDefault();
            onOpenStudio && onOpenStudio('living-room');
          }}
        >
          Inquire
        </a>
      </nav>
    </header>
  );
}


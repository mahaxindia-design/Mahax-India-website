import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import companyLogo from '../assets/mahax-logo-2.png';
import wehubLogo from '../assets/wehub-logo.png';
import telanganaGovtLogo from '../assets/telangana-govt-logo.png';
import { getWhatsAppLink } from '../utils/whatsapp';
import AnnouncementRibbon from './AnnouncementRibbon';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const whatsappMessage = "Hi MAHAX 👋 I'm interested in learning more about MAHAX.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-fixed-wrapper">
      <AnnouncementRibbon />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="navbar-brand-group">
            <a href="#" className="navbar-logo" style={{ textDecoration: 'none' }}>
              <img src={companyLogo} alt="Mahax" className="nav-logo-image" />
              <span className="logo-text">Mahax</span>
            </a>

            <div className="nav-collab-badge">
              <span className="nav-collab-x">✕</span>
              <div className="nav-collab-logos">
                <img src={wehubLogo} alt="WE Hub" className="nav-wehub-logo" />
                <img src={telanganaGovtLogo} alt="Govt of Telangana" className="nav-tg-logo" />
              </div>
              <span className="nav-collab-text">Govt of Telangana Ecosystem</span>
            </div>
          </div>

          <div className="navbar-links">
            <a href="#philosophy" className="nav-link">Philosophy</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#phasetwo" className="nav-link">Doorstep</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a 
              href={getWhatsAppLink(whatsappMessage)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary nav-btn" 
              style={{ textDecoration: 'none' }}
            >
              Book Now
            </a>
          </div>

          <button 
            type="button"
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#philosophy" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
          <a href="#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#phasetwo" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Doorstep Services</a>
          <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a 
            href={getWhatsAppLink(whatsappMessage)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary" 
            style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

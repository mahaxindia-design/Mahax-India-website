import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import companyLogo from '../assets/mahax-logo-2.png';
import { getWhatsAppLink } from '../utils/whatsapp';
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <img src={companyLogo} alt="Mahax India" className="nav-logo-image" />
          <span className="logo-text">Mahax India</span>
        </a>

        <div className="navbar-links">
          <a href="#philosophy" className="nav-link">Philosophy</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#phasetwo" className="nav-link">Doorstep</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href={getWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary nav-btn" style={{ textDecoration: 'none' }}>Book Now</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <a href={getWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Book Now</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import companyLogo from '../assets/mahax-logo-2.png';
import { getWhatsAppLink } from '../utils/whatsapp';
import './Footer.css';

const Footer = ({ onOpenCompanyProfile, onOpenLegalProfile }) => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="navbar-logo" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src={companyLogo} alt="Mahax" style={{ width: '32px', height: 'auto' }} />
              <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mahax India</span>
            </a>
            <p className="footer-desc">
              India's AI-First Urban Car Care Platform, Reimagined!
              Smarter Car Care. Cleaner Cities.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onOpenCompanyProfile('about'); }}>About</a></li>
              <li><a href="#leadership" onClick={(e) => { e.preventDefault(); onOpenCompanyProfile('leadership'); }}>Leadership</a></li>
              <li><a href="#nextgen" onClick={(e) => { e.preventDefault(); onOpenCompanyProfile('nextgen'); }}>Next-Gen Team</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#platform" onClick={(e) => { e.preventDefault(); onOpenCompanyProfile('platform'); }}>Platform</a></li>
              <li><a href="#impact" onClick={(e) => { e.preventDefault(); onOpenCompanyProfile('impact'); }}>Impact</a></li>
              <li><a href={getWhatsAppLink("Hi MAHAX 👋 I'm interested in learning more about MAHAX.")} target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Legal</h4>
            <ul>
              <li><a href="#cookie-policy" onClick={(e) => { e.preventDefault(); onOpenLegalProfile('cookie-policy'); }}>Cookie Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); onOpenLegalProfile('terms'); }}>Terms & Conditions</a></li>
              <li><a href="#refund-policy" onClick={(e) => { e.preventDefault(); onOpenLegalProfile('refund-policy'); }}>Refund & Cancellation Policy</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenLegalProfile('privacy'); }}>Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="text-accent" />
                <span>Hyderabad, Telangana, India - 500073</span>
              </li>
              <li>
                <Phone size={18} className="text-accent" />
                <a 
                  href={getWhatsAppLink("Hi MAHAX 👋 I'm interested in learning more about MAHAX.")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  +91 8978224891
                </a>
              </li>
              <li>
                <Mail size={18} className="text-accent" />
                <span>info@mahaxindia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Mahax India</p>
          <div className="footer-social-bottom">
            <a href="https://www.facebook.com/people/Mahax-India/61586127590204/" target="_blank" rel="noopener noreferrer"><FaFacebook size={18} /></a>
            <a href="https://x.com/Mahaxindia" target="_blank" rel="noopener noreferrer"><FaTwitter size={18} /></a>
            <a href="https://www.instagram.com/mahaxindia/" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
            <a href="https://www.linkedin.com/company/mahax-india/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} /></a>
            <a href="https://www.youtube.com/@MahaxIndia" target="_blank" rel="noopener noreferrer"><FaYoutube size={18} /></a>
            <a href={getWhatsAppLink("Hi MAHAX 👋 I'm interested in learning more about MAHAX.")} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import './AnnouncementRibbon.css';

const AnnouncementRibbon = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem('mahax_announcement_hidden') !== 'true';
  });

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('mahax_announcement_hidden', 'true');
  };

  if (!isVisible) return null;

  return (
    <aside className="announcement-ribbon" aria-label="Official Incubation Announcement">
      <div className="container announcement-container">
        <div className="announcement-content">
          <span className="announcement-tag">
            <span className="ribbon-pulse-dot"></span>
            <span className="tag-text">State Incubated</span>
          </span>

          <p className="announcement-message">
            <strong className="announcement-highlight">Official:</strong> Mahax is incubated & accelerated under{' '}
            <span className="wehub-mention">WE Hub</span>,{' '}
            <span className="tg-mention">Government of Telangana</span>
          </p>

          <a href="#ecosystem" className="announcement-cta">
            <span>Explore Collaboration</span>
            <ArrowRight size={14} className="cta-arrow" />
          </a>
        </div>

        <button 
          type="button"
          onClick={handleDismiss} 
          className="announcement-dismiss-btn"
          aria-label="Dismiss announcement"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
};

export default AnnouncementRibbon;

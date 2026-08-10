import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <div className="marquee-content">
          <span className="marquee-item">STANDARDIZED CAR CARE</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item text-accent">DOORSTEP CONVENIENCE</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item">WATER-EFFICIENT OPERATIONS</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item text-accent">TRAINED PROFESSIONALS</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item">COMPLETE SERVICE SETUP</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item text-accent">ACCOUNTABLE EXECUTION</span>
          <span className="marquee-separator">/</span>
        </div>
        {/* Duplicate for seamless looping */}
        <div className="marquee-content">
          <span className="marquee-item">STANDARDIZED CAR CARE</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item text-accent">DOORSTEP CONVENIENCE</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item">WATER-EFFICIENT OPERATIONS</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item text-accent">TRAINED PROFESSIONALS</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item">COMPLETE SERVICE SETUP</span>
          <span className="marquee-separator">/</span>
          <span className="marquee-item text-accent">ACCOUNTABLE EXECUTION</span>
          <span className="marquee-separator">/</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

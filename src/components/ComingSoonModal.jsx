import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import './ComingSoonModal.css';

const ComingSoonModal = ({ onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content glass-panel"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-icon-wrapper">
          <MapPin size={48} className="text-accent" />
          <motion.div 
            className="pulse-ring"
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        
        <h3 className="modal-title">Coming Soon to Your Area!</h3>
        <p className="modal-desc">
          We are currently expanding our premium doorstep car care services. 
          Phase 2 will be rolling out in your city shortly. Stay tuned!
        </p>
        
        <motion.button 
          className="btn-primary w-100 mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
        >
          Got it
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ComingSoonModal;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, X, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import './AppComingSoonModal.css';

const AppComingSoonModal = ({ isOpen, onClose, whatsappMessage }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="coming-soon-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="coming-soon-modal"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}><X size={24} /></button>
            
            <div className="icon-wrapper">
              <Smartphone size={48} className="text-accent" />
            </div>
            
            <h3>Mahax App Coming Soon!</h3>
            <p>We are launching our official Mahax App on the Play Store very soon for a seamless ordering experience.</p>
            <p className="highlight">Until then, you can easily place your order directly through WhatsApp!</p>
            
            <div className="action-buttons">
              <a 
                href={getWhatsAppLink(whatsappMessage)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none', width: '100%' }}
              >
                <MessageCircle size={20} /> Order via WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppComingSoonModal;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send } from 'lucide-react';
import './NewsletterPopup.css';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show the popup shortly after the website loads
    const timer = setTimeout(() => {
      // Check if user already closed it in this session (optional, keeping it simple for now)
      const hasClosed = sessionStorage.getItem('newsletter_closed');
      if (!hasClosed) {
        setIsVisible(true);
      }
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('newsletter_closed', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '4f08c118-b927-4752-bb53-c027f5d8d68c',
          email: email,
          subject: 'New Newsletter Subscription - Mahax India',
          from_name: 'Mahax Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubscribed(true);
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="newsletter-popup-container"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <button className="np-close-btn" onClick={handleClose} aria-label="Close">
            <X size={18} />
          </button>
          
          {!isSubscribed ? (
            <div className="np-content">
              <div className="np-icon-wrapper">
                <Mail size={24} className="text-accent" />
              </div>
              <h3 className="np-title">Stay Updated</h3>
              <p className="np-desc">
                Subscribe to our newsletter for exclusive offers, updates, and car care tips!
              </p>
              
              <form className="np-form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  className="np-input" 
                  placeholder="Enter your email address" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                {error && <p style={{color: '#ff4d4d', fontSize: '0.8rem', margin: '0'}}>{error}</p>}
                <button type="submit" className="np-submit-btn" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            </div>
          ) : (
            <div className="np-success">
              <div className="np-success-icon">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <span style={{ fontSize: '2rem' }}>🎉</span>
                </motion.div>
              </div>
              <h3 className="np-title">Thank You!</h3>
              <p className="np-desc">You've successfully subscribed to the Mahax newsletter.</p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;

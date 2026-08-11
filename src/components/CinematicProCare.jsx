import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Droplet, Layers, X, Download, Sparkles, Feather, Maximize, CheckCircle, Wind, Eye, RefreshCw, Hand, Car } from 'lucide-react';
import towelMaroon from '../assets/towel-maroon.jpg';
import towelBlue from '../assets/towel-blue.png';
import towelYellow from '../assets/towel-yellow.jpg';
import { getWhatsAppLink } from '../utils/whatsapp';
import AppComingSoonModal from './AppComingSoonModal';
import './CinematicProCare.css';

const CinematicProCare = ({ onClose }) => {
  const overlayRef = useRef(null);
  const [showAppModal, setShowAppModal] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
    // Also reset with timeout to ensure Safari layout pass doesn't override it
    const timer = setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.scrollTop = 0;
      }
    }, 50);
    return () => { 
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, []);

  // Track scroll inside the full-screen overlay
  const { scrollYProgress } = useScroll({
    container: overlayRef
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) {
      setActiveIndex(0);
    } else if (latest >= 0.28 && latest < 0.58) {
      setActiveIndex(1);
    } else if (latest >= 0.58 && latest < 0.83) {
      setActiveIndex(2);
    } else {
      setActiveIndex(3);
    }
  });

  // Background glow opacity
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className="cinematic-overlay" ref={overlayRef}>
      <button className="close-cinematic" onClick={onClose}>
        <X size={32} />
      </button>

      {/* The scrollable height that drives the animation */}
      <div className="cinematic-scroll-track">
        <div className="cinematic-sticky">
          
          <motion.div className="cinematic-glow" style={{ opacity: glowOpacity }} />

          <div className="cinematic-text-area">
            <AnimatePresence mode="wait">
              {activeIndex === 0 && (
                <motion.div 
                  key="p1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="cinematic-text-content"
                >
                  <h4 className="text-accent">Mahax's ProCare™</h4>
                  <h2>1200 GSM<br/>Ultra Plush</h2>
                  <p>Premium edgeless finishing cloth. Engineered for maximum safety and scratch prevention on all exterior surfaces.</p>
                  <ul className="spec-list">
                    <li><ShieldCheck size={18} className="text-accent" /> Scratch Free</li>
                    <li><Droplet size={18} className="text-accent" /> High Absorbency</li>
                    <li><Sparkles size={18} className="text-accent" /> Lint-Free Finish</li>
                    <li><Feather size={18} className="text-accent" /> Ultra-Soft Microfiber</li>
                    <li><RefreshCw size={18} className="text-accent" /> Machine Washable</li>
                    <li><ShieldCheck size={18} className="text-accent" /> Long-Lasting Durability</li>
                  </ul>
                </motion.div>
              )}

              {activeIndex === 1 && (
                <motion.div 
                  key="p2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="cinematic-text-content"
                >
                  <h4 className="text-accent">Mahax's ProCare™</h4>
                  <h2>600 GSM<br/>Performance</h2>
                  <p>40x60 cm heavy-duty microfiber. Trusted by professionals for waterless washing and intense cleaning.</p>
                  <ul className="spec-list">
                    <li><Layers size={18} className="text-accent" /> Professional Grade</li>
                    <li><ShieldCheck size={18} className="text-accent" /> Safe on Paint</li>
                    <li><Maximize size={18} className="text-accent" /> High Density Weave</li>
                    <li><CheckCircle size={18} className="text-accent" /> Streak-Free Cleaning</li>
                    <li><Hand size={18} className="text-accent" /> Easy Grip</li>
                    <li><Sparkles size={18} className="text-accent" /> Wax & Polish Ready</li>
                  </ul>
                </motion.div>
              )}

              {activeIndex === 2 && (
                <motion.div 
                  key="p3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="cinematic-text-content"
                >
                  <h4 className="text-accent">Mahax's ProCare™</h4>
                  <h2>400 GSM<br/>Utility Cloth</h2>
                  <p>40x40 cm superior care. Ideal for interior detailing, glass wiping, and general automotive care.</p>
                  <ul className="spec-list">
                    <li><Droplet size={18} className="text-accent" /> Multi-surface Safe</li>
                    <li><Layers size={18} className="text-accent" /> Reusable & Durable</li>
                    <li><Wind size={18} className="text-accent" /> Quick Drying</li>
                    <li><Eye size={18} className="text-accent" /> Perfect for Glass</li>
                    <li><Car size={18} className="text-accent" /> Interior & Exterior</li>
                    <li><Maximize size={18} className="text-accent" /> Precision Edges</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="cinematic-3d-stage">
            {/* Blue Towel */}
            <motion.div 
              className="cinematic-model" 
              animate={{ 
                x: activeIndex === 1 ? (isMobile ? "0%" : "20%") : (activeIndex < 1 ? "-150%" : "100%"),
                y: isMobile && activeIndex === 1 ? "80px" : "0px",
                z: activeIndex === 1 ? (isMobile ? 100 : 200) : (activeIndex < 1 ? -300 : -500),
                rotateY: activeIndex === 1 ? -15 : (activeIndex < 1 ? 30 : -45),
                scale: activeIndex === 1 ? (isMobile ? 0.9 : 1.3) : 0.5,
                opacity: activeIndex === 1 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={towelBlue} alt="Blue Towel" />
            </motion.div>

            {/* Yellow Towel */}
            <motion.div 
              className="cinematic-model" 
              animate={{ 
                x: activeIndex === 2 ? (isMobile ? "0%" : "20%") : (activeIndex === 3 ? "0%" : "150%"),
                y: isMobile && activeIndex === 2 ? "80px" : "0px",
                z: activeIndex === 2 ? (isMobile ? 100 : 200) : (activeIndex === 3 ? 0 : -300),
                rotateY: activeIndex === 2 ? -15 : (activeIndex === 3 ? 0 : -30),
                scale: activeIndex === 2 ? (isMobile ? 0.9 : 1.3) : (activeIndex === 3 ? (isMobile ? 0.8 : 1.0) : 0.5),
                opacity: activeIndex === 2 ? 1 : (activeIndex === 3 ? 0.4 : 0)
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={towelYellow} alt="Yellow Towel" />
            </motion.div>

            {/* Maroon Towel */}
            <motion.div 
              className="cinematic-model" 
              animate={{ 
                x: activeIndex === 0 ? (isMobile ? "0%" : "20%") : "100%",
                y: isMobile && activeIndex === 0 ? "80px" : "0px",
                z: activeIndex === 0 ? (isMobile ? 100 : 200) : -500,
                rotateY: activeIndex === 0 ? -15 : -45,
                scale: activeIndex === 0 ? (isMobile ? 0.9 : 1.3) : 0.5,
                opacity: activeIndex === 0 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={towelMaroon} alt="Maroon Towel" />
            </motion.div>
          </div>

          <motion.div 
            className="cinematic-final-card" 
            animate={{ 
              opacity: activeIndex === 3 ? 1 : 0,
              pointerEvents: activeIndex === 3 ? "auto" : "none"
            }}
            transition={{ duration: 0.4 }}
          >
            <h2>Mahax's ProCare™</h2>
            <p className="text-accent text-xl">3-PIECE COMPLETE KIT</p>
            <div className="final-price">₹1099/-</div>
            <p className="final-desc">Soft. Safe. Superior Care. Experience the future of urban car care.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/manual-procare.pdf" download className="btn-secondary outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Download size={18} />
                User Manual
              </a>
              <button className="btn-secondary" onClick={onClose}>Done Exploring</button>
              <button 
                onClick={() => setShowAppModal(true)} 
                className="btn-primary"
              >
                Buy Now
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <AppComingSoonModal 
        isOpen={showAppModal} 
        onClose={() => setShowAppModal(false)} 
        whatsappMessage="Hi MAHAX 👋 I'm interested in the ProCare Kit." 
      />
    </div>
  );
};

export default CinematicProCare;

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Maximize, Car, Minimize, ThumbsUp, Wind, X, Download, ZapOff, Feather, RefreshCw, RotateCcw, CheckCircle, Hand, Layers } from 'lucide-react';

// Using placeholder imports - ensure user saves files exactly as named
import prProduct1 from '../assets/proreach-1.png';
import prProduct2 from '../assets/proreach-2.png';
import prProduct3 from '../assets/proreach-3.png';
import { getWhatsAppLink } from '../utils/whatsapp';

// We reuse the CSS from ProCare since the structure is identical
import './CinematicProCare.css';
import AppComingSoonModal from './AppComingSoonModal';

const CinematicProReach = ({ onClose }) => {
  const overlayRef = useRef(null);
  const [showAppModal, setShowAppModal] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

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

  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div className="cinematic-overlay" ref={overlayRef}>
      <button className="close-cinematic" onClick={onClose}>
        <X size={32} />
      </button>

      <div className="cinematic-scroll-track">
        <div className="cinematic-sticky">
          
          <motion.div className="cinematic-glow" style={{ opacity: glowOpacity, background: 'radial-gradient(circle, rgba(255, 150, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />

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
                  <h4 className="text-accent" style={{ color: '#ff7700' }}>Mahax's ProReach™</h4>
                  <h2>Long Reach<br/>Duster</h2>
                  <p>Extended reach for exterior surfaces. Designed for complete and effortless vehicle dusting.</p>
                  <ul className="spec-list">
                    <li><Maximize size={18} style={{ color: '#ff7700' }} /> Exterior Reach</li>
                    <li><ShieldCheck size={18} style={{ color: '#ff7700' }} /> Safe on every surface</li>
                    <li><Maximize size={18} style={{ color: '#ff7700' }} /> Telescopic Handle</li>
                    <li><Wind size={18} style={{ color: '#ff7700' }} /> Traps Heavy Dust</li>
                    <li><ShieldCheck size={18} style={{ color: '#ff7700' }} /> Non-Scratch Base</li>
                    <li><CheckCircle size={18} style={{ color: '#ff7700' }} /> Quick Assembly</li>
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
                  <h4 className="text-accent" style={{ color: '#ff7700' }}>Mahax's ProReach™</h4>
                  <h2>Compact<br/>Handheld Duster</h2>
                  <p>Ergonomic design perfectly sized for intricate interior detailing and accessing tight spaces.</p>
                  <ul className="spec-list">
                    <li><Car size={18} style={{ color: '#ff7700' }} /> Interior Detailing</li>
                    <li><Minimize size={18} style={{ color: '#ff7700' }} /> Crevice Cleaning</li>
                    <li><ZapOff size={18} style={{ color: '#ff7700' }} /> Anti-Static Bristles</li>
                    <li><Feather size={18} style={{ color: '#ff7700' }} /> Lightweight Design</li>
                    <li><Car size={18} style={{ color: '#ff7700' }} /> Dashboard Friendly</li>
                    <li><Minimize size={18} style={{ color: '#ff7700' }} /> Easy to Store</li>
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
                  <h4 className="text-accent" style={{ color: '#ff7700' }}>Mahax's ProReach™</h4>
                  <h2>Microfiber<br/>Cleaning Glove</h2>
                  <p>Glove-style cleaning for precision areas. Traps and lifts dust, not just moves it around.</p>
                  <ul className="spec-list">
                    <li><Wind size={18} style={{ color: '#ff7700' }} /> Dust Control</li>
                    <li><ThumbsUp size={18} style={{ color: '#ff7700' }} /> Ergonomic & Easy</li>
                    <li><RefreshCw size={18} style={{ color: '#ff7700' }} /> Machine Washable</li>
                    <li><RotateCcw size={18} style={{ color: '#ff7700' }} /> 360° Cleaning</li>
                    <li><Hand size={18} style={{ color: '#ff7700' }} /> One Size Fits All</li>
                    <li><Layers size={18} style={{ color: '#ff7700' }} /> Extra Thick Strands</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="cinematic-3d-stage">
            {/* Product 2 */}
            <motion.div 
              className="cinematic-model" 
              animate={{ 
                x: activeIndex === 1 ? "20%" : (activeIndex < 1 ? "-150%" : "100%"),
                z: activeIndex === 1 ? 200 : (activeIndex < 1 ? -300 : -500),
                rotateY: activeIndex === 1 ? -15 : (activeIndex < 1 ? 30 : -45),
                scale: activeIndex === 1 ? 1.3 : 0.5,
                opacity: activeIndex === 1 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={prProduct2} alt="ProReach Product 2" />
            </motion.div>

            {/* Product 3 */}
            <motion.div 
              className="cinematic-model" 
              animate={{ 
                x: activeIndex === 2 ? "20%" : (activeIndex === 3 ? "0%" : "150%"),
                z: activeIndex === 2 ? 200 : (activeIndex === 3 ? 0 : -300),
                rotateY: activeIndex === 2 ? -15 : (activeIndex === 3 ? 0 : -30),
                scale: activeIndex === 2 ? 1.3 : (activeIndex === 3 ? 1.0 : 0.5),
                opacity: activeIndex === 2 ? 1 : (activeIndex === 3 ? 0.4 : 0)
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={prProduct3} alt="ProReach Product 3" />
            </motion.div>

            {/* Product 1 */}
            <motion.div 
              className="cinematic-model" 
              animate={{ 
                x: activeIndex === 0 ? "20%" : "100%",
                z: activeIndex === 0 ? 200 : -500,
                rotateY: activeIndex === 0 ? -15 : -45,
                scale: activeIndex === 0 ? 1.3 : 0.5,
                opacity: activeIndex === 0 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={prProduct1} alt="ProReach Product 1" />
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
            <h2>Mahax's ProReach™</h2>
            <p className="text-accent text-xl" style={{ color: '#ff7700' }}>DUSTER SYSTEM</p>
            <div className="final-price" style={{ color: '#ff7700' }}>₹1099/-</div>
            <p className="final-desc">Premium quality. Unmatched value.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/manual-proreach.pdf" download className="btn-secondary outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
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
        whatsappMessage="Hi MAHAX 👋 I'm interested in the ProReach Kit." 
      />
    </div>
  );
};

export default CinematicProReach;

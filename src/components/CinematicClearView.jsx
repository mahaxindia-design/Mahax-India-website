import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Droplet, Layers, X, Eye, Download, Hand, CloudOff, Maximize, RefreshCw, CheckCircle, Wind } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

// Using placeholder imports - ensure user saves files exactly as named
import cvProduct1 from '../assets/clearview-1.png';
import cvProduct2 from '../assets/clearview-2.png';
import cvProduct3 from '../assets/clearview-3.png';

// We reuse the CSS from ProCare since the structure is identical
import './CinematicProCare.css';
import AppComingSoonModal from './AppComingSoonModal';

const CinematicClearView = ({ onClose }) => {
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
          
          <motion.div className="cinematic-glow" style={{ opacity: glowOpacity, background: 'radial-gradient(circle, rgba(0, 150, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />

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
                  <h4 className="text-accent" style={{ color: '#00a8ff' }}>Mahax's ClearView™</h4>
                  <h2>Oil Film<br/>Treatment Brush</h2>
                  <p>Removes stubborn windshield residue and oil film buildup for crystal clear visibility.</p>
                  <ul className="spec-list">
                    <li><Eye size={18} style={{ color: '#00a8ff' }} /> Improved Visibility</li>
                    <li><ShieldCheck size={18} style={{ color: '#00a8ff' }} /> Removes Buildup</li>
                    <li><Hand size={18} style={{ color: '#00a8ff' }} /> Ergonomic Handle</li>
                    <li><Layers size={18} style={{ color: '#00a8ff' }} /> Even Coverage</li>
                    <li><RefreshCw size={18} style={{ color: '#00a8ff' }} /> Reusable Applicator</li>
                    <li><ShieldCheck size={18} style={{ color: '#00a8ff' }} /> Heavy-Duty Scrubber</li>
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
                  <h4 className="text-accent" style={{ color: '#00a8ff' }}>Mahax's ClearView™</h4>
                  <h2>Windshield<br/>Glass Cleanser</h2>
                  <p>Improves clarity and significantly reduces glare during day and night driving.</p>
                  <ul className="spec-list">
                    <li><Eye size={18} style={{ color: '#00a8ff' }} /> Reduced Night Glare</li>
                    <li><Droplet size={18} style={{ color: '#00a8ff' }} /> Superior Clarity</li>
                    <li><CloudOff size={18} style={{ color: '#00a8ff' }} /> Anti-Fog Formula</li>
                    <li><ShieldCheck size={18} style={{ color: '#00a8ff' }} /> Repels Water</li>
                    <li><Eye size={18} style={{ color: '#00a8ff' }} /> Safe for Tinted Glass</li>
                    <li><CheckCircle size={18} style={{ color: '#00a8ff' }} /> No Harsh Chemicals</li>
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
                  <h4 className="text-accent" style={{ color: '#00a8ff' }}>Mahax's ClearView™</h4>
                  <h2>AC Vent<br/>Cleaner</h2>
                  <p>Helps eliminate dust, odors and trapped contaminants from air vents.</p>
                  <ul className="spec-list">
                    <li><Layers size={18} style={{ color: '#00a8ff' }} /> Cleaner Cabin Air</li>
                    <li><ShieldCheck size={18} style={{ color: '#00a8ff' }} /> Fresh Driving Experience</li>
                    <li><Maximize size={18} style={{ color: '#00a8ff' }} /> Reaches Deep Crevices</li>
                    <li><RefreshCw size={18} style={{ color: '#00a8ff' }} /> Washable Brush Head</li>
                    <li><Layers size={18} style={{ color: '#00a8ff' }} /> Dual-Ended Design</li>
                    <li><Wind size={18} style={{ color: '#00a8ff' }} /> Removes Bad Odors</li>
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
              <img src={cvProduct2} alt="ClearView Product 2" />
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
              <img src={cvProduct3} alt="ClearView Product 3" />
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
              <img src={cvProduct1} alt="ClearView Product 1" />
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
            <h2>Mahax's ClearView™</h2>
            <p className="text-accent text-xl" style={{ color: '#00a8ff' }}>& CABIN CARE SYSTEM</p>
            <div className="final-price" style={{ color: '#00a8ff' }}>₹1099/-</div>
            <p className="final-desc">Engineered for superior visibility and complete glass & cabin care.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/manual-clearview.pdf" download className="btn-secondary outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
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
        whatsappMessage="Hi MAHAX 👋 I'm interested in the ClearView Kit." 
      />
    </div>
  );
};

export default CinematicClearView;

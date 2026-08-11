import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // -- PRODUCT 1 (Focused instantly at scroll 0) --
  const p1X = useTransform(scrollYProgress, [0, 0.25, 0.35], ["20%", "20%", "100%"]);
  const p1Z = useTransform(scrollYProgress, [0, 0.25, 0.35], [200, 200, -500]);
  const p1RotateY = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [-15, 10, -15, -45]);
  const p1Scale = useTransform(scrollYProgress, [0, 0.25, 0.35], [1.3, 1.3, 0.5]);
  const p1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);

  // -- PRODUCT 2 (Hidden left, moves to focus second) --
  const p2X = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], ["-150%", "-150%", "20%", "20%", "100%"]);
  const p2Z = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], [-300, -300, 200, 200, -500]);
  const p2RotateY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.45, 0.55, 0.65], [30, 30, -15, 10, -15, -45]);
  const p2Scale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], [0.5, 0.5, 1.3, 1.3, 0.5]);
  const p2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], [0.3, 0.3, 1, 1, 0]);

  // -- PRODUCT 3 (Hidden right, moves to focus third, then centers behind final card) --
  const p3X = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], ["150%", "150%", "20%", "20%", "0%"]);
  const p3Z = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], [-300, -300, 200, 200, 0]);
  const p3RotateY = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.75, 0.8, 0.9], [-30, -30, -15, 10, -15, 0]);
  const p3Scale = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], [0.5, 0.5, 1.3, 1.3, 1]);
  const p3Opacity = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], [0.3, 0.3, 1, 1, 1]);

  // -- TEXT ANIMATIONS (With explicit gaps to prevent overlap) --
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3], [1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.3], [0, 0, -40, -40]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.55, 0.6, 0.65], [0, 0, 1, 1, 0, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.55, 0.6, 0.65], [40, 40, 0, 0, -40, -40]);

  const text3Opacity = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.8, 0.85, 0.9], [0, 0, 1, 1, 0, 0]);
  const text3Y = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.8, 0.85, 0.9], [40, 40, 0, 0, -40, -40]);

  const finalSummaryOpacity = useTransform(scrollYProgress, [0.8, 0.85, 0.9, 1.0], [0, 0, 1, 1]);

  return (
    <div className="cinematic-overlay" ref={overlayRef}>
      <button className="close-cinematic" onClick={onClose}>
        <X size={32} />
      </button>

      <div className="cinematic-scroll-track">
        <div className="cinematic-sticky">
          
          <motion.div className="cinematic-glow" style={{ opacity: glowOpacity, background: 'radial-gradient(circle, rgba(255, 150, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />

          <div className="cinematic-text-area">
            {/* Product 1 Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text1Opacity, y: text1Y }}>
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

            {/* Product 2 Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text2Opacity, y: text2Y }}>
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

            {/* Product 3 Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text3Opacity, y: text3Y }}>
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
          </div>

          <div className="cinematic-3d-stage">
            <motion.div className="cinematic-model" style={{ x: p2X, z: p2Z, rotateY: p2RotateY, scale: p2Scale, opacity: p2Opacity }}>
              <img src={prProduct2} alt="ProReach Product 2" />
            </motion.div>
            <motion.div className="cinematic-model" style={{ x: p3X, z: p3Z, rotateY: p3RotateY, scale: p3Scale, opacity: p3Opacity }}>
              <img src={prProduct3} alt="ProReach Product 3" />
            </motion.div>
            <motion.div className="cinematic-model" style={{ x: p1X, z: p1Z, rotateY: p1RotateY, scale: p1Scale, opacity: p1Opacity }}>
              <img src={prProduct1} alt="ProReach Product 1" />
            </motion.div>
          </div>

          <motion.div className="cinematic-final-card" style={{ opacity: finalSummaryOpacity }}>
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

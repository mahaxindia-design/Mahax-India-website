import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Droplet, Layers, X, Eye, Download, Hand, CloudOff, Maximize, RefreshCw, CheckCircle, Wind } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

// Using placeholder imports - ensure user saves files exactly as named
import cvProduct1 from '../assets/clearview-3.png';
import cvProduct2 from '../assets/clearview-2.png';
import cvProduct3 from '../assets/clearview-1.png';

// We reuse the CSS from ProCare since the structure is identical
import './CinematicProCare.css';
import AppComingSoonModal from './AppComingSoonModal';

const CinematicClearView = ({ onClose }) => {
  const overlayRef = useRef(null);
  const [showAppModal, setShowAppModal] = React.useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
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
          
          <motion.div className="cinematic-glow" style={{ opacity: glowOpacity, background: 'radial-gradient(circle, rgba(0, 150, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} />

          <div className="cinematic-text-area">
            {/* Product 1 Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text1Opacity, y: text1Y }}>
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

            {/* Product 2 Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text2Opacity, y: text2Y }}>
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

            {/* Product 3 Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text3Opacity, y: text3Y }}>
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
          </div>

          <div className="cinematic-3d-stage">
            <motion.div className="cinematic-model" style={{ x: p2X, z: p2Z, rotateY: p2RotateY, scale: p2Scale, opacity: p2Opacity }}>
              <img src={cvProduct2} alt="ClearView Product 2" />
            </motion.div>
            <motion.div className="cinematic-model" style={{ x: p3X, z: p3Z, rotateY: p3RotateY, scale: p3Scale, opacity: p3Opacity }}>
              <img src={cvProduct3} alt="ClearView Product 3" />
            </motion.div>
            <motion.div className="cinematic-model" style={{ x: p1X, z: p1Z, rotateY: p1RotateY, scale: p1Scale, opacity: p1Opacity }}>
              <img src={cvProduct1} alt="ClearView Product 1" />
            </motion.div>
          </div>

          <motion.div className="cinematic-final-card" style={{ opacity: finalSummaryOpacity }}>
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

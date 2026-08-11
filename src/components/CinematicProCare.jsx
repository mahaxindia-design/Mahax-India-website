import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  // Track scroll inside the full-screen overlay
  const { scrollYProgress } = useScroll({
    container: overlayRef
  });

  // Background glow opacity
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // -- MAROON TOWEL (Focused instantly at scroll 0) --
  const maroonX = useTransform(scrollYProgress, [0, 0.25, 0.35], ["20%", "20%", "100%"]);
  const maroonZ = useTransform(scrollYProgress, [0, 0.25, 0.35], [200, 200, -500]);
  const maroonRotateY = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [-15, 10, -15, -45]);
  const maroonScale = useTransform(scrollYProgress, [0, 0.25, 0.35], [1.3, 1.3, 0.5]);
  const maroonOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);

  // -- BLUE TOWEL (Hidden left, moves to focus second) --
  const blueX = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], ["-150%", "-150%", "20%", "20%", "100%"]);
  const blueZ = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], [-300, -300, 200, 200, -500]);
  const blueRotateY = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.45, 0.55, 0.65], [30, 30, -15, 10, -15, -45]);
  const blueScale = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], [0.5, 0.5, 1.3, 1.3, 0.5]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65], [0.3, 0.3, 1, 1, 0]);

  // -- YELLOW TOWEL (Hidden right, moves to focus third, then centers behind final card) --
  const yellowX = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], ["150%", "150%", "20%", "20%", "0%"]);
  const yellowZ = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], [-300, -300, 200, 200, 0]);
  const yellowRotateY = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.75, 0.8, 0.9], [-30, -30, -15, 10, -15, 0]);
  const yellowScale = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], [0.5, 0.5, 1.3, 1.3, 1]);
  const yellowOpacity = useTransform(scrollYProgress, [0, 0.55, 0.65, 0.8, 0.9], [0.3, 0.3, 1, 1, 1]);

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

      {/* The scrollable height that drives the animation */}
      <div className="cinematic-scroll-track">
        <div className="cinematic-sticky">
          
          <motion.div className="cinematic-glow" style={{ opacity: glowOpacity }} />

          <div className="cinematic-text-area">
            {/* Maroon Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text1Opacity, y: text1Y }}>
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

            {/* Blue Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text2Opacity, y: text2Y }}>
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

            {/* Yellow Text */}
            <motion.div className="cinematic-text-content" style={{ opacity: text3Opacity, y: text3Y }}>
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
          </div>

          <div className="cinematic-3d-stage">
            <motion.div className="cinematic-model" style={{ x: blueX, z: blueZ, rotateY: blueRotateY, scale: blueScale, opacity: blueOpacity }}>
              <img src={towelBlue} alt="Blue Towel" />
            </motion.div>
            <motion.div className="cinematic-model" style={{ x: yellowX, z: yellowZ, rotateY: yellowRotateY, scale: yellowScale, opacity: yellowOpacity }}>
              <img src={towelYellow} alt="Yellow Towel" />
            </motion.div>
            <motion.div className="cinematic-model" style={{ x: maroonX, z: maroonZ, rotateY: maroonRotateY, scale: maroonScale, opacity: maroonOpacity }}>
              <img src={towelMaroon} alt="Maroon Towel" />
            </motion.div>
          </div>

          <motion.div className="cinematic-final-card" style={{ opacity: finalSummaryOpacity }}>
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

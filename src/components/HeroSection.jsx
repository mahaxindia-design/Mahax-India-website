import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import carImage from '../assets/mahax-luxury-car.png';
import './HeroSection.css';

const HeroSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scaleCar = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const opacityCar = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  // For staggered text reveal
  const titleText = "INDIA'S AI-FIRST URBAN CAR CARE PLATFORM".split(" ");

  return (
    <section className="hero" ref={containerRef}>
      <motion.div className="hero-background" style={{ y: yBg }}>
        <motion.div 
          className="gradient-blob blob-1"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="gradient-blob blob-2"
          animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          style={{ y: yText, opacity: opacityText }}
        >
          <motion.div 
            className="badge glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles size={16} className="text-accent" />
            <span>Urban Car Care Platform, Reimagined!</span>
          </motion.div>
          
          <h1 className="hero-title">
            {titleText.map((word, i) => (
              <span key={i} className="word-wrap">
                <motion.span
                  className={word === "URBAN" || word === "CAR" || word === "CARE" ? "text-accent inline-block" : "inline-block"}
                  initial={{ y: "120%", opacity: 0, rotateZ: 5 }}
                  animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.3 + (i * 0.1), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Smarter Car Care. Cleaner Cities. We deliver consistent, professional service 
            standards while enabling controlled and responsible water usage.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a 
              href="#services" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services <ArrowRight size={18} className="inline-icon" />
            </motion.a>
            <motion.a 
              href="#about" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="stat-item">
              <span className="stat-value">Zero</span>
              <span className="stat-label">Fuel Use</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">AI</span>
              <span className="stat-label">Powered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Eco-Friendly</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          style={{ scale: scaleCar, opacity: opacityCar }}
        >
          <motion.div 
            className="car-image-container"
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <img src={carImage} alt="Mahax Premium Car Care" className="hero-car-image" />
              <div className="glow-effect"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

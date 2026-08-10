import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #ff6b00, #ff8c00)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 9999999,
        boxShadow: '0 0 15px rgba(255, 107, 0, 0.8)'
      }}
    />
  );
};

export default ScrollProgress;

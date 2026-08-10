import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import kitClearView from '../assets/kit-clearview.png';
import kitProCare from '../assets/kit-procare.png';
import kitProReach from '../assets/kit-proreach.png';
import CinematicProCare from './CinematicProCare';
import CinematicClearView from './CinematicClearView';
import CinematicProReach from './CinematicProReach';
import Tilt from 'react-parallax-tilt';
import './Products.css';

const kits = [
  {
    id: 'clearview',
    title: 'Mahax\'s ClearView™',
    desc: 'Advanced Glass Care System',
    image: kitClearView,
    price: '₹1099'
  },
  {
    id: 'procare',
    title: 'Mahax\'s ProCare™',
    desc: 'Premium Microfiber System',
    image: kitProCare,
    price: '₹1099'
  },
  {
    id: 'proreach',
    title: 'Mahax\'s ProReach™',
    desc: 'Extended Duster System',
    image: kitProReach,
    price: '₹1099'
  }
];

const Products = () => {
  const [activeKit, setActiveKit] = useState(null);

  return (
    <section id="products" className="kits-section">
      <div className="container">
        
        <div className="kits-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The <span className="text-accent">Mahax India's</span> Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineered systems for the perfect car care experience.
          </motion.p>
        </div>

        <div className="kits-grid">
          {kits.map((kit, index) => (
            <motion.div 
              key={kit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={2500}
                className="kit-card"
              >
                <div className="kit-image-wrapper">
                  <img src={kit.image} alt={kit.title} />
                </div>
                <div className="kit-content">
                  <h3>{kit.title}</h3>
                  <p>{kit.desc}</p>
                  <div className="kit-footer">
                    <span className="kit-price">{kit.price}</span>
                    <button 
                      className="btn-secondary outline"
                      onClick={() => setActiveKit(kit.id)}
                    >
                      Explore Kit
                    </button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Render Cinematic Overlay outside normal document flow */}
      <AnimatePresence>
        {activeKit === 'procare' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cinematic-portal"
          >
            <CinematicProCare onClose={() => setActiveKit(null)} />
          </motion.div>
        )}
        
        {activeKit === 'clearview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cinematic-portal"
          >
            <CinematicClearView onClose={() => setActiveKit(null)} />
          </motion.div>
        )}
        
        {activeKit === 'proreach' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cinematic-portal"
          >
            <CinematicProReach onClose={() => setActiveKit(null)} />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Products;

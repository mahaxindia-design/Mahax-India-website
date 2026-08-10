import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Cpu, Droplet, Users, CheckCircle2 } from 'lucide-react';
import './AboutPhilosophy.css';

const features = [
  {
    icon: <Settings size={32} />,
    title: "Complete Mobile Setup",
    desc: "Independent operations with our own RO water, dedicated power setup, and advanced machinery.",
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Standardized Service",
    desc: "Quality depends on the process, not the person. Every professional follows the exact same SOP for a consistent premium experience.",
  },
  {
    icon: <Cpu size={32} />,
    title: "AI Powered Operations",
    desc: "Smart scheduling, automated technician allocation, comprehensive service history, customer reminders, and quality tracking.",
  },
  {
    icon: <Droplet size={32} />,
    title: "Water Conservation",
    desc: "Traditional washes waste 250-350L of water. Mahax high-pressure equipment consumes only 80-90L while protecting your car's paint.",
  },
  {
    icon: <Users size={32} />,
    title: "Employment Generation",
    desc: "No random labor. We build trained professionals through skill development, uniforms, standard processes, and better income.",
  }
];

const AboutPhilosophy = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="philosophy" className="philosophy-section" ref={targetRef}>
      <div className="container">
        <motion.div className="philosophy-header" style={{ opacity }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We Fix The <span className="text-accent">Execution Layer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="philosophy-subtitle"
          >
            Building an execution platform that starts with Car Care and scales to solve large urban problems through technology, standardized operations, and employment generation.
          </motion.p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
              whileHover={{ scale: 1.02, translateY: -5 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;

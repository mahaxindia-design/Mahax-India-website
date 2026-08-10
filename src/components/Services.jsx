import React, { useRef } from 'react';
import { Shield, Zap, Droplet, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: <Zap size={32} />,
    title: "AI-Powered Diagnostics",
    description: "Our proprietary AI analyzes your vehicle's exterior condition and recommends the optimal eco-friendly treatment."
  },
  {
    id: 2,
    icon: <Droplet size={32} />,
    title: "Waterless Wash",
    description: "Save up to 200 liters of water per wash. Our advanced polymer formula lifts dirt and leaves a protective shine."
  },
  {
    id: 3,
    icon: <Shield size={32} />,
    title: "Ceramic Coating",
    description: "Long-lasting protection against UV rays, acid rain, and bird droppings. Keeps your car looking new for years."
  },
  {
    id: 4,
    icon: <Clock size={32} />,
    title: "On-Demand Service",
    description: "Book via our app and our trained professionals will arrive at your location within 60 minutes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="services" className="services-section" ref={targetRef}>
      <motion.div className="container" style={{ scale, opacity }}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">OUR SERVICES</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive car care solutions designed for the modern urban environment.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              className="service-card glass-panel"
              whileHover={{ 
                y: -15, 
                borderColor: "rgba(255, 90, 0, 0.5)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
            >
              <motion.div 
                className="service-icon-wrapper"
                whileHover={{ scale: 1.1, backgroundColor: "var(--accent-orange)", color: "#fff" }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Smartphone, UserCheck, Wrench, Zap, ClipboardCheck, MessageCircle, MapPinned } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';
import { getWhatsAppLink } from '../utils/whatsapp';
import './PhaseTwoServices.css';

const workflowSteps = [
  { icon: <Smartphone size={24} />, title: "Customer Opens App" },
  { icon: <UserCheck size={24} />, title: "Nearby Pro Assigned" },
  { icon: <Wrench size={24} />, title: "Comes With Equipment" },
  { icon: <DropletIcon />, title: "Uses Own RO Water" }, // Using custom icon or reuse
  { icon: <Zap size={24} />, title: "Own Power Supply" },
  { icon: <ClipboardCheck size={24} />, title: "Standard SOP Executed" }
];

// Helper icon
function DropletIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
  );
}

const PhaseTwoServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="phasetwo" className="phase-two-section" ref={targetRef}>
      <motion.div className="container" style={{ scale, opacity }}>
        <div className="phase-two-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Phase 2: <span className="text-accent">Doorstep Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="phase-two-subtitle"
          >
            Operated via the Mahax App and direct Web/WhatsApp integration.
          </motion.p>
        </div>

        <div className="special-box glass-panel">
          <h3>What makes Mahax Special here?</h3>
          <p className="highlight-text">1. Doorstep Professional Car Care</p>
          <div className="benefits-row">
            <span className="benefit-tag">Time Save</span>
            <span className="benefit-tag">Fuel Save</span>
            <span className="benefit-tag">Traffic Reduces</span>
          </div>
        </div>

        <div className="workflow-container">
          <h3 className="workflow-title">The Workflow</h3>
          <div className="workflow-path">
            {workflowSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="workflow-node"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, type: "spring" }}
              >
                <div className="node-icon">{step.icon}</div>
                <div className="node-title">{step.title}</div>
                {index < workflowSteps.length - 1 && <div className="connector-line"></div>}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="phase-two-actions">
          <a 
            href={getWhatsAppLink("Hi MAHAX 👋 I'm interested in MAHAX doorstep car-care services.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary flex-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            Book Service <MapPinned size={18} />
          </a>
          
          <motion.button 
            className="btn-secondary flex-center gap-2 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            <MessageCircle size={18} /> Book via WhatsApp
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <ComingSoonModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default PhaseTwoServices;

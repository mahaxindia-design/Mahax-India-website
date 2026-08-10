import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: "How much water does Mahax save per wash?",
    answer: "Our specialized waterless and low-water techniques save up to 200 liters of water per wash compared to traditional methods. We use advanced eco-friendly polymers that lift dirt without requiring high-pressure hoses."
  },
  {
    id: 2,
    question: "What is AI-powered car care?",
    answer: "Our technicians use AI-assisted tools to scan your vehicle's exterior condition. This helps us recommend the exact treatment needed for your paint type and condition, ensuring optimal protection without unnecessary upselling."
  },
  {
    id: 3,
    question: "Are your products safe for ceramic coatings?",
    answer: "Yes! All our products are pH-neutral and specifically formulated to be safe on all paint types, including vehicles with existing ceramic coatings, PPF (Paint Protection Film), and vinyl wraps."
  },
  {
    id: 4,
    question: "How long does a typical service take?",
    answer: "Our standard exterior care package takes about 45 minutes, while comprehensive interior and exterior detailing can take 2-3 hours depending on the vehicle's condition."
  },
  {
    id: 5,
    question: "Do you come to my location?",
    answer: "Yes, Mahax is an urban mobile car care platform. We come to your home, office, or apartment complex. You just need to unlock your vehicle if you've requested interior services."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h2 className="faq-title">
            FREQUENTLY ASKED<br/>
            <span className="text-accent">QUESTIONS</span>
          </h2>
        </motion.div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`faq-item ${openId === item.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(item.id)}
              >
                <span>{item.question}</span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`faq-icon ${openId === item.id ? 'text-accent' : ''}`} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div 
                    className="faq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

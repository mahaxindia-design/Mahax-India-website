import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, ExternalLink, Users, Leaf, Cpu } from 'lucide-react';
import telanganaGovtLogo from '../assets/telangana-govt-logo.png';
import wehubLogo from '../assets/wehub-logo.png';
import mahaxLogo from '../assets/mahax-logo-2.png';
import './EcosystemCollab.css';

const EcosystemCollab = () => {
  return (
    <section id="ecosystem" className="ecosystem-section">
      <div className="container">
        <motion.div 
          className="ecosystem-card glass-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Glows */}
          <div className="ecosystem-glow glow-tg"></div>
          <div className="ecosystem-glow glow-wehub"></div>

          {/* Top Pill */}
          <div className="ecosystem-header-badge">
            <span className="pulse-indicator"></span>
            <span className="badge-text-primary">Under the Ecosystem of</span>
            <strong className="badge-highlight">Government of Telangana</strong>
          </div>

          {/* Main Collab Title */}
          <div className="collab-title-container">
            <h2 className="collab-main-title">
              <span className="wehub-title">WE HUB</span>
              <span className="collab-cross">✕</span>
              <span className="mahax-title text-accent">MAHAX</span>
            </h2>
            <p className="collab-subtitle">
              Incubated & Accelerated under India's First State-Led Incubator for Women Entrepreneurs
            </p>
          </div>

          {/* Partner Logos Hub */}
          <div className="ecosystem-logos-wrapper">
            {/* Telangana Govt Logo Box */}
            <motion.div 
              className="logo-badge-card"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="logo-avatar-circle govt-circle">
                <img 
                  src={telanganaGovtLogo} 
                  alt="Government of Telangana Official Emblem" 
                  className="ecosystem-img tg-emblem" 
                />
              </div>
              <div className="logo-badge-meta">
                <span className="badge-role">State Government</span>
                <h4 className="badge-entity-name">Government of Telangana</h4>
                <span className="badge-sub">ITE&C Department</span>
              </div>
            </motion.div>

            {/* Connecting Connector 1 */}
            <div className="collab-connector">
              <span className="connector-line"></span>
              <span className="connector-icon">✕</span>
              <span className="connector-line"></span>
            </div>

            {/* WE Hub Logo Box */}
            <motion.div 
              className="logo-badge-card"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="logo-avatar-circle wehub-circle">
                <img 
                  src={wehubLogo} 
                  alt="WE Hub Telangana" 
                  className="ecosystem-img wehub-emblem" 
                />
              </div>
              <div className="logo-badge-meta">
                <span className="badge-role">State Incubator</span>
                <h4 className="badge-entity-name">WE Hub Telangana</h4>
                <span className="badge-sub">India's 1st State-Led Women Incubator</span>
              </div>
            </motion.div>

            {/* Connecting Connector 2 */}
            <div className="collab-connector">
              <span className="connector-line"></span>
              <span className="connector-icon">✕</span>
              <span className="connector-line"></span>
            </div>

            {/* Mahax Logo Box */}
            <motion.div 
              className="logo-badge-card highlight-card"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="logo-avatar-circle mahax-circle">
                <img 
                  src={mahaxLogo} 
                  alt="Mahax" 
                  className="ecosystem-img mahax-emblem" 
                />
              </div>
              <div className="logo-badge-meta">
                <span className="badge-role">Incubated Venture</span>
                <h4 className="badge-entity-name">Mahax</h4>
                <span className="badge-sub">AI-First Urban Car Care</span>
              </div>
            </motion.div>
          </div>

          {/* Value Pillars of the Collaboration */}
          <div className="ecosystem-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Award size={22} className="text-accent" />
              </div>
              <div className="pillar-content">
                <h5>Women-Led Enterprise</h5>
                <p>
                  Anchored by Sujatha Tadkal (Chairperson & Proprietor), Mahax represents grassroots rural leadership scaling to nationwide urban innovation.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <ShieldCheck size={22} className="text-accent" />
              </div>
              <div className="pillar-content">
                <h5>State Institutional Support</h5>
                <p>
                  Mentored under the Government of Telangana's flagship WE Hub initiative, ensuring high compliance, governance, and scalable operations.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Leaf size={22} className="text-accent" />
              </div>
              <div className="pillar-content">
                <h5>Eco-Friendly Livelihoods</h5>
                <p>
                  Zero Fuel Use doorstep car care saving up to 80% water while building skilled, dignified employment for urban youth and professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="ecosystem-card-footer">
            <span className="verified-seal">
              <ShieldCheck size={16} /> Verified Telangana Government Ecosystem Venture
            </span>
            <a 
              href="https://wehub.telangana.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="wehub-link"
            >
              Learn about WE Hub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemCollab;

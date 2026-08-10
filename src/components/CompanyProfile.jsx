import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building, Users, Leaf, ArrowRight, Monitor, Zap } from 'lucide-react';
import companyLogo from '../assets/mahax-logo-2.png';
import './CompanyProfile.css';

const CompanyProfile = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const tabs = [
    { id: 'about', label: 'About', icon: <Building size={18} /> },
    { id: 'leadership', label: 'Leadership', icon: <Users size={18} /> },
    { id: 'nextgen', label: 'Next-Gen Team', icon: <Zap size={18} /> },
    { id: 'platform', label: 'Platform', icon: <Monitor size={18} /> },
    { id: 'impact', label: 'Impact', icon: <Leaf size={18} /> }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="company-profile-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="cp-header">
            <div className="cp-brand">
              <img src={companyLogo} alt="Mahax" style={{ width: '28px', height: 'auto' }} /> MAHAX
            </div>
            <button className="cp-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className="cp-container">
            <div className="cp-sidebar">
              <h2 className="cp-sidebar-title">Company</h2>
              <nav className="cp-nav">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`cp-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    <ArrowRight size={16} className="cp-arrow" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="cp-content">
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">About Us</span>
                    <h1 className="cp-title">A Responsible Platform for Urban Car Care in India</h1>
                    <p className="cp-lead">
                      Mahax is an AI-first urban car-care platform designed to standardise and responsibly deliver vehicle maintenance services across Indian cities.
                    </p>
                    <p className="cp-text">
                      Built as a platform rather than a local service business, Mahax combines technology, trained manpower, defined processes, and accountability systems to bring consistency and trust into urban car care.
                    </p>
                    <p className="cp-text">
                      Rooted in rural India, shaped by urban challenges, and designed for a national scale. Positioned as a women-led initiative, Mahax combines discipline, technology, and responsibility to build systems that last for generations.
                    </p>

                    <div className="cp-grid-2">
                      <div className="cp-card">
                        <h3>Our Mission</h3>
                        <p>To deliver reliable, responsible, and standardised urban car care through a system-led platform that replaces inconsistency with discipline and accountability.</p>
                      </div>
                      <div className="cp-card">
                        <h3>Our Vision</h3>
                        <p>To become India's most trusted and responsible urban car-care platform – improving cities, conserving resources, and creating dignified employment at scale.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'leadership' && (
                  <motion.div
                    key="leadership"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Leadership</span>
                    
                    <div className="cp-leader-section" style={{ marginBottom: '4rem' }}>
                      <h1 className="cp-title">Sujatha Tadkal</h1>
                      <p className="cp-subtitle">Chairperson & Proprietor</p>
                      
                      <div className="cp-glass-card">
                        <p className="cp-text" style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                          "Sujatha Tadkal serves as the Chairperson & Proprietor of Mahax India. As the legal owner of the enterprise, she anchors Mahax as a women-led MSME initiative rooted in rural India and built for national relevance."
                        </p>
                      </div>
                      
                      <p className="cp-text mt-6">
                        Her role focuses on governance, statutory compliance, and long-term stewardship, ensuring that Mahax operates with integrity in every layer.
                      </p>
                      <p className="cp-text">
                        Integrity drives every layer of Mahax—from service delivery and internal operations to partnerships and community engagement. It is non-negotiable and consistent. What we promise, define, or imply is always honored under her leadership.
                      </p>
                    </div>

                    <div className="cp-leader-section" style={{ marginBottom: '4rem' }}>
                      <h1 className="cp-title">Srinivasa Goud Tadkal</h1>
                      <p className="cp-subtitle">Founder</p>
                      
                      <div className="cp-glass-card">
                        <p className="cp-text" style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                          "Srinivasa Goud Tadkal is the Founder of Mahax India and the architect of its platform vision and national strategy. He conceptualised Mahax as an AI-first urban car-care platform to address systemic inefficiencies in time, fuel, water usage, traffic congestion and informal employment across Indian cities."
                        </p>
                      </div>
                      
                      <p className="cp-text mt-6">
                        As Founder, shaped by first-hand exposure to working and living environments in India, the United States and the United Kingdom, he leads platform design, business models, partnerships, pricing frameworks and long-term expansion strategy- ensuring Mahax is built as enduring urban infrastructure rather than a short-term service brand.
                      </p>
                    </div>

                    <div className="cp-leader-section">
                      <h1 className="cp-title">Mohd Taher Uddin</h1>
                      <p className="cp-subtitle">Co-Founder & Chief Executive Officer</p>
                      
                      <div className="cp-glass-card">
                        <p className="cp-text" style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                          "Mohd Taher Uddin serves as Co-Founder & CEO of Mahax India, bringing operational rigor, execution discipline and ground-level leadership to the platform."
                        </p>
                      </div>
                      
                      <p className="cp-text mt-6">
                        With several years of leadership experience in service delivery and operations, he has been instrumental in managing complex workflows, building teams and driving operational excellence.
                      </p>
                      <p className="cp-text">
                        As CEO, his approach blends strategic decision-making with executional capacity, ensuring that Mahax's vision translates into measurable outcomes on the ground. His leadership focuses on building robust operations, strong vendor relationships, quality assurance, and scalable processes that can grow across cities and service categories.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'nextgen' && (
                  <motion.div
                    key="nextgen"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Next-Generation Team</span>
                    
                    <div className="cp-leader-section" style={{ marginBottom: '3rem' }}>
                      <h1 className="cp-title" style={{ fontSize: '1.8rem' }}>Mahalakshmi Tadkal</h1>
                      <p className="cp-subtitle">Product Research Associate</p>
                      <p className="cp-text" style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Undergraduate | Malla Reddy Group of Institutions
                      </p>
                      <p className="cp-text">
                        Driving product research and innovation at Mahax India with a focus on next-generation car-care accessories, customer needs and responsible product solutions.
                      </p>
                      <p className="cp-text">
                        Bringing a research-oriented perspective to Mahax's vision of Urban Car Care, Reimagined!.
                      </p>
                    </div>

                    <div className="cp-leader-section">
                      <h1 className="cp-title" style={{ fontSize: '1.8rem' }}>Sai Charan Bollam</h1>
                      <p className="cp-subtitle">Business Development & Sustainability Associate</p>
                      <p className="cp-text" style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Undergraduate | Malla Reddy Group of Institutions
                      </p>
                      <p className="cp-text">
                        Supporting Mahax India's business development and sustainability vision by exploring market opportunities, customer ecosystems and responsible resource utilisation.
                      </p>
                      <p className="cp-text">
                        Contributing to Mahax's journey from grassroots innovation to a scalable national car-care ecosystem.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'platform' && (
                  <motion.div
                    key="platform"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">The Platform</span>
                    
                    <div className="cp-leader-section" style={{ marginBottom: '3rem' }}>
                      <h1 className="cp-title">Today’s Reality</h1>
                      <p className="cp-text">Across Indian cities, car care still follows an outdated model:</p>
                      <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                        <li>Vehicle owners drive several kilometres only for maintenance</li>
                        <li>Fuel is consumed without productive output</li>
                        <li>Time is lost waiting at service centers</li>
                        <li>Water usage is uncontrolled and excessive</li>
                        <li>Quality varies daily</li>
                        <li>Workers remain informal and unstructured</li>
                      </ul>
                      <p className="cp-text">These inefficiencies affect cities, customers and workers at scale.</p>
                      <p className="cp-text" style={{ marginTop: '1rem' }}><strong>India does not lack service providers. India lacks organized systems.</strong></p>
                    </div>

                    <div className="cp-leader-section" style={{ marginBottom: '3rem' }}>
                      <h1 className="cp-title">Mahax’s Platform</h1>
                      <p className="cp-text">Mahax is built as a platform-first system, where discipline replaces randomness.</p>
                      <p className="cp-text" style={{ marginTop: '1rem' }}>The Mahax platform ensures:</p>
                      <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                        <li>Standard operating procedures across locations</li>
                        <li>Measured and controlled use of resources</li>
                        <li>Digital accountability instead of manual dependency</li>
                        <li>Consistent service quality regardless of city</li>
                      </ul>
                    </div>

                    <div className="cp-leader-section" style={{ marginBottom: '3rem' }}>
                      <h1 className="cp-title">Technology & AI Enablement</h1>
                      <p className="cp-text">Mahax uses AI and technology only where it creates real operational value.</p>
                      <p className="cp-text" style={{ marginTop: '1rem' }}>Technology enables:</p>
                      <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                        <li>Intelligent scheduling and workflow management</li>
                        <li>Consistent service execution</li>
                        <li>Resource optimisation</li>
                        <li>Quality tracking and improvement</li>
                        <li>Transparent customer experience</li>
                      </ul>
                      <p className="cp-text" style={{ marginTop: '1rem' }}><strong>At Mahax, technology supports people – it does not replace them.</strong></p>
                    </div>

                    <div className="cp-leader-section" style={{ marginBottom: '3rem' }}>
                      <h1 className="cp-title">Governance & Trust</h1>
                      <p className="cp-text">Mahax is built with governance as a foundation.</p>
                      <p className="cp-text" style={{ marginTop: '1rem' }}>This includes:</p>
                      <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                        <li>Defined service standards</li>
                        <li>Clear accountability</li>
                        <li>Ethical operations</li>
                        <li>Compliance-oriented growth</li>
                      </ul>
                      <p className="cp-text" style={{ marginTop: '1rem' }}><strong>Trust is created through systems, not claims.</strong></p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'impact' && (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Impact</span>
                    <h1 className="cp-title">How Mahax Saves Resources (In Reality)</h1>
                    <p className="cp-lead">Smarter Car Care. Cleaner Cities. Better Livelihoods.</p>
                    
                    <div className="cp-impact-list">
                      <div className="cp-impact-item">
                        <div className="cp-impact-num">01</div>
                        <div>
                          <h3>Time</h3>
                          <p>Customers no longer need to plan their day around car care. Time saved becomes productivity gained.</p>
                        </div>
                      </div>
                      
                      <div className="cp-impact-item">
                        <div className="cp-impact-num">02</div>
                        <div>
                          <h3>Fuel & Traffic</h3>
                          <p>Eliminating unnecessary vehicle movement reduces fuel consumption, lowers congestion, and cuts emissions. At scale, small savings per vehicle translate into significant urban impact.</p>
                        </div>
                      </div>

                      <div className="cp-impact-item">
                        <div className="cp-impact-num">03</div>
                        <div>
                          <h3>Water Responsibility</h3>
                          <p>Controlled water usage, process-based application, and avoidance of excess consumption. Water conservation is operational, not promotional.</p>
                        </div>
                      </div>

                      <div className="cp-impact-item">
                        <div className="cp-impact-num">04</div>
                        <div>
                          <h3>Employment & Skill Development</h3>
                          <p>Mahax converts informal work into structured platform-based employment. We create formal onboarding, skill-based training, process discipline, safety and dignity, and stable earning opportunities.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompanyProfile;

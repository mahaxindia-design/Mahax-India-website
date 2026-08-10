import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ShieldCheck, RefreshCcw, Cookie, ArrowRight } from 'lucide-react';
import companyLogo from '../assets/mahax-logo-2.png';
import './CompanyProfile.css';

const LegalProfile = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const tabs = [
    { id: 'cookie-policy', label: 'Cookie Policy', icon: <Cookie size={18} /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText size={18} /> },
    { id: 'refund-policy', label: 'Refund Policy', icon: <RefreshCcw size={18} /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <ShieldCheck size={18} /> }
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
          style={{ zIndex: 999999 }}
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
              <h2 className="cp-sidebar-title">Legal</h2>
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
                {activeTab === 'cookie-policy' && (
                  <motion.div
                    key="cookie-policy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Cookie Policy</span>
                    <h1 className="cp-title">How We Use Cookies</h1>
                    <p className="cp-text">Last Updated: August 2026</p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>What Are Cookies</h3>
                    <p className="cp-text">
                      Cookies are small data files stored on your device to enhance website functionality and user experience.
                    </p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>How Mahax Uses Cookies</h3>
                    <p className="cp-text">
                      Mahax uses cookies to
                    </p>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Understand website usage</li>
                      <li style={{ marginBottom: '0.5rem' }}>Improve platform performance</li>
                      <li style={{ marginBottom: '0.5rem' }}>Remember user preferences</li>
                      <li style={{ marginBottom: '0.5rem' }}>Support analytics</li>
                    </ul>
                    <p className="cp-text">
                      Cookies do not store sensitive personal information.
                    </p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Managing Cookies</h3>
                    <p className="cp-text">
                      Users may choose to disable cookies through browser settings. However, some features of the platform may not function optimally.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'terms' && (
                  <motion.div
                    key="terms"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Terms & Conditions</span>
                    <h1 className="cp-title">Terms of Service</h1>
                    <p className="cp-text">Last Updated: August 2026</p>
                    <p className="cp-text">
                      Welcome to Mahax India. By accessing our website and purchasing our car care kits or using our doorstep services, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>1. Services & Products</h3>
                    <p className="cp-text">
                      We reserve the right to modify or discontinue any product or service without notice. Prices for our products are subject to change without notice.
                    </p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>2. User Obligations</h3>
                    <p className="cp-text">
                      You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You must not use our products for any illegal or unauthorized purpose.
                    </p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>3. Governing Law</h3>
                    <p className="cp-text">
                      These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of India, under the jurisdiction of courts in Hyderabad, Telangana.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'refund-policy' && (
                  <motion.div
                    key="refund-policy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Refund & Cancellation Policy</span>
                    <h1 className="cp-title">Returns and Refunds</h1>
                    <p className="cp-text">Last Updated: August 2026</p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Accessories Orders</h3>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Orders once dispatched cannot be cancelled</li>
                      <li style={{ marginBottom: '0.5rem' }}>Refunds are applicable only for:
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'circle' }}>
                          <li>Damaged products</li>
                          <li>Incorrect items delivered</li>
                        </ul>
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>Issues must be reported within 48 hours of delivery</li>
                    </ul>
                    <p className="cp-text">
                      Refunds, where approved will be processed to the original payment method within a reasonable timeframe.
                    </p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Doorstep Services (When Live)</h3>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Service bookings can be cancelled within the permitted time window shown during booking</li>
                      <li style={{ marginBottom: '0.5rem' }}>Late cancellations may attract charges</li>
                      <li style={{ marginBottom: '0.5rem' }}>No refund will be issued for services already delivered</li>
                    </ul>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Refund Method</h3>
                    <p className="cp-text">
                      All refunds will be processed digitally. Cash refunds are not supported.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'privacy' && (
                  <motion.div
                    key="privacy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="cp-pane"
                  >
                    <span className="cp-pane-badge">Privacy Policy</span>
                    <h1 className="cp-title">How We Protect Your Data</h1>
                    <p className="cp-text">Last Updated: August 2026</p>
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Introduction</h3>
                    <p className="cp-text">
                      Mahax India (“we”, “our”, “us”) respects the privacy of every individual who interacts with our platform. This Privacy Policy explains how information is collected, used, stored and protected when you visit our website, use our web app or engage with our services.
                    </p>
                    <p className="cp-text">
                      Mahax India is a national, technology-enabled urban car-care platform and we are committed to handling user data responsibly, transparently and in compliance with applicable Indian laws.
                    </p>
                    
                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Information We Collect</h3>
                    <p className="cp-text">We may collect the following categories of information:</p>
                    
                    <h4 style={{marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.1rem'}}>a. Personal Information</h4>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Address (for accessories/service delivery, when applicable)</li>
                    </ul>

                    <h4 style={{marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.1rem'}}>b. Transactional Information</h4>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li>Orders placed for accessories</li>
                      <li>Service bookings (when live)</li>
                      <li>Payment status (no card/UPI details are stored by us)</li>
                    </ul>

                    <h4 style={{marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.1rem'}}>c. Technical Information</h4>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Website usage data (for analytics and improvement)</li>
                    </ul>

                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>How We Use Information</h3>
                    <p className="cp-text">Information collected is used strictly for:</p>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li>Providing and improving our services</li>
                      <li>Processing orders and service requests</li>
                      <li>Customer support and communication</li>
                      <li>Platform analytics and performance optimisation</li>
                      <li>Legal and compliance purposes</li>
                    </ul>
                    <p className="cp-text"><strong>Mahax India does not sell or rent user data to third parties.</strong></p>

                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Data Protection & Security</h3>
                    <p className="cp-text">
                      We implement reasonable technical and organisational measures to protect data against unauthorised access, misuse, loss or alteration. Access to sensitive information is restricted to authorised personnel only.
                    </p>

                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Third-Party Services</h3>
                    <p className="cp-text">Mahax may use trusted third-party services for:</p>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li>Logistics</li>
                      <li>Payment processing</li>
                      <li>Analytics</li>
                      <li>Cloud hosting</li>
                    </ul>
                    <p className="cp-text">These providers are required to maintain confidentiality and data protection standards.</p>

                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>User Rights</h3>
                    <p className="cp-text">Users have the right to:</p>
                    <ul className="cp-text" style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                      <li>Access their personal data</li>
                      <li>Request correction or deletion</li>
                      <li>Withdraw consent where applicable</li>
                    </ul>
                    <p className="cp-text">Requests can be sent to: <strong>info@mahaxindia.com</strong></p>

                    <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Policy Updates</h3>
                    <p className="cp-text">
                      This Privacy Policy may be updated periodically to reflect operational or legal changes. Continued use of the platform constitutes acceptance of the updated policy.
                    </p>
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

export default LegalProfile;

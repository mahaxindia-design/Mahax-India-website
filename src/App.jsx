import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import Services from './components/Services';
import AboutPhilosophy from './components/AboutPhilosophy';
import Products from './components/Products';
import PhaseTwoServices from './components/PhaseTwoServices';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CompanyProfile from './components/CompanyProfile';
import LegalProfile from './components/LegalProfile';
import NewsletterPopup from './components/NewsletterPopup';
import AIChatbot from './components/AIChatbot';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  const [isCompanyProfileOpen, setIsCompanyProfileOpen] = useState(false);
  const [activeCompanyTab, setActiveCompanyTab] = useState('about');

  const [isLegalProfileOpen, setIsLegalProfileOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState('terms');

  const openCompanyProfile = (tab) => {
    setActiveCompanyTab(tab);
    setIsCompanyProfileOpen(true);
  };

  const openLegalProfile = (tab) => {
    setActiveLegalTab(tab);
    setIsLegalProfileOpen(true);
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutPhilosophy />
        <Products />
        <Services />
        <PhaseTwoServices />
        <FAQ />
      </main>
      <Footer 
        onOpenCompanyProfile={openCompanyProfile} 
        onOpenLegalProfile={openLegalProfile}
      />
      <CompanyProfile 
        isOpen={isCompanyProfileOpen}
        onClose={() => setIsCompanyProfileOpen(false)}
        activeTab={activeCompanyTab}
        setActiveTab={setActiveCompanyTab}
      />
      <LegalProfile 
        isOpen={isLegalProfileOpen}
        onClose={() => setIsLegalProfileOpen(false)}
        activeTab={activeLegalTab}
        setActiveTab={setActiveLegalTab}
      />
      <NewsletterPopup />
      <AIChatbot />
    </div>
  );
}

export default App;

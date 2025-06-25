
import React, { useState } from 'react';
import OverlayMenu from '../components/OverlayMenu';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import AboutPage from '../components/AboutPage';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return (
          <div className="pt-20">
            <ProjectsSection />
            <CaseStudiesSection />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20">
            <ContactSection />
          </div>
        );
      default:
        return (
          <>
            <HeroSection />
            <ProjectsSection />
            <CaseStudiesSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <OverlayMenu currentPage={currentPage} onNavigate={handleNavigation} />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Footer />
    </div>
  );
};

export default Index;

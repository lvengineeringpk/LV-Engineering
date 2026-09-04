import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SolutionDetailView } from './components/SolutionDetailView';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { HSEQPage } from './pages/HSEQPage';
import { ContactPage } from './pages/ContactPage';
import { PrincipalsPage } from './pages/PrincipalsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EngineeringToolsPage } from './pages/EngineeringToolsPage';
import { ProcessSection } from './components/ProcessSection';
import { SolarSection } from './components/SolarSection';
import { ElectricalServicesSection } from './components/ElectricalServicesSection';
import { ContactSection } from './components/ContactSection';
import { SOLUTIONS } from './data/companyData';
import { SolutionItem } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setConsultationModalOpen(true);
  };

  const handleSelectSolution = (solution: SolutionItem) => {
    navigateTo(`/solutions/${solution.slug}`);
  };

  // Determine current view
  const renderCurrentView = () => {
    // Check for single solution deep dive route: /solutions/:slug
    if (currentPath.startsWith('/solutions/')) {
      const slug = currentPath.replace('/solutions/', '').trim();
      const matchedSolution = SOLUTIONS.find(
        (s) => s.slug === slug || s.id === slug
      );

      if (matchedSolution) {
        return (
          <SolutionDetailView
            solution={matchedSolution}
            onBack={() => navigateTo('/solutions')}
            onRequestConsultation={handleOpenConsultation}
          />
        );
      }
    }

    switch (currentPath) {
      case '/about':
        return (
          <AboutPage
            onRequestConsultation={handleOpenConsultation}
            onNavigate={navigateTo}
          />
        );

      case '/solutions':
        return (
          <SolutionsPage
            onSelectSolution={handleSelectSolution}
            onRequestConsultation={handleOpenConsultation}
          />
        );

      case '/industries':
        return (
          <IndustriesPage
            onRequestConsultation={handleOpenConsultation}
            onNavigate={navigateTo}
          />
        );

      case '/principals':
        return (
          <PrincipalsPage
            onSelectSolutionSlug={(slug) => navigateTo(`/solutions/${slug}`)}
            onRequestConsultation={handleOpenConsultation}
          />
        );

      case '/projects':
        return (
          <ProjectsPage
            onRequestConsultation={handleOpenConsultation}
          />
        );

      case '/tools':
        return (
          <EngineeringToolsPage />
        );

      case '/expertise':
        return (
          <div className="pt-24 bg-white min-h-screen">
            <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-[#1e73be] tracking-widest uppercase font-bold">
                    <span className="w-5 h-[2px] bg-[#1e73be]" />
                    <span>Technical Methodology</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
                    From System Design To Commissioning
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    A rigorous 7-step engineering protocol governing every electrical, automation, and life safety project.
                  </p>
                </div>
              </div>
            </section>
            <ProcessSection />
          </div>
        );

      case '/hseq':
        return (
          <HSEQPage onRequestConsultation={handleOpenConsultation} />
        );

      case '/solar':
        return (
          <div className="pt-20 bg-white min-h-screen">
            <SolarSection onRequestConsultation={handleOpenConsultation} />
            <ContactSection />
          </div>
        );

      case '/services':
        return (
          <div className="pt-20 bg-white min-h-screen">
            <ElectricalServicesSection onRequestConsultation={handleOpenConsultation} />
            <ContactSection />
          </div>
        );

      case '/contact':
        return (
          <ContactPage preselectedService={preselectedService} />
        );

      case '/':
      default:
        return (
          <HomePage
            onSelectSolution={handleSelectSolution}
            onRequestConsultation={handleOpenConsultation}
            onNavigate={navigateTo}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans flex flex-col selection:bg-red-500/20 selection:text-[#a81c24]">
      {/* Sticky Global Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onRequestConsultation={handleOpenConsultation}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Global Technical Footer */}
      <Footer
        onNavigate={navigateTo}
        onRequestConsultation={() => handleOpenConsultation()}
      />

      {/* Global Quick Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}

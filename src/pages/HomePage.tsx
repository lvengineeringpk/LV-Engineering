import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { MissionSection } from '../components/MissionSection';
import { SolutionsCarousel } from '../components/SolutionsCarousel';
import { ElectricalServicesSection } from '../components/ElectricalServicesSection';
import { SolarSection } from '../components/SolarSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { TechShowcase } from '../components/TechShowcase';
import { GlobalPrincipalsSection } from '../components/GlobalPrincipalsSection';
import { ProjectsPortfolioSection } from '../components/ProjectsPortfolioSection';
import { EngineeringCalculatorSuite } from '../components/EngineeringCalculatorSuite';
import { IndustriesSection } from '../components/IndustriesSection';
import { ProcessSection } from '../components/ProcessSection';
import { ValuePillars } from '../components/ValuePillars';
import { HSEQSection } from '../components/HSEQSection';
import { TechReferencesSection } from '../components/TechReferencesSection';
import { ContactSection } from '../components/ContactSection';
import { SolutionItem } from '../types';

interface HomePageProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onRequestConsultation: (serviceName?: string) => void;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectSolution,
  onRequestConsultation,
  onNavigate,
}) => {
  return (
    <div>
      {/* 01. Full-Screen Cinematic Hero with Carousel & Interactive 3D Visuals */}
      <Hero
        onExploreSolutions={() => {
          const el = document.getElementById('solutions-carousel');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('/solutions');
        }}
        onTalkToEngineer={() => onRequestConsultation()}
        onRequestQuote={() => onRequestConsultation('Technical Equipment Quote')}
        onContactUs={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('/contact');
        }}
        onSelectSolutionSlug={(slug) => onNavigate(`/solutions/${slug}`)}
      />

      {/* 02. Engineering Introduction */}
      <AboutSection
        onLearnMore={() => onNavigate('/about')}
        onRequestConsultation={() => onRequestConsultation()}
      />

      {/* 03. Mission & Core Principles (8 Principles) */}
      <MissionSection />

      {/* 04. Interactive Solutions Carousel (12 Engineering Disciplines) */}
      <SolutionsCarousel
        onSelectSolution={onSelectSolution}
        onRequestConsultation={onRequestConsultation}
      />

      {/* 05. Electrical Services Grid (21+ Engineering Specializations) */}
      <ElectricalServicesSection
        onRequestConsultation={onRequestConsultation}
      />

      {/* 06. Turnkey Solar Engineering & Renewable Solutions */}
      <SolarSection
        onRequestConsultation={onRequestConsultation}
      />

      {/* 07. Categorized Solutions Directory */}
      <SolutionsSection
        onSelectSolution={onSelectSolution}
        onViewAll={() => onNavigate('/solutions')}
      />

      {/* 08. Featured 3D Technology Showcase */}
      <TechShowcase
        onSelectSolution={onSelectSolution}
        onRequestConsultation={onRequestConsultation}
      />

      {/* 09. Global Principals & Technology Alliances */}
      <GlobalPrincipalsSection
        onSelectSolutionSlug={(slug) => onNavigate(`/solutions/${slug}`)}
        onRequestConsultation={onRequestConsultation}
      />

      {/* 10. Real-World Projects & Case Studies Portfolio */}
      <ProjectsPortfolioSection
        onRequestConsultation={onRequestConsultation}
      />

      {/* 11. Engineering Calculators & Sizing Suite */}
      <EngineeringCalculatorSuite />

      {/* 12. Industries Engineered for Demanding Environments */}
      <IndustriesSection
        onRequestConsultation={onRequestConsultation}
      />

      {/* 13. Engineering Journey & Protocol */}
      <ProcessSection />

      {/* 14. Why LV Engineering (Quality, Technical Expertise, Reliability, Client Focus) */}
      <ValuePillars />

      {/* 15. HSEQ Commitment & Safety Protocols (8 Core Mandates) */}
      <HSEQSection onLearnMore={() => onNavigate('/hseq')} />

      {/* 16. Technology & Product References */}
      <TechReferencesSection
        onSelectSolutionSlug={(slug) => onNavigate(`/solutions/${slug}`)}
      />

      {/* 17. Final Consultation CTA & Interactive Contact */}
      <ContactSection />
    </div>
  );
};

import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ValuePillars } from '../components/ValuePillars';
import { SolutionsCarousel } from '../components/SolutionsCarousel';
import { GlobalPrincipalsSection } from '../components/GlobalPrincipalsSection';
import { ProjectsPortfolioSection } from '../components/ProjectsPortfolioSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { EngineeringToolsBanner } from '../components/EngineeringToolsBanner';
import { HSEQTrustBanner } from '../components/HSEQTrustBanner';
import { ContactSection } from '../components/ContactSection';
import { SolutionItem } from '../types';
import { ArrowRight, Sun, Zap, CheckCircle2 } from 'lucide-react';

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
      {/* 01. High-Impact Cinematic Hero */}
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

      {/* 03. Core Value Pillars (Quality, Reliability, Technical Expertise, Client Focus) */}
      <ValuePillars />

      {/* 04. Interactive Solutions Carousel (11 Official Disciplines) */}
      <div>
        <SolutionsCarousel
          onSelectSolution={onSelectSolution}
          onRequestConsultation={onRequestConsultation}
        />

        {/* Compact Quick-Action Bar for Dedicated Solution Pages */}
        <div className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1e73be]" />
              <span>Explore Dedicated Divisions:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-300 hover:border-[#1e73be] text-slate-800 font-bold hover:text-[#1e73be] transition-colors shadow-sm"
              >
                <Zap className="w-3.5 h-3.5 text-[#1e73be]" />
                <span>Electrical Services & Cabling</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
              <button
                onClick={() => onNavigate('/solar')}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-300 hover:border-amber-500 text-slate-800 font-bold hover:text-amber-600 transition-colors shadow-sm"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Turnkey Solar Solutions</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
              <button
                onClick={() => onNavigate('/solutions')}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#a81c24] text-white font-bold hover:bg-[#8e151d] transition-colors shadow-sm"
              >
                <span>Full 11-Discipline Catalog</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 05. Official Global Principals & Manufacturing Alliances */}
      <GlobalPrincipalsSection
        onSelectSolutionSlug={(slug) => onNavigate(`/solutions/${slug}`)}
        onRequestConsultation={onRequestConsultation}
      />

      {/* 06. Verified Projects & Field Installations */}
      <ProjectsPortfolioSection
        onRequestConsultation={onRequestConsultation}
      />

      {/* 07. Sectors & Demanding Environments */}
      <IndustriesSection
        onRequestConsultation={onRequestConsultation}
      />

      {/* 08. Compact Engineering Sizing Suite Banner */}
      <EngineeringToolsBanner onOpenTools={() => onNavigate('/tools')} />

      {/* 09. Compact HSEQ & Standards Trust Bar */}
      <HSEQTrustBanner onLearnMore={() => onNavigate('/hseq')} />

      {/* 10. Direct Consultation & Office Contacts (Karachi & Lahore) */}
      <ContactSection />
    </div>
  );
};

import React from 'react';
import { GlobalPrincipalsSection } from '../components/GlobalPrincipalsSection';
import { ShieldCheck, Award, Globe } from 'lucide-react';

interface PrincipalsPageProps {
  onSelectSolutionSlug?: (slug: string) => void;
  onRequestConsultation: (serviceName?: string) => void;
}

export const PrincipalsPage: React.FC<PrincipalsPageProps> = ({
  onSelectSolutionSlug,
  onRequestConsultation,
}) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>International Engineering Principals</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              World-Class Manufacturers & Technology Partners
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              LV Engineering maintains strategic partnerships with internationally certified manufacturers from the Czech Republic, Turkey, Hungary, the UAE, Switzerland, Japan, and global technology leaders to supply and commission mission-critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Principals Grid */}
      <GlobalPrincipalsSection
        onSelectSolutionSlug={onSelectSolutionSlug}
        onRequestConsultation={onRequestConsultation}
      />
    </div>
  );
};

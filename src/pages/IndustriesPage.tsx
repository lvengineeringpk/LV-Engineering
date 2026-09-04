import React from 'react';
import { IndustriesSection } from '../components/IndustriesSection';
import { INDUSTRIES } from '../data/companyData';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface IndustriesPageProps {
  onRequestConsultation: (serviceName?: string) => void;
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onRequestConsultation,
  onNavigate,
}) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Target Sectors & Environments</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Engineered For Demanding Environments
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From heavy continuous manufacturing plants and oil & gas facilities to commercial plazas and high-occupancy transit hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Carousel Section */}
      <IndustriesSection onRequestConsultation={onRequestConsultation} />

      {/* In-depth Grid Breakdown of all 8+ sectors */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-4 mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900 font-heading uppercase">
            Sector Capability Matrix
          </h2>
          <span className="text-xs font-mono text-[#a81c24] font-bold">
            {INDUSTRIES.length} Specialized Sectors
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm hover:border-[#1e73be] hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {ind.name}
                </h3>
                <span className="text-xs font-mono text-[#1e73be] font-bold">
                  {ind.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {ind.description}
              </p>

              <div>
                <span className="text-xs font-mono uppercase text-slate-700 block mb-2 font-bold">
                  Key Technical Deliverables:
                </span>
                <div className="space-y-1.5">
                  {ind.criticalFocus.map((foc, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#a81c24] flex-shrink-0" />
                      <span className="font-medium">{foc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {ind.relevantSolutions.map((sol, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {sol}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onRequestConsultation(ind.name)}
                  className="text-xs font-mono text-[#a81c24] hover:text-[#8a141b] uppercase flex items-center gap-1 font-bold transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

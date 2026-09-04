import React from 'react';
import { SolutionsSection } from '../components/SolutionsSection';
import { TechShowcase } from '../components/TechShowcase';
import { SolutionItem } from '../types';

interface SolutionsPageProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onRequestConsultation: (serviceName?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onSelectSolution,
  onRequestConsultation,
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
              <span>Full Portfolio Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Engineering Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Integrated electrical, instrumentation, automation, power, safety and engineering solutions for industrial and commercial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <SolutionsSection onSelectSolution={onSelectSolution} />

      {/* Technology Showcase Detail */}
      <TechShowcase
        onSelectSolution={onSelectSolution}
        onRequestConsultation={onRequestConsultation}
      />
    </div>
  );
};

import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  Flame,
  Shield,
  Activity,
  Car,
  Sun,
  Layers,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { SOLUTIONS } from '../data/companyData';
import { SolutionItem } from '../types';

interface TechShowcaseProps {
  onSelectSolution: (sol: SolutionItem) => void;
  onRequestConsultation: (serviceName?: string) => void;
}

export const TechShowcase: React.FC<TechShowcaseProps> = ({
  onSelectSolution,
  onRequestConsultation,
}) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOLUTIONS[0].id);

  const activeSolution =
    SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];

  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Technology & Equipment Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Technology Showcase
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-normal">
              Explore our comprehensive portfolio of certified electrical assemblies, life safety platforms, and process automation hardware.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-600 font-medium">
            <span className="text-[#1e73be] font-bold">{SOLUTIONS.length}</span> SYSTEMS CATALOGUED
          </div>
        </div>

        {/* 2-Column Catalog Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Interactive Selector Tabs */}
          <div className="lg:col-span-4 space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
            {SOLUTIONS.map((sol) => {
              const isSelected = sol.id === activeSolutionId;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#1e73be] text-slate-900 shadow-md ring-2 ring-[#1e73be]/20'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="pr-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono uppercase text-[#1e73be] font-bold">
                        {sol.category}
                      </span>
                      {sol.partnerBrand && (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 text-[#1e73be] border border-blue-200">
                          {sol.partnerBrand}
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1e73be] transition-colors line-clamp-1">
                      {sol.title}
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected
                        ? 'text-[#1e73be] translate-x-1'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: In-depth Technical Spec Sheet & Image */}
          <div className="lg:col-span-8 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl">
            {/* Header Image with Technical Info */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Top Details */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-[#1e73be] font-bold uppercase shadow-sm">
                  {activeSolution.category}
                </div>

                {activeSolution.partnerBrand && (
                  <div className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs font-mono text-white shadow-sm">
                    OEM Partner: <span className="text-amber-400 font-bold">{activeSolution.partnerBrand}</span>
                    {activeSolution.partnerOrigin && ` (${activeSolution.partnerOrigin})`}
                  </div>
                )}
              </div>

              {/* Bottom Title on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase">
                  {activeSolution.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-mono mt-1 font-semibold">
                  {activeSolution.headline}
                </p>
              </div>
            </div>

            {/* Spec Sheet Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeSolution.description}
              </p>

              {/* Key Technical Specifications Table */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block mb-3">
                  Technical Specifications & Ratings:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.keySpecs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-500 font-mono">{spec.label}</span>
                      <span className="text-xs font-bold text-slate-900 font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product/Component Checklist */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block mb-3">
                  Included Subsystems & Components:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSolution.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#1e73be] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                  <span>Standards:</span>
                  <span className="text-[#1e73be] font-bold">
                    {activeSolution.standards ? activeSolution.standards.join(' • ') : 'Standard Compliant'}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectSolution(activeSolution)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-800 font-bold transition-colors"
                  >
                    View Full Details
                  </button>

                  <button
                    onClick={() => onRequestConsultation(activeSolution.title)}
                    className="flex-1 sm:flex-initial px-6 py-2.5 btn-pill-red font-mono font-bold uppercase text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Inquire System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

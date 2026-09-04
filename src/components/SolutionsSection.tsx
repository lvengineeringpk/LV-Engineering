import React, { useState } from 'react';
import {
  ArrowRight,
  Zap,
  Sliders,
  Flame,
  Shield,
  Sun,
  Activity,
  Car,
  Maximize2,
  Building2,
  Cpu,
  Wrench,
  FileCheck2,
  Headphones,
} from 'lucide-react';
import { SOLUTIONS } from '../data/companyData';
import { SolutionItem } from '../types';

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onViewAll?: () => void;
  onRequestConsultation?: (serviceName?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  onViewAll,
  onRequestConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'electrical', label: 'Electrical & Power' },
    { id: 'automation', label: 'Automation & Control' },
    { id: 'safety', label: 'Life Safety & Fire' },
    { id: 'instrumentation', label: 'Instrumentation' },
    { id: 'specialized', label: 'Specialized & Transit' },
  ];

  const filterSolutions = () => {
    if (selectedCategory === 'all') return SOLUTIONS;
    if (selectedCategory === 'electrical') {
      return SOLUTIONS.filter((s) =>
        ['electrical-services', 'power-generation', 'solar-energy', 'switchgear-infrastructure'].includes(s.id)
      );
    }
    if (selectedCategory === 'automation') {
      return SOLUTIONS.filter((s) => ['automation-instrumentation'].includes(s.id));
    }
    if (selectedCategory === 'safety') {
      return SOLUTIONS.filter((s) =>
        ['fire-protection', 'fire-alarm-systems', 'lightning-protection', 'surge-protection', 'emergency-lighting'].includes(s.id)
      );
    }
    if (selectedCategory === 'instrumentation') {
      return SOLUTIONS.filter((s) => ['instrumentation-flow-meters'].includes(s.id));
    }
    if (selectedCategory === 'specialized') {
      return SOLUTIONS.filter((s) =>
        ['parking-guidance', 'elevators-escalators'].includes(s.id)
      );
    }
    return SOLUTIONS;
  };

  const currentList = filterSolutions();
  const remainder = currentList.length % 3;
  const neededCards = remainder === 0 ? 0 : 3 - remainder;

  return (
    <section id="solutions" className="relative py-24 bg-white border-t border-slate-200">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Core Solutions Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Engineering Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-normal">
              Integrated systems engineered for performance, safety and reliability across industrial and commercial environments.
            </p>
          </div>

          {onViewAll && (
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 border border-slate-300 hover:border-[#1e73be] text-xs font-mono uppercase tracking-wider text-slate-800 hover:text-black transition-colors self-start md:self-auto font-bold shadow-sm"
            >
              <span>View All 12 Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1e73be]" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#a81c24] text-white font-bold shadow-md shadow-red-500/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 font-semibold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Uniform 3-Column Grid with Equal Height Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentList.map((sol) => {
            return (
              <div
                key={sol.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#1e73be] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm h-full"
              >
                {/* Top Image Block - Uniform 224px (h-56) Height Across All Cards */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      // Graceful fallback to high-reliability unsplash industrial asset if network hiccups
                      const target = e.currentTarget;
                      if (!target.src.includes('1581092160607')) {
                        target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1e73be] font-bold border border-slate-200 shadow-sm truncate max-w-[160px]">
                      {sol.category}
                    </span>

                    {sol.partnerBrand ? (
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 shadow-sm truncate max-w-[140px]">
                        {sol.partnerBrand}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200 shadow-sm">
                        LV Engineering
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section with Standardized Heights for Uniform Alignment */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Fixed Height Title Container to Guarantee Card Alignment */}
                    <div className="min-h-[3.25rem] flex items-start">
                      <h3 className="text-xl font-black text-slate-900 font-heading group-hover:text-[#1e73be] transition-colors leading-snug line-clamp-2">
                        {sol.title}
                      </h3>
                    </div>

                    {/* Standardized 2-Line Headline Container */}
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {sol.headline || sol.description}
                    </p>

                    {/* Quick technical bullets preview - Exactly 3 Lines with Consistent Height */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 min-h-[5.5rem] flex flex-col justify-center">
                      {sol.details.slice(0, 3).map((det, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a81c24] flex-shrink-0" />
                          <span className="line-clamp-1">{det}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Interaction Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="text-[11px] font-mono text-slate-500 font-medium truncate max-w-[150px]">
                      {sol.keySpecs[0] ? `${sol.keySpecs[0].label}: ${sol.keySpecs[0].value}` : 'Industrial Standard'}
                    </div>

                    <button
                      onClick={() => onSelectSolution(sol)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#a81c24] hover:text-[#88141b] group-hover:translate-x-1 transition-all flex-shrink-0"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Subtle bottom edge indicator */}
                <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#a81c24] to-[#1e73be] transition-all duration-300" />
              </div>
            );
          })}

          {/* Complementary Engineering Cards to Guarantee Full 3-Column Grid with ZERO Blank Spaces */}
          {neededCards >= 1 && (
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-[#1e73be] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm h-full text-white">
              {/* Top Visual Banner */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-900 flex-shrink-0 flex items-center justify-center p-6 border-b border-slate-800">
                <div className="absolute inset-0 bg-tech-grid opacity-25" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Wrench className="w-7 h-7 text-[#1e73be]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                    Custom Project Scoping
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium">
                    Turnkey Engineering & BOQ
                  </span>
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white font-bold border border-white/15">
                    Engineering Services
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#a81c24] text-white">
                    Free Consultation
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="min-h-[3.25rem] flex items-start">
                    <h3 className="text-xl font-black text-white font-heading group-hover:text-blue-400 transition-colors leading-snug">
                      Turnkey System Engineering & Site Audit
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                    Comprehensive electrical layout design, load flow simulations, single-line diagrams (SLD), and safety compliance reviews.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-2 min-h-[5.5rem] flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">IEC 61439 Form 4b switchboard calculations</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">Civil Defense & NFPA compliant submission packages</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="line-clamp-1">Free on-site facility audit & load profiling</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <div className="text-[11px] font-mono text-slate-400 font-medium truncate max-w-[150px]">
                    Advisory: Direct Engineers
                  </div>

                  <button
                    onClick={() => onRequestConsultation ? onRequestConsultation('Turnkey Engineering Scoping') : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-blue-300 group-hover:translate-x-1 transition-all flex-shrink-0"
                  >
                    <span>Request Scoping</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-[#1e73be] transition-all duration-300" />
            </div>
          )}

          {neededCards >= 2 && (
            <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-[#a81c24] hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm h-full text-white">
              {/* Top Visual Banner */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-900 flex-shrink-0 flex items-center justify-center p-6 border-b border-slate-800">
                <div className="absolute inset-0 bg-tech-grid opacity-25" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Headphones className="w-7 h-7 text-[#a81c24]" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold">
                    Uptime Assurance
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium">
                    24/7 Field Response & Maintenance
                  </span>
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white font-bold border border-white/15">
                    Lifecycle Support
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#1e73be] text-white">
                    24/7 Hotline
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="min-h-[3.25rem] flex items-start">
                    <h3 className="text-xl font-black text-white font-heading group-hover:text-red-400 transition-colors leading-snug">
                      24/7 AMC & Emergency Technical Response
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                    Guaranteed rapid technician dispatch, annual maintenance contracts (AMC), thermal imaging, and calibrated OEM spares.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-2 min-h-[5.5rem] flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="line-clamp-1">Infrared thermal scanning for switchgear & busbars</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="line-clamp-1">Generator load banking & fuel telemetry testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="line-clamp-1">Rapid emergency SLAs for continuous plants</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <div className="text-[11px] font-mono text-slate-400 font-medium truncate max-w-[150px]">
                    SLA: Sub-4h Dispatch
                  </div>

                  <button
                    onClick={() => onRequestConsultation ? onRequestConsultation('Annual Maintenance Contract (AMC)') : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-red-300 group-hover:translate-x-1 transition-all flex-shrink-0"
                  >
                    <span>Inquire AMC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-[#a81c24] transition-all duration-300" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

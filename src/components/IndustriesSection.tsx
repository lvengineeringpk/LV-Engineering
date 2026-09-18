import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Layers,
  ArrowRight,
  Building,
  Factory,
  Zap,
  Flame,
  CheckCircle,
} from 'lucide-react';
import { INDUSTRIES } from '../data/companyData';
import { IndustryItem } from '../types';

interface IndustriesSectionProps {
  onExploreIndustry?: (industry: IndustryItem) => void;
  onRequestConsultation?: (serviceName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onExploreIndustry,
  onRequestConsultation,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const activeIndustry = INDUSTRIES[activeIndex] || INDUSTRIES[0];

  return (
    <section id="industries" className="relative py-12 sm:py-16 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 bg-tech-dots opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Target Sectors & Environments</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Engineered For Demanding Environments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Proven engineering practices delivering stability, safety, and operational reliability across rigorous industrial and commercial environments.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 shadow-sm transition-colors"
              aria-label="Previous Industry"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 shadow-sm transition-colors"
              aria-label="Next Industry"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
        >
          {INDUSTRIES.map((industry, idx) => {
            const isSelected = activeIndex === idx;

            return (
              <div
                key={industry.id}
                onClick={() => setActiveIndex(idx)}
                className={`snap-start flex-shrink-0 w-[320px] sm:w-[380px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white border flex flex-col justify-between shadow-sm ${
                  isSelected
                    ? 'border-[#1e73be] ring-2 ring-[#1e73be]/30 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Visual Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-mono text-[#a81c24] border border-slate-200 font-bold shadow-sm">
                    SECTOR // 0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-[#1e73be] font-mono mt-1 font-semibold">
                      {industry.tagline}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Critical Focus Points */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1 font-bold">
                        Technical Focus:
                      </span>
                      {industry.criticalFocus.map((focus, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#a81c24] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions list tags */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {industry.relevantSolutions.map((solName, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                        >
                          {solName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Highlight Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#a81c24] uppercase tracking-wider font-bold">
                <Shield className="w-4 h-4 text-[#a81c24]" />
                <span>Sector Specialized Engineering Capabilities</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                {activeIndustry.name}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                {activeIndustry.description} Our engineering offices deploy complete low-voltage power distribution, automated SCADA monitoring, and safety infrastructure tuned specifically for this operating environment.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              {onRequestConsultation && (
                <button
                  onClick={() => onRequestConsultation(activeIndustry.name)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#a81c24] hover:bg-[#8b141b] text-white font-mono font-bold uppercase text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

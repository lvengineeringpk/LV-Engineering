import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';
import { VALUE_PILLARS } from '../data/companyData';

export const ValuePillars: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-14 bg-white border-t border-slate-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
            <span className="w-4 h-[2px] bg-[#a81c24]" />
            <span>Value Proposition</span>
            <span className="w-4 h-[2px] bg-[#a81c24]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
            Why LV Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Four core pillars underpinning our capability to handle sizeable projects across industrial and commercial sectors.
          </p>
        </div>

        {/* 4 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1e73be] hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <span className="text-xs font-mono text-[#a81c24] tracking-widest font-bold">
                    PILLAR 0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#1e73be] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-black text-slate-900 uppercase font-heading group-hover:text-[#1e73be] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-[#1e73be] font-semibold mt-1 mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a81c24] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

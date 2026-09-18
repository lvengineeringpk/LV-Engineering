import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, HardHat, FileText } from 'lucide-react';

interface HSEQTrustBannerProps {
  onLearnMore: () => void;
}

export const HSEQTrustBanner: React.FC<HSEQTrustBannerProps> = ({ onLearnMore }) => {
  const standards = [
    'IEC 61439-1/2 Certified',
    'NFPA 13 / 20 / 72 Alignment',
    'NFC 17-102:2011 Compliant',
    'ISO 9001:2015 Standard',
    'Strict LOTO & PPE Protocols',
  ];

  return (
    <section className="py-8 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Badge & Statement */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#a81c24]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#a81c24]">
                  HSEQ Policy & Standards
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">Zero Lost-Time Incidents</span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase font-heading">
                Safety Engineered In Every Installation
              </h4>
            </div>
          </div>

          {/* Center: Standards Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {standards.map((std, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-semibold shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1e73be]" />
                <span>{std}</span>
              </span>
            ))}
          </div>

          {/* Right: Link */}
          <div className="flex-shrink-0">
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#a81c24] hover:text-[#8e151d] transition-colors"
            >
              <span>View HSEQ Policy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Calculator, ArrowRight, Zap, Gauge, Shield, Cpu } from 'lucide-react';

interface EngineeringToolsBannerProps {
  onOpenTools: () => void;
}

export const EngineeringToolsBanner: React.FC<EngineeringToolsBannerProps> = ({
  onOpenTools,
}) => {
  const tools = [
    { name: 'Transformer Sizing', spec: 'kVA & ACB Sizing', icon: Zap },
    { name: 'Motor Starting', spec: 'DOL / Star-Delta / Soft-Start', icon: Gauge },
    { name: 'Surge Protection', spec: 'Type 1/2/3 & kA Rating', icon: Shield },
    { name: 'Cable Voltage Drop', spec: 'IEC 60364 Run & Drop %', icon: Cpu },
  ];

  return (
    <section className="py-10 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1e73be]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Info */}
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#1e73be] border border-white/10 text-xs font-mono font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-[#1e73be]" />
              <span>Interactive Engineering Suite</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-white">
              Preliminary Design & Sizing Calculators
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Calculate transformer capacity, motor inrush currents, surge arrester ratings, and cable voltage drop compliant with IEC and NFPA standards.
            </p>
          </div>

          {/* Center: Tools mini grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-left flex flex-col justify-between hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#1e73be] mb-2" />
                  <span className="text-xs font-bold text-white font-mono leading-tight">{tool.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">{tool.spec}</span>
                </div>
              );
            })}
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenTools}
              className="btn-pill-red px-6 py-3.5 font-mono text-xs uppercase font-bold tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              id="banner-open-tools-btn"
            >
              <span>Open Calculators</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

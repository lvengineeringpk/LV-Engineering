import React from 'react';
import { EngineeringCalculatorSuite } from '../components/EngineeringCalculatorSuite';

export const EngineeringToolsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Engineering Calculations & Estimation Suite</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Design Sizing & Standards Calculator
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Instant preliminary sizing for transformers, air circuit breakers, solid-state soft starters, surge arresters, and cable voltage drop compliant with IEC and NFPA standards.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Component */}
      <EngineeringCalculatorSuite />
    </div>
  );
};

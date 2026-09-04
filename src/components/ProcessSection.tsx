import React, { useState } from 'react';
import {
  Search,
  PenTool,
  Cpu,
  Wrench,
  CheckSquare,
  Zap,
  LifeBuoy,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';
import { ENGINEERING_PROCESS } from '../data/companyData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number, isSelected: boolean) => {
    const iconClass = `w-5 h-5 ${isSelected ? 'text-white' : 'text-[#a81c24]'}`;
    switch (index) {
      case 0:
        return <Search className={iconClass} />;
      case 1:
        return <PenTool className={iconClass} />;
      case 2:
        return <Cpu className={iconClass} />;
      case 3:
        return <Wrench className={iconClass} />;
      case 4:
        return <CheckSquare className={iconClass} />;
      case 5:
        return <Zap className={iconClass} />;
      case 6:
        return <LifeBuoy className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  const current = ENGINEERING_PROCESS[activeStepIndex];

  return (
    <section id="expertise" className="relative py-24 bg-slate-50 border-t border-slate-200">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
            <span className="w-4 h-[2px] bg-[#a81c24]" />
            <span>Engineering Lifecycle</span>
            <span className="w-4 h-[2px] bg-[#a81c24]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
            From System Design to Commissioning
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A structured, quality-controlled engineering approach ensuring precision, electrical safety, and timely delivery across industrial and commercial projects.
          </p>
        </div>

        {/* 7-Step Navigation Bar with Connecting Lines */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-[2px] bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {ENGINEERING_PROCESS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col items-center sm:items-start group shadow-xs ${
                    isSelected
                      ? 'bg-[#a81c24] text-white border-[#a81c24] shadow-md scale-[1.03]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-[#1e73be] hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-white' : 'text-[#a81c24]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected ? 'bg-white/20' : 'bg-slate-100'
                      }`}
                    >
                      {getStepIcon(idx, isSelected)}
                    </div>
                  </div>

                  <span
                    className={`text-xs font-bold font-heading uppercase tracking-wider block ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </span>
                  <span
                    className={`text-[10px] hidden sm:block font-mono line-clamp-1 mt-0.5 font-medium ${
                      isSelected ? 'text-red-100' : 'text-slate-500'
                    }`}
                  >
                    {step.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-xs font-mono text-[#a81c24] font-bold">
                <span>PHASE {current.step} OF 07</span>
                <span>•</span>
                <span className="uppercase">{current.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase font-heading">
                {current.step} — {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Phase Deliverables Checklist */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 block mb-3 font-bold">
                  Verified Phase Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {current.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 shadow-2xs"
                    >
                      <FileCheck2 className="w-4 h-4 text-[#1e73be] flex-shrink-0" />
                      <span className="text-xs text-slate-800 font-mono line-clamp-1 font-medium">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Blueprint Mockup Graphic */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-[#a81c24] font-bold">
                <span>METHODOLOGY SPECIFICATION</span>
                <span>STATUS: VERIFIED</span>
              </div>

              <div className="space-y-2 text-slate-700 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Execution Phase:</span>
                  <span className="text-slate-900 font-bold">{current.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Target Standard:</span>
                  <span className="text-slate-900 font-bold">IEC / BS / NFPA / Civil Defense</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Quality Review:</span>
                  <span className="text-slate-900 font-bold">Senior Project Engineer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Safety Clearance:</span>
                  <span className="text-[#1e73be] font-bold">HSEQ Protocol Enforced</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 leading-relaxed italic shadow-2xs">
                “LV Engineering is offering services that blend quality delivery with cost-saving methodology, supported by continuous technical assistance.”
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

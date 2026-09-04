import React from 'react';
import { HSEQSection } from '../components/HSEQSection';
import { HSEQ_COMMITMENTS } from '../data/companyData';
import { ShieldCheck, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';

interface HSEQPageProps {
  onRequestConsultation: () => void;
}

export const HSEQPage: React.FC<HSEQPageProps> = ({ onRequestConsultation }) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Health, Safety, Environment & Quality</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Safety Is Engineered In
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              LV Engineering shall endeavor to provide and maintain a working environment that is safe and without risk to the Health & Safety of its Employees and its assets.
            </p>
          </div>
        </div>
      </section>

      {/* Main HSEQ Section */}
      <HSEQSection />

      {/* Policy Mandate Card */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 space-y-6 shadow-sm">
          <div className="flex items-center gap-2 font-mono text-xs text-[#a81c24] uppercase tracking-widest font-bold">
            <ShieldCheck className="w-5 h-5 text-[#1e73be]" />
            <span>Official HSEQ Policy Declaration</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase">
            Corporate Commitment to Zero Harm
          </h2>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Low Voltage Engineering pledges its full co-operation and commitment to the HSEQ Policy across all project sites in Karachi, Lahore, and nationwide. Every team member is trained to implement proper PPE usage, comply with prescribed safety measures under the Health & Safety acts, promptly report hazardous situations, and maintain situational awareness with a positive workplace attitude.
          </p>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-500 font-medium">
              LV Engineering HSEQ Compliance Framework • Audited Standards
            </span>
            <button
              onClick={onRequestConsultation}
              className="btn-pill-red px-6 py-3 font-bold font-mono uppercase text-xs shadow-md tracking-wider"
            >
              Discuss Site Safety Protocols
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

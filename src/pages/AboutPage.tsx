import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Clock,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO, MISSION_PRINCIPLES, VALUE_PILLARS } from '../data/companyData';
import { AboutSection } from '../components/AboutSection';
import { MissionSection } from '../components/MissionSection';
import { ValuePillars } from '../components/ValuePillars';
import { HSEQSection } from '../components/HSEQSection';

interface AboutPageProps {
  onRequestConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onRequestConsultation,
  onNavigate,
}) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Editorial Page Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Corporate Profile & Positioning</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Engineering Capability. <br />
              <span className="text-[#1e73be]">Delivered With Precision.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Low Voltage Engineering specializes in Electrical, Instrumentation and Automation Services across the industrial and commercial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Editorial Section */}
      <AboutSection onRequestConsultation={onRequestConsultation} />

      {/* Core Mission Principles */}
      <MissionSection />

      {/* Value Pillars */}
      <ValuePillars />

      {/* HSEQ Overview */}
      <HSEQSection />

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase font-heading">
            Partner With LV Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our teams in Karachi and Lahore are ready to discuss your electrical distribution, automation integration, or life safety specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onRequestConsultation}
              className="btn-pill-red px-6 py-3.5 font-bold font-mono uppercase text-xs tracking-wider shadow-md"
            >
              Request a Consultation
            </button>
            <button
              onClick={() => onNavigate('/solutions')}
              className="btn-pill-blue px-6 py-3.5 font-bold font-mono uppercase text-xs tracking-wider shadow-md"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

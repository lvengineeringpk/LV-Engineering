import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Shield,
  Layers,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Building,
  ExternalLink,
} from 'lucide-react';
import { SolutionItem } from '../types';
import { COMPANY_INFO, OFFICES } from '../data/companyData';

interface SolutionDetailViewProps {
  solution: SolutionItem;
  onBack: () => void;
  onRequestConsultation: (serviceName?: string) => void;
}

export const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({
  solution,
  onBack,
  onRequestConsultation,
}) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#a81c24] transition-colors py-2 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Solutions Catalog</span>
          </button>
        </div>

        {/* Hero Section of Solution */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 mb-12 shadow-xl">
          <div className="relative h-[360px] sm:h-[480px] w-full">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover object-center brightness-90 contrast-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Top metadata tags */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-[#a81c24] font-bold uppercase tracking-wider shadow-sm">
                {solution.category}
              </span>

              {solution.partnerBrand && (
                <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-900 font-medium shadow-sm">
                  OEM Partner: <span className="text-[#1e73be] font-bold">{solution.partnerBrand}</span>
                  {solution.partnerOrigin && ` • ${solution.partnerOrigin}`}
                </div>
              )}
            </div>

            {/* Bottom Title Info */}
            <div className="absolute bottom-6 left-6 right-6 max-w-4xl">
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-heading tracking-tight leading-tight drop-shadow-md">
                {solution.title}
              </h1>
              <p className="text-base sm:text-lg text-red-200 font-mono mt-2 font-medium">
                {solution.headline}
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#a81c24] uppercase tracking-wider font-bold">
                <span className="w-4 h-[2px] bg-[#a81c24]" />
                <span>Technical System Overview</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {solution.description}
              </p>
            </div>

            {/* Complete Subsystems and Component Checklist */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-black text-slate-900 uppercase font-heading">
                  Components & Integrated Subsystems
                </h3>
                <span className="text-xs font-mono text-[#a81c24] font-bold">
                  {solution.details.length} Line Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {solution.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1e73be] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Specifications & Operating Parameters */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 uppercase font-heading pb-3 border-b border-slate-200">
                Engineering Specifications & Ratings
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {solution.keySpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs"
                  >
                    <span className="text-xs text-slate-500 font-mono uppercase font-medium">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono mt-1">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Industrial & Commercial Applications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#a81c24] uppercase tracking-wider font-bold">
                <span className="w-4 h-[2px] bg-[#a81c24]" />
                <span>Primary Application Sectors</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solution.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-2xs"
                  >
                    <Building className="w-4 h-4 text-[#a81c24] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column: Inquiry CTA & Partner Badge */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Consultation Inquiry Box */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#a81c24] uppercase font-bold">
                <Zap className="w-4 h-4 text-[#a81c24]" />
                <span>Request Project Proposal</span>
              </div>

              <h4 className="text-lg font-black text-slate-900 font-heading uppercase">
                Deploy {solution.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our Karachi or Lahore engineering teams for load calculations, single-line diagrams, or equipment supply schedules.
              </p>

              <button
                onClick={() => onRequestConsultation(solution.title)}
                className="btn-pill-red w-full py-3.5 font-bold font-mono uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Inquire This Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 border-t border-slate-200 space-y-2 text-xs font-mono text-slate-600">
                <div className="flex justify-between">
                  <span className="font-medium">Karachi Desk:</span>
                  <a href="tel:03011484433" className="text-slate-900 font-bold hover:text-[#a81c24]">0301-1484433</a>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lahore Desk:</span>
                  <a href="tel:03222222805" className="text-slate-900 font-bold hover:text-[#a81c24]">0322-2222805</a>
                </div>
              </div>
            </div>

            {/* Standards Compliance Card */}
            {solution.standards && solution.standards.length > 0 && (
              <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
                <div className="text-xs font-mono text-[#a81c24] uppercase tracking-wider font-bold">
                  Compliance & Standards
                </div>
                <div className="space-y-1.5">
                  {solution.standards.map((std, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-mono font-medium">
                      <Shield className="w-3.5 h-3.5 text-[#1e73be]" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Partner Brand Note */}
            {solution.partnerBrand && (
              <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-2 font-mono text-xs shadow-sm">
                <span className="text-[10px] text-[#1e73be] uppercase tracking-widest block font-bold">
                  AUTHENTIC MANUFACTURER PARTNERSHIP
                </span>
                <p className="text-slate-600 text-xs font-sans leading-relaxed">
                  LV Engineering works in partnership with <strong className="text-slate-900 font-bold">{solution.partnerBrand}</strong>{solution.partnerOrigin ? ` (${solution.partnerOrigin})` : ''} to deliver genuine certified equipment and factory-backed support.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

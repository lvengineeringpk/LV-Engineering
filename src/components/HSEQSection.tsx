import React from 'react';
import {
  ShieldAlert,
  HardHat,
  HeartPulse,
  Eye,
  FileCheck,
  AlertTriangle,
  Smile,
  Shield,
  CheckCircle2,
} from 'lucide-react';
import { HSEQ_COMMITMENTS } from '../data/companyData';

interface HSEQSectionProps {
  onLearnMore?: () => void;
}

export const HSEQSection: React.FC<HSEQSectionProps> = ({ onLearnMore }) => {
  const icons = [
    <HardHat key="1" className="w-5 h-5 text-[#a81c24]" />,
    <Shield key="2" className="w-5 h-5 text-[#1e73be]" />,
    <Eye key="3" className="w-5 h-5 text-[#a81c24]" />,
    <AlertTriangle key="4" className="w-5 h-5 text-amber-600" />,
    <FileCheck key="5" className="w-5 h-5 text-[#1e73be]" />,
    <CheckCircle2 key="6" className="w-5 h-5 text-emerald-600" />,
    <HeartPulse key="7" className="w-5 h-5 text-[#a81c24]" />,
    <Smile key="8" className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section id="hseq" className="relative py-24 bg-slate-50 border-t border-slate-200">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
            <span className="w-5 h-[2px] bg-[#a81c24]" />
            <span>HSEQ Compliance Policy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
            Safety Is Engineered In
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-l-2 border-[#a81c24] pl-4 italic">
            “LV Engineering shall endeavor to provide and maintain a working environment that is safe and without risk to the Health & Safety of its Employees and its assets. LV Engineering pledges its full co-operation & commitment to the HSEQ Policy.”
          </p>
        </div>

        {/* 2-Column Split: Image with HUD on Left, Eight Commitments on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Industrial Safety Environment Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-red-200 via-slate-100 to-slate-200 shadow-md">
              <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                  alt="Industrial safety engineer inspecting site with PPE and helmet"
                  className="w-full h-[460px] object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Safety Status Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#a81c24] uppercase tracking-wider mb-1 font-bold">
                    <ShieldAlert className="w-4 h-4 text-[#a81c24]" />
                    <span>Active Safety Mandate</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1 font-heading">
                    Zero Risk Compromise
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mandatory PPE, arc flash safety protocols, risk reporting, and mental wellbeing checks applied to every commercial & industrial site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 8 Explicit Commitments from Source Profile */}
          <div className="lg:col-span-7 space-y-3">
            <div className="mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-[#a81c24] uppercase tracking-wider font-bold">
                We Are Committed To Take Full Responsibility To:
              </span>
              <span className="text-[10px] font-mono text-slate-500 font-bold">8 Core Mandates</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HSEQ_COMMITMENTS.map((comm, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#1e73be] transition-all duration-300 flex items-start gap-3 shadow-sm hover:shadow-md"
                >
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex-shrink-0 mt-0.5 shadow-sm">
                    {icons[idx % icons.length]}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wide mb-1">
                      {comm.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {comm.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Source quote banner */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 font-mono text-xs text-slate-600 flex items-center justify-between mt-4 shadow-sm">
              <span>HSEQ Policy Document • LV Engineering</span>
              <span className="text-[#1e73be] font-bold">Strict Compliance Enforced</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

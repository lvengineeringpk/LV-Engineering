import React from 'react';
import {
  CheckCircle2,
  Shield,
  Award,
  Zap,
  Clock,
  Compass,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onRequestConsultation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMore,
  onRequestConsultation,
}) => {
  const coreApproaches = [
    {
      title: 'Quality Delivery',
      desc: 'Meticulous execution that adheres strictly to design tolerances and international electrical specifications.',
    },
    {
      title: 'Cost-Saving Methodology',
      desc: 'Practical, value-engineered solutions designed to optimize initial capital expenditure and ongoing operational costs.',
    },
    {
      title: 'Technical Support & Service',
      desc: 'Responsive engineering support throughout procurement, erection, testing, commissioning, and handover.',
    },
    {
      title: 'Full Customer Services',
      desc: 'Treating clients with principal standing in the business, backed by direct communication and prompt issue resolution.',
    },
    {
      title: 'Quality Certified Materials',
      desc: 'Sourcing authenticated materials from established global manufacturing leaders to safeguard asset longevity.',
    },
    {
      title: 'Timely Project Handover',
      desc: 'Disciplined project scheduling designed around client operational convenience and shutdown windows.',
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 bg-white border-t border-slate-200 overflow-hidden">
      {/* Background Subtle Tech Dots */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
          <span className="w-6 h-[2px] bg-[#a81c24]" />
          <span>About LV Engineering • Sparks of Innovation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Typography & Official Corporate Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Engineering Capability. <br />
              <span className="text-[#1e73be]">
                Delivered With Precision.
              </span>
            </h2>

            <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-[#1e73be] border-y border-r border-slate-200 shadow-sm">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed italic font-medium">
                “Low Voltage Engineering is a competent company specializing in Electrical, Instrumentation and Automation Services in industrial and commercial sector.”
              </p>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                We have acquired the necessary skills, resources, and international manufacturer partnerships to tackle sizeable projects to our clients’ complete satisfaction.
              </p>
              <p>
                Our management boasts combined experience in the mainstream industry. We blend quality delivery with practical cost-saving methodology, combining excellent workmanship with continuous technical support and complete customer services.
              </p>
            </div>

            {/* Core Approaches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {coreApproaches.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1e73be] transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#1e73be] flex-shrink-0" />
                    <h4 className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[12px] text-slate-600 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {onRequestConsultation && (
              <div className="pt-3">
                <button
                  onClick={onRequestConsultation}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#a81c24] hover:text-[#88141b] group"
                >
                  <span>Discuss Your Project Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: High-Quality Engineering Environment Visual with Technical Callouts */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-200 via-slate-100 to-transparent shadow-xl">
              <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"
                  alt="Industrial automation engineers examining control cabinet schematics"
                  className="w-full h-[480px] object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Technical Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Corner Technical Crosshairs */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#1e73be] font-bold bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  REF: LV-ENG-PROFILE // FIELD OPS
                </div>

                <div className="absolute top-4 right-4 font-mono text-[10px] text-slate-700 font-semibold bg-white/95 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  SYSTEM INTEGRATION
                </div>

                {/* Bottom Highlight Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                  <div className="text-xs font-mono text-[#1e73be] uppercase tracking-wider mb-1 font-bold">
                    Management Directives
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                    “Sparks of Innovation”
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Executing large-scale electrical distribution, industrial automation, and life safety infrastructure with absolute integrity and technical precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative engineering coordinate marker */}
            <div className="absolute -bottom-4 -right-4 hidden sm:block p-3 rounded-xl bg-white border border-slate-200 font-mono text-[10px] text-slate-700 font-bold shadow-xl">
              LOCATIONS: KARACHI & LAHORE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

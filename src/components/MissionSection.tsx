import React from 'react';
import {
  ShieldCheck,
  Clock,
  Cpu,
  GraduationCap,
  Sparkles,
  Award,
  Compass,
  Layers,
  Zap,
} from 'lucide-react';
import { MISSION_PRINCIPLES } from '../data/companyData';

export const MissionSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1e73be]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#a81c24]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#1e73be]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#1e73be]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#1e73be]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#a81c24]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#1e73be]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#1e73be]" />;
    }
  };

  return (
    <section id="mission" className="relative py-20 bg-slate-50 border-t border-slate-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
            <span className="w-4 h-[2px] bg-[#a81c24]" />
            <span>Guiding Purpose & Ethos</span>
            <span className="w-4 h-[2px] bg-[#a81c24]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase font-heading">
            Our Mission & Core Principles
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Four core mission pillars and foundational commitments that steer our engineering practice, client relationships, and industry contributions.
          </p>
        </div>

        {/* Core Profile Mission Block (Verbatim from Official Company Profile) */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#a81c24] uppercase font-bold block">
                Official Company Profile • Page 02
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase font-heading">
                Our Mission Statements
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-[#1e73be] font-bold self-start sm:self-auto">
              “TURNING CONCEPTS INTO ENGINEERING MARVELS”
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1e73be] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                01
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                To provide an excellent service to our clients, by giving them their principal position in the business and by treating them with integrity and honesty they deserve.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#a81c24] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                02
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                To deliver quality service on time and at the convenience of our clients.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#a81c24] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                03
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                To always use quality material to give our customers value for their money.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1e73be] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                04
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                To train young professionals who wish to operate in the same industry.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1e73be] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between shadow-sm"
            >
              {/* Top Row: Technical Number and Icon */}
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="font-mono text-lg font-black text-[#a81c24]">
                    {principle.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-blue-300 transition-colors">
                    {getIcon(principle.iconName)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading group-hover:text-[#1e73be] transition-colors leading-snug">
                  {principle.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Bottom Decorative Technical Line */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 font-semibold">
                <span>LV PRINCIPLE</span>
                <span className="group-hover:text-[#1e73be] transition-colors">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Bottom Slogan */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-md">
          <p className="font-mono text-xs tracking-widest text-[#a81c24] uppercase mb-1 font-bold">
            Official Brand Mandate
          </p>
          <div className="text-lg sm:text-2xl font-black text-slate-900 uppercase font-heading tracking-wide">
            “Turning Concepts Into Engineering Marvels”
          </div>
        </div>

      </div>
    </section>
  );
};

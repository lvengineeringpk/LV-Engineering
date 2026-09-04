import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
} from 'lucide-react';
import { PROJECT_CASE_STUDIES } from '../data/companyData';
import { ProjectCaseStudy } from '../types';

interface ProjectsPortfolioSectionProps {
  onRequestConsultation?: (projectTitle?: string) => void;
}

export const ProjectsPortfolioSection: React.FC<ProjectsPortfolioSectionProps> = ({
  onRequestConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  const categories = ['All', 'Industrial', 'Commercial', 'Power & Energy', 'Life Safety', 'Infrastructure'];

  const filteredProjects = PROJECT_CASE_STUDIES.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200" id="projects">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Proven Industrial & Commercial Execution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Explore critical turnkey electrical, automation, power generation, and life safety installations delivered across Pakistan's demanding industrial and commercial sectors.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-700 bg-white px-4 py-2.5 rounded-full border border-slate-300 font-bold shadow-sm">
              OVER 100+ TURNKEY SITES EXECUTED
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'btn-pill-red font-bold text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 font-semibold shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#1e73be] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1e73be] text-[10px] font-mono border border-slate-200 uppercase font-bold shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono shadow-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Location Pin */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-mono text-white font-semibold drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      {project.clientIndustry}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 font-heading mt-1 group-hover:text-[#1e73be] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Challenge & Solution Snip */}
                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-red-50/70 border border-red-100 space-y-1">
                      <span className="text-[10px] font-mono text-[#a81c24] uppercase font-bold">
                        The Engineering Challenge:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                      <span className="text-[10px] font-mono text-[#1e73be] uppercase font-bold">
                        Engineered Solution:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {project.solutionEngineered}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 font-mono text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[9px] text-slate-500 uppercase block truncate">
                          {m.label}
                        </span>
                        <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Equipment Chips */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      Installed Technology:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.keyEquipment.map((eq, eqIdx) => (
                        <span
                          key={eqIdx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onRequestConsultation && onRequestConsultation(`Case Study: ${project.title}`)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono tracking-wider uppercase border border-slate-300 font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Request Technical BOQ Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1e73be]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-white border border-slate-200 shadow-xl text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase">
            Have a Specific Facility or Tender in Mind?
          </h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our engineering design desks in Lahore and Karachi review Single Line Diagrams (SLDs), conduct site load-flow audits, and provide detailed equipment schedules without delay.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onRequestConsultation && onRequestConsultation('Turnkey Project Consultation')}
              className="btn-pill-red px-8 py-3.5 font-bold font-mono text-xs uppercase tracking-wider active:scale-95 shadow-md"
            >
              Submit Tender / Project Drawings
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

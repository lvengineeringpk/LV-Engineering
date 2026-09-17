import React, { useState } from 'react';
import {
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  Filter,
  CheckCircle2,
  Globe2,
  Award,
} from 'lucide-react';
import { GLOBAL_PRINCIPALS } from '../data/companyData';

interface GlobalPrincipalsSectionProps {
  onSelectSolutionSlug?: (slug: string) => void;
  onRequestConsultation?: (principalName: string) => void;
}

export const GlobalPrincipalsSection: React.FC<GlobalPrincipalsSectionProps> = ({
  onSelectSolutionSlug,
  onRequestConsultation,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const countries = ['All', 'Czech Republic', 'Turkey', 'Hungary', 'UAE / Middle East', 'Japan / UK', 'Switzerland / Global', 'International'];

  const filteredPrincipals = GLOBAL_PRINCIPALS.filter((p) => {
    const matchesCountry = selectedCountry === 'All' || p.country.toLowerCase().includes(selectedCountry.toLowerCase().split(' ')[0]);
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyProducts.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCountry && matchesSearch;
  });

  return (
    <section className="relative py-24 bg-white border-t border-slate-200" id="principals">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>International Alliances & Manufacturing Partners</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Global Principals & Technology Partners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              LV Engineering represents and integrates internationally certified equipment from market-leading manufacturers across the Czech Republic, Turkey, Hungary, UAE, Switzerland, Japan, and international partners.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-slate-700 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-300 flex items-center gap-2 font-bold shadow-sm">
              <Award className="w-4 h-4 text-[#1e73be]" />
              <span>ISO 9001 • IEC • NFPA CERTIFIED</span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200 mb-10 shadow-sm">
          {/* Country Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCountry(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase whitespace-nowrap transition-all ${
                  selectedCountry === c
                    ? 'btn-pill-red font-bold text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 font-semibold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              placeholder="Search manufacturer or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white border border-slate-300 text-slate-900 font-mono text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#1e73be] shadow-sm"
            />
          </div>
        </div>

        {/* Principals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrincipals.map((principal) => (
            <div
              key={principal.id}
              className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-[#1e73be] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-semibold">
                    <span>{principal.flagEmoji}</span>
                    <span>{principal.country}</span>
                    <span className="text-slate-500">| Est. {principal.established}</span>
                  </span>
                  {principal.websiteUrl && (
                    <a
                      href={principal.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#1e73be] transition-colors"
                      title="Visit Official Manufacturer Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Brand Name */}
                <h3 className="text-xl font-black font-heading text-slate-900 group-hover:text-[#1e73be] transition-colors">
                  {principal.name}
                </h3>

                {/* Specialization */}
                <div className="text-xs font-mono text-[#a81c24] font-bold mt-1 mb-3">
                  {principal.specialization}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {principal.description}
                </p>

                {/* Certified Equipment Portfolio */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                    Key Product Scope:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {principal.keyProducts.map((prod, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Standards & Certifications */}
                {principal.certifications.length > 0 && (
                  <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {principal.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1e73be] border border-blue-200"
                      >
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                {onSelectSolutionSlug && (
                  <button
                    onClick={() => onSelectSolutionSlug(principal.solutionSlug)}
                    className="text-xs font-mono font-bold text-[#1e73be] hover:text-[#165a96] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                {onRequestConsultation && (
                  <button
                    onClick={() => onRequestConsultation(principal.name)}
                    className="text-[11px] font-mono font-bold px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors shadow-sm"
                  >
                    Request Spec Sheet
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global Compliance & Warranty Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e73be] flex-shrink-0">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900 font-heading uppercase">
                Official OEM Direct Supply & Warranty
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Every system component is backed by original manufacturer compliance certificates, factory acceptance test (FAT) reports, and local engineering SLA support in Lahore & Karachi.
              </p>
            </div>
          </div>

          <button
            onClick={() => onRequestConsultation && onRequestConsultation('Global Principals Lineup')}
            className="btn-pill-red px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap active:scale-95 shadow-md"
          >
            Inquire Principal Catalog
          </button>
        </div>

      </div>
    </section>
  );
};

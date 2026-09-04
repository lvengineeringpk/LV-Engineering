import React from 'react';
import {
  Sun,
  ShieldCheck,
  Zap,
  TrendingUp,
  Settings,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';

interface SolarSectionProps {
  onRequestConsultation: (serviceName?: string) => void;
}

export const SolarSection: React.FC<SolarSectionProps> = ({
  onRequestConsultation,
}) => {
  const solarPillars = [
    {
      title: 'Designs Tailored to Client Usage',
      description:
        'Custom electrical modeling and irradiation simulations calculated strictly around client kilowatt-hour consumption, peak operating shifts, and load profiles.',
      icon: <Compass className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Premium Tier-1 Equipment Selection',
      description:
        'Sourcing exclusively high-efficiency monocrystalline bifacial photovoltaic modules, smart MPPT grid inverters, and heavy-duty switchgear.',
      icon: <Cpu className="w-5 h-5 text-[#1e73be]" />,
    },
    {
      title: 'Environmental & Resource Optimization',
      description:
        'In-depth shadow modeling, seasonal tilt optimization, and dust resistance calculations calibrated to the specific micro-climate of the installation site.',
      icon: <Sun className="w-5 h-5 text-amber-600" />,
    },
    {
      title: 'Engineered for Durability & Efficiency',
      description:
        'Systems built for 25+ years of operational durability with minimal degradation, high performance ratio (PR), and rapid capital payback cycles.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Complete Solar Structure Engineering',
      description:
        'Custom fabricated hot-dip galvanized steel and aero-grade aluminum mounting structures engineered to withstand extreme regional wind velocities.',
      icon: <Layers className="w-5 h-5 text-slate-700" />,
    },
    {
      title: 'Harvest-Focused Commissioning',
      description:
        'Complete end-to-end installation through testing and grid synchronization carried out rigorously for the best possible energy harvest.',
      icon: <Zap className="w-5 h-5 text-[#a81c24]" />,
    },
    {
      title: 'Experienced & Proficient Engineering',
      description:
        'Certified solar engineers and technicians equipped with precision DC test tools, thermal imaging, and string analyzer diagnostics.',
      icon: <ShieldCheck className="w-5 h-5 text-[#1e73be]" />,
    },
    {
      title: 'Strict International Standards Compliance',
      description:
        'Fully compliant with IEC 61215, IEC 61730, IEC 62109, and national distribution utility net-metering interconnection codes.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
    },
  ];

  const highlights = [
    { label: 'System Types', val: 'On-Grid, Hybrid & Industrial Off-Grid' },
    { label: 'Module Tech', val: 'Tier-1 Monocrystalline Bifacial' },
    { label: 'Structural Rating', val: 'Hot-Dip Galvanized / Wind-Load Certified' },
    { label: 'Grid Net Metering', val: 'Turnkey Utility Approval Process' },
  ];

  return (
    <section id="solar" className="relative py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-600 tracking-widest uppercase mb-3 font-bold">
            <Sun className="w-4 h-4 text-amber-500" />
            <span>Turnkey Renewable Power Generation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
            Solar Energy — Complete Turnkey Solution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            LV Engineering delivers end-to-end commercial and industrial photovoltaic installations designed, engineered, and commissioned for maximum energy generation and long-term asset value.
          </p>
        </div>

        {/* Hero Banner Feature Card */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1545208942-e1c9c916524b?q=80&w=1200&auto=format&fit=crop"
                alt="Solar Energy Turnkey Solutions by LV Engineering"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold tracking-wider uppercase mb-2 inline-block">
                  Industrial & Commercial Solar
                </span>
                <p className="text-white text-lg font-bold font-heading">
                  High-yield rooftop and ground-mount arrays engineered for Pakistani industrial operating environments.
                </p>
              </div>
            </div>

            {/* Editorial / Technical Breakdown */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between text-white bg-slate-900">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                    Turnkey Scope & Execution
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white mt-1">
                    Engineered for Best Possible Harvest
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    From initial solar irradiance mapping, single-line designs, and tier-1 module procurement to custom galvanized mounting structures, testing, and net-metering dispatch.
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                        {h.label}
                      </span>
                      <span className="text-xs font-bold text-white font-sans mt-0.5 block">
                        {h.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onRequestConsultation('Solar Energy Turnkey Solution')}
                  className="w-full sm:w-auto px-8 py-4 btn-pill-red font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <span>Request Solar Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 text-center sm:text-left">
                  Direct review by solar engineering team
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* 8 Core Principles of Our Solar Approach */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading uppercase">
              The 8 Pillars of LV Engineering Solar Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Engineered strictly according to our 2026 authoritative company profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solarPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 inline-block mb-3 shadow-sm">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400">
                  PILLAR 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Hero } from '../components/Hero';
import { SolutionItem } from '../types';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sun,
  CheckCircle2,
  Building2,
  Cpu,
  Layers,
  FileText,
  Activity,
  Award,
  Globe2,
} from 'lucide-react';
import { GLOBAL_PRINCIPALS } from '../data/companyData';

interface HomePageProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onRequestConsultation: (serviceName?: string) => void;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectSolution,
  onRequestConsultation,
  onNavigate,
}) => {
  // Flagship Core Solutions with Main Points and HD Pictures
  const coreSolutions = [
    {
      id: 'surge-protection',
      slug: 'surge-protection',
      title: 'Surge Protection Devices & IT Insulation Monitoring',
      category: 'Transient Surge & Insulation',
      partnerBrand: 'Hakel spol. s r.o. (Czech Republic)',
      image: '/assets/images/surge_protection.jpg',
      points: [
        'Type 1, Type 2 & Type 3 Low-Voltage (up to 50kA) & PV DC (1500V) Surge Arresters',
        'Continuous Insulation Resistance Monitoring for IT Ungrounded Electrical Networks',
        'Coordinated Surge Suppression for PLCs, VFDs, Medical Hardware, RS-485 & Telemetry',
      ],
      tag: 'IEC 61643-11 / IEC 61557-8',
    },
    {
      id: 'lightning-protection',
      slug: 'lightning-protection',
      title: 'Active Early Streamer Emission (ESE) Lightning Protection',
      category: 'Atmospheric Defense & Earthing',
      partnerBrand: 'FOREND Electrical Co (Turkey)',
      image: '/assets/images/lightning_protection.jpg',
      points: [
        'NFC 17-102:2011 Certified Early Streamer Emission (ESE) Active Air Terminals',
        'TAM & TAM PLUS Low-Resistivity Earth Enhancement Compounds & Pit Systems',
        'Pure Copper-Bonded Grounding Rods, Clamps & Digital Lightning Strike Counters',
      ],
      tag: 'NFC 17-102 / IEC 62561',
    },
    {
      id: 'switchgear',
      slug: 'switchgear',
      title: 'L.T Switchboards, MCC Panels & Power Distribution',
      category: 'Power Distribution Assemblies',
      partnerBrand: 'IEC 61439-1/2 Certified Assemblies',
      image: '/assets/images/switchgear.jpg',
      points: [
        'Form 2 to Form 4b Segregated Low Tension Switchboards & Distribution Boards (DBs)',
        'Intelligent Motor Control Centers (MCC) & Dynamic Voltage Restorers (DVR / AVR)',
        'Automatic Transfer Switches (ATS) & Generator Synchronizing Digital Busbars',
      ],
      tag: 'IEC 61439 Form 4b',
    },
    {
      id: 'power-generation',
      slug: 'power-generation',
      title: 'Industrial Diesel & Gas Power Generation (10–3300 kVA)',
      category: 'Heavy Power Generation',
      partnerBrand: 'STARKGEN Generators (UK / Turkey)',
      image: '/assets/images/power_generation.jpg',
      points: [
        '10kVA to 3300kVA Heavy-Duty Prime & Standby Diesel & Gas Generating Sets',
        'Comap / Deep Sea Digital Auto-Mains Failure (AMF) & Auto-Synchronizing Controllers',
        'Weatherproof Sound-Attenuated Canopies, Base Fuel Tanks & Fleet Power Supply',
      ],
      tag: '10kVA – 3300kVA Starkgen',
    },
    {
      id: 'fire-protection',
      slug: 'fire-protection',
      title: 'UL Listed & FM Approved Fire Fighting Pump Packages',
      category: 'Life Safety & Fire Protection',
      partnerBrand: 'BRISTOL Fire Engineering (UK)',
      image: '/assets/images/fire_fighting.jpg',
      points: [
        'UL Listed & FM Approved End Suction & Horizontal Split Case Fire Pump Assemblies',
        'NFPA 20 Compliant Automatic Electric Motor & Diesel Engine System Controllers',
        'Integrated Pressure Maintenance Jockey Pumps, Relief Valves & Precision Flow Meters',
      ],
      tag: 'UL Listed / FM Approved / NFPA 20',
    },
    {
      id: 'automation',
      slug: 'automation',
      title: 'Industrial Automation, SCADA Systems & Process PLC',
      category: 'Automation & Instrumentation',
      partnerBrand: 'Siemens • Allen-Bradley • Schneider',
      image: '/assets/images/automation_instrumentation.jpg',
      points: [
        'Turnkey SCADA Touchscreen Human-Machine Interfaces (HMI) & Process Telemetry',
        'Custom Programmable Logic Controller (PLC) Panels, Batching Logic & Remote RTUs',
        'Variable Frequency Drives (VFDs), Soft Starters, Harmonics & Power Factor Correction',
      ],
      tag: 'Turnkey SCADA / PLC / VFD',
    },
  ];

  // Flagship Completed Projects with Main Points & Pictures
  const featuredProjects = [
    {
      client: 'Pak Suzuki Motor Co.',
      industry: 'Automotive Manufacturing',
      image: '/assets/images/industry_heavy_facilities.jpg',
      highlight: 'Turnkey L.T Distribution Panels, Cable Trays & High Ampacity Cabling',
      specs: 'Form 4b Switchboards • Substation Electrification',
    },
    {
      client: 'Lucky Cement Ltd.',
      industry: 'Heavy Process & Cement',
      image: '/assets/images/industrial_heavy_plants.jpg',
      highlight: 'Heavy Motor Control Centers (MCC), VFDs & Dynamic Power Factor Correction',
      specs: 'Continuous Duty • Fault Current Withstand',
    },
    {
      client: 'Master Changan Motors',
      industry: 'Modern Vehicle Assembly',
      image: '/assets/images/switchgear.jpg',
      highlight: 'Robotic Line Substation Distribution, Cable Management & SCADA Telemetry',
      specs: 'Automated Line Substation • Power Quality',
    },
    {
      client: 'Packages Mall / Sapphire Wind',
      industry: 'Commercial & Renewables',
      image: '/assets/images/packages_mall.jpg',
      highlight: 'Forend Active ESE Lightning Defense & Hakel Coordinated Surge Arresters',
      specs: 'NFC 17-102 ESE • High Surge Impulse Iimp',
    },
  ];

  return (
    <div className="bg-white">
      {/* 01. Compact High-Impact Hero */}
      <Hero
        onExploreSolutions={() => {
          const el = document.getElementById('products-showcase');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('/solutions');
        }}
        onTalkToEngineer={() => onRequestConsultation()}
        onRequestQuote={() => onRequestConsultation('Technical Equipment Quote')}
        onContactUs={() => onNavigate('/contact')}
        onSelectSolutionSlug={(slug) => onNavigate(`/solutions/${slug}`)}
      />

      {/* 02. Sleek Trust & Standards Capability Bar */}
      <section className="bg-slate-900 text-white py-5 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <button
              onClick={() => onNavigate('/solutions')}
              className="text-left p-3 hover:bg-slate-800/40 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Layers className="w-4 h-4 text-[#1e73be]" />
                <span className="text-xl font-black font-heading tracking-tight text-white group-hover:text-[#1e73be] transition-colors">
                  12
                </span>
              </div>
              <p className="text-xs font-bold text-slate-300">Specialized Disciplines</p>
              <p className="text-[11px] text-slate-500 font-mono">Engineered Products Catalog →</p>
            </button>

            <button
              onClick={() => onNavigate('/principals')}
              className="text-left p-3 md:pl-6 hover:bg-slate-800/40 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Globe2 className="w-4 h-4 text-[#a81c24]" />
                <span className="text-xl font-black font-heading tracking-tight text-white group-hover:text-[#a81c24] transition-colors">
                  9
                </span>
              </div>
              <p className="text-xs font-bold text-slate-300">Global Principals</p>
              <p className="text-[11px] text-slate-500 font-mono">Official Authorized Partners →</p>
            </button>

            <button
              onClick={() => onNavigate('/services')}
              className="text-left p-3 md:pl-6 hover:bg-slate-800/40 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xl font-black font-heading tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  21
                </span>
              </div>
              <p className="text-xs font-bold text-slate-300">Electrical Services</p>
              <p className="text-[11px] text-slate-500 font-mono">Cabling, Glanding & Panels →</p>
            </button>

            <button
              onClick={() => onNavigate('/hseq')}
              className="text-left p-3 md:pl-6 hover:bg-slate-800/40 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xl font-black font-heading tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  100%
                </span>
              </div>
              <p className="text-xs font-bold text-slate-300">Standards Compliance</p>
              <p className="text-[11px] text-slate-500 font-mono">IEC 61439, NFC 17-102 & NFPA →</p>
            </button>
          </div>
        </div>
      </section>

      {/* 03. Core Engineered Products & Systems (Main Points & Pictures Only) */}
      <section id="products-showcase" className="py-14 sm:py-18 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 border border-red-200 text-[#a81c24] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Engineered Products & Specialized Systems</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase font-heading tracking-tight">
                Core Technologies & Equipment
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Click any product to access complete engineering specifications, technical drawings, and certified equipment models.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/solutions')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:border-[#1e73be] text-slate-800 hover:text-[#1e73be] font-bold font-mono text-xs uppercase tracking-wider shadow-sm transition-all self-start md:self-auto"
            >
              <span>View Full 12 Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1e73be]" />
            </button>
          </div>

          {/* 6 Core Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSolutions.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(`/solutions/${item.slug}`)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Product HD Picture */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Badges on Picture */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="font-bold text-white drop-shadow truncate">
                      {item.partnerBrand}
                    </span>
                  </div>
                </div>

                {/* Card Content: Main Points */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1e73be] transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Main Technical Bullet Points */}
                    <ul className="space-y-2 mb-5">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1e73be] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-semibold">
                      {item.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold font-mono text-[#a81c24] group-hover:translate-x-1 transition-transform">
                      <span>View Details & Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Dedicated Infrastructure Divisions (Electrical Services & Turnkey Solar) */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#1e73be] font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Turnkey Execution Divisions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase font-heading tracking-tight">
              Site Infrastructure & Clean Energy EPC
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Comprehensive field execution with dedicated crews, engineering tooling, and turnkey project accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Division Card 1: Electrical Services */}
            <div
              onClick={() => onNavigate('/services')}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src="/assets/images/electrical_services.jpg"
                  alt="Electrical Services & Cabling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1e73be] text-white font-mono text-xs font-bold uppercase tracking-wider">
                    21 Certified Services
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-white group-hover:text-blue-300 transition-colors">
                    Electrical Infrastructure & Cabling
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-1">
                    L.T. Panels • Cable Trays • Megger Testing • Turnkey Electrification
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1e73be] flex-shrink-0 mt-0.5" />
                    <span><strong>L.T. & MCC Switchboards</strong>: Fabrication, assembly, revamping & Form 4b segregation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1e73be] flex-shrink-0 mt-0.5" />
                    <span><strong>Heavy Cabling & Cable Trays</strong>: Ladder networks, high-ampacity glanding & termination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1e73be] flex-shrink-0 mt-0.5" />
                    <span><strong>Testing & Commissioning</strong>: Megger insulation, earth grid resistance & protection relay calibration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1e73be] flex-shrink-0 mt-0.5" />
                    <span><strong>Power Quality & Plant Audits</strong>: Harmonic analysis, thermography & dynamic power factor</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-semibold">21 Dedicated Electrical Services</span>
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#1e73be] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>View All 21 Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Division Card 2: Turnkey Solar Solutions */}
            <div
              onClick={() => onNavigate('/solar')}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src="/assets/images/solar_energy.jpg"
                  alt="Turnkey Commercial & Industrial Solar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-amber-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    Turnkey Clean Energy EPC
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-white group-hover:text-amber-300 transition-colors">
                    Commercial & Industrial Solar Solutions
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-1">
                    Bifacial PV • High-Yield Inverters • Net-Metering • Zero-Capex / Turnkey
                  </p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Tier-1 Monocrystalline Bifacial Panels</strong>: N-Type TOPCon modules for maximum kWh/kWp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Utility-Grade String Inverters</strong>: High efficiency Huawei & Sungrow with cloud telemetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Certified Wind-Rated Mounting</strong>: Hot-dip galvanized steel & high-grade aluminum fabrication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Net-Metering & NEPRA Interconnection</strong>: Full regulatory licensing, grid sync & bi-directional metering</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-semibold">Turnkey Solar EPC & Net-Metering</span>
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-amber-600 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Explore Solar Systems</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Featured Completed Projects (Main Points & Pictures Only) */}
      <section className="py-14 sm:py-18 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-[#a81c24]" />
                <span>Proven Field Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase font-heading tracking-tight">
                Featured Completed Projects
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Real engineering deployments across automotive assembly, heavy cement, textile manufacturing, and commercial infrastructure.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:border-[#1e73be] text-slate-800 hover:text-[#1e73be] font-bold font-mono text-xs uppercase tracking-wider shadow-sm transition-all self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1e73be]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProjects.map((p, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('/projects')}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col"
              >
                <div className="relative h-40 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={p.image}
                    alt={p.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white font-mono text-[10px] font-semibold">
                      {p.industry}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#a81c24] transition-colors">
                      {p.client}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                      {p.highlight}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500 truncate max-w-[170px]">{p.specs}</span>
                    <span className="text-[#1e73be] font-bold">Case Study →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Official Global Manufacturing Principals (Trust Strip) */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a81c24] font-bold">
                Direct Authorized Alliances
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Official International Manufacturing Partners
              </h3>
            </div>
            <button
              onClick={() => onNavigate('/principals')}
              className="text-xs font-mono font-bold text-[#1e73be] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>View All 9 Principals & Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GLOBAL_PRINCIPALS.slice(0, 6).map((principal) => (
              <button
                key={principal.id}
                onClick={() => onNavigate('/principals')}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1e73be] text-left hover:bg-white transition-all group shadow-sm"
              >
                <div className="text-sm font-bold text-slate-900 group-hover:text-[#1e73be] transition-colors truncate">
                  {principal.name}
                </div>
                <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1 mt-0.5">
                  <span>{principal.flagEmoji}</span>
                  <span>{principal.country}</span>
                </div>
                <div className="text-[10px] text-slate-600 line-clamp-1 mt-1 font-medium">
                  {principal.specialization}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Compact Next-Step Action Banner (Consultation & Contact) */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-widest">
                Technical Consultation & Direct Sizing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-white">
                Ready to Specify or Implement an Engineered System?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our licensed engineering team for single-line diagram (SLD) reviews, short-circuit withstand studies, surge suppression coordination, or formal tenders.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestConsultation()}
                className="px-6 py-3.5 btn-pill-red font-bold font-mono tracking-wider uppercase text-xs flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
              >
                <span>Request Equipment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold font-mono tracking-wider uppercase text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>Regional Offices (Karachi & Lahore)</span>
                <ArrowRight className="w-4 h-4 text-[#1e73be]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

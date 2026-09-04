import React, { useState } from 'react';
import {
  Zap,
  Cpu,
  Flame,
  Lightbulb,
  Layers,
  Activity,
  Shield,
  Gauge,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Sun,
  BatteryCharging,
  Power,
  Server,
  Cable,
} from 'lucide-react';

interface ElectricalServicesSectionProps {
  onRequestConsultation: (serviceName?: string) => void;
}

interface ElectricalServiceItem {
  id: string;
  name: string;
  category: 'Automation & Control' | 'Distribution & Switchgear' | 'Cabling & Infrastructure' | 'Power Quality & UPS' | 'Lighting & Renewables';
  description: string;
  scope: string;
  icon: React.ReactNode;
}

const ELECTRICAL_SERVICES_LIST: ElectricalServiceItem[] = [
  {
    id: 'plc-scada',
    name: 'PLC / SCADA',
    category: 'Automation & Control',
    description: 'Programmable Logic Controller architectures and supervisory SCADA systems for end-to-end plant telemetry and centralized process control.',
    scope: 'Logic programming, HMI integration, telemetry networks',
    icon: <Cpu className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'fire-alarm-system',
    name: 'Fire Alarm System',
    category: 'Automation & Control',
    description: 'Addressable and conventional fire alarm detection networks with device-level communication, precision sensors, and central panels.',
    scope: 'Smoke/heat detectors, sounders, addressable loops',
    icon: <Flame className="w-5 h-5 text-[#a81c24]" />,
  },
  {
    id: 'automation-services',
    name: 'Automation Services',
    category: 'Automation & Control',
    description: 'Custom industrial automation engineering, instrumentation loops, sensor calibration, automated interlocks, and emergency shutdown sequences.',
    scope: 'Process optimization, interlocks, system upgrades',
    icon: <Sliders className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'installation-of-lights',
    name: 'Installation of Lights',
    category: 'Lighting & Renewables',
    description: 'Comprehensive commercial and industrial lighting installation adhering to lux-level engineering requirements and architectural plans.',
    scope: 'High-bay lighting, fixtures, emergency egress routes',
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
  },
  {
    id: 'led-lights-installation',
    name: 'LED Lights Installation',
    category: 'Lighting & Renewables',
    description: 'High-efficiency industrial and commercial LED illumination solutions designed for maximum lumen output and lower kilowatt-hour consumption.',
    scope: 'Retrofits, architectural LEDs, weatherproof fittings',
    icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
  },
  {
    id: 'cabling-and-termination',
    name: 'Cabling and Termination',
    category: 'Cabling & Infrastructure',
    description: 'Low-tension and medium-tension cable pulling, laying, glanding, lug crimping, heat-shrink termination, and megger insulation testing.',
    scope: 'Armored cabling, busway connections, phase balancing',
    icon: <Cable className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'energy-monitoring-system',
    name: 'Energy Monitoring System',
    category: 'Automation & Control',
    description: 'Digital power meters, data loggers, Class-A power quality analyzers, and energy dashboards to analyze load curves and eliminate waste.',
    scope: 'Sub-metering, harmonic distortion, kWh reporting',
    icon: <Activity className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'automatic-voltage-regulator',
    name: 'Automatic Voltage Regulator (AVR)',
    category: 'Power Quality & UPS',
    description: 'High-speed servo and solid-state voltage regulators protecting sensitive industrial machinery against sags, swells, and unstable grid lines.',
    scope: 'Voltage stabilization, phase correction, spike clamp',
    icon: <Gauge className="w-5 h-5 text-[#a81c24]" />,
  },
  {
    id: 'breakers',
    name: 'Breakers (ACB / MCCB / MCB)',
    category: 'Distribution & Switchgear',
    description: 'Air Circuit Breakers (ACB), Molded Case Circuit Breakers (MCCB), and Miniature Circuit Breakers engineered for safe fault-current breaking.',
    scope: 'Short-circuit protection, shunt trips, thermal overload',
    icon: <Power className="w-5 h-5 text-[#a81c24]" />,
  },
  {
    id: 'soft-starter',
    name: 'Soft Starter',
    category: 'Automation & Control',
    description: 'Solid-state electronic soft starters that smoothly ramp up heavy three-phase induction motors, reducing inrush current and mechanical shock.',
    scope: 'Torque control, ramp-up profiling, bypass contactors',
    icon: <Zap className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'vfd',
    name: 'Variable Frequency Drives (VFD)',
    category: 'Automation & Control',
    description: 'Variable frequency speed drives for pumps, fans, compressors, and conveyors, delivering dynamic process control and significant energy savings.',
    scope: 'Frequency modulation, PID closed-loop, Modbus control',
    icon: <Sliders className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'plc-panels',
    name: 'PLC Panels',
    category: 'Automation & Control',
    description: 'Custom-engineered control cabinets housing PLCs, digital/analog I/O cards, relays, isolated power supplies, and clean wire routing.',
    scope: 'Form 2/4 compartmentalization, neat ferruled wiring',
    icon: <Server className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'vfd-based-panels',
    name: 'VFD Based Panels',
    category: 'Automation & Control',
    description: 'Fully integrated variable speed control panels with forced-air cooling, input chokes, EMC filters, and local manual/auto selector switches.',
    scope: 'Motor control, speed synchronization, thermal dissipation',
    icon: <Sliders className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'solar-structure-installation',
    name: 'Solar Structure Installation',
    category: 'Lighting & Renewables',
    description: 'Heavy-duty hot-dip galvanized and aluminum mounting structures engineered for wind loads, rooftop solar arrays, and ground-mount arrays.',
    scope: 'Corrosion-resistant steel, aerodynamic design, tilt angles',
    icon: <Sun className="w-5 h-5 text-amber-500" />,
  },
  {
    id: 'dynamic-voltage-regulator-ups',
    name: 'Dynamic Voltage Regulator / UPS',
    category: 'Power Quality & UPS',
    description: 'Sub-cycle dynamic voltage restorers and industrial online double-conversion UPS systems ensuring uninterrupted clean sinewave power.',
    scope: 'Zero transfer time, sag compensation, battery banks',
    icon: <BatteryCharging className="w-5 h-5 text-[#a81c24]" />,
  },
  {
    id: 'cable-tray',
    name: 'Cable Tray',
    category: 'Cabling & Infrastructure',
    description: 'Perforated and solid-bottom pre-galvanized or hot-dip galvanized cable trays providing structured routing across industrial ceilings and trenches.',
    scope: 'Perforated trays, bend accessories, seismic brackets',
    icon: <Layers className="w-5 h-5 text-slate-700" />,
  },
  {
    id: 'cable-ladders',
    name: 'Cable Ladders',
    category: 'Cabling & Infrastructure',
    description: 'Heavy-load cable ladders specifically fabricated for heavy armored cables, offering maximum ventilation and large load-bearing capacity.',
    scope: 'High ampacity runs, vertical risers, rung clamps',
    icon: <Layers className="w-5 h-5 text-slate-700" />,
  },
  {
    id: 'cable-mesh',
    name: 'Cable Mesh',
    category: 'Cabling & Infrastructure',
    description: 'Flexible electro-zinc and stainless steel wire mesh cable baskets ideal for server rooms, clean environments, and quick site routing modifications.',
    scope: 'Fast installation, lightweight baskets, data/power separation',
    icon: <Layers className="w-5 h-5 text-slate-700" />,
  },
  {
    id: 'lt-panels',
    name: 'L.T Panels',
    category: 'Distribution & Switchgear',
    description: 'Low-Tension (415V/240V) main switchboards fabricated up to Form 4b standards with high busbar fault withstand ratings and modular tiers.',
    scope: 'Main incoming, motorized breakers, busbar chambers',
    icon: <Server className="w-5 h-5 text-[#a81c24]" />,
  },
  {
    id: 'dbs',
    name: 'Distribution Boards (DBs)',
    category: 'Distribution & Switchgear',
    description: 'Sub-distribution boards, lighting panels, and power DBs fitted with MCBs, RCCBs, and surge arresters for commercial and plant divisions.',
    scope: 'Flush/surface mount, phase dividers, IP-rated seals',
    icon: <Shield className="w-5 h-5 text-[#1e73be]" />,
  },
  {
    id: 'mcc-panels',
    name: 'MCC Panels (Motor Control Center)',
    category: 'Distribution & Switchgear',
    description: 'Centralized Motor Control Centers housing draw-out and fixed starters, protection relays, VFDs, and interlocked disconnect switches.',
    scope: 'Direct-on-line (DOL), star-delta, soft starter tiers',
    icon: <Server className="w-5 h-5 text-[#a81c24]" />,
  },
  {
    id: 'lighting-engineering',
    name: 'Industrial & Architectural Lighting',
    category: 'Lighting & Renewables',
    description: 'End-to-end lighting layouts, lumen modeling, daylight harvesting, and explosion-proof luminaires for hazardous or damp industrial zones.',
    scope: 'Photometric analysis, energy conservation, ATEX rated',
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
  },
];

export const ElectricalServicesSection: React.FC<ElectricalServicesSectionProps> = ({
  onRequestConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = [
    'All',
    'Automation & Control',
    'Distribution & Switchgear',
    'Cabling & Infrastructure',
    'Power Quality & UPS',
    'Lighting & Renewables',
  ];

  const filteredServices =
    activeFilter === 'All'
      ? ELECTRICAL_SERVICES_LIST
      : ELECTRICAL_SERVICES_LIST.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="relative py-24 bg-slate-50 border-t border-slate-200">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Full-Spectrum Electrical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Electrical Services & Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
              From high-capacity L.T. switchboards and PLC/SCADA automation to precision cabling and power quality regulation. All 21 core disciplines from our authoritative company profile.
            </p>
          </div>

          <button
            onClick={() => onRequestConsultation('Electrical Services')}
            className="inline-flex items-center gap-2 px-6 py-3.5 btn-pill-red font-bold font-mono text-xs uppercase tracking-wider shadow-md self-start md:self-auto"
          >
            <span>Request Service Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#1e73be] text-white font-bold shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 font-semibold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 22 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1e73be] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-[#1e73be]/40 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#1e73be] transition-colors leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500 truncate max-w-[170px]" title={service.scope}>
                  {service.scope}
                </span>
                <button
                  onClick={() => onRequestConsultation(service.name)}
                  className="text-[#a81c24] hover:text-[#88141b] font-bold inline-flex items-center gap-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono text-[#a81c24] uppercase tracking-widest font-bold">
              Tailored Engineering Methodology
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading uppercase">
              Need a Custom Electrical or Automation Blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Our engineering team conducts single-line diagram reviews, load profiling, on-site surveys, and turnkey execution adhering to IEC 61439 specifications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onRequestConsultation('Custom Electrical Engineering')}
              className="px-6 py-3.5 btn-pill-red font-bold font-mono text-xs uppercase tracking-wider shadow-md active:scale-95"
            >
              Get Engineering Quote
            </button>
            <a
              href="mailto:info@lv-engineering.com"
              className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold font-mono text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
            >
              info@lv-engineering.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

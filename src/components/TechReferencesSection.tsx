import React from 'react';
import { ExternalLink, ShieldCheck, ArrowRight, Layers, Cpu, Zap } from 'lucide-react';

export interface TechReferenceItem {
  name: string;
  country: string;
  established?: string;
  category: string;
  description: string;
  solutionSlug: string;
  keyProducts: string[];
}

export const TECH_REFERENCES: TechReferenceItem[] = [
  {
    name: 'HAKEL spol. s r.o.',
    country: 'Czech Republic',
    established: '1994',
    category: 'Surge Protection & Insulation Monitoring',
    description:
      'Global manufacturer of Type 1, 2, 3 surge arresters, pipeline spark gaps, and IT ungrounded system insulation monitors.',
    solutionSlug: 'surge-protection',
    keyProducts: ['Type 1/2/3 SPD', 'Cathodic Spark Gaps', 'PV DC Arresters', 'Insulation Monitors'],
  },
  {
    name: 'FOREND',
    country: 'Turkey',
    established: 'Active ESE Pioneer',
    category: 'Lightning Protection & Grounding',
    description:
      'Early Streamer Emission (ESE) active lightning terminals, grounding enhancement compounds (TAM/TAM PLUS), and digital strike counters.',
    solutionSlug: 'lightning-protection',
    keyProducts: ['Petex-S / Petex-L ESE', 'Digital Strike Counters', 'TAM Ground Compound', 'Air Terminals'],
  },
  {
    name: 'STARKGEN',
    country: 'International',
    established: 'ISO 8528 Standard',
    category: 'Power Generation & Diesel GenSets',
    description:
      'Diesel and gas generating sets up to 3300kVA with Stamford/Leroy Somer alternators, Deep Sea digital controllers, and sound-attenuated enclosures.',
    solutionSlug: 'power-generation',
    keyProducts: ['10kVA – 3300kVA GenSets', 'Synchronizing Panels', 'Acoustic Enclosures', 'Automatic Transfer (ATS)'],
  },
  {
    name: 'BRISTOL FIRE ENGINEERING',
    country: 'UAE / Global',
    established: 'UL / FM Approved',
    category: 'Fire Fighting & Suppression Systems',
    description:
      'Industrial fire pumps, hydrants, deluge valves, foam proportioning systems, and FM200/NOVEC clean agent gaseous suppression.',
    solutionSlug: 'fire-protection',
    keyProducts: ['UL/FM Fire Pumps', 'Hydrant Systems', 'Automatic Sprinklers', 'Gaseous Suppression'],
  },
  {
    name: 'Endress+Hauser',
    country: 'Switzerland',
    established: 'Instrumentation Global Leader',
    category: 'Process Flow & Level Measurement',
    description:
      'Electromagnetic flow meters, Coriolis mass flow systems, ultrasonic open channel transmitters, and industrial telemetry.',
    solutionSlug: 'instrumentation',
    keyProducts: ['Electromagnetic Flow Meters', 'Vortex Meters', 'Ultrasonic Transmitters', 'Pressure Sensors'],
  },
  {
    name: 'CASS',
    country: 'International',
    established: 'Automated Transit Solutions',
    category: 'Intelligent Parking Guidance Systems',
    description:
      'Ultrasonic parking bay sensors, camera-based license plate recognition, real-time LED occupancy matrix displays, and wayfinding kiosks.',
    solutionSlug: 'parking-guidance',
    keyProducts: ['Bay Ultrasonic Sensors', 'Variable Message Displays', 'Central Parking Server', 'Find-My-Car Kiosks'],
  },
  {
    name: 'SJEC CORPORATION',
    country: 'International',
    established: 'Vertical Transportation',
    category: 'Elevators, Escalators & Moving Walks',
    description:
      'High-speed commercial passenger elevators, panoramic observation lifts, heavy-duty public transit escalators, and moving walks.',
    solutionSlug: 'elevators-escalators',
    keyProducts: ['Passenger Elevators', 'Freight Lifts', 'Public Duty Escalators', 'Moving Walkways'],
  },
  {
    name: 'NITTAN COMPANY',
    country: 'Japan / UK',
    established: 'UL / EN-54 Certified',
    category: 'Addressable Fire Detection & Alarms',
    description:
      'Sensortec optical smoke detectors, multi-sensor heat sensors, loop-powered sounder strobes, and modular addressable fire alarm panels.',
    solutionSlug: 'fire-alarm',
    keyProducts: ['Addressable Panels', 'Optical Smoke Sensors', 'Thermal Heat Detectors', 'Loop Sounders'],
  },
  {
    name: 'CLEVER LIGHT',
    country: 'Hungary',
    established: 'Since 1998',
    category: 'Emergency Egress & Central Battery Systems',
    description:
      'Self-contained addressable emergency exit luminaires, 220V AC/DC central battery systems, and automated testing management software.',
    solutionSlug: 'emergency-lighting',
    keyProducts: ['220V Central Battery', 'Self-Contained Exit Signs', 'Addressable LED Luminaires', 'Auto-Test Software'],
  },
];

interface TechReferencesSectionProps {
  onSelectSolutionSlug?: (slug: string) => void;
}

export const TechReferencesSection: React.FC<TechReferencesSectionProps> = ({
  onSelectSolutionSlug,
}) => {
  return (
    <section
      className="relative py-24 bg-white border-t border-slate-200 overflow-hidden"
      id="tech-references"
    >
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-3 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Equipment & Manufacturer References</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Technology & Product References
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Low Voltage Engineering designs, integrates, and deploys systems referencing internationally certified equipment and manufacturers from Europe, Asia, and the Middle East.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-700 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 flex items-center gap-2 font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#1e73be]" />
            <span>GLOBAL STANDARD COMPLIANCE</span>
          </div>
        </div>

        {/* References 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_REFERENCES.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#1e73be] hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Header: Origin Badge and Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-red-50 text-[#a81c24] border border-red-200 font-bold">
                    {item.country} {item.established ? `• ${item.established}` : ''}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                    Ref #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="text-xl font-black font-heading text-slate-900 group-hover:text-[#1e73be] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs font-mono text-[#1e73be] font-bold mt-1 mb-3">
                  {item.category}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Product Scope Chips */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                    Referenced Systems:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyProducts.map((p, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium shadow-2xs"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onSelectSolutionSlug && (
                <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onSelectSolutionSlug(item.solutionSlug)}
                    className="text-xs font-mono text-[#1e73be] group-hover:text-[#a81c24] font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Integrated Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer / Compliance Notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono flex items-start gap-3 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[#a81c24] mt-1 flex-shrink-0" />
          <p>
            <strong className="text-slate-900 font-bold">Technical Note:</strong> Technology, trademark, and manufacturer names referenced above reflect the equipment specifications, engineering materials, and integration capabilities documented in the LV Engineering corporate profile.
          </p>
        </div>

      </div>
    </section>
  );
};

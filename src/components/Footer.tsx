import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Shield,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO, OFFICES } from '../data/companyData';
import { LVBrandLogo } from './LVBrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onRequestConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestConsultation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Engineering Solutions', path: '/solutions' },
    { label: 'Global Principals', path: '/principals' },
    { label: 'Projects & Case Studies', path: '/projects' },
    { label: 'Engineering Calculators', path: '/tools' },
    { label: 'Industries Served', path: '/industries' },
    { label: 'Methodology & Process', path: '/expertise' },
    { label: 'HSEQ Commitment', path: '/hseq' },
    { label: 'Contact & Offices', path: '/contact' },
  ];

  const solutionLinks = [
    { label: 'Electrical Services & Panels', slug: 'electrical' },
    { label: 'PLC & SCADA Automation', slug: 'automation' },
    { label: 'Starkgen Power Generators', slug: 'power-generation' },
    { label: 'Bristol Fire Protection', slug: 'fire-protection' },
    { label: 'Nittan Addressable Fire Alarm', slug: 'fire-alarm' },
    { label: 'Forend Lightning & Earthing', slug: 'lightning-protection' },
    { label: 'Hakel Surge Protection', slug: 'surge-protection' },
    { label: 'Clever Light Emergency Lighting', slug: 'emergency-lighting' },
    { label: 'Endress+Hauser Instrumentation', slug: 'instrumentation' },
    { label: 'CASS Parking Guidance', slug: 'parking-guidance' },
    { label: 'SJEC Elevators & Escalators', slug: 'elevators-escalators' },
    { label: 'Turnkey Solar Solutions', slug: 'solar-energy' },
    { label: 'Switchgear & Assemblies', slug: 'switchgear' },
  ];

  return (
    <footer className="relative bg-slate-100 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 mb-12 border-b border-slate-200 gap-6">
          <div className="space-y-3">
            <LVBrandLogo
              size="lg"
              showTagline={false}
              onClick={() => {
                onNavigate('/');
                scrollToTop();
              }}
            />
            <p className="text-xs font-mono text-[#a81c24] font-bold pt-1">
              Sparks of Innovation ..... !!! • Industrial & Commercial Engineering
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onRequestConsultation}
              className="px-6 py-3 font-bold font-mono uppercase tracking-wider text-xs btn-pill-red active:scale-95 shadow-md"
            >
              Request Consultation
            </button>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-black transition-colors shadow-sm"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Footer Navigation & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Corporate Profile Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="font-mono text-xs text-slate-900 font-bold uppercase tracking-wider">
              Engineering Profile
            </h5>
            <p className="text-slate-600 leading-relaxed text-xs">
              {COMPANY_INFO.summary}
            </p>
            <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-[11px] text-slate-600 space-y-1 shadow-sm">
              <div>OFFICIAL WEB: <span className="text-slate-900 font-bold">{COMPANY_INFO.website}</span></div>
              <div>DIVISIONS: <span className="text-[#1e73be] font-bold">Karachi & Lahore, Pakistan</span></div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-mono text-xs text-slate-900 font-bold uppercase tracking-wider">
              Navigation
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-[#1e73be] transition-colors text-left text-xs font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-mono text-xs text-slate-900 font-bold uppercase tracking-wider">
              Solutions Portfolio
            </h5>
            <ul className="space-y-1.5 max-h-56 overflow-y-auto pr-2">
              {solutionLinks.map((sol) => (
                <li key={sol.slug}>
                  <button
                    onClick={() => onNavigate(`/solutions/${sol.slug}`)}
                    className="hover:text-[#1e73be] transition-colors text-left text-[11px] block truncate font-medium"
                  >
                    {sol.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Directory */}
          <div className="lg:col-span-3 space-y-4 font-mono text-[11px]">
            <h5 className="text-xs text-slate-900 font-bold uppercase tracking-wider">
              Direct Contact & Offices
            </h5>

            <div className="space-y-3">
              <div>
                <span className="text-[#1e73be] block font-bold">KARACHI OFFICE:</span>
                <p className="text-slate-600 font-sans text-xs mt-0.5">
                  Mezzanine Floor, Building #19C, Sunset, 2nd Floor, DHA Phase-II Extension, Karachi South.
                </p>
                <a href="tel:03011484433" className="text-slate-900 font-bold hover:text-[#a81c24] block mt-0.5">
                  Tel: 0301-1484433
                </a>
              </div>

              <div>
                <span className="text-[#1e73be] block font-bold">LAHORE OFFICE:</span>
                <p className="text-slate-600 font-sans text-xs mt-0.5">
                  2 Km off Ferozepur Road, Nadir Chowk, Industrial State, Hazara Chowk, Street #5, Lahore.
                </p>
                <a href="tel:03222222805" className="text-slate-900 font-bold hover:text-[#a81c24] block mt-0.5">
                  Tel: 0322-2222805
                </a>
              </div>

              <div className="pt-1 text-slate-600">
                Email: <a href="mailto:info@lv-engineering.com" className="text-slate-900 font-bold hover:text-[#1e73be]">info@lv-engineering.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono gap-4 text-slate-500">
          <div>
            © 2026 LV Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-semibold">
            <span>Low Voltage Engineering</span>
            <span>•</span>
            <span>Karachi & Lahore, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

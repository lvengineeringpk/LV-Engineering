import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { COMPANY_INFO, OFFICES } from '../data/companyData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactPageProps {
  preselectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedService,
}) => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 sm:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Karachi & Lahore Engineering Divisions</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
              Contact LV Engineering
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct technical intake, tender requests, and engineering support for industrial and commercial facilities across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection preselectedService={preselectedService} />
    </div>
  );
};

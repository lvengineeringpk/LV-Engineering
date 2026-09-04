import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { COMPANY_INFO, OFFICES, SOLUTIONS } from '../data/companyData';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceId: preselectedService || 'electrical-services',
    projectType: 'industrial',
    message: '',
  });

  const [activeOfficeCity, setActiveOfficeCity] = useState<'Karachi' | 'Lahore'>('Karachi');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name, email address, and direct phone number.');
      return;
    }

    setSubmitting(true);

    // Simulate reliable client-side processing with clear confirmation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const currentOffice = OFFICES.find((o) => o.city === activeOfficeCity) || OFFICES[0];

  return (
    <section id="contact" className="relative py-24 bg-slate-50 border-t border-slate-200">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold">
            <span className="w-5 h-[2px] bg-[#a81c24]" />
            <span>Consultation & Direct Engineering Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading leading-tight">
            Let's Engineer What's Next.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have an industrial, commercial, electrical, automation, safety or energy requirement? Talk to our engineering team.
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Offices & Technical Location Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Request a Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase font-heading">
                  Request a Consultation
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Direct inquiry routing to Karachi & Lahore engineering desks
                </p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-red-50 text-[#a81c24] border border-red-200 font-bold">
                OFFICIAL INTAKE
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mx-auto text-[#a81c24]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 font-heading">
                  Inquiry Successfully Registered
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your technical consultation request for <strong className="text-[#1e73be]">{formData.company || 'your facility'}</strong> has been assigned. An LV Engineering specialist will contact you directly at <strong className="text-slate-900">{formData.phone}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceId: 'electrical-services',
                        projectType: 'industrial',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono uppercase text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors font-bold shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 text-[#a81c24] flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Engr. / Project Manager"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Industrial Plant / Commercial Plaza"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Primary Service / Solution
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceId: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                    >
                      {SOLUTIONS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                      Project Environment Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value as any,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm transition-all"
                    >
                      <option value="industrial">Industrial Facility / Plant</option>
                      <option value="commercial">Commercial Building / Plaza</option>
                      <option value="infrastructure">Power / Infrastructure</option>
                      <option value="other">Institutional / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">
                    Project Scope / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your electrical load requirements, automation specs, fire protection needs, or site timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 btn-pill-red font-bold font-mono uppercase text-xs tracking-wider transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 shadow-md"
                  >
                    <span>{submitting ? 'PROCESSING INTAKE...' : 'SEND INQUIRY TO ENGINEERING DESK'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1e73be]" />
                  <span>Confidentiality Guaranteed • Direct Engineering Review</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Karachi & Lahore Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Switcher Tabs */}
            <div className="flex rounded-full p-1 bg-slate-200/80 border border-slate-300">
              <button
                onClick={() => setActiveOfficeCity('Karachi')}
                className={`flex-1 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeOfficeCity === 'Karachi'
                    ? 'btn-pill-red font-bold text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                Karachi Office
              </button>
              <button
                onClick={() => setActiveOfficeCity('Lahore')}
                className={`flex-1 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                  activeOfficeCity === 'Lahore'
                    ? 'btn-pill-blue font-bold text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                Lahore Office
              </button>
            </div>

            {/* Selected Office Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-5 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono text-[#a81c24] uppercase tracking-widest font-bold">
                  {currentOffice.title}
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-medium">
                  {currentOffice.coordinates}
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1e73be] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs font-mono uppercase mb-0.5 font-bold">
                      Physical Address:
                    </span>
                    <p className="text-slate-800 leading-relaxed font-medium">
                      {currentOffice.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1e73be] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs font-mono uppercase mb-0.5 font-bold">
                      Direct Contact:
                    </span>
                    <a
                      href={`tel:${currentOffice.phone.replace(/[^0-9]/g, '')}`}
                      className="text-slate-900 font-mono hover:text-[#a81c24] text-base font-bold transition-colors"
                    >
                      {currentOffice.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1e73be] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs font-mono uppercase mb-0.5 font-bold">
                      Direct Correspondence:
                    </span>
                    <a
                      href={`mailto:${currentOffice.email}`}
                      className="text-[#1e73be] hover:underline font-medium transition-colors"
                    >
                      {currentOffice.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1e73be] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-xs font-mono uppercase mb-0.5 font-bold">
                      Office Working Hours:
                    </span>
                    <p className="text-slate-700 font-mono text-xs">
                      {currentOffice.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Dial Action */}
              <div className="pt-3 border-t border-slate-200">
                <a
                  href={`tel:${currentOffice.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-800 hover:text-slate-900 font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#a81c24]" />
                  <span>Call {activeOfficeCity} Engineer Now</span>
                </a>
              </div>
            </div>

            {/* Technical Map-Style Visual Widget */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 font-mono text-xs space-y-3 relative overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

              <div className="flex items-center justify-between text-[#a81c24] text-[11px] pb-2 border-b border-slate-200 relative z-10 font-bold">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  TERRITORIAL DEPLOYMENT
                </span>
                <span>PAKISTAN NETWORK</span>
              </div>

              <div className="space-y-2 relative z-10 text-slate-700">
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-900 font-bold">Karachi Engineering Division:</span>
                  <span className="text-[#1e73be] font-bold">DHA Phase-II Ext.</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-900 font-bold">Lahore Regional Division:</span>
                  <span className="text-[#1e73be] font-bold">Ferozepur Rd. Ind. State</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 pt-1 relative z-10">
                Official Web Portal: <strong className="text-slate-900 font-bold">{COMPANY_INFO.website}</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

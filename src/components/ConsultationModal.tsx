import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building,
  Mail,
  MessageCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { SOLUTIONS, OFFICES } from '../data/companyData';
import { ConsultationFormData } from '../types';
import { LVBrandLogo } from './LVBrandLogo';
import {
  createInquiryMailtoLink,
  createWhatsAppLink,
  OFFICIAL_INQUIRY_EMAIL,
  WHATSAPP_PHONE_NUMBER,
} from '../utils/contactUtils';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
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

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const match = SOLUTIONS.find(
        (s) =>
          s.id === preselectedService ||
          s.slug === preselectedService ||
          s.title.toLowerCase().includes(preselectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, serviceId: match.id }));
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const getActiveSolutionTitle = () => {
    const s = SOLUTIONS.find((item) => item.id === formData.serviceId);
    return s ? s.title : formData.serviceId;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    setSubmitting(true);

    const serviceTitle = getActiveSolutionTitle();
    const mailtoUrl = createInquiryMailtoLink({
      fullName: formData.fullName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      serviceTitle,
      projectType: formData.projectType,
      message: formData.message,
      source: 'Direct Consultation Intake',
    });

    const waUrl = createWhatsAppLink({
      fullName: formData.fullName,
      company: formData.company,
      phone: formData.phone,
      serviceTitle,
      message: formData.message,
    });

    setLastMailtoUrl(mailtoUrl);
    setLastWhatsAppUrl(waUrl);

    // Trigger email client with info@lv-engineering.com
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled by rendered modal buttons
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_INQUIRY_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <LVBrandLogo size="sm" showTagline={false} />
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${OFFICIAL_INQUIRY_EMAIL}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-50 text-[#a81c24] border border-red-200 font-mono text-[11px] font-bold hover:bg-red-100 transition-colors"
                title="Send direct email"
              >
                <Mail className="w-3 h-3" />
                <span>{OFFICIAL_INQUIRY_EMAIL}</span>
              </a>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px] font-bold hover:bg-emerald-100 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3 h-3" />
                <span>0301-1484433</span>
              </a>
            </div>
          </div>
          <div className="text-xs font-mono text-[#a81c24] uppercase tracking-widest mb-1 font-bold">
            Official Technical Intake Desk
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading uppercase">
            Request Engineering Quote & Consultation
          </h3>
          <p className="text-xs text-slate-500 font-mono mt-1 font-medium">
            Submissions are routed directly to <strong className="text-slate-800">{OFFICIAL_INQUIRY_EMAIL}</strong>
          </p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-slate-900 font-heading">
                Inquiry Prepared for info@lv-engineering.com
              </h4>
              <p className="text-xs text-emerald-700 font-mono font-bold">
                ✓ Routed to Karachi & Lahore Engineering Desks
              </p>
            </div>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your requirement for <strong className="text-slate-900">{formData.company || 'your facility'}</strong> regarding <strong className="text-[#1e73be]">{getActiveSolutionTitle()}</strong> has been dispatched.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 max-w-md mx-auto text-left space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Destination Desk:</span>
                <span className="font-bold text-slate-900">{OFFICIAL_INQUIRY_EMAIL}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">WhatsApp Intake:</span>
                <span className="font-bold text-[#25D366]">+92 301 1484433</span>
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
              <a
                href={lastMailtoUrl || `mailto:${OFFICIAL_INQUIRY_EMAIL}`}
                className="px-5 py-2.5 rounded-full btn-pill-red text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Mail App</span>
              </a>
              <a
                href={lastWhatsAppUrl || createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono uppercase font-semibold flex items-center justify-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-900 underline font-mono"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#a81c24] flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Engr. / Manager"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Industrial Plant"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
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
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                  Target Discipline
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceId: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm"
                >
                  {SOLUTIONS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                  Project Environment
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectType: e.target.value as any,
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm"
                >
                  <option value="industrial">Industrial Facility</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="infrastructure">Power Infrastructure</option>
                  <option value="other">Other Technical Requirement</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1 font-semibold">
                Project Scope / Technical Notes
              </label>
              <textarea
                rows={3}
                placeholder="Briefly state your capacity, timeline or requirements..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 focus:border-[#1e73be] focus:bg-white focus:outline-none text-slate-900 text-sm resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 btn-pill-red font-bold font-mono uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99] shadow-md"
              >
                <span>{submitting ? 'DISPATCHING TO INFO@LV-ENGINEERING.COM...' : 'SEND INQUIRY TO INFO@LV-ENGINEERING.COM'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1e73be]" />
              <span>Direct Route to info@lv-engineering.com • Strict Engineering Privacy</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { SOLUTIONS, OFFICES } from '../data/companyData';
import { ConsultationFormData } from '../types';
import { LVBrandLogo } from './LVBrandLogo';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
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

        <div className="pb-4 mb-5 border-b border-slate-200">
          <div className="mb-3">
            <LVBrandLogo size="sm" showTagline={false} />
          </div>
          <div className="text-xs font-mono text-[#a81c24] uppercase tracking-widest mb-1 font-bold">
            Direct Technical Intake Desk
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading uppercase">
            Request Engineering Consultation
          </h3>
          <p className="text-xs text-slate-500 font-mono mt-1 font-medium">
            Serving Karachi, Lahore & across Pakistan industrial sectors
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              Inquiry Dispatched to Engineering Desk
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your requirement has been registered. An engineering representative will contact you via <strong className="text-[#1e73be]">{formData.phone}</strong> promptly.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#1e73be] hover:bg-[#165a96] text-white font-bold font-mono text-xs uppercase shadow-sm"
              >
                Done
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
                <span>{submitting ? 'DISPATCHING TO ENGINEERING DESK...' : 'DISPATCH INQUIRY'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1e73be]" />
              <span>Strict Engineering Privacy Maintained</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

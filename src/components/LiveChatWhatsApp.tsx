import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { WHATSAPP_LINK, OFFICIAL_INQUIRY_EMAIL } from '../utils/contactUtils';

export const LiveChatWhatsApp: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Prompt Card */}
      {tooltipOpen && (
        <div className="pointer-events-auto mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 transition-all animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-start justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 font-heading">
                  LV Engineering Desk
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Engineers Online Now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setTooltipOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              title="Close notification"
              aria-label="Close chat preview"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-2.5 leading-relaxed">
            Need an urgent quote, equipment specs, or consultation? Chat live with our technical engineers in Karachi & Lahore on WhatsApp.
          </p>

          <div className="space-y-1.5 pt-1">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold font-mono tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
              id="whatsapp-card-cta"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center justify-between pt-1 px-1 text-[10px] font-mono text-slate-500">
              <a
                href={`mailto:${OFFICIAL_INQUIRY_EMAIL}`}
                className="hover:text-[#1e73be] flex items-center gap-1 font-semibold transition-colors"
              >
                <Mail className="w-3 h-3 text-[#a81c24]" />
                <span>{OFFICIAL_INQUIRY_EMAIL}</span>
              </a>
              <span className="text-slate-400">0301-1484433</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 border-2 border-white"
        id="whatsapp-floating-live-chat"
        aria-label="Live Chat on WhatsApp: 0301-1484433"
        title="Live Chat with LV Engineering on WhatsApp (wa.me/923011484433)"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 border-2 border-[#25D366] animate-ping" />
        </div>
        <span className="hidden sm:inline font-bold font-mono text-xs tracking-wider uppercase">
          Live Chat
        </span>
      </a>
    </div>
  );
};

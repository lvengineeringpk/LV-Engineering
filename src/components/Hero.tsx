import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldAlert,
  Zap,
  Cpu,
  Activity,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Flame,
  Radio,
  Sliders,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Interactive3DViewer, SystemModelType } from './Interactive3DViewer';

interface HeroProps {
  onExploreSolutions: () => void;
  onTalkToEngineer: () => void;
  onRequestQuote?: () => void;
  onContactUs?: () => void;
  onSelectSolutionSlug?: (slug: string) => void;
}

interface HeroSlide {
  titleLine1: string;
  titleAccent: string;
  titleLine2: string;
  subtitle: string;
  badge: string;
  systemModel: SystemModelType;
  specs: { label: string; value: string }[];
  primaryCTA: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    titleLine1: 'TURNING CONCEPTS INTO',
    titleAccent: 'ENGINEERING',
    titleLine2: 'MARVELS',
    subtitle:
      'Electrical, Instrumentation & Automation Solutions for Industrial and Commercial Applications.',
    badge: 'SPARKS OF INNOVATION ..... !!!',
    systemModel: 'electrical',
    specs: [
      { label: 'POWER GENERATION', value: '10kVA – 3300kVA Generators' },
      { label: 'GLOBAL STANDARD', value: 'IEC 61439 Certified' },
      { label: 'SWITCHGEAR BUILDS', value: 'Form 4b Switchboards' },
      { label: 'PROCESS CONTROL', value: 'Turnkey Automation' },
    ],
    primaryCTA: 'Our Solutions',
  },
  {
    titleLine1: 'HEAVY POWER GENERATION &',
    titleAccent: 'INDUSTRIAL',
    titleLine2: 'AUTOMATION',
    subtitle:
      'Starkgen diesel & gas generators up to 3300kVA coupled with intelligent PLC telemetry, VFD frequency drives, and process instrumentation.',
    badge: 'STARKGEN POWER & AUTOMATION',
    systemModel: 'power',
    specs: [
      { label: 'GENERATOR CAPACITY', value: '10kVA – 3300kVA Prime/Standby' },
      { label: 'SYNCHRONIZATION', value: 'Comap / Deep Sea Digital Controllers' },
      { label: 'CONTROL PLATFORMS', value: 'Form 4b Switchboards & VFDs' },
      { label: 'INTELLIGENT SCADA', value: 'Turnkey Automation' },
    ],
    primaryCTA: 'Our Solutions',
  },
  {
    titleLine1: 'LIFE SAFETY, LIGHTNING &',
    titleAccent: 'RENEWABLE',
    titleLine2: 'INFRASTRUCTURE',
    subtitle:
      'Forend active ESE lightning protection, Hakel surge arresters, Clever Light emergency central batteries, and turnkey solar energy arrays.',
    badge: 'CERTIFIED ASSET PROTECTION',
    systemModel: 'lightning',
    specs: [
      { label: 'LIGHTNING ACCREDITATION', value: 'NFC 17-102:2011 Compliant' },
      { label: 'EMERGENCY EGRESS', value: '220V AC/DC Central Battery' },
      { label: 'SURGE MITIGATION', value: 'Type 1/2/3 Up to 50kA' },
      { label: 'STANDARDS ALIGNMENT', value: 'IEC 61439 Certified' },
    ],
    primaryCTA: 'Our Solutions',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreSolutions,
  onTalkToEngineer,
  onRequestQuote,
  onContactUs,
  onSelectSolutionSlug,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel every 8 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleQuoteClick = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      onTalkToEngineer();
    }
  };

  const handleContactClick = () => {
    if (onContactUs) {
      onContactUs();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        onTalkToEngineer();
      }
    }
  };

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-28 pb-16 border-b border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      id="hero-section"
    >
      {/* Background Engineering Atmosphere Layers in Light Mode */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-100/60 pointer-events-none" />

      {/* Subtle Radial Atmosphere for Industrial Lighting: Red on left, Blue on right */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Decorative Technical Blueprint Lines & Coordinate Markers */}
      <div className="absolute top-28 left-8 hidden xl:flex flex-col gap-1 font-mono text-[10px] text-slate-400 select-none">
        <span className="text-[#a81c24] font-bold">
          LOC.PK // LAT: 24.8290° N | LON: 67.0654° E
        </span>
        <span>SYS.FREQ: 50.00 Hz • LV BUS: 415V/240V AC</span>
        <span>SPEC: IEC 61439-1/2 • ISO 9001 ALIGNMENT</span>
      </div>

      <div className="absolute top-28 right-8 hidden xl:flex flex-col items-end gap-1 font-mono text-[10px] text-slate-400 select-none">
        <span className="flex items-center gap-1.5 text-[#1e73be] font-bold">
          <span className="w-2 h-2 rounded-full bg-[#1e73be] animate-pulse" />
          SYSTEM STATUS: ONLINE
        </span>
        <span>AUTOMATION / SCADA / LIFE SAFETY / POWER</span>
        <span>KARACHI • LAHORE ENGINEERING DIVISIONS</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Minimal Technical HUD Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-red-200 text-xs font-mono tracking-widest text-[#a81c24] shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#a81c24]" />
              <span className="font-bold">{currentSlide.badge}</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-slate-900 uppercase font-heading leading-[1.05]">
                {currentSlide.titleLine1} <br />
                <span className="text-[#1e73be]">
                  {currentSlide.titleAccent}
                </span>{' '}
                <span className="text-[#a81c24]">{currentSlide.titleLine2}</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              {currentSlide.subtitle}
            </p>

            {/* Engineering Highlights Quick Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {currentSlide.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 font-mono text-xs flex flex-col justify-center shadow-sm"
                >
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    {spec.label}
                  </span>
                  <span className="text-slate-900 font-bold mt-1">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* Get a Quote button */}
              <button
                onClick={handleQuoteClick}
                className="px-7 py-4 btn-pill-red font-bold font-mono tracking-wider uppercase text-xs flex items-center justify-center gap-2.5 active:scale-[0.98] shadow-md hover:shadow-lg transition-all"
                id="hero-get-quote-btn"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Our Solutions button */}
              <button
                onClick={onExploreSolutions}
                className="px-6 py-4 btn-pill-blue font-bold font-mono tracking-wider uppercase text-xs flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm hover:shadow-md transition-all text-white"
                id="hero-our-solutions-btn"
              >
                <span>Our Solutions</span>
              </button>

              {/* Contact Us button */}
              <button
                onClick={handleContactClick}
                className="px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-[#1e73be] font-bold font-mono tracking-wider uppercase text-xs flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm"
                id="hero-contact-us-btn"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-black transition-all shadow-sm"
                  aria-label="Previous Slide"
                  id="hero-slide-prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-black transition-all shadow-sm"
                  aria-label="Next Slide"
                  id="hero-slide-next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlideIndex
                        ? 'w-8 bg-[#a81c24]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs font-mono text-slate-500 ml-2 font-semibold">
                0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Model Visualizer & Blueprint HUD */}
          <div className="lg:col-span-5 relative">
            <Interactive3DViewer
              initialSystem={currentSlide.systemModel}
              onExploreSystem={(sys) => {
                if (onSelectSolutionSlug) {
                  const slugMap: Record<SystemModelType, string> = {
                    electrical: 'electrical',
                    automation: 'automation',
                    power: 'power-generation',
                    fire: 'fire-protection',
                    lightning: 'lightning-protection',
                    solar: 'solar-energy',
                    instrumentation: 'instrumentation',
                  };
                  onSelectSolutionSlug(slugMap[sys]);
                }
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

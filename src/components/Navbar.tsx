import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Shield,
  Search,
  Zap,
  Sliders,
  Sun,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, SOLUTIONS } from '../data/companyData';
import { LVBrandLogo } from './LVBrandLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onRequestConsultation: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onRequestConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Defined services for the Services dropdown
  const servicesDropdownItems = [
    { label: 'Electrical Services & Infrastructure', slug: 'electrical', desc: 'L.T. Panels, Cable Trays, MCC Panels & Wiring' },
    { label: 'Automation & Instrumentation', slug: 'automation', desc: 'Custom PLC Panels, Process Telemetry & RTU' },
    { label: 'PLC / SCADA Integration', slug: 'automation', desc: 'Centralized Supervisory Control & Batch Logic' },
    { label: 'Cabling, Glanding & Termination', slug: 'electrical', desc: 'High Ampacity Heavy Cabling & Megger Testing' },
    { label: 'Energy Monitoring Systems', slug: 'automation', desc: 'Class-A Power Quality & Real-Time Dashboards' },
    { label: 'Panels & Distribution (L.T / MCC / DBs)', slug: 'switchgear', desc: 'Form 4b Switchboards & Motor Control Tiers' },
    { label: 'UPS & Voltage Regulation (AVR/DVR)', slug: 'electrical', desc: 'Dynamic Voltage Restorers & Industrial Power Stability' },
    { label: 'Solar Structure & PV Installation', slug: 'solar-energy', desc: 'Turnkey Galvanized Mounting & DC/AC Integration' },
  ];

  const filteredSolutions = searchQuery.trim()
    ? SOLUTIONS.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.partnerBrand && s.partnerBrand.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : SOLUTIONS;

  const scrollToAnchor = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);

    if (path.startsWith('#')) {
      const anchorId = path.replace('#', '');
      if (currentPath === '/') {
        scrollToAnchor(anchorId);
      } else {
        onNavigate('/');
        setTimeout(() => {
          scrollToAnchor(anchorId);
        }, 150);
      }
      return;
    }

    onNavigate(path);
  };

  const handleSolutionSelect = (slug: string) => {
    setSolutionsOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
    onNavigate(`/solutions/${slug}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 border-b border-slate-200 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-slate-200/80'
        }`}
      >
        {/* Top Telemetry & Contact Bar */}
        <div className="hidden lg:block border-b border-slate-200/70 pb-2 mb-2 text-xs text-slate-600">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <span className="flex items-center text-[#1e73be] font-mono tracking-wider font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a81c24] inline-block mr-2 animate-pulse" />
                LV ENGINEERING // TURNING CONCEPTS INTO ENGINEERING MARVELS
              </span>
              <span className="text-slate-300 font-mono">|</span>
              <span className="text-slate-500 font-mono text-[11px]">ISO / IEC 61439 COMPLIANT</span>
            </div>
            
            <div className="flex items-center space-x-5 font-mono text-slate-600 text-xs">
              <a
                href="tel:03011484433"
                className="hover:text-[#a81c24] transition-colors flex items-center gap-1.5 font-bold"
                title="Direct Karachi Office"
              >
                <Phone className="w-3.5 h-3.5 text-[#a81c24]" />
                <span>0301-1484433 (KHI)</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="tel:03222222805"
                className="hover:text-[#a81c24] transition-colors flex items-center gap-1.5 font-bold"
                title="Direct Lahore Office"
              >
                <Phone className="w-3.5 h-3.5 text-[#1e73be]" />
                <span>0322-2222805 (LHR)</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="mailto:info@lv-engineering.com"
                className="hover:text-[#1e73be] transition-colors flex items-center gap-1.5 font-bold text-slate-800"
                title="Official Engineering Inquiries"
              >
                <Mail className="w-3.5 h-3.5 text-[#a81c24]" />
                <span>info@lv-engineering.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <LVBrandLogo
              size="md"
              showTagline={false}
              onClick={() => handleLinkClick('/')}
              className="py-1 cursor-pointer"
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5">
              
              {/* Home */}
              <button
                onClick={() => handleLinkClick('/')}
                className={`px-3 py-2 text-sm font-semibold transition-colors rounded ${
                  currentPath === '/'
                    ? 'text-[#a81c24] bg-red-50/70 font-bold'
                    : 'text-slate-700 hover:text-[#1e73be] hover:bg-slate-50'
                }`}
                id="nav-link-home"
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => handleLinkClick('/about')}
                className={`px-3 py-2 text-sm font-semibold transition-colors rounded ${
                  currentPath.startsWith('/about')
                    ? 'text-[#a81c24] bg-red-50/70 font-bold'
                    : 'text-slate-700 hover:text-[#1e73be] hover:bg-slate-50'
                }`}
                id="nav-link-about"
              >
                About
              </button>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick('/solutions')}
                  className={`px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-1 rounded ${
                    currentPath.startsWith('/solutions')
                      ? 'text-[#a81c24] bg-red-50/70 font-bold'
                      : 'text-slate-700 hover:text-[#1e73be] hover:bg-slate-50'
                  }`}
                  id="nav-solutions-dropdown"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsOpen ? 'rotate-180 text-[#1e73be]' : ''
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu for Solutions */}
                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] pt-2 z-50">
                    <div className="rounded-2xl p-5 shadow-2xl border border-slate-200 bg-white">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                        <div>
                          <span className="text-[11px] font-mono tracking-widest text-[#a81c24] uppercase font-bold">
                            Engineered Solutions Catalog
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">
                            12 Specialized Disciplines & Global Partnerships
                          </h4>
                        </div>
                        <button
                          onClick={() => handleLinkClick('/solutions')}
                          className="text-xs font-mono text-[#1e73be] hover:underline flex items-center gap-1 font-bold"
                        >
                          <span>All Solutions</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2 max-h-[380px] overflow-y-auto pr-1">
                        {SOLUTIONS.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleSolutionSelect(item.slug)}
                            className="text-left p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group/item"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono text-slate-500 group-hover/item:text-[#1e73be] uppercase tracking-wider font-semibold">
                                {item.category}
                              </span>
                              {item.partnerBrand && (
                                <span className="text-[9px] font-mono bg-blue-50 text-[#1e73be] border border-blue-200 px-1 rounded font-semibold">
                                  {item.partnerBrand}
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-semibold text-slate-800 group-hover/item:text-[#a81c24] line-clamp-1">
                              {item.title}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick('#services')}
                  className="px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-1 rounded text-slate-700 hover:text-[#1e73be] hover:bg-slate-50"
                  id="nav-services-dropdown"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#1e73be]' : ''
                    }`}
                  />
                </button>

                {/* Services Dropdown Panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-[420px] pt-2 z-50">
                    <div className="rounded-2xl p-4 shadow-2xl border border-slate-200 bg-white">
                      <div className="border-b border-slate-100 pb-2 mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#a81c24] uppercase font-bold tracking-wider">
                          21 Electrical Services
                        </span>
                        <button
                          onClick={() => handleLinkClick('#services')}
                          className="text-[11px] font-mono text-[#1e73be] hover:underline font-semibold"
                        >
                          Explore Grid
                        </button>
                      </div>
                      <div className="space-y-1">
                        {servicesDropdownItems.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick('#services')}
                            className="w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-colors block group"
                          >
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#1e73be] block">
                              {s.label}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">
                              {s.desc}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solar */}
              <button
                onClick={() => handleLinkClick('#solar')}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#1e73be] hover:bg-slate-50 transition-colors rounded"
                id="nav-link-solar"
              >
                Solar
              </button>

              {/* Contact */}
              <button
                onClick={() => handleLinkClick('/contact')}
                className={`px-3 py-2 text-sm font-semibold transition-colors rounded ${
                  currentPath.startsWith('/contact')
                    ? 'text-[#a81c24] bg-red-50/70 font-bold'
                    : 'text-slate-700 hover:text-[#1e73be] hover:bg-slate-50'
                }`}
                id="nav-link-contact"
              >
                Contact
              </button>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-3">
              
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-[#1e73be] hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 shadow-sm"
                title="Search Solutions & Equipment"
                id="header-search-btn"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Consultation / Quote Button */}
              <button
                onClick={() => onRequestConsultation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase font-mono btn-pill-red shadow-md active:scale-95"
                id="nav-consultation-btn"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-black lg:hidden rounded-xl hover:bg-slate-100 focus:outline-none border border-slate-200"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#a81c24]" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Quick Search Overlay Modal (Light Theme) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-[#1e73be]" />
                <input
                  type="text"
                  placeholder="Search solutions, systems (e.g. SCADA, Starkgen, Bristol, Forend, Solar)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none w-full text-base font-medium"
                />
              </div>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[360px] overflow-y-auto space-y-2">
              {filteredSolutions.length === 0 ? (
                <div className="text-center py-8 text-slate-500 font-mono text-sm">
                  No solutions matched "{searchQuery}".
                </div>
              ) : (
                filteredSolutions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSolutionSelect(item.slug)}
                    className="w-full text-left p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 hover:border-slate-300 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#1e73be] font-bold">{item.category}</span>
                        {item.partnerBrand && (
                          <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-medium">
                            {item.partnerBrand}
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#a81c24] transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                        {item.headline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#a81c24] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu (Light Theme) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <div className="text-xs font-mono text-[#a81c24] uppercase tracking-widest font-bold mb-1">
              LV Engineering
            </div>
            <div className="text-base font-bold text-slate-900 font-heading">
              Turning Concepts Into Engineering Marvels
            </div>
          </div>

          <nav className="flex flex-col space-y-1 mb-6">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-left py-3 px-4 rounded-xl font-semibold text-base text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className="text-left py-3 px-4 rounded-xl font-semibold text-base text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/solutions')}
              className="text-left py-3 px-4 rounded-xl font-semibold text-base text-[#a81c24] bg-red-50/50 flex items-center justify-between font-bold"
            >
              <span>Solutions Portfolio (12 Disciplines)</span>
              <ArrowRight className="w-4 h-4 text-[#a81c24]" />
            </button>
            <button
              onClick={() => handleLinkClick('#services')}
              className="text-left py-3 px-4 rounded-xl font-semibold text-base text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Electrical Services (21 Items)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('#solar')}
              className="text-left py-3 px-4 rounded-xl font-semibold text-base text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Solar Energy Solutions</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="text-left py-3 px-4 rounded-xl font-semibold text-base text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Contact & Regional Offices</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full py-3.5 btn-pill-red font-bold font-mono tracking-wider uppercase text-xs rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <span>Request Consultation / Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
              <a
                href="tel:03011484433"
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center gap-0.5 shadow-sm"
              >
                <span className="text-[#a81c24] font-bold text-[11px]">Karachi Office</span>
                <span className="font-bold text-slate-900 text-xs">0301-1484433</span>
              </a>
              <a
                href="tel:03222222805"
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center gap-0.5 shadow-sm"
              >
                <span className="text-[#1e73be] font-bold text-[11px]">Lahore Office</span>
                <span className="font-bold text-slate-900 text-xs">0322-2222805</span>
              </a>
            </div>

            <div className="text-center pt-2 text-[11px] font-mono text-slate-500">
              Direct: <a href="mailto:info@lv-engineering.com" className="text-slate-900 font-bold hover:underline">info@lv-engineering.com</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

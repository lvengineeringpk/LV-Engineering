import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  Zap,
  Sun,
  ShieldCheck,
  Building2,
  FolderGit2,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import { SOLUTIONS } from '../data/companyData';
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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Defined services for the Services dropdown
  const servicesDropdownItems = [
    { label: 'Low Tension (L.T.) Switchboards & Panels', slug: 'switchgear', desc: 'Form 4b Segregated Switchboards, DBs & ATS Panels' },
    { label: 'Motor Control Centers (MCC) & VFDs', slug: 'switchgear', desc: 'Custom Variable Frequency Drives & Soft Starters' },
    { label: 'High-Ampacity Heavy Cabling & Trays', slug: 'electrical', desc: 'Cable Tray Ladders, Glanding & Termination' },
    { label: 'Testing, Commissioning & Meggering', slug: 'electrical', desc: 'Insulation Resistance, Earth Pits & Relay Calibration' },
    { label: 'Industrial Automation & SCADA Control', slug: 'automation', desc: 'PLC Panels, Process Telemetry & Central HMI' },
    { label: 'Dynamic Voltage Regulation (DVR / UPS)', slug: 'electrical', desc: 'Dynamic Voltage Restorers & Industrial Power Stability' },
    { label: 'Solar Structure & PV Grid Integration', slug: 'solar-energy', desc: 'Turnkey Commercial & Industrial Solar EPC' },
    { label: 'Power Quality & Harmonic Plant Audits', slug: 'automation', desc: 'Class-A Power Profiling & Dynamic Factor Correction' },
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
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 shadow-xs'
        }`}
      >
        {/* Top Precision Accent Gradient Line (Engineering Red to Industrial Blue) */}
        <div className="h-[2.5px] w-full bg-gradient-to-r from-[#a81c24] via-[#a81c24] to-[#1e73be]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            
            {/* Brand Logo - Recreated Exact Official Lockup */}
            <div className="flex-shrink-0 flex items-center">
              <LVBrandLogo
                size="md"
                showTagline={false}
                onClick={() => handleLinkClick('/')}
                className="cursor-pointer transition-transform hover:opacity-95"
              />
            </div>

            {/* Desktop Navigation Links - Attractive, High-Readability Fonts */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              
              {/* Home */}
              <button
                onClick={() => handleLinkClick('/')}
                className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all rounded-xl ${
                  currentPath === '/'
                    ? 'text-[#a81c24] bg-red-50/90 font-bold border border-red-200/60 shadow-xs'
                    : 'text-slate-800 hover:text-[#1e73be] hover:bg-slate-100/80'
                }`}
                id="nav-link-home"
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => handleLinkClick('/about')}
                className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all rounded-xl ${
                  currentPath.startsWith('/about')
                    ? 'text-[#a81c24] bg-red-50/90 font-bold border border-red-200/60 shadow-xs'
                    : 'text-slate-800 hover:text-[#1e73be] hover:bg-slate-100/80'
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
                  className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all flex items-center gap-1.5 rounded-xl ${
                    currentPath.startsWith('/solutions')
                      ? 'text-[#a81c24] bg-red-50/90 font-bold border border-red-200/60 shadow-xs'
                      : 'text-slate-800 hover:text-[#1e73be] hover:bg-slate-100/80'
                  }`}
                  id="nav-solutions-dropdown"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${
                      solutionsOpen ? 'rotate-180 text-[#1e73be]' : ''
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu for Solutions */}
                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] pt-2 z-50">
                    <div className="rounded-2xl p-5 shadow-2xl border border-slate-200 bg-white/98 backdrop-blur-xl">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#a81c24] animate-pulse" />
                          <span className="text-xs font-mono tracking-widest text-[#a81c24] uppercase font-bold">
                            Engineered Solutions Catalog &bull; 12 Disciplines
                          </span>
                        </div>
                        <button
                          onClick={() => handleLinkClick('/solutions')}
                          className="text-xs font-mono text-[#1e73be] hover:underline flex items-center gap-1 font-bold"
                        >
                          <span>View Full Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                        {SOLUTIONS.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleSolutionSelect(item.slug)}
                            className="text-left p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-slate-300 transition-all group/item"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-mono text-slate-500 group-hover/item:text-[#1e73be] uppercase tracking-wider font-semibold">
                                {item.category}
                              </span>
                              {item.partnerBrand && (
                                <span className="text-[9px] font-mono bg-blue-50 text-[#1e73be] border border-blue-200 px-1 rounded font-semibold truncate max-w-[90px]">
                                  {item.partnerBrand}
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#a81c24] line-clamp-1">
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
                  onClick={() => handleLinkClick('/services')}
                  className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all flex items-center gap-1.5 rounded-xl ${
                    currentPath.startsWith('/services')
                      ? 'text-[#a81c24] bg-red-50/90 font-bold border border-red-200/60 shadow-xs'
                      : 'text-slate-800 hover:text-[#1e73be] hover:bg-slate-100/80'
                  }`}
                  id="nav-services-dropdown"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${
                      servicesOpen ? 'rotate-180 text-[#1e73be]' : ''
                    }`}
                  />
                </button>

                {/* Services Dropdown Panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-[440px] pt-2 z-50">
                    <div className="rounded-2xl p-4 shadow-2xl border border-slate-200 bg-white/98 backdrop-blur-xl">
                      <div className="border-b border-slate-100 pb-2 mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#a81c24] uppercase font-bold tracking-wider">
                          21 Certified Electrical Services
                        </span>
                        <button
                          onClick={() => handleLinkClick('/services')}
                          className="text-[11px] font-mono text-[#1e73be] hover:underline font-semibold"
                        >
                          Explore All Services Grid →
                        </button>
                      </div>
                      <div className="space-y-1">
                        {servicesDropdownItems.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick('/services')}
                            className="w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-colors block group"
                          >
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#1e73be] block">
                              {s.label}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
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
                onClick={() => handleLinkClick('/solar')}
                className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all rounded-xl flex items-center gap-1.5 ${
                  currentPath.startsWith('/solar')
                    ? 'text-amber-600 bg-amber-50/90 font-bold border border-amber-200/60 shadow-xs'
                    : 'text-slate-800 hover:text-amber-600 hover:bg-amber-50/50'
                }`}
                id="nav-link-solar"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Solar</span>
              </button>

              {/* Projects */}
              <button
                onClick={() => handleLinkClick('/projects')}
                className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all rounded-xl ${
                  currentPath.startsWith('/projects')
                    ? 'text-[#a81c24] bg-red-50/90 font-bold border border-red-200/60 shadow-xs'
                    : 'text-slate-800 hover:text-[#1e73be] hover:bg-slate-100/80'
                }`}
                id="nav-link-projects"
              >
                Projects
              </button>

              {/* Contact */}
              <button
                onClick={() => handleLinkClick('/contact')}
                className={`px-3.5 py-2 text-[14px] font-heading font-semibold transition-all rounded-xl ${
                  currentPath.startsWith('/contact')
                    ? 'text-[#a81c24] bg-red-50/90 font-bold border border-red-200/60 shadow-xs'
                    : 'text-slate-800 hover:text-[#1e73be] hover:bg-slate-100/80'
                }`}
                id="nav-link-contact"
              >
                Contact
              </button>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-2.5">
              
              {/* Quick Search Toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-700 hover:text-[#1e73be] hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 shadow-xs"
                title="Search Solutions, Partners & Equipment"
                id="header-search-btn"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Attractive High-Impact "Get a Quote" Button */}
              <button
                onClick={() => onRequestConsultation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase font-mono bg-gradient-to-r from-[#a81c24] via-[#b91c26] to-[#a81c24] hover:from-[#92141c] hover:to-[#a81c24] text-white rounded-full shadow-md hover:shadow-lg hover:shadow-red-600/25 active:scale-95 transition-all border border-red-600/40"
                id="nav-consultation-btn"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-black lg:hidden rounded-xl hover:bg-slate-100 focus:outline-none border border-slate-200"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-[#a81c24]" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Quick Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-[#1e73be]" />
                <input
                  type="text"
                  placeholder="Search solutions, systems (e.g. SCADA, Starkgen, Bristol, Forend, Hakel, Solar)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none w-full text-base font-semibold"
                />
              </div>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-slate-400 hover:text-slate-700 p-1"
                aria-label="Close Search"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-20 px-6 pb-8 overflow-y-auto">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <LVBrandLogo size="md" onClick={() => handleLinkClick('/')} />
          </div>

          <nav className="flex flex-col space-y-1 mb-6 font-heading">
            <button
              onClick={() => handleLinkClick('/')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath === '/' ? 'text-[#a81c24] bg-red-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath.startsWith('/about') ? 'text-[#a81c24] bg-red-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/solutions')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath.startsWith('/solutions') ? 'text-[#a81c24] bg-red-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Solutions Catalog (12 Disciplines)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/services')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath.startsWith('/services') ? 'text-[#a81c24] bg-red-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Electrical Services (21 Solutions)</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/solar')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath.startsWith('/solar') ? 'text-amber-600 bg-amber-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Solar Energy Solutions</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/projects')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath.startsWith('/projects') ? 'text-[#a81c24] bg-red-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Verified Projects Portfolio</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className={`text-left py-3 px-4 rounded-xl font-semibold text-base flex items-center justify-between ${
                currentPath.startsWith('/contact') ? 'text-[#a81c24] bg-red-50/80 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Contact Regional Offices</span>
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
              className="w-full py-3.5 bg-gradient-to-r from-[#a81c24] via-[#b91c26] to-[#a81c24] text-white font-bold font-mono tracking-wider uppercase text-xs rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <span>Request Consultation / Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className="w-full py-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold font-mono tracking-wider uppercase text-xs shadow-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Karachi & Lahore Regional Offices</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Zap,
  Cpu,
  Shield,
  Flame,
  Radio,
  Sun,
  Activity,
  Car,
  Maximize2,
  Sliders,
  Pause,
  Play,
} from 'lucide-react';
import { SOLUTIONS } from '../data/companyData';
import { SolutionItem } from '../types';

interface SolutionsCarouselProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const SolutionsCarousel: React.FC<SolutionsCarouselProps> = ({
  onSelectSolution,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Map of specific display titles and badges for the 12 requested categories
  const carouselItems = SOLUTIONS.map((sol) => ({
    ...sol,
    brandBadge: sol.partnerBrand ? `${sol.partnerBrand}` : 'LV Engineering',
  }));

  const total = carouselItems.length;

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeItem = carouselItems[currentIndex];

  return (
    <section
      id="solutions-carousel"
      className="relative py-16 bg-white border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Engineered Solutions Showcase Carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase font-bold mb-2">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Technology & Solutions Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase font-heading">
              12 Engineering Disciplines
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Explore specialized electrical distribution, heavy power, industrial automation, life safety, and renewables.
            </p>
          </div>

          {/* Controls: Play/Pause, Prev/Next buttons */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-colors shadow-sm"
              title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? <Play className="w-4 h-4 text-[#1e73be]" /> : <Pause className="w-4 h-4 text-slate-600" />}
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-black transition-colors shadow-sm"
              title="Previous solution"
              aria-label="Previous solution"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-slate-500 font-bold px-1">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-black transition-colors shadow-sm"
              title="Next solution"
              aria-label="Next solution"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[500px]">
            
            {/* Left Column: Image with Subtle Gradient */}
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 scale-100 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-slate-900" />
              
              {/* Category & Partner Badge Over Image */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#a81c24] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                  {activeItem.category}
                </span>
                {activeItem.partnerBrand && (
                  <span className="px-3 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-mono font-bold tracking-wider uppercase border border-slate-200 shadow-md">
                    Principal: {activeItem.partnerBrand}
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <h3 className="text-xl font-black text-white font-heading">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            {/* Right Column: Editorial Details & CTA */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-slate-900 text-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
                  <span className="text-[#1e73be] font-bold">
                    SYSTEM REF: 0{currentIndex + 1}
                  </span>
                  <span>{activeItem.partnerOrigin || 'TURKEY / EUROPE / ASIA'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase leading-tight hidden lg:block">
                  {activeItem.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeItem.headline || activeItem.description}
                </p>

                {/* Key specs or highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Core Engineering Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeItem.details.slice(0, 4).map((det, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a81c24] mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-2 leading-snug">{det}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => onSelectSolution(activeItem)}
                  className="px-6 py-3.5 btn-pill-red font-bold font-mono tracking-wider uppercase text-xs flex items-center justify-center gap-2 group shadow-lg active:scale-95 transition-all"
                  id={`carousel-view-${activeItem.slug}`}
                >
                  <span>View Detailed Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-[11px] font-mono text-slate-400 text-center sm:text-right">
                  {activeItem.keySpecs[0]?.label}:{' '}
                  <strong className="text-white">{activeItem.keySpecs[0]?.value}</strong>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Thumbnails / Indicators */}
          <div className="bg-slate-950/80 px-4 py-3 border-t border-slate-800/80 flex items-center justify-between overflow-x-auto gap-2">
            <div className="flex items-center gap-1.5 mx-auto">
              {carouselItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#a81c24]'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}: ${item.title}`}
                  title={item.title}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

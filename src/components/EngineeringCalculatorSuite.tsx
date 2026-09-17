import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  Cpu,
  ShieldAlert,
  Layers,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const EngineeringCalculatorSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transformer' | 'motor' | 'surge' | 'cable'>('transformer');

  // 1. Transformer Calculator State
  const [transfKva, setTransfKva] = useState<number>(1000);
  const [transfSecVolt, setTransfSecVolt] = useState<number>(415);
  const [transfPriVolt, setTransfPriVolt] = useState<number>(11000);
  const [transfEfficiency, setTransfEfficiency] = useState<number>(98.5);

  // Calculations for Transformer
  // Secondary Full Load Current: I_sec = (kVA * 1000) / (sqrt(3) * V_sec)
  const secCurrent = (transfKva * 1000) / (Math.sqrt(3) * transfSecVolt);
  // Primary Full Load Current: I_pri = (kVA * 1000) / (sqrt(3) * V_pri)
  const priCurrent = (transfKva * 1000) / (Math.sqrt(3) * transfPriVolt);
  // Recommended ACB frame size (standard rounded to nearest IEC standard frame: 630, 800, 1000, 1250, 1600, 2000, 2500, 3200, 4000, 5000, 6300A)
  const acbSizes = [630, 800, 1000, 1250, 1600, 2000, 2500, 3200, 4000, 5000, 6300];
  const recommendedAcb = acbSizes.find((size) => size >= secCurrent * 1.25) || 6300;
  // Copper busbar cross-section recommendation ~ 1.5 A/mm²
  const copperBusbarMm2 = Math.ceil(secCurrent / 1.5);

  // 2. Motor Soft Starter State
  const [motorKw, setMotorKw] = useState<number>(160);
  const [motorVolt, setMotorVolt] = useState<number>(400);
  const [motorPf, setMotorPf] = useState<number>(0.87);
  const [motorEff, setMotorEff] = useState<number>(94.5);
  const [startType, setStartType] = useState<'dol' | 'star-delta' | 'soft-starter'>('soft-starter');

  // Motor Calculations
  // FLA = (kW * 1000) / (sqrt(3) * V * PF * (Eff/100))
  const motorFla = (motorKw * 1000) / (Math.sqrt(3) * motorVolt * motorPf * (motorEff / 100));
  const startingCurrentDol = motorFla * 6.5;
  const startingCurrentStarDelta = motorFla * 2.3;
  const startingCurrentSoftStarter = motorFla * 2.5;
  const activeStartCurrent =
    startType === 'dol'
      ? startingCurrentDol
      : startType === 'star-delta'
      ? startingCurrentStarDelta
      : startingCurrentSoftStarter;

  // 3. Surge Protection Selector State
  const [buildingType, setBuildingType] = useState<'industrial' | 'commercial' | 'critical'>('industrial');
  const [feedType, setFeedType] = useState<'overhead' | 'underground'>('overhead');
  const [hasLps, setHasLps] = useState<boolean>(true);

  // 4. Cable Voltage Drop State
  const [cableCurrent, setCableCurrent] = useState<number>(125);
  const [cableLength, setCableLength] = useState<number>(75);
  const [cableSizeMm2, setCableSizeMm2] = useState<number>(50);
  const [cableConductor, setCableConductor] = useState<'copper' | 'aluminum'>('copper');

  // Voltage drop approx: mV/A/m
  // Copper resistivity ~ 0.018 ohm*mm²/m, Aluminum ~ 0.028
  const rho = cableConductor === 'copper' ? 0.018 : 0.028;
  const r = (rho * cableLength) / cableSizeMm2;
  const vDrop = Math.sqrt(3) * cableCurrent * r;
  const vDropPercent = (vDrop / 415) * 100;

  return (
    <section className="relative py-24 bg-white border-t border-slate-200" id="engineering-tools">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a81c24] tracking-widest uppercase mb-2 font-bold">
              <span className="w-5 h-[2px] bg-[#a81c24]" />
              <span>Engineering Tools & Calculations Suite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Technical Estimators & Sizing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Interactive design calculators for electrical consultants, plant engineers, and MEP contractors compliant with IEC 60364, IEC 60076, and IEC 61643 standards.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-full border border-slate-300 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping ml-2" />
            <span className="text-xs font-mono text-emerald-700 uppercase tracking-wider pr-3 font-bold">
              LIVE IEC CALC ENGINE
            </span>
          </div>
        </div>

        {/* Calculator Tab Switcher */}
        <div className="flex flex-wrap gap-2 p-2 bg-slate-100 rounded-2xl border border-slate-200 mb-8 shadow-sm">
          <button
            onClick={() => setActiveTab('transformer')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'transformer'
                ? 'bg-[#a81c24] font-bold text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 font-semibold'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Transformer & ACB Sizing</span>
          </button>

          <button
            onClick={() => setActiveTab('motor')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'motor'
                ? 'bg-[#1e73be] font-bold text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 font-semibold'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Motor Soft Starter / Inrush</span>
          </button>

          <button
            onClick={() => setActiveTab('surge')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'surge'
                ? 'bg-amber-600 font-bold text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 font-semibold'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Surge (SPD) Selector Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('cable')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'cable'
                ? 'bg-indigo-600 font-bold text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 font-semibold'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Cable Voltage Drop (IEC 60364)</span>
          </button>
        </div>

        {/* 1. Transformer Calculator Panel */}
        {activeTab === 'transformer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 font-heading uppercase flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#a81c24]" />
                <span>Transformer Input Parameters</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5 font-bold">
                    <span>Transformer Rating:</span>
                    <span className="text-[#a81c24] font-black">{transfKva} kVA</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={3150}
                    step={50}
                    value={transfKva}
                    onChange={(e) => setTransfKva(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#a81c24]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1 font-semibold">
                    <span>100 kVA</span>
                    <span>1000 kVA</span>
                    <span>2000 kVA</span>
                    <span>3150 kVA</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Secondary Voltage (V):
                    </label>
                    <select
                      value={transfSecVolt}
                      onChange={(e) => setTransfSecVolt(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-[#1e73be] shadow-sm"
                    >
                      <option value={415}>415 V (3-Phase)</option>
                      <option value={400}>400 V (3-Phase)</option>
                      <option value={380}>380 V (3-Phase)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Primary Voltage (V):
                    </label>
                    <select
                      value={transfPriVolt}
                      onChange={(e) => setTransfPriVolt(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-[#1e73be] shadow-sm"
                    >
                      <option value={11000}>11,000 V (11 kV)</option>
                      <option value={13200}>13,200 V (13.2 kV)</option>
                      <option value={33000}>33,000 V (33 kV)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5 font-bold">
                    <span>Transformer Efficiency (%):</span>
                    <span className="text-slate-900 font-bold">{transfEfficiency}%</span>
                  </div>
                  <input
                    type="range"
                    min={96.0}
                    max={99.5}
                    step={0.1}
                    value={transfEfficiency}
                    onChange={(e) => setTransfEfficiency(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#a81c24]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 font-mono flex items-start gap-3 shadow-sm">
                <Info className="w-4 h-4 text-[#1e73be] flex-shrink-0 mt-0.5" />
                <p>
                  Standard calculations based on European Ecodesign Tier 2 & IEC 60076-11 specifications for cast resin dry-type transformers.
                </p>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono text-[#a81c24] uppercase tracking-wider font-bold">
                  Engineered Output Specifications
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-[#a81c24] font-mono text-[10px] font-bold border border-red-200">
                  IEC 60076-11 SPEC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono">
                  <span className="text-[11px] text-slate-500 uppercase font-bold">Secondary Current (FLA)</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {secCurrent.toFixed(1)} <span className="text-sm font-normal text-slate-500">A</span>
                  </div>
                  <span className="text-[10px] text-slate-500">At {transfSecVolt}V 3-Phase</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono">
                  <span className="text-[11px] text-slate-500 uppercase font-bold">Primary Current</span>
                  <div className="text-2xl font-black text-[#1e73be] mt-1">
                    {priCurrent.toFixed(2)} <span className="text-sm font-normal text-slate-500">A</span>
                  </div>
                  <span className="text-[10px] text-slate-500">At {transfPriVolt / 1000} kV Incomer</span>
                </div>

                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 font-mono sm:col-span-2">
                  <span className="text-[11px] text-[#a81c24] uppercase font-bold">
                    Recommended Main Incomer Air Circuit Breaker (ACB)
                  </span>
                  <div className="text-3xl font-black text-slate-900 mt-1">
                    {recommendedAcb} <span className="text-base font-normal text-slate-600">Amperes (4-Pole)</span>
                  </div>
                  <span className="text-[10px] text-slate-600">
                    Sized at 125% continuous duty rating with 50kA/65kA 1-sec withstand.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono sm:col-span-2">
                  <span className="text-[11px] text-slate-500 uppercase font-bold">Recommended Main Copper Busbar Area</span>
                  <div className="text-xl font-black text-emerald-700 mt-1">
                    {copperBusbarMm2} mm² <span className="text-xs font-normal text-slate-500">(e.g. 2x 100x10mm Cu per phase)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Motor Soft Starter Panel */}
        {activeTab === 'motor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 font-heading uppercase flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#1e73be]" />
                <span>Induction Motor Sizing</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5 font-bold">
                    <span>Motor Shaft Power (kW):</span>
                    <span className="text-[#1e73be] font-black">{motorKw} kW ({(motorKw * 1.341).toFixed(0)} HP)</span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={630}
                    step={5}
                    value={motorKw}
                    onChange={(e) => setMotorKw(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1e73be]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1 font-semibold">
                    <span>15 kW</span>
                    <span>160 kW</span>
                    <span>315 kW</span>
                    <span>630 kW</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Power Factor (cos φ):
                    </label>
                    <input
                      type="number"
                      step={0.01}
                      min={0.7}
                      max={0.95}
                      value={motorPf}
                      onChange={(e) => setMotorPf(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-[#1e73be] shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Motor Efficiency (%):
                    </label>
                    <input
                      type="number"
                      step={0.1}
                      min={85}
                      max={98}
                      value={motorEff}
                      onChange={(e) => setMotorEff(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-[#1e73be] shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-2 font-bold">
                    Starting Method Comparison:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setStartType('dol')}
                      className={`p-2.5 rounded-xl text-[11px] font-mono border transition-all ${
                        startType === 'dol'
                          ? 'bg-red-50 text-[#a81c24] border-[#a81c24] font-bold shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Direct-On-Line (DOL)
                    </button>
                    <button
                      onClick={() => setStartType('star-delta')}
                      className={`p-2.5 rounded-xl text-[11px] font-mono border transition-all ${
                        startType === 'star-delta'
                          ? 'bg-amber-50 text-amber-800 border-amber-500 font-bold shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Star-Delta
                    </button>
                    <button
                      onClick={() => setStartType('soft-starter')}
                      className={`p-2.5 rounded-xl text-[11px] font-mono border transition-all ${
                        startType === 'soft-starter'
                          ? 'bg-blue-50 text-[#1e73be] border-[#1e73be] font-bold shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Solid-State Soft Starter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono text-[#1e73be] uppercase tracking-wider font-bold">
                  Motor Dynamics & Inrush Analysis
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1e73be] font-mono text-[10px] font-bold border border-blue-200">
                  SOLID-STATE DRIVE SPEC
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono">
                  <span className="text-[11px] text-slate-500 uppercase font-bold">Full Load Current (FLA)</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {motorFla.toFixed(1)} <span className="text-sm font-normal text-slate-500">A</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Continuous Running Current</span>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 font-mono">
                  <span className="text-[11px] text-[#1e73be] uppercase font-bold">Inrush Peak Current</span>
                  <div className="text-2xl font-black text-[#1e73be] mt-1">
                    {activeStartCurrent.toFixed(1)} <span className="text-sm font-normal text-slate-500">A</span>
                  </div>
                  <span className="text-[10px] text-slate-600">
                    {startType === 'dol'
                      ? '6.5x FLA (Severe line dip)'
                      : startType === 'star-delta'
                      ? '2.3x FLA (Mechanical shock)'
                      : '2.5x FLA (Smooth ramp)'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono sm:col-span-2">
                  <span className="text-[11px] text-emerald-700 uppercase font-bold">
                    Recommended Soft Starter Rating
                  </span>
                  <div className="text-xl font-black text-slate-900 mt-1">
                    Heavy-Duty Soft Starter {(motorFla * 1.2).toFixed(0)}A Series
                  </div>
                  <p className="text-xs text-slate-600 mt-2 font-sans leading-relaxed">
                    Solid-state thyristor regulation eliminates gearbox torque stress, caps electrical transformer demand surges, and includes internal bypass contactor for zero heat loss during steady run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Surge Protection Selector Panel */}
        {activeTab === 'surge' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 font-heading uppercase flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
                <span>Surge Hazard Risk Matrix</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                    Facility Type & Asset Criticality:
                  </label>
                  <select
                    value={buildingType}
                    onChange={(e) => setBuildingType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-amber-600 shadow-sm"
                  >
                    <option value="industrial">Heavy Manufacturing / Processing Plant</option>
                    <option value="commercial">Commercial High-Rise / Shopping Mall</option>
                    <option value="critical">Hospital / Data Center / Petrochemical (Critical)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                    Power Grid Incomer Type:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFeedType('overhead')}
                      className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                        feedType === 'overhead'
                          ? 'bg-amber-50 text-amber-900 border-amber-500 font-bold shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Overhead Line (High Risk)
                    </button>
                    <button
                      onClick={() => setFeedType('underground')}
                      className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                        feedType === 'underground'
                          ? 'bg-amber-50 text-amber-900 border-amber-500 font-bold shadow-sm'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      Underground Cable
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasLps}
                      onChange={(e) => setHasLps(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#a81c24] focus:ring-[#a81c24]"
                    />
                    <span className="text-xs font-mono text-slate-700 font-semibold">
                      External Lightning Protection System (ESE / Faraday) Installed on Rooftop
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono text-amber-700 uppercase tracking-wider font-bold">
                  Recommended HAKEL SPD Class
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-mono text-[10px] font-bold border border-amber-200">
                  IEC 61643-11 COMPLIANT
                </span>
              </div>

              <div className="space-y-4 font-mono">
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                  <div className="text-xs font-bold text-amber-800 uppercase mb-1">
                    Main Low Tension Incomer: Type 1 + 2 Combined
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    HAKEL Type 1 + 2 Combined Surge Arrester
                  </div>
                  <div className="text-xs text-slate-600 mt-2 font-sans">
                    Required impulse discharge Iimp ≥ 12.5kA (10/350µs) per pole. Protects main switchboard against direct lightning currents and utility switching transients.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#1e73be] uppercase mb-1">
                    Sub-Distribution Boards (MCCs / PDBs): Type 2
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    Hakel PII Series (Up to 40kA 8/20µs)
                  </div>
                  <div className="text-xs text-slate-600 mt-2 font-sans">
                    Restricts residual surge voltage Up below 1.5kV to shield PLCs, instrumentation, and sensitive variable frequency drives.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Cable Voltage Drop Panel */}
        {activeTab === 'cable' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 font-heading uppercase flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>Cable Run Parameters</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5 font-bold">
                    <span>Design Load Current:</span>
                    <span className="text-indigo-600 font-black">{cableCurrent} Amperes</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={600}
                    step={5}
                    value={cableCurrent}
                    onChange={(e) => setCableCurrent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5 font-bold">
                    <span>One-Way Run Length:</span>
                    <span className="text-indigo-600 font-black">{cableLength} Meters</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={300}
                    step={5}
                    value={cableLength}
                    onChange={(e) => setCableLength(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Conductor Material:
                    </label>
                    <select
                      value={cableConductor}
                      onChange={(e) => setCableConductor(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-indigo-600 shadow-sm"
                    >
                      <option value="copper">Plain Annealed Copper (Cu)</option>
                      <option value="aluminum">Stranded Aluminum (Al)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">
                      Cable Cross-Section:
                    </label>
                    <select
                      value={cableSizeMm2}
                      onChange={(e) => setCableSizeMm2(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:outline-none focus:border-indigo-600 shadow-sm"
                    >
                      <option value={16}>16 mm²</option>
                      <option value={25}>25 mm²</option>
                      <option value={35}>35 mm²</option>
                      <option value={50}>50 mm²</option>
                      <option value={70}>70 mm²</option>
                      <option value={95}>95 mm²</option>
                      <option value={120}>120 mm²</option>
                      <option value={150}>150 mm²</option>
                      <option value={185}>185 mm²</option>
                      <option value={240}>240 mm²</option>
                      <option value={300}>300 mm²</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono text-indigo-600 uppercase tracking-wider font-bold">
                  Voltage Drop Assessment
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-mono text-[10px] font-bold border border-indigo-200">
                  IEC 60364-5-52
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono">
                  <span className="text-[11px] text-slate-500 uppercase font-bold">Calculated Voltage Drop</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">
                    {vDrop.toFixed(2)} <span className="text-sm font-normal text-slate-500">Volts</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Across {cableLength}m run</span>
                </div>

                <div className={`p-4 rounded-xl font-mono border ${
                  vDropPercent <= 4.0 ? 'bg-emerald-50/60 border-emerald-300 text-emerald-800' : 'bg-red-50/60 border-red-300 text-red-800'
                }`}>
                  <span className="text-[11px] uppercase font-bold">Percentage Drop</span>
                  <div className="text-2xl font-black mt-1">
                    {vDropPercent.toFixed(2)}%
                  </div>
                  <span className="text-[10px] font-semibold">
                    {vDropPercent <= 4.0 ? '✓ Within IEC ≤ 4.0% limit' : '⚠ Exceeds IEC 4% limit, upsize cable'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono sm:col-span-2">
                  <span className="text-[11px] text-indigo-700 uppercase font-bold">
                    Engineering Sizing Verdict
                  </span>
                  <p className="text-xs text-slate-600 mt-2 font-sans leading-relaxed">
                    {vDropPercent <= 4.0
                      ? `The selected ${cableSizeMm2} mm² ${cableConductor} cable is fully compliant with IEC 60364 standards for this ${cableCurrent}A continuous load over ${cableLength}m.`
                      : `The voltage drop of ${vDropPercent.toFixed(2)}% exceeds the maximum recommended threshold of 4.0% for power circuits. Please increase cross-section to the next standard size to prevent equipment under-voltage.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

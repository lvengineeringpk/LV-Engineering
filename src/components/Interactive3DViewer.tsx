import React, { useEffect, useRef, useState } from 'react';
import {
  RotateCcw,
  Layers,
  Activity,
  Zap,
  Maximize2,
  Cpu,
  Flame,
  Sun,
  Shield,
  Gauge,
  Sliders,
  Play,
  Pause,
} from 'lucide-react';

export type SystemModelType =
  | 'electrical'
  | 'automation'
  | 'power'
  | 'fire'
  | 'lightning'
  | 'solar'
  | 'instrumentation';

interface SystemPreset {
  id: SystemModelType;
  name: string;
  category: string;
  primaryColor: string;
  secondaryColor: string;
  voltageRating: string;
  standards: string;
  description: string;
}

const PRESETS: SystemPreset[] = [
  {
    id: 'electrical',
    name: '3D Low-Tension Switchgear & MCC',
    category: 'Electrical Engineering',
    primaryColor: '#ef4444',
    secondaryColor: '#38bdf8',
    voltageRating: '415V / 240V AC (Up to 4000A)',
    standards: 'IEC 61439-1/2 Form 4b',
    description:
      'Multi-compartment switchgear architecture featuring live main busbar distribution, draw-out ACB cells, and active feeder metering.',
  },
  {
    id: 'automation',
    name: '3D PLC & Modular SCADA Rack',
    category: 'Automation & Control',
    primaryColor: '#38bdf8',
    secondaryColor: '#ef4444',
    voltageRating: '24V DC Field Power / Modbus TCP',
    standards: 'IEC 61131-3 / SIL-2',
    description:
      'High-speed process automation controller with illuminated I/O channel telemetry, redundant power supply rails, and fieldbus channels.',
  },
  {
    id: 'power',
    name: '3D Power GenSet & Acoustic Enclosure',
    category: 'Starkgen Power Systems',
    primaryColor: '#f59e0b',
    secondaryColor: '#38bdf8',
    voltageRating: '100kVA – 3300kVA Prime/Standby',
    standards: 'ISO 8528 / CE Marked',
    description:
      'Heavy-duty diesel generation set with digital AVR governor, synchronized sound-attenuated enclosure, and dynamic fuel flow telemetry.',
  },
  {
    id: 'fire',
    name: '3D Fire Suppression & Riser Network',
    category: 'Life Safety Engineering',
    primaryColor: '#ef4444',
    secondaryColor: '#f97316',
    voltageRating: '175 PSI Operating Pressure',
    standards: 'NFPA 13 / 20 / UL-FM Approved',
    description:
      'Bristol Fire pump and manifold riser assembly with pressure transducer monitoring, alarm check valves, and automatic sprinkler flow.',
  },
  {
    id: 'lightning',
    name: '3D Forend Active ESE Protection',
    category: 'Atmospheric Discharge',
    primaryColor: '#38bdf8',
    secondaryColor: '#ef4444',
    voltageRating: 'Δt 60µs Ionization Trigger',
    standards: 'NFC 17-102:2011 / UNE 21168',
    description:
      'Active Early Streamer Emission (ESE) terminal with high-voltage ion streamer projection, down-conductor pathway, and low-impedance radial ground.',
  },
  {
    id: 'solar',
    name: '3D Solar Photovoltaic Array & Inverter',
    category: 'Renewable Power',
    primaryColor: '#eab308',
    secondaryColor: '#38bdf8',
    voltageRating: '1500V DC String Architecture',
    standards: 'IEC 61215 / IEC 61730',
    description:
      'High-efficiency monocrystalline PV array on hot-dip galvanized mounting with real-time irradiance vector simulation and inverter power feed.',
  },
  {
    id: 'instrumentation',
    name: '3D Electromagnetic Flow Meter & Spool',
    category: 'Process Instrumentation',
    primaryColor: '#06b6d4',
    secondaryColor: '#38bdf8',
    voltageRating: '4-20mA HART / Modbus RTU',
    standards: 'OIML R49 / ISO 4064',
    description:
      'High-accuracy industrial pipe spool with dual magnetic field coils, lined flow conduit, and digital velocity telemetry readouts.',
  },
];

export const Interactive3DViewer: React.FC<{
  initialSystem?: SystemModelType;
  onExploreSystem?: (type: SystemModelType) => void;
}> = ({ initialSystem = 'electrical', onExploreSystem }) => {
  const [selectedSystem, setSelectedSystem] = useState<SystemModelType>(initialSystem);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [loadFactor, setLoadFactor] = useState(78);
  const rotXRef = useRef(-0.35);
  const rotYRef = useRef(0.65);
  const zoomRef = useRef(1);
  const rotationTelemetryRef = useRef<HTMLDivElement | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  const activePreset = PRESETS.find((p) => p.id === selectedSystem) || PRESETS[0];

  // Mouse interaction handlers for 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    rotYRef.current += dx * 0.008;
    rotXRef.current = Math.max(-1.2, Math.min(1.2, rotXRef.current + dy * 0.008));
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleResetView = () => {
    rotXRef.current = -0.35;
    rotYRef.current = 0.65;
    zoomRef.current = 1;
  };

  // Render loop using 3D vector rotation and depth sorting
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.025;

      // Handle automatic turntable rotation if enabled and not currently dragging
      if (isRotating && !isDraggingRef.current) {
        rotYRef.current += 0.005;
      }

      // Update rotation vector readout in DOM without triggering React re-renders
      if (rotationTelemetryRef.current) {
        const degX = (rotXRef.current * (180 / Math.PI)).toFixed(1);
        const degY = (rotYRef.current * (180 / Math.PI)).toFixed(1);
        rotationTelemetryRef.current.textContent = `X: ${degX}° | Y: ${degY}°`;
      }

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 3D Matrix Rotation Helper
      const project = (x: number, y: number, z: number) => {
        // Rotate around Y axis
        const cosY = Math.cos(rotYRef.current);
        const sinY = Math.sin(rotYRef.current);
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;

        // Rotate around X axis
        const cosX = Math.cos(rotXRef.current);
        const sinX = Math.sin(rotXRef.current);
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Isometric perspective projection with zoom
        const scale = (380 / (z2 + 600)) * zoomRef.current;
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          depth: z2,
        };
      };

      // Draw Background Grid Plane
      ctx.strokeStyle = 'rgba(30, 115, 190, 0.15)';
      ctx.lineWidth = 1;
      const gridSize = 320;
      const gridSteps = 8;
      const step = (gridSize * 2) / gridSteps;

      for (let i = -gridSize; i <= gridSize; i += step) {
        const p1 = project(i, 140, -gridSize);
        const p2 = project(i, 140, gridSize);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        const p3 = project(-gridSize, 140, i);
        const p4 = project(gridSize, 140, i);
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.stroke();
      }

      // 3D Box Drawing Utility
      const drawBox = (
        bx: number,
        by: number,
        bz: number,
        w: number,
        h: number,
        d: number,
        color: string,
        strokeColor: string,
        highlight = false
      ) => {
        const hw = w / 2;
        const hh = h / 2;
        const hd = d / 2;

        const vertices = [
          project(bx - hw, by - hh, bz - hd), // 0: Top front left
          project(bx + hw, by - hh, bz - hd), // 1: Top front right
          project(bx + hw, by + hh, bz - hd), // 2: Bottom front right
          project(bx - hw, by + hh, bz - hd), // 3: Bottom front left
          project(bx - hw, by - hh, bz + hd), // 4: Top back left
          project(bx + hw, by - hh, bz + hd), // 5: Top back right
          project(bx + hw, by + hh, bz + hd), // 6: Bottom back right
          project(bx - hw, by + hh, bz + hd), // 7: Bottom back left
        ];

        // Faces with normals / depth
        const faces = [
          { indices: [0, 1, 2, 3], z: (vertices[0].depth + vertices[2].depth) / 2, shade: 1.0 }, // Front
          { indices: [5, 4, 7, 6], z: (vertices[5].depth + vertices[7].depth) / 2, shade: 0.6 }, // Back
          { indices: [4, 5, 1, 0], z: (vertices[4].depth + vertices[1].depth) / 2, shade: 1.2 }, // Top
          { indices: [3, 2, 6, 7], z: (vertices[3].depth + vertices[6].depth) / 2, shade: 0.5 }, // Bottom
          { indices: [4, 0, 3, 7], z: (vertices[4].depth + vertices[3].depth) / 2, shade: 0.8 }, // Left
          { indices: [1, 5, 6, 2], z: (vertices[1].depth + vertices[6].depth) / 2, shade: 0.9 }, // Right
        ];

        // Depth sort faces
        faces.sort((a, b) => b.z - a.z);

        faces.forEach((face) => {
          ctx.beginPath();
          const first = vertices[face.indices[0]];
          ctx.moveTo(first.x, first.y);
          for (let i = 1; i < face.indices.length; i++) {
            const pt = vertices[face.indices[i]];
            ctx.lineTo(pt.x, pt.y);
          }
          ctx.closePath();

          if (!isWireframe) {
            ctx.fillStyle = highlight ? 'rgba(56, 189, 248, 0.3)' : color;
            ctx.fill();
          }

          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = highlight ? 2 : 1;
          ctx.stroke();
        });
      };

      // Draw Model based on selected system
      switch (selectedSystem) {
        case 'electrical': {
          // Switchgear Main Cabinet Enclosure
          drawBox(0, 10, 0, 220, 240, 120, '#0c1018', '#38bdf8');
          // Modular Bays / Compartments
          drawBox(-65, -30, 62, 80, 80, 6, '#111827', '#ef4444');
          drawBox(65, -30, 62, 80, 80, 6, '#111827', '#38bdf8');
          drawBox(0, 60, 62, 200, 70, 6, '#0f172a', '#64748b');

          // Draw Active Circuit Lines & Pulses
          const pulseOffset = (time * 60) % 120;
          const pStart = project(-90 + pulseOffset, -30, 65);
          ctx.fillStyle = '#ef4444';
          ctx.shadowColor = '#ef4444';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(pStart.x, pStart.y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Three Phase Busbars on top
          for (let b = 0; b < 3; b++) {
            const col = b === 0 ? '#ef4444' : b === 1 ? '#eab308' : '#3b82f6';
            drawBox(-50 + b * 50, -118, 0, 30, 8, 110, col, '#ffffff', true);
          }
          break;
        }

        case 'automation': {
          // PLC Backplane Chassis
          drawBox(0, 20, 0, 240, 140, 40, '#0a0e17', '#38bdf8');
          // CPU module with Redundant Power
          drawBox(-80, 10, 25, 45, 120, 35, '#0f172a', '#ef4444');
          // I/O Signal modules
          for (let m = 0; m < 4; m++) {
            const isRed = m % 2 === 0;
            drawBox(-25 + m * 35, 10, 25, 28, 110, 30, '#111827', isRed ? '#38bdf8' : '#22d3ee');

            // Blinking I/O LED points
            for (let led = 0; led < 4; led++) {
              const ledActive = Math.sin(time * 3 + m + led) > 0;
              const pt = project(-30 + m * 35, -25 + led * 18, 43);
              ctx.fillStyle = ledActive ? (isRed ? '#38bdf8' : '#ef4444') : '#1e293b';
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;
        }

        case 'power': {
          // Starkgen GenSet Skid Frame
          drawBox(0, 70, 0, 260, 30, 140, '#0f172a', '#f59e0b');
          // Acoustic Sound Canopy Body
          drawBox(0, -10, 0, 240, 130, 120, '#182030', '#38bdf8');
          // Air Radiator Louver Grill
          drawBox(122, -10, 0, 6, 90, 80, '#0a0d14', '#f59e0b');
          // Top Exhaust Silencer
          drawBox(-50, -85, 0, 80, 25, 25, '#334155', '#cbd5e1');

          // Simulated Energy Flow Particles
          for (let p = 0; p < 8; p++) {
            const prog = ((time * 0.8 + p / 8) % 1);
            const ep = project(-110 + prog * 220, -10, 65);
            ctx.fillStyle = '#f59e0b';
            ctx.shadowColor = '#f59e0b';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(ep.x, ep.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
          break;
        }

        case 'fire': {
          // Heavy Fire Pump Base Skids
          drawBox(0, 80, 0, 220, 20, 130, '#1e293b', '#ef4444');
          // Fire Engine / Electric Motor (Red)
          drawBox(-50, 40, 0, 80, 60, 60, '#991b1b', '#ef4444');
          // Horizontal Split Case Pump Housing
          drawBox(50, 40, 0, 70, 70, 70, '#b91c1c', '#f87171');
          // Vertical Discharge Riser Pipe
          drawBox(50, -40, 0, 30, 100, 30, '#7f1d1d', '#ef4444');
          // Horizontal Distribution Main
          drawBox(20, -90, 0, 160, 24, 24, '#991b1b', '#fca5a5');

          // Pressure Gauge Needle and Valve Wheels
          const gPt = project(50, -35, 18);
          ctx.strokeStyle = '#ffffff';
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(gPt.x, gPt.y, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          break;
        }

        case 'lightning': {
          // Protected High-Rise Structure Wireframe
          drawBox(0, 40, 0, 140, 160, 140, '#0b0f19', '#38bdf8');
          // Forend Active ESE Lightning Mast
          drawBox(0, -60, 0, 10, 100, 10, '#cbd5e1', '#ffffff');
          // ESE Ionization Terminal Bulb
          drawBox(0, -115, 0, 28, 28, 28, '#0284c7', '#38bdf8', true);

          // Down-conductor path leading to grounding earth pit
          const dPt = project(72, 40, 72);
          const pitPt = project(110, 140, 110);
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(project(0, -50, 0).x, project(0, -50, 0).y);
          ctx.lineTo(dPt.x, dPt.y);
          ctx.lineTo(pitPt.x, pitPt.y);
          ctx.stroke();

          // Ionization Streamer Wave
          const sparkAngle = time * 4;
          const sX = Math.cos(sparkAngle) * 35;
          const sZ = Math.sin(sparkAngle) * 35;
          const sPt = project(sX, -145 + Math.sin(time * 5) * 15, sZ);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(sPt.x, sPt.y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          break;
        }

        case 'solar': {
          // Ground-Mounted Solar Frame
          drawBox(0, 60, 0, 200, 20, 120, '#1e293b', '#64748b');
          // Tilted Dual Solar Modules
          drawBox(-55, 0, 0, 85, 10, 120, '#0c1b33', '#38bdf8');
          drawBox(55, 0, 0, 85, 10, 120, '#0c1b33', '#eab308');

          // Sun Vector Rays & Inverter Box
          drawBox(115, 40, 0, 24, 45, 20, '#1e293b', '#38bdf8');
          const sunX = Math.cos(time * 0.5) * 160;
          const sunY = -140;
          const sunZ = Math.sin(time * 0.5) * 160;
          const sunPt = project(sunX, sunY, sunZ);
          ctx.fillStyle = '#eab308';
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(sunPt.x, sunPt.y, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          break;
        }

        case 'instrumentation': {
          // Industrial Flow Pipe Section
          drawBox(0, 20, 0, 240, 60, 60, '#1e293b', '#64748b');
          // Flanges on both ends
          drawBox(-115, 20, 0, 16, 85, 85, '#334155', '#cbd5e1');
          drawBox(115, 20, 0, 16, 85, 85, '#334155', '#cbd5e1');
          // Magnetic Sensor Transducer & Display Transmitter
          drawBox(0, -35, 0, 55, 55, 55, '#042f2e', '#06b6d4', true);
          drawBox(0, -75, 0, 40, 28, 40, '#0f172a', '#38bdf8');

          // Flow Particles Inside Conduit
          for (let f = 0; f < 6; f++) {
            const prog = ((time * 1.5 + f / 6) % 1);
            const flowPt = project(-90 + prog * 180, 20, 32);
            ctx.fillStyle = '#06b6d4';
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(flowPt.x, flowPt.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
          break;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [selectedSystem, isWireframe, isRotating, loadFactor]);

  return (
    <div
      className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl"
      id="interactive-3d-engineering-viewer"
    >
      {/* Top Telemetry & Control Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a81c24] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase">
              3D CAD Telemetry Engine
            </span>
          </div>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-xs font-mono text-[#1e73be] font-semibold hidden sm:inline">
            {activePreset.voltageRating}
          </span>
        </div>

        {/* Viewport Control Toggles */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border ${
              isRotating
                ? 'bg-blue-50 text-[#1e73be] border-blue-200 font-bold'
                : 'bg-white text-slate-600 hover:text-black border-slate-200'
            }`}
            title="Toggle 360° Turntable Rotation"
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isRotating ? 'Auto Rotate' : 'Paused'}</span>
          </button>

          <button
            onClick={() => setIsWireframe((prev) => !prev)}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border ${
              isWireframe
                ? 'bg-red-50 text-[#a81c24] border-red-200 font-bold'
                : 'bg-white text-slate-600 hover:text-black border-slate-200'
            }`}
            title="Toggle Wireframe Blueprint"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Wireframe</span>
          </button>

          <button
            onClick={handleResetView}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-black border border-slate-200 transition-colors"
            title="Reset Perspective"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main 3D Canvas Stage */}
      <div
        className="relative w-full h-[400px] sm:h-[480px] bg-slate-100/90 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas
          ref={canvasRef}
          width={800}
          height={480}
          className="w-full h-full object-contain"
        />

        {/* HUD Crosshairs and Coordinates */}
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[11px] font-mono pointer-events-none">
          <div className="flex items-center gap-2 text-[#1e73be] font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse text-[#a81c24]" />
            <span>{activePreset.name}</span>
          </div>
          <div className="text-slate-500 text-[10px] mt-1 font-semibold">
            STANDARD: {activePreset.standards}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 p-3 max-w-sm rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-xs text-slate-600 pointer-events-none hidden sm:block">
          <p className="leading-relaxed text-[11px] text-slate-600">
            {activePreset.description}
          </p>
        </div>

        {/* Right Telemetry Readouts */}
        <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-[10px] font-mono space-y-1 text-right pointer-events-none">
          <div className="text-slate-400 font-semibold">ROTATION VECTOR</div>
          <div ref={rotationTelemetryRef} className="text-slate-800 font-bold">
            X: -20.1° | Y: 37.2°
          </div>
          <div className="text-slate-400 pt-1 font-semibold">LIVE LOAD FACTOR</div>
          <div className="text-[#a81c24] font-bold">{loadFactor}% OPERATING</div>
        </div>

        {/* Bottom Load Factor Slider */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-mono">
          <Sliders className="w-3.5 h-3.5 text-[#1e73be]" />
          <span className="text-slate-500 text-[10px] font-semibold">Load:</span>
          <input
            type="range"
            min="20"
            max="100"
            value={loadFactor}
            onChange={(e) => setLoadFactor(Number(e.target.value))}
            className="w-20 accent-[#a81c24] cursor-pointer"
          />
          <span className="text-slate-900 font-bold text-xs">{loadFactor}%</span>
        </div>
      </div>

      {/* System Selector Tab Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 border-t border-slate-200 bg-slate-50">
        {PRESETS.map((preset) => {
          const isActive = preset.id === selectedSystem;
          return (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedSystem(preset.id);
                if (onExploreSystem) onExploreSystem(preset.id);
              }}
              className={`p-3 text-left transition-all border-b sm:border-b-0 sm:border-r border-slate-200 ${
                isActive
                  ? 'bg-white text-slate-900 border-t-2 border-t-[#a81c24] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#1e73be] font-bold">
                {preset.category}
              </div>
              <div className="text-xs font-bold font-heading line-clamp-1 mt-0.5">
                {preset.name.replace('3D ', '')}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

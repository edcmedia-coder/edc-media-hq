'use client';

import React from 'react';

export function SystemCore() {
  return (
    <div className="relative w-full max-w-[280px] min-[360px]:max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none touch-none">
      {/* Ambient background glow behind the core */}
      <div
        className="absolute inset-4 sm:inset-8 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(92, 225, 230, 0.14) 0%, rgba(124, 108, 255, 0.08) 45%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Primary Technical SVG Instrumentation */}
      <svg
        className="w-full h-full text-[#5CE1E6] overflow-visible"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5CE1E6" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#7C6CFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#050609" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="orbitGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5CE1E6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#5CE1E6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#7C6CFF" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Outer Static Calibration Ring */}
        <circle
          cx="250"
          cy="250"
          r="230"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1"
        />

        {/* Outer Segmented Orbital Ring */}
        <circle
          cx="250"
          cy="250"
          r="210"
          stroke="url(#orbitGradCyan)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          className="animate-[spin_90s_linear_infinite] motion-reduce:animate-none"
          style={{ transformOrigin: '250px 250px', willChange: 'transform' }}
        />

        {/* Outer Cardinal Axis Crosshairs */}
        <line x1="250" y1="15" x2="250" y2="485" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="15" y1="250" x2="485" y2="250" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 6" />

        {/* Mid Orbital Ring with Reverse Rotation */}
        <circle
          cx="250"
          cy="250"
          r="160"
          stroke="rgba(124, 108, 255, 0.35)"
          strokeWidth="1"
          strokeDasharray="60 30 15 30"
          className="animate-[spin_60s_linear_infinite_reverse] motion-reduce:animate-none"
          style={{ transformOrigin: '250px 250px', willChange: 'transform' }}
        />

        {/* Secondary Mid Ring */}
        <circle
          cx="250"
          cy="250"
          r="135"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* Inner Fast Technical Ring */}
        <circle
          cx="250"
          cy="250"
          r="95"
          stroke="#5CE1E6"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="20 40"
          className="animate-[spin_30s_linear_infinite] motion-reduce:animate-none"
          style={{ transformOrigin: '250px 250px', willChange: 'transform' }}
        />

        {/* Inner Octagonal Precision Frame */}
        <polygon
          points="250,175 303,197 325,250 303,303 250,325 197,303 175,250 197,197"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
        />

        {/* Radiating Connector Lines to 3 Pillar Nodes */}
        {/* Node 1: BUILD (Top Right ~ 30 deg) */}
        <line x1="250" y1="250" x2="390" y2="170" stroke="rgba(92, 225, 230, 0.35)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="390" cy="170" r="5" fill="#0D1017" stroke="#5CE1E6" strokeWidth="1.5" />
        <circle cx="390" cy="170" r="2" fill="#5CE1E6" />

        {/* Node 2: INTELLIGENCE (Bottom ~ 90 deg) */}
        <line x1="250" y1="250" x2="250" y2="410" stroke="rgba(124, 108, 255, 0.35)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="250" cy="410" r="5" fill="#0D1017" stroke="#7C6CFF" strokeWidth="1.5" />
        <circle cx="250" cy="410" r="2" fill="#7C6CFF" />

        {/* Node 3: AUTOMATION (Top Left ~ 150 deg) */}
        <line x1="250" y1="250" x2="110" y2="170" stroke="rgba(92, 225, 230, 0.35)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="110" cy="170" r="5" fill="#0D1017" stroke="#5CE1E6" strokeWidth="1.5" />
        <circle cx="110" cy="170" r="2" fill="#5CE1E6" />

        {/* Center Nucleus Atmosphere */}
        <circle cx="250" cy="250" r="60" fill="url(#coreGlow)" />
        <circle cx="250" cy="250" r="26" fill="#090B10" stroke="#5CE1E6" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="12" fill="#5CE1E6" className="animate-pulse motion-reduce:animate-none" />
        <circle cx="250" cy="250" r="4" fill="#FFFFFF" />

        {/* Telemetry Annotation Labels (Accurately Centered at Node Coords) */}
        <text x="390" y="152" fill="#5CE1E6" fontSize="9" fontFamily="monospace" letterSpacing="1.5" textAnchor="middle">BUILD</text>
        <text x="250" y="435" fill="#7C6CFF" fontSize="9" fontFamily="monospace" letterSpacing="1.5" textAnchor="middle">INTELLIGENCE</text>
        <text x="110" y="152" fill="#5CE1E6" fontSize="9" fontFamily="monospace" letterSpacing="1.5" textAnchor="middle">AUTOMATION</text>
      </svg>

      {/* Floating System Core Status Pill */}
      <div className="absolute -bottom-2 sm:bottom-2 px-3 py-1 rounded-[4px] bg-[#090B10]/95 border border-white/[0.12] backdrop-blur-md flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-[#A4ACB8] tracking-widest uppercase shadow-[0_4px_20px_rgba(0,0,0,0.7)] z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] animate-pulse" />
        <span>EDC CORE // ONLINE</span>
      </div>
    </div>
  );
}

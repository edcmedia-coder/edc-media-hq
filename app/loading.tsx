import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 select-none">
      <div className="relative w-16 h-16 flex items-center justify-center mb-6">
        <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
        <div className="absolute inset-0 rounded-full border-t-2 border-[#5CE1E6] animate-spin" />
        <div className="w-2.5 h-2.5 rounded-sm bg-[#5CE1E6] shadow-[0_0_12px_#5CE1E6]" />
      </div>

      <div className="text-center space-y-1 font-mono">
        <span className="text-xs tracking-[0.25em] text-[#5CE1E6] uppercase block font-semibold">
          EDC SYSTEM CORE
        </span>
        <span className="text-[11px] text-[#69717F] block">
          INITIALIZING SUBSYSTEM TELEMETRY...
        </span>
      </div>
    </div>
  );
}

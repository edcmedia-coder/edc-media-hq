import React from 'react';

export function PhilosophySection() {
  return (
    <section className="relative py-14 sm:py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Subtle Section Marker */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-[1px] bg-[#5CE1E6]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#69717F]">
            PHILOSOPHY // FIRST PRINCIPLES
          </span>
        </div>

        {/* Cinematic Restrained Headline */}
        <h2 className="font-display text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F4F7FA] leading-[1.08] mb-6 sm:mb-8">
          SOFTWARE SHOULD<br />
          DO MORE THAN<br />
          <span className="text-[#A4ACB8]">WAIT FOR INSTRUCTIONS.</span>
        </h2>

        {/* Supporting Editorial Copy */}
        <p className="font-body text-sm sm:text-lg md:text-xl text-[#A4ACB8] leading-relaxed max-w-2xl font-light">
          EDC Media explores a future where software can understand context, reason about problems, and help people move from intention to execution.
        </p>
      </div>
    </section>
  );
}

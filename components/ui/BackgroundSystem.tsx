import React from 'react';

export function BackgroundSystem() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Deep Obsidian Foundation */}
      <div className="absolute inset-0 bg-[#050609]" />

      {/* Subtle Atmospheric Radiance: Electric Cyan at Top-Right */}
      <div
        className="absolute -top-[20%] -right-[15%] w-[60vw] max-w-[850px] h-[60vw] max-h-[850px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(92, 225, 230, 0.045) 0%, rgba(92, 225, 230, 0.01) 45%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Subtle Atmospheric Radiance: Intelligence Violet at Mid-Left */}
      <div
        className="absolute top-[40%] -left-[20%] w-[55vw] max-w-[750px] h-[55vw] max-h-[750px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124, 108, 255, 0.035) 0%, rgba(124, 108, 255, 0.008) 50%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Subtle Atmospheric Radiance: Cyan at Lower Center for Footing */}
      <div
        className="absolute bottom-[-15%] left-[25%] w-[50vw] max-w-[700px] h-[50vw] max-h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(92, 225, 230, 0.03) 0%, transparent 65%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Technical Precision Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-70" />

      {/* Vignette Overlay for Crisp Framing */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(5, 6, 9, 0.8) 100%)',
        }}
      />
    </div>
  );
}

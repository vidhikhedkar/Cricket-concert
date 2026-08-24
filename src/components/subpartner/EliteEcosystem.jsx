import React from 'react';
import { FaSatellite, FaPlane, FaDesktop, FaUtensils, FaStore, FaTools, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const EliteEcosystem = () => {
  // Ring 1 (Innermost): None (Empty)
  const ring1Nodes = [];

  // Ring 2 (Middle): Exactly 2 icons
  const ring2Nodes = [
    { name: 'Education', icon: <FaGraduationCap className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 0 },
    { name: 'Venue', icon: <FaBuilding className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 180 },
  ];

  // Ring 3 (Outer): All other 6 icons
  const ring3Nodes = [
    { name: 'Broadcast', icon: <FaSatellite className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 0 },
    { name: 'Travel', icon: <FaPlane className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 60 },
    { name: 'Technology', icon: <FaDesktop className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 120 },
    { name: 'Hospitality', icon: <FaUtensils className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 180 },
    { name: 'Commercial', icon: <FaStore className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 240 },
    { name: 'Equipment', icon: <FaTools className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0A192F]" />, angle: 300 },
  ];

  return (
    <section className="bg-[#F4F8FF] text-[#191B23] py-14 md:py-20 flex flex-col items-center justify-center overflow-hidden">
      <style>{`
        @keyframes spin-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-orbit-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes counter-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes counter-spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-orbit-1 {
          animation: spin-orbit 40s linear infinite;
        }
        .animate-orbit-2 {
          animation: spin-orbit-reverse 45s linear infinite;
        }
        .animate-orbit-3 {
          animation: spin-orbit 60s linear infinite;
        }
        .animate-counter-2 {
          animation: counter-spin-reverse 45s linear infinite;
        }
        .animate-counter-3 {
          animation: counter-spin 60s linear infinite;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center max-w-2xl mb-6 md:mb-20 z-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#191B23] mb-2 sm:mb-3">
          The Elite Ecosystem
        </h2>
        <p className="text-[#434654] text-xs sm:text-sm md:text-base font-normal">
          A synergized network of industry leaders driving innovation across every facet of the sport.
        </p>
      </div>

      {/* Ecosystem Canvas Container using transform scale for small mobile viewports */}
      <div className="w-full overflow-hidden flex items-center justify-center py-4">
        <div className="relative w-75 h-75 sm:w-112.5 sm:h-112.5 md:w-135 md:h-135 scale-[0.85] sm:scale-100 flex items-center justify-center shrink-0">

          {/* Central Hub */}
          <div className="absolute z-30 flex flex-col items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-[#0A192F] text-white shadow-2xl shadow-[#0A4DCE]/40 ring-4 sm:ring-6 md:ring-8 ring-[#0A4DCE]/40">
            <span className="text-[10px] sm:text-sm md:text-xl font-extrabold tracking-wider">ELITE</span>
            <span className="text-[7px] sm:text-[9px] md:text-[10px] tracking-widest text-white font-semibold uppercase mt-0.5">HUB</span>
          </div>

          {/* Ring 1 (Innermost Ring) */}
          <div className="absolute w-28 h-28 sm:w-44 sm:h-44 md:w-55 md:h-55 rounded-full border-2 border-dashed border-slate-300 pointer-events-none animate-orbit-1" />

          {/* Ring 2 (Middle Ring) & 2 Orbiting Nodes */}
          <div className="absolute w-44 h-44 sm:w-72 sm:h-72 md:w-90 md:h-90 rounded-full border-2 border-dashed border-slate-300 pointer-events-none animate-orbit-2">
            {ring2Nodes.map((node, index) => {
              const translateDistance = 'clamp(88px, 24vw, 180px)';
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 pointer-events-auto"
                  style={{
                    transform: `rotate(${node.angle}deg) translate(${translateDistance}) rotate(-${node.angle}deg)`,
                    transformOrigin: '0 0',
                  }}
                >
                  <div className="animate-counter-2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/90 rounded-md sm:rounded-xl shadow-sm sm:shadow-md border border-white flex items-center justify-center mb-0.5 sm:mb-1.5 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-200">
                      {node.icon}
                    </div>
                    <span className="text-[8px] sm:text-[11px] md:text-sm font-semibold text-black tracking-tight whitespace-nowrap transition-colors group-hover:text-blue-600 bg-white/80 px-1 rounded">
                      {node.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ring 3 (Outer Ring) & All 6 Remaining Nodes */}
          <div className="absolute w-280px h-70 sm:w-107.5 sm:h-107.5 md:w-135 md:h-135 rounded-full border-2 border-dashed border-slate-300 pointer-events-none animate-orbit-3">
            {ring3Nodes.map((node, index) => {
              const translateDistance = 'clamp(140px, 39vw, 270px)';
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 pointer-events-auto"
                  style={{
                    transform: `rotate(${node.angle}deg) translate(${translateDistance}) rotate(-${node.angle}deg)`,
                    transformOrigin: '0 0',
                  }}
                >
                  <div className="animate-counter-3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/90 rounded-md sm:rounded-xl shadow-sm sm:shadow-md border border-white flex items-center justify-center mb-0.5 sm:mb-1.5 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-200">
                      {node.icon}
                    </div>
                    <span className="text-[8px] sm:text-[11px] md:text-sm font-semibold text-black tracking-tight whitespace-nowrap transition-colors group-hover:text-blue-600 bg-white/90 px-1 rounded">
                      {node.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EliteEcosystem;
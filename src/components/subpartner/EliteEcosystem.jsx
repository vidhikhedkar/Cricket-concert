import React from 'react';
import { FaSatellite, FaPlane, FaDesktop, FaUtensils, FaStore, FaTools, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const EliteEcosystem = () => {
  // Ring 1 (Innermost): None (Empty)
  const ring1Nodes = [];

  // Ring 2 (Middle): Exactly 2 icons
  const ring2Nodes = [
    { name: 'Education', icon: <FaGraduationCap className="w-5 h-5 text-[#0A192F]" />, angle: 0 },
    { name: 'Venue', icon: <FaBuilding className="w-5 h-5 text-[#0A192F]" />, angle: 180 },
  ];

  // Ring 3 (Outer): All other 6 icons
  const ring3Nodes = [
    { name: 'Broadcast', icon: <FaSatellite className="w-5 h-5 text-[#0A192F]" />, angle: 0 },
    { name: 'Travel', icon: <FaPlane className="w-5 h-5 text-[#0A192F]" />, angle: 60 },
    { name: 'Technology', icon: <FaDesktop className="w-5 h-5 text-[#0A192F]" />, angle: 120 },
    { name: 'Hospitality', icon: <FaUtensils className="w-5 h-5 text-[#0A192F]" />, angle: 180 },
    { name: 'Commercial', icon: <FaStore className="w-5 h-5 text-[#0A192F]" />, angle: 240 },
    { name: 'Equipment', icon: <FaTools className="w-5 h-5 text-[#0A192F]" />, angle: 300 },
  ];

  return (
    <section className="bg-[#F4F8FF] text-[#191B23] py-20 flex flex-col items-center justify-center overflow-hidden">
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
      <div className="text-center max-w-2xl mb-20 z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#191B23] mb-3">
          The Elite Ecosystem
        </h2>
        <p className="text-[#434654] text-sm md:text-base font-normal">
          A synergized network of industry leaders driving innovation across every facet of the sport.
        </p>
      </div>

      {/* Ecosystem Canvas Container */}
      <div className="relative w-full max-w-175 h-137.5 flex items-center justify-center">

        {/* Central Hub */}
        <div className="absolute z-30 flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#0A192F] text-white shadow-2xl shadow-[#0A4DCE]/40 ring-8 ring-[#0A4DCE]/40">
          <span className="text-lg md:text-xl font-extrabold tracking-wider">ELITE</span>
          <span className="text-[10px] tracking-widest text-white font-semibold uppercase mt-0.5">HUB</span>
        </div>

        {/* Ring 1 (Innermost Ring) - No Icons */}
        <div className="absolute w-55 h-55 rounded-full border-2 border-dashed border-slate-300 pointer-events-none animate-orbit-1" />

        {/* Ring 2 (Middle Ring) & 2 Orbiting Nodes */}
        <div className="absolute w-90 h-90 rounded-full border-2 border-dashed border-slate-300 pointer-events-none animate-orbit-2">
          {ring2Nodes.map((node, index) => {
            const translateDistance = '180px';
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
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/70 rounded-xl shadow-md border border-white flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-200">
                    {node.icon}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-black tracking-tight whitespace-nowrap transition-colors group-hover:text-blue-600 px-1.5 py-0.5 rounded">
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ring 3 (Outer Ring) & All 6 Remaining Nodes */}
        <div className="absolute w-125 h-125 md:w-135 md:h-135 rounded-full border-2 border-dashed border-slate-300 pointer-events-none animate-orbit-3">
          {ring3Nodes.map((node, index) => {
            const translateDistance = '270px'; // Half of Ring 3 max size
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
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/70 rounded-xl shadow-md border border-white flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-200">
                    {node.icon}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-black tracking-tight whitespace-nowrap transition-colors group-hover:text-blue-600 bg-white/80 px-1.5 py-0.5 rounded">
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EliteEcosystem;
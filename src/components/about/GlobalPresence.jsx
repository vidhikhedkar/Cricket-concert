import React from 'react';
import GLOBAL from '../../assets/about/section5/GLOBAL-PRESENCE.jpg';

const GlobalPresence = () => {
  return (
    <section 
      className="w-full  py-12 flex items-center justify-center"
      aria-label="Global Presence and Worldwide Impact Statistics"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Card 1: Global Presence / Member Nations */}
        <div 
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-100 flex flex-col justify-center items-start transition-transform duration-300 hover:-translate-y-1"
          aria-label="Global Presence Statistics"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#9CA3AF] uppercase mb-3">
            GLOBAL PRESENCE
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#071B34] tracking-tight mb-3">
            108+
          </h3>
          <p className="text-sm sm:text-base font-bold text-[#071B34] tracking-wide uppercase">
            MEMBER NATIONS
          </p>
        </div>

        {/* Card 2: Worldwide Impact / Fans Worldwide */}
        <div 
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-100 flex flex-col justify-center items-start transition-transform duration-300 hover:-translate-y-1"
          aria-label="Worldwide Impact Statistics"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#9CA3AF] uppercase mb-3">
            WORLDWIDE IMPACT
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#071B34] tracking-tight mb-3">
            35M+
          </h3>
          <p className="text-sm sm:text-base font-bold text-[#071B34] tracking-wide uppercase">
            FANS WORLDWIDE
          </p>
        </div>

        {/* Card 3: Visual Demographics/Metrics Graphic */}
        <div 
          className="bg-[#F0F7FF] rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/60 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
          aria-label="Fan demographics and engagement metrics chart container"
        >
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <img
              src={GLOBAL}
              alt="Global fan demographics, passion areas, and engagement metrics charts"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;
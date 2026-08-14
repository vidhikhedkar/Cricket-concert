import React from 'react';
import vision from '../../assets/about/section3/VisionMission.png';

const VisionMission = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${vision})` }}
      />

      {/* Content Container */}
      <div className="relative z-10 container flex flex-col items-center">

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-center mb-8 drop-shadow-lg">
          VISION & MISSION
        </h2>

        {/* Top Overview Banner */}
        <div className="w-full max-w-2xl bg-[#F0F7FF] backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl mb-12 text-center border border-white/20">
          <p className="text-sm md:text-base leading-relaxed font-medium">
            WCC is dedicated to advancing the game of cricket by fostering global participation, developing future talent, and creating world-class cricket experiences for players, fans, and member associations.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* Our Vision Card */}
          <div className="bg-white backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-2xl flex flex-row items-start gap-4 sm:gap-5 transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#0A192F] text-white p-3 sm:p-4 rounded-xl flex items-center justify-center shrink-0 shadow-md">
              {/* Eye / Vision Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-wide mb-1 sm:mb-2">
                OUR VISION
              </h3>
              <p className="text-[#4B5563] text-xs sm:text-base leading-relaxed">
                To inspire and unite the world through cricket while becoming the leading global organization for the growth of the sport.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-white backdrop-blur-md rounded-2xl p-5 sm:p-8 shadow-2xl flex flex-row items-start gap-4 sm:gap-5 transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-[#0A192F] text-white p-3 sm:p-4 rounded-xl flex items-center justify-center shrink-0 shadow-md">
              {/* Flag / Mission Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-wide mb-1 sm:mb-2">
                OUR MISSION
              </h3>
              <p className="text-[#4B5563] text-xs sm:text-base leading-relaxed">
                To develop cricket at every level by organizing international competitions, supporting member associations, empowering players, and delivering exceptional experiences for fans worldwide.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
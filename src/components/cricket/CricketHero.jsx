import React from 'react';
import Hero from '../../assets/cricket/section1/crickethero.jpg';

const CricketHero = () => {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] min-h-125 flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Hero}
          alt="Global Cricket Stadium background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-1 uppercase">
          THE PULSE OF
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-3 uppercase bg-linear-to-r from-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
          GLOBAL CRICKET
        </h2>

        {/* Description Text */}
        <p className="text-white text-xs sm:text-sm max-w-xl leading-relaxed">
          Experience the zenith of athletic performance, strategic brilliance, and international prestige.
        </p>

      </div>
    </section>
  );
};

export default CricketHero;
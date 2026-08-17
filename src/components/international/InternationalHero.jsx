import React from 'react';
import internationalhero from '../../assets/international/section1/inertnationalhero.jpg';

const InternationalHero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-125 lg:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${internationalhero})` }}
      >
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-[#191B23]/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">

        {/* Small Tag Pill */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-[#00389E]/20 backdrop-blur-md mb-6 shadow-lg">
          <span className="text-xs sm:text-sm font-medium tracking-wide text-blue-200 uppercase">
            Global Competitions
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-none drop-shadow-md mb-2">
          <span className="text-white block">International</span>
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#7CAEFF] tracking-wide">
            Tournaments
          </span>
        </h1>

        {/* Subtitle/Description */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-[#EDEDF8] font-normal leading-relaxed drop-shadow">
          Global competitions bringing together the world's best cricketing nations in an elite showcase of skill and strategy.
        </p>
      </div>
    </section>
  );
};

export default InternationalHero;
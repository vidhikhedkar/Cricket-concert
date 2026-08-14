import React from 'react';
import cta from '../../assets/icpl/section11/icplcta.png';

const IcplCta = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cta} 
          alt="Stadium Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
          READY TO BUILD THE <br className="hidden sm:inline" />
          FUTURE OF CRICKET?
        </h2>

        {/* Subtitle Description */}
        <p className="text-white font-regular text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-10">
          Join a global movement that is redefining what it means to be a fan, an athlete, and a partner in the world's most beautiful game.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Solid Button */}
          <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0A192F] font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
            Become a Partner
          </button>

          {/* Outlined Button */}
          <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white 
          border-2 border-white/80 font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
            Download Media Kit
          </button>
        </div>

      </div>
    </section>
  );
};

export default IcplCta;
import React from 'react';
import hero from '../../assets/partner/section1/PartnerHero.png';

const PartnerHero = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-112.5 flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero} 
          alt="Stadium background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase mb-4">
          BE A PARTNER
        </h1>

        {/* Description Text */}
        <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed">
          Shape the future of global cricket through elite sponsorships, strategic partnerships, and visionary investment. Join the world's most dynamic sports authority.
        </p>

      </div>
    </section>
  );
};

export default PartnerHero;
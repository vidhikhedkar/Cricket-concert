import React from 'react';
import cta from '../../assets/partner/section5/partnercta.png';

const PartnerCta = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-gray-950 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
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
        <h2 className="text-2xl sm:text-4xl sm:max-w-110 w-full font-bold text-white tracking-tight leading-[1.15] max-w-3xl mb-4 uppercase">
          LET'S BUILD THE FUTURE 
          OF CRICKET
        </h2>

        {/* Subtitle Description */}
        <p className="text-[#F3F3FE] text-xs sm:text-sm lg:text-base max-w-xl leading-relaxed mb-8">
          Join an exclusive network shaping the elite global authority for the sport.
        </p>

        {/* Action Button */}
        <button className="bg-white hover:bg-gray-100 text-[#0A192F] font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
          BECOME A PARTNER
        </button>

      </div>
    </section>
  );
};

export default PartnerCta;
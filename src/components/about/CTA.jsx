import React from 'react';
import cta from '../../assets/about/section8/cta.png';
import { NavLink } from 'react-router-dom';

const CTA = () => {
  return (
    <section 
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      aria-label="Call to Action Section"
    >
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${cta})` }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-black/60 z-0" 
        aria-hidden="true"
      />

      {/* Content Container */}
      <div 
        className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center"
        aria-label="Call to action content container"
      >
        
        {/* Main Heading */}
        <h2 
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8 drop-shadow-lg uppercase"
          aria-label="Ready to shape world cricket?"
        >
          READY TO SHAPE<br /> WORLD CRICKET?
        </h2>

        {/* Action Button */}
        <NavLink
          to="/join"
          aria-label="Join the league now"
          className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm tracking-widest px-8 py-4 rounded-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          JOIN THE LEAGUE NOW
        </NavLink>

      </div>
    </section>
  );
};

export default CTA;
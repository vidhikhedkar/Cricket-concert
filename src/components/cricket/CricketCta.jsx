import React from 'react';
import Hero from '../../assets/cricket/section1/crickethero.jpg'; // Using the background asset or any relevant stadium background

const CricketCta = () => {
  return (
    <section className="relative mt-10 w-full py-20 flex items-center justify-center overflow-hidden ">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Hero} 
          alt="Cricket Stadium background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center max-w-4xl">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E0E3E5] tracking-tight leading-[1.15] mb-8 uppercase">
          JOIN THE WORLD OF CRICKET
        </h2>

        {/* Description Text */}
        <p className="text-[#C6C6CD] text-xs sm:text-sm lg:text-base max-w-xl leading-relaxed mb-10 font-regular">
          From historic milestones to modern breakthroughs, be part of the most prestigious sporting community on the planet.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#003824] font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-lg shadow-lg transition-all cursor-pointer">
            EXPLORE TOURNAMENTS
          </button>
          
          <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/40 font-black text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-lg transition-all cursor-pointer">
            VIEW RANKINGS
          </button>
        </div>

      </div>
    </section>
  );
};

export default CricketCta;
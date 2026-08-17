import React from 'react';
import domestichero from '../../assets/domestic/section1/domestichero.jpg';

const DomesticHero = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={domestichero} 
          alt="Domestic Tournaments Stadium" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-none">
          <span className="block text-white mb-1">DOMESTIC</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-3 uppercase bg-linear-to-r from-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">TOURNAMENTS</h2>
        </h1>
        
        <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-xl mx-auto font-regular leading-relaxed">
          The heartbeat of cricket, fostering regional powerhouses and local legends on the path to global dominance.
        </p>
      </div>
    </section>
  );
};

export default DomesticHero;
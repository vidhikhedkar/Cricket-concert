import React from 'react';
import domesticcta from '../../assets/domestic/section10/domesticcta.png';

const DomesticCTA = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full">
        <div className="relative overflow-hidden shadow-lg h-80 sm:h-95 flex items-center justify-center text-center p-6">
          
          {/* Background Image & Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={domesticcta} 
              alt="Ready to shape world cricket stadium" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              READY TO SHAPE WORLD CRICKET?
            </h2>

            <button className="px-8 py-3 rounded-lg cursor-pointer bg-white text-black font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors shadow-md">
              JOIN THE LEAGUE NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DomesticCTA;
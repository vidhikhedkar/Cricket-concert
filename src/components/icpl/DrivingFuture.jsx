import React from 'react';
import DrivingFutureImg from '../../assets/icpl/section3/DrivingFuture.png';

const DrivingFuture = () => {
  return (
    <section 
      className="w-full bg-white py-12 flex items-center justify-center"
      aria-label="Driving the Future Section"
    >
      <div className="container">
        
        {/* Main Card Container with Background Image */}
        <div 
          className="relative w-full rounded-3xl overflow-hidden shadow-xl min-h-105 sm:min-h-120 lg:min-h-100 flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${DrivingFutureImg})` }}
        >
        

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-xl p-8 sm:p-12 lg:p-16 flex flex-col items-start justify-center">
            
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#093159] uppercase mb-3">
              Global Presence
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#093159] tracking-tight leading-tight mb-6">
              Driving the future of global crickets
            </h2>

            <p className=" text-sm sm:text-base leading-relaxed">
              Our vision and mission guide everything we do, helping us create lasting value for players, partners, and fans while contributing to the continued growth of cricket worldwide.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DrivingFuture;
import React from 'react';
import player from '../../assets/icpl/section9/player.png';

const WhyPlayers = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container">
        
        {/* Main Banner Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#06142E] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Dark Content Area */}
          <div className="lg:w-5/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-[#0A192F]">
            
            {/* Small Subheading */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-3">
              WHY ICPL
            </span>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BEDFFF] tracking-tight leading-[1.2] mb-6">
              Why Players, Teams & <br />
              Partners Choose ICPL
            </h2>

            {/* Description Text */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              ICPL is more than a tournament platform. It is a complete ecosystem designed to help players, organizations, and partners achieve greater visibility, growth, and success through professional cricket experiences.
            </p>

          </div>

          {/* Right Image Area */}
          <div className="lg:w-7/12 relative min-h-60 sm:min-h-100 lg:min-h-auto">
            <img 
              src={player} 
              alt="Players huddling together" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyPlayers;
import React from 'react';
import Club from '../../assets/domestic/section8/ClubSpotlight.jpg';

const ClubSpotlight = () => {
  return (
    <section className="py-12 bg-white text-[#191B23] overflow-hidden">
      <div className="container">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A192F] mb-4">
                Club Spotlight
              </h2>
              <p className="text-sm sm:text-base font-regular text-[#1C1B1B]">
                The Rise of the Rosewood Warriors
              </p>
            </div>

            <p className="text-[#444748] text-sm sm:text-base leading-relaxed">
              From struggling in the lower divisions to claiming the National Premier Cup in just five years, the Warriors' story is one of community grit, smart drafting, and relentless dedication.
            </p>

            <p className="text-[#444748]0 text-sm sm:text-base leading-relaxed">
              Their state-of-the-art academy now hosts over 500 local kids weekly, ensuring the pipeline of talent remains strong for generations to come. "We don't just build a team; we build a family," says Head Coach Marcus Trent.
            </p>

            {/* Read Full Feature Button */}
            <div className="pt-2">
              <button className="px-6 py-3.5 rounded-xl bg-[#0A192F] text-white font-regular text-sm shadow-sm hover:bg-black transition-colors cursor-pointer">
                Read Full Feature
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-md overflow-hidden shadow-md border border-gray-100 h-87.5 sm:h-90">
              <img 
                src={Club} 
                alt="Club Spotlight - Rosewood Warriors" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClubSpotlight;
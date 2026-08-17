import React from 'react';
import worldchampion from '../../assets/international/section2/world-champion.jpg';

const FeaturedEvent = () => {
  return (
    <section className="py-16  bg-white w-full overflow-hidden">
      <div className="container box-border">

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">

          {/* Left Column: Details & Countdown */}
          <div className="lg:col-span-6 flex flex-col justify-start w-full">

            {/* Tag */}
            <div className="mb-4">
              <span className="inline-block bg-white text-[#0B1F4D] text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-md border border-[#E5E7EB]">
                Featured Event
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111010] tracking-tight mb-4 leading-tight">
              The World
              <br />
              Championship Finals
            </h2>

            {/* Description */}
            <p className="text-[#444748] text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              The definitive contest of the decade. Elite teams converge for a record-breaking prize pool and eternal legacy.
            </p>

            <div className="w-full h-px bg-[#C4C7C8]/30 mb-8"></div>

            {/* Stats Row (Prize Pool & Host Nations) */}
            <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-[#C4C7C8]/30 ">
              <div>
                <span className="block text-[10px] sm:text-xs font-bold text-[#444748] uppercase tracking-widest mb-1.5">
                  Prize Pool
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#0B1F4D] tracking-tight">
                  $10M
                </span>
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs font-bold text-[#444748] uppercase tracking-widest mb-1.5">
                  Host Nations
                </span>
                <span className="text-base sm:text-lg font-bold text-[#1C1B1B]">
                  India & Australia
                </span>
              </div>
            </div>

            {/* Countdown Timer Box */}
            <div className="bg-[#F3F5FF] rounded-xl p-5 sm:p-6 w-full max-w-md">
              <span className="block text-[10px] sm:text-xs font-bold text-[#444748] uppercase tracking-widest mb-3">
                Tournament Commences In
              </span>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Days */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-[#0B1F4D]">42</span>
                  <span className="text-[10px] sm:text-xs text-[#444748] font-regular uppercase tracking-wider">Days</span>
                </div>
                <span className="text-2xl font-bold text-[#C4C7C8] pb-3">:</span>
                {/* Hours */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-[#0B1F4D]">14</span>
                  <span className="text-[10px] sm:text-xs text-[#444748] font-regular uppercase tracking-wider">Hours</span>
                </div>
                <span className="text-2xl font-bold text-[#C4C7C8] pb-3">:</span>
                {/* Minutes */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-[#0B1F4D]">59</span>
                  <span className="text-[10px] sm:text-xs text-[#444748] font-regular uppercase tracking-wider">Mins</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 w-full flex justify-start">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-[#0A192F] max-w-lg lg:max-w-none aspect-square sm:aspect-6/5 ">
              <img
                src={worldchampion}
                alt="World Championship Trophy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedEvent;
import React from 'react';
import EvolutionImg from '../../assets/icpl/section5/Evolution.png';
import { IoTimeOutline, IoCheckmarkCircleOutline, IoDocumentTextOutline } from 'react-icons/io5';

const Evolution = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 flex items-center justify-center overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image wrapper with top and right padding so the absolute card never clips or overflows on mobile */}
        <div className="lg:col-span-6 relative flex justify-center pt-8 pr-10 sm:pt-14 sm:pr-8">
          <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={EvolutionImg} 
              alt="T30 Evolution Cricket Match" 
              className="w-full h-80 sm:h-90 object-cover"
            />
            {/* Dark gradient overlay for a polished look */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Format Specifications Card */}
          <div className="absolute -top-4 -right-2 sm:-top-14 sm:-right-8 bg-[#0A192F] text-white p-3.5 sm:p-5 rounded-xl shadow-2xl border border-white/10 w-60 sm:w-72 backdrop-blur-md z-20">
            <div className="flex items-center space-x-2.5 mb-2.5 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10">
              <IoTimeOutline className="w-4 h-4 sm:w-5 sm:h-5 text-[#EEEFFF] shrink-0" />
              <h3 className="text-xs sm:text-sm font-regular tracking-wider uppercase text-[#EEEFFF]">
                Format Specifications
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#EEEFFF] font-medium">Innings</span>
                <span className="font-regular text-[#EEEFFF]">30 Overs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#EEEFFF] font-medium">Powerplay</span>
                <span className="font-regular text-[#EEEFFF]">12 Overs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#EEEFFF] font-medium">Duration</span>
                <span className="font-regular text-[#EEEFFF]">150 Mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content and Features */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0A192F] mb-2">
            The Evolution
          </span>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111C2D] mb-4 ">
            T30: A Masterpiece of Pace & Strategy
          </h2>
          
          <p className="text-[#44474D] text-sm sm:text-base leading-relaxed mb-8">
            Blending the endurance of 50-over cricket with the explosive energy of T20, the T30 format is engineered for peak athletic performance and audience retention.
          </p>

          {/* Feature List */}
          <div className="space-y-5 mb-8 w-full">
            <div className="flex items-start space-x-4">
              <div className="mt-1 shrink-0">
                <IoCheckmarkCircleOutline className="w-6 h-6 text-[#0A192F]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111C2D]">30 Overs per Side</h4>
                <p className="text-sm text-[#44474D] mt-0.5">Balanced gameplay allowing both spinners and fast bowlers to find their rhythm.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 shrink-0">
                <IoCheckmarkCircleOutline className="w-6 h-6 text-[#0A192F]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111C2D]">Strategic Gameplay</h4>
                <p className="text-sm text-[#44474D] mt-0.5">Double Powerplay options give captains more tactical flexibility.</p>
              </div>
            </div>
          </div>

          {/* Explore Rules Button */}
          <button 
            type="button" 
            className="inline-flex items-center space-x-2 bg-black hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Rules</span>
            <IoDocumentTextOutline className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Evolution;
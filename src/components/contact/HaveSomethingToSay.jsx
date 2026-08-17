import React from 'react';
import Havesomething from '../../assets/contact/section8/Havesomething.png';

const HaveSomethingToSay = () => {
  return (
    <section className="relative w-full py-36 bg-gray-950 overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Havesomething}
          alt="Stadium background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase mb-8">
          HAVE SOMETHING TO SAY?
        </h2>

        {/* Action Button */}
        <button className="bg-white hover:bg-gray-100 text-[#00389E] font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cyrsor-pointer">
          GET IN TOUCH
        </button>

      </div>
    </section>
  );
};

export default HaveSomethingToSay;
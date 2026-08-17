import React from 'react';
import hero from '../../assets/contact/section1/contacthero.png';

const ContactHero = () => {
  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh] min-h-125 flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="International Stadium background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-1 uppercase">
          LET'S TALK CRICKET.
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 uppercase bg-linear-to-r from-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
          WE'RE HERE TO HELP.
        </h2>

        {/* Description Text */}
        <p className="text-[#B5C4FF] text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed mb-8">
          Whether you have a question, partnership enquiry, media request or need assistance, our global team is ready to provide exceptional support.
        </p>

        {/* Action Button */}
        <button className="bg-white hover:bg-gray-100 text-[#0A192F] font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
          CONTACT OUR TEAM
        </button>

      </div>
    </section>
  );
};

export default ContactHero;
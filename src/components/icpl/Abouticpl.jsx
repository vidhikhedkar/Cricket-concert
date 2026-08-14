import React from 'react';
import Abouticpl from '../../assets/icpl/section2/Abouticpl.jpg';
import { NavLink } from 'react-router-dom';

const AboutIcpl = () => {
  return (
    <section
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      aria-label="About ICPL Section"
    >
      <div className="container  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content Column */}
        <div
          className="flex flex-col items-start justify-center"
          aria-label="About ICPL Information"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111C2D] tracking-tight leading-tight mb-6">
            ABOUT ICPL
          </h2>

          <p className="text-[#44474D] text-sm  leading-relaxed mb-6">
            Established as the pinnacle of professional cricket development, the ICPL serves as the central hub for global league operations, player welfare, and innovation. We oversee the premier T30 circuit, ensuring the highest standards of integrity and entertainment.
          </p>

          <p className="text-[#44474D] text-sm  leading-relaxed mb-8">
            Our mission is to foster a sustainable ecosystem where emerging talent from all 108 member nations can compete at the highest level while leveraging state-of-the-art performance analytics and fan engagement technologies.
          </p>

          <NavLink
            to="/about"
            aria-label="Learn more about ICPL"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0A192F] tracking-wide hover:text-blue-600 transition-colors duration-200"
          >
            Learn More <span>→</span>
          </NavLink>
        </div>

        {/* Right Image Column */}
        <div
          className="w-full flex justify-center lg:justify-end"
          aria-label="ICPL trophy container"
        >
          <div className="w-full max-w-xl h-87.5 sm:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
            <img
              src={Abouticpl}
              alt="ICPL Championship Trophy"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIcpl;
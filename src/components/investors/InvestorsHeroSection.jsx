import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/investors/section1/investorshero.png';

const InvestorsHeroSection = () => {
  const stats = [
    { value: "108+", label: "NATIONS" },
    { value: "35M+", label: "FANS" },
    { value: "250+", label: "EVENTS" },
    { value: "120+", label: "PARTNERS" },
  ];

  return (
    <section className="relative min-h-[85vh] bg-slate-900 overflow-hidden flex flex-col justify-between text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Building the Next Generation of Global Cricket"
          className="w-full h-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-[#11294C]/57 backdrop-blur-[2px]" /> */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container text-center pt-15 sm:pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase max-w-4xl mb-6 leading-tight">
            Building the Next Generation of Global<span className="text-3xl sm:text-5xl font-extrabold text-[#7CAEFF] tracking-wide">Cricket</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-white/80 font-regular max-w-xl leading-relaxed sm:mb-16 mb-6">
            Invest in the premier authority of the fastest-growing global sport. Unprecedented reach, digital innovation, and institutional prestige.
          </p>
        </motion.div>
      </div>

      {/* Stats Cards Bar */}
      <div className="relative z-10 container pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-white/70 tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsHeroSection;
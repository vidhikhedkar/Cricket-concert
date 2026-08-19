import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/subpartner/section1/beapartnerhero.png';

const SubPartnerHero = () => {
  const stats = [
    { value: "120+", label: "GLOBAL PARTNERS" },
    { value: "108", label: "MEMBER NATIONS" },
    { value: "35M+", label: "FANS ENGAGED" },
    { value: "250+", label: "EVENTS ANNUALLY" },
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen bg-slate-900 flex flex-col justify-between overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Global Partnerships Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" /> */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-4">
            GLOBAL PARTNERSHIPS: <br />
            BUILDING CRICKET   <span className="text-3xl sm:text-5xl font-extrabold text-[#7CAEFF] tracking-wide">TOGETHER</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white font-regular max-w-2xl mx-auto leading-relaxed">
            Connecting the world's leading brands with the passion, scale, and dynamic future of international cricket.
          </p>
        </motion.div>
      </div>

      {/* Floating Stats Card Box Overlapping the Bottom */}
      <div className="relative z-20 container bottom-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#C3C5D7]/30"
        >
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center ${index > 0 ? 'pt-4 lg:pt-0' : ''}`}>
              <div className="text-2xl sm:text-3xl font-bold text-[#0A192F] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-regular text-[#434654] tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubPartnerHero;
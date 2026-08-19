import React from 'react';
import { motion } from 'framer-motion';
import { FaSatellite, FaUsers, FaGlobe } from 'react-icons/fa';
import map from '../../assets/sponsors/section4/world-map.jpg';

const GlobalAudience = () => {
  const stats = [
    {
      icon: <FaSatellite className="text-[#0A192F] text-xl" />,
      value: "2.5B+",
      label: "Cumulative Broadcast Audience",
    },
    {
      icon: <FaUsers className="text-[#0A192F] text-xl" />,
      value: "150M+",
      label: "Social Media Followers",
    },
    {
      icon: <FaGlobe className="text-[#0A192F] text-xl" />,
      value: "120",
      label: "Territories Broadcasted",
    },
  ];

  return (
    <section className="bg-white py-16 text-[#0A192F] relative overflow-hidden">
      <div className="container relative">

        {/* Background Map Watermark / Overlay Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-15 pointer-events-none">
          <img
            src={map}
            alt="World Map Background"
            className="w-full max-w-5xl object-contain filter grayscale"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3 block">
              GLOBAL AUDIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
              Unmatched Worldwide Reach
            </h2>
          </div>

          {/* Stats Box Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F3F3FE]/51 backdrop-blur-md rounded-xl p-8  sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icon Circle */}
                <div className=" flex items-center justify-center mb-2">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-regular text-[#434654] uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GlobalAudience;
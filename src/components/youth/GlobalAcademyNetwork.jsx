import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaGraduationCap } from 'react-icons/fa';

const GlobalAcademyNetwork = () => {
  const stats = [
    {
      icon: <FaGlobe className="text-[#C1CEFF] text-lg" />,
      title: "45+ Facilities",
      description: "Spread across 12 countries, providing localized access to elite training environments.",
    },
    {
      icon: <FaUsers className="text-[#C1CEFF] text-lg" />,
      title: "5,000+ Athletes",
      description: "Active participants in our grassroots and advanced development programs annually.",
    },
    {
      icon: <FaGraduationCap className="text-[#C1CEFF] text-lg" />,
      title: "200+ Coaches",
      description: "Certified professionals employing cutting-edge methodologies and sports science.",
    },
  ];

  return (
    <section className="bg-[#FAF8FF] py-16  text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase mb-2">
            Global Academy Network
          </h2>
          <p className="text-sm sm:text-base text-[#434654] font-regular leading-relaxed">
            State-of-the-art facilities strategically located around the world to nurture talent locally.
          </p>
        </div>

        {/* World Map Container with Cards */}
        <div className="relative bg-[#E7E7F2] rounded-xl p-6 sm:p-12 border border-slate-200 overflow-hidden shadow-sm">
          
          {/* Subtle Map Background Watermark Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full bg-contain bg-center bg-no-repeat filter grayscale" style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8FF] rounded-2xl p-8 shadow-md flex flex-col justify-start"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#0A4DCE] flex items-center justify-center mb-6 shadow-md">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#434654] tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#434654] leading-relaxed font-regular">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalAcademyNetwork;
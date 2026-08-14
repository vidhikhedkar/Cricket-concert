import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaLandmark, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import Partnership from '../../assets/icpl/section7/PartnershipOpportunities.png';

const PartnershipOpportunities = () => {
  const floatingBadges = [
    { label: "FRANCHISE OWNERS", icon: FaBuilding, position: "-top-4 -left-4 sm:-top-6 sm:-left-6" },
    { label: "SPONSORS", icon: FaHandshake, position: "top-4 -right-4 sm:top-6 sm:-right-6" },
    { label: "GOVERNMENT", icon: FaLandmark, position: "bottom-12 -left-4 sm:bottom-16 sm:-left-6" },
    { label: "TECHNOLOGY PARTNERS", icon: FaLaptopCode, position: "-bottom-4 right-4 sm:-bottom-6 sm:right-6" },
  ];

  const stats = [
    { value: "30+", label: "COUNTRIES" },
    { value: "100M+", label: "AUDIENCE REACH" },
    { value: "50+", label: "GLOBAL PARTNERS" },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="container flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Image with Floating Badges */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center py-6">
          <div className="relative w-full max-w-lg aspect-4/3 rounded-3xl shadow-2xl overflow-visible">
            {/* Stadium Image */}
            <img
              src={Partnership}
              alt="Stadium"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />

            {/* Floating Badges */}
            {floatingBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`absolute ${badge.position} z-20 bg-white/95 backdrop-blur-md px-3.5 py-1 sm:py-2 rounded-2xl shadow-xl flex items-center gap-2.5 border border-gray-100`}
                >
                  <div className="w-4 h-4 rounded-md bg-blue-50 flex items-center justify-center text-[#031b38] shadow-sm">
                    <Icon className="text-xs sm:text-sm" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#031b38] tracking-wider whitespace-nowrap">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0B1F4D] mb-2">
            Partnership Opportunities
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F4D] tracking-tight leading-tight mb-4">
            Partner With Purpose. <br />
            Shape the Future.
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8 max-w-xl">
            Join hands with ICPL and be part of a global movement that's inspiring millions.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 border-y border-[#E5E7EB] py-6">

            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F4D] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-[#9CA3AF] tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}

          </div>

          {/* Call to Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0A192F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl hover:bg-[#072d5c] transition-colors flex items-center gap-3 group cursor-pointer"
          >
            <span>Become an ICPL Partner</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default PartnershipOpportunities;
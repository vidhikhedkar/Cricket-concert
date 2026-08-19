import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PressReleases = () => {
  const releases = [
    {
      date: "Oct 15, 2026",
      title: "WCC Announces 2026 Schedule",
      description: "The official calendar for the upcoming season has been finalized, featuring expanded international tours and new tournament formats.",
    },
    {
      date: "Oct 12, 2026",
      title: "New Global Partnership with Apex Athletics",
      description: "A landmark multi-year agreement to provide state-of-the-art equipment and training facilities across all WCC member nations.",
    },
    {
      date: "Oct 08, 2026",
      title: "WCC Integrity Committee Releases Annual Report",
      description: "Comprehensive review highlights advancements in anti-corruption measures and commitment to fair play in global tournaments.",
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-1 border-b border-[#C3C5D7]/20 pb-6">
          <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-[#191B23] uppercase">
            PRESS RELEASES
          </h2>
          <Link
            to="/all-releases"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A192F] hover:text-blue-600 transition-colors uppercase tracking-wider mt-4 sm:mt-0 group"
          >
            <span>All Releases</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Releases List */}
        <div className="flex flex-col divide-y divide-[#C3C5D7]/20">
          {releases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
            >
              {/* Date Column */}
              <div className="w-full md:w-30 shrink-0">
                <span className="text-[#737686] font-semibold text-xs sm:text-sm tracking-wide">
                  {item.date}
                </span>
              </div>

              {/* Title & Description Column */}
              <div className="flex-1 max-w-3xl">
                <h3 className="text-lg sm:text-xl font-bold text-[#191B23] tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              {/* <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shrink-0">
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </div> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PressReleases;
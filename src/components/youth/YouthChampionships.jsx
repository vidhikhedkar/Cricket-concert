import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import elite from '../../assets/youth/section4/elite-league.jpg';
import blast from '../../assets/youth/section4/junior-blast.jpg';
import worldchallenge from '../../assets/youth/section4/world-challenge.jpg';
import { Link } from 'react-router-dom';

const YouthChampionships = () => {
  const championships = [
    {
      badge: "Global",
      badgeColor: "bg-[#00389E] text-white",
      title: "U-19 World Challenge",
      description: "The ultimate testing ground for national youth squads competing for global supremacy.",
      linkText: "Tournament Details",
      image: worldchallenge,
    },
    {
      badge: "Regional",
      badgeColor: "bg-[#5D5F5F] text-white",
      title: "Academy Elite League",
      description: "Intense regional competition fostering growth and exposing players to high-pressure scenarios.",
      linkText: "View Standings",
      image: elite,
    },
    {
      badge: "National",
      badgeColor: "bg-[#792300] text-white",
      title: "Junior T20 Blast",
      description: "Fast-paced, action-packed tournament designed to develop modern short-format skills.",
      linkText: "Explore Teams",
      image: blast,
    },
  ];

  return (
    <section className="bg-white py-16 text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase mb-4">
            Youth Championships
          </h2>
          <p className="text-sm sm:text-base text-[#434654] font-regular leading-relaxed">
            Discover the premier tournaments that showcase the best emerging talent across regional and global stages.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {championships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF8FF] rounded-2xl overflow-hidden shadow-xl border border-[#C3C5D7]/50 flex flex-col justify-between group"
            >
              {/* Image & Badge Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#191B23] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#434654] leading-relaxed font-regular mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  to="/details"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A192F] hover:text-[#0A192F] transition-colors w-fit group/link tracking-wider"
                >
                  {item.linkText} <FaArrowRight className="text-[10px] transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default YouthChampionships;
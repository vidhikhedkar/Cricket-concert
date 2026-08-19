import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import batter from '../../assets/youth/section7/batter.jpg';
import bowler from '../../assets/youth/section7/bowler.jpg';
import { Link } from 'react-router-dom';

const FutureStars = () => {
  const players = [
    {
      name: "Arjun Patel",
      role: "BATTER",
      age: "Age 17",
      hub: "Mumbai Academy",
      image: batter,
      heightClass: "h-[340px] sm:h-full", // Custom taller height for the first card
      stats: [
        { label: "AVG", value: "54.2" },
        { label: "SR", value: "112" },
        { label: "100S", value: "4" },
      ]
    },
    {
      name: "Liam Davies",
      role: "BOWLER",
      age: "Age 18",
      hub: "London Hub",
      image: bowler,
      heightClass: "h-[300px] sm:h-full", 
      stats: [
        { label: "AVG", value: "18.4" },
        { label: "ECON", value: "4.2" },
        { label: "WKTS", value: "32" },
      ]
    }
  ];

  return (
    <section className="bg-white py-16  text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] uppercase mb-3">
              FUTURE STARS
            </h2>
            <p className="text-sm sm:text-base text-[#444748] font-regular">
              Keep an eye on these rising talents redefining the game.
            </p>
          </div>

          <Link
            to="/view-all-prospects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A192F] cursor-pointer hover:text-[#0A192F] transition-colors w-fit group tracking-wider uppercase"
          >
            VIEW ALL PROSPECTS <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col group ${index === 1 ? 'lg:mt-16' : ''}`} 
            >

              {/* Image Container with individual varying heights */}
              <div className={`relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 ${player.heightClass} mb-6 border border-slate-200 transition-all duration-500`}>
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-widest bg-white backdrop-blur-md text-[#0B1F4D] px-3.5 py-1.5 rounded-md shadow-md">
                    {player.role}
                  </span>
                </div>
              </div>

              {/* Player Info */}
              <h3 className="text-2xl font-extrabold text-[#0B1F4D] tracking-tight mb-1">
                {player.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#444748] font-regular mb-6">
                {player.age} • {player.hub}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {player.stats.map((stat, sIndex) => (
                  <div key={sIndex}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F4D] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[12px] font-regular text-[#444748] tracking-widest uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FutureStars;
import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import Spotlight from '../../assets/WomensCricket/section3/ChampionshipSpotlight.jpg';


const ChampionshipSpotlight = () => {

  const topTeams = [
    { name: "Mumbai Indians", rank: "Rank 1" },
    { name: "Delhi Capitals", rank: "Rank 2" },
    { name: "RCB Women", rank: "Rank 3" },
  ];


  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className="container">

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1B1B] uppercase">
            Championship Spotlight
          </h2>
          <p className="text-xs sm:text-sm text-[#444748] mt-2 max-w-2xl">
            The pinnacle of franchise cricket, delivering unprecedented drama and elite athleticism.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Live Match Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-xl min-h-95 sm:min-h-110 flex flex-col justify-end group border border-slate-200"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={Spotlight}
                alt="Championship Spotlight Stadium"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="absolute bottom-30 left-7 z-10">
              <span className="inline-block bg-[#FFFFFF]/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-2 rounded-xl  uppercase tracking-wider">
                Live Match
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2">
              <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide">
                Delhi vs Mumbai
              </h3>
              <p className="text-[#FFFFFF]/80 text-xs sm:text-sm font-regular max-w-xl leading-relaxed">
                The titans clash at Arun Jaitley Stadium in a high-stakes encounter that defines the season.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Stack: Viewership & Top Teams) */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">

            {/* Record Viewership Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F1EDEC] rounded-xl p-6 shadow-md border border-[#C4C7C8]/30 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#F43F5E]/10 flex items-center justify-center text-[#F43F5E] mb-4 shadow-xs">
                  <FaChartLine className="text-sm" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1B1B] tracking-tight mb-2">
                  Record Viewership
                </h3>
                <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                  The current season has shattered all previous digital streaming records, reaching 50M+ concurrent viewers globally.
                </p>
              </div>
            </motion.div>

            {/* Top Teams Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#4C5D8E] text-white rounded-xl p-6 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                  Top Teams
                </h3>

                <div className="space-y-3">
                  {topTeams.map((team, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2.5 px-3 rounded-xl border-b border-[#FFFFFF]/20"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-100">
                        {team.name}
                      </span>
                      <span className="text-[11px] font-bold text-white/70">
                        {team.rank}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ChampionshipSpotlight;
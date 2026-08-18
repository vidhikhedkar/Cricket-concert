import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import Championship from '../../assets/WomensCricket/section2/WomensChampionship.jpg';
import { Link } from 'react-router-dom';

const WomensChampionship = () => {
  const topTeams = [
    { rank: 1, name: "Strikers", initials: "ST", pts: "18 pts", badgeColor: "bg-[#0A4DCE] text-[#C1CEFF]" },
    { rank: 2, name: "Valkyries", initials: "VA", pts: "14 pts", badgeColor: "bg-[#DFE0E0] text-[#616363]" },
    { rank: 3, name: "Titans", initials: "TI", pts: "12 pts", badgeColor: "bg-[#FFDAD6] text-[#93000A]" },
    { rank: 4, name: "Titans", initials: "TI", pts: "12 pts", badgeColor: "bg-[#FFDAD6] text-[#93000A]" },
  ];

  return (
    <section className="bg-white py-12 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#191B23]">
            Women's Championship
          </h2>
          <p className="text-xs sm:text-sm text-[#434654] mt-2">
            The pinnacle of international franchise cricket.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">

          {/* Left Live Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-xl min-h-95 sm:min-h-105 flex flex-col justify-end group border border-slate-200"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={Championship}
                alt="Women's Championship Live Action"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-[#BA1A1A] text-white text-[10px] font-regular px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider relative">
                  <span className="w-1 h-1 rounded-full bg-white animate-ping absolute" />
                  <span className="w-1 h-1 rounded-full bg-white relative" />
                  LIVE
                </span>
                <span className="bg-[#FFFFFF]/60 backdrop-blur-md text-white text-[10px] font-regular px-3 py-1 rounded-md border border-[#FFFFFF]/40 uppercase tracking-wider">
                  T20 Final
                </span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  {/* Team 1 */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center font-semibold text-xs text-slate-900 shadow">
                      ST
                    </div>
                    <span className="text-white font-semibold text-sm sm:text-lg tracking-wide uppercase">STRIKERS</span>
                  </div>

                  <span className="text-slate-400 font-regular text-xs sm:text-sm">vs</span>

                  {/* Team 2 */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center font-semibold text-xs text-slate-900 shadow">
                      TI
                    </div>
                    <span className="text-white font-semibold text-sm sm:text-lg tracking-wide uppercase">TITANS</span>
                  </div>
                </div>

                <p className="text-[#FFFFFF]/80 text-xs sm:text-sm font-regular">
                  Strikers need 42 runs in 24 balls.
                </p>
              </div>

              {/* Watch Live Button */}
              <button
                onClick={() => alert("Redirecting to live stream...")}
                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF]/60 hover:bg-white text-slate-900 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
              >
                <FaPlay className="text-[10px] text-red-600 fill-red-600" /> Watch Live
              </button>
            </div>
          </motion.div>

          {/* Right Top Teams Leaderboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-xl border border-[#C3C5D7]/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E1ED] mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-[#191B23]">
                  Top Teams
                </h3>
              </div>

              <div className="space-y-3">
                {topTeams.map((team, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-2xl  transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-regular text-[#434654] w-4 text-center">
                        {team.rank}
                      </span>
                      <div className={`w-7 h-7 rounded-full font-semibold text-[10px] flex items-center justify-center shadow-xs ${team.badgeColor}`}>
                        {team.initials}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#191B23]">
                        {team.name}
                      </span>
                    </div>

                    <span className="text-xs font-black text-[#434654] bg-slate-200/60 px-2.5 py-1 rounded-lg">
                      {team.pts}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Explore Button Below the Container */}
        <div className="flex justify-end">
          <Link
            to="#explore-wpl"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4C5D8E] hover:text-amber-600 transition-colors group"
          >
            EXPLORE WPL <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WomensChampionship;
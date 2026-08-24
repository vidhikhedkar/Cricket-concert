import React from 'react';
import { FaUser, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RisingStars = () => {
  const topPerformers = [
    {
      rank: "1",
      name: "J. Smith",
      team: "Northern Knights",
      stat: "342",
      label: "Runs",
    },
    {
      rank: "2",
      name: "A. Patel",
      team: "Southern Spartans",
      stat: "14",
      label: "Wickets",
    },
  ];

  const risingStars = [
    {
      badge: "BREAKOUT",
      name: "M. Rahman",
      role: "Fast Bowler • EAS",
    },
    {
      badge: "DEBUT",
      name: "S. Singh",
      role: "Batter • WES",
    },
  ];

  return (
    <section className="py-16 bg-[#F3F3FE] text-[#191B23] overflow-hidden">
      <div className="container">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Top Performers */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] mb-6">
              Top Performers
            </h2>

            <div className="bg-white rounded-xl border border-[#C3C5D7]/30 p-6 shadow-sm space-y-4">
              {topPerformers.map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#DBE1FF] text-[#00389E] font-semibold flex items-center justify-center shrink-0">
                      {item.rank}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#191B23] text-base sm:text-lg">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#434654] font-regular">
                        {item.team}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-semibold text-[#00389E]">
                      {item.stat}
                    </div>
                    <span className="text-xs font-regular text-[#434654] tracking-wider">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* View All Stats Link */}
              <div className="pt-2 text-center">
                <Link to="/all-stats" className="text-xs sm:text-sm font-bold text-[#00389E] hover:underline">
                  View All Stats
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Rising Stars */}
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191B23]">
                Rising Stars
              </h2>
              <span className="text-xl text-orange-500">🔥</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {risingStars.map((star, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-[#C3C5D7]/30 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  {/* Top Placeholder Image Section */}
                  <div className="h-40 bg-[#E2E1ED] flex items-center justify-center border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gray-200/80 flex items-center justify-center text-[#434654]">
                      <FaUser className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Info Section */}
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[#792300] bg-[#792300]/10 text-[10px] font-bold tracking-wider uppercase mb-2">
                      {star.badge}
                    </span>
                    <h3 className="font-semibold text-[#191B23] text-base sm:text-lg mb-0.5">
                      {star.name}
                    </h3>
                    <p className="text-xs text-[#434654] font-medium">
                      {star.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RisingStars;
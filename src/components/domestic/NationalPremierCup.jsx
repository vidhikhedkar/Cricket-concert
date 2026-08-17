import React from 'react';
import NationalPremier1 from '../../assets/domestic/section2/NationalPremier1.jpg';
import NationalPremier2 from '../../assets/domestic/section2/NationalPremier2.jpg';

const NationalPremierCup = () => {
  const standings = [
    { team: "Northern Knights", p: 8, w: 6, l: 2, pts: 12, dotColor: "bg-[#4C5D8E]" },
    { team: "Southern Spartans", p: 8, w: 5, l: 3, pts: 10, dotColor: "bg-[#4C5D8E]" },
  { team: "Eastern Eagles", p: 8, w: 4, l: 4, pts: 8, dotColor: "bg-[#C4C7C8]" },
    { team: "Western Wolves", p: 8, w: 3, l: 5, pts: 6, dotColor: "bg-[#C4C7C8]" },
    { team: "Lion Cape", p: 8, w: 3, l: 5, pts: 6, dotColor: "bg-[#C4C7C8]" },
  ];

  return (
    <section className="py-16 bg-gray-50/50 text-[#1C1B1B] overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            National Premier Cup
          </h2>
          <p className="text-[#444748] text-sm sm:text-base max-w-5xl">
            The pinnacle of domestic cricket, featuring top-tier regional franchises battling for ultimate supremacy and a lucrative prize pool.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column (Live Match & Small Cards) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Live Match Card */}
            <div className="bg-white rounded-xl border border-[#C3C5D7]/30 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFDBCF] text-black text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#BA1A1A] animate-pulse"></span>
                  <span>Live Now</span>
                </span>
                <span className="text-xs font-bold text-[#434654] uppercase tracking-wider">
                  Match 14 • Central Stadium
                </span>
              </div>

              {/* Teams Scoreboard Preview */}
              <div className="flex items-center justify-between mb-6">
                {/* Team 1 */}
                <div className="flex flex-col items-center text-center space-y-2 w-1/3">
                  <div className="w-14 h-14 rounded-full border border-[#C3C5D7] flex items-center justify-center p-1 bg-gray-50 overflow-hidden shadow-sm">
                    <img src={NationalPremier1} alt="NOR" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <span className="font-semibold text-sm tracking-widest text-[#191B23]">NOR</span>
                  <div className="text-xl sm:text-2xl font-bold text-[#191B23]">
                    164/4
                  </div>
                  <span className="text-xs text-[#434654] font-regular">18.2 Overs</span>
                </div>

                {/* VS */}
                <div className="text-gray-300 font-black text-3xl  w-1/3 text-center">
                  VS
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center text-center space-y-2 w-1/3">
                  <div className="w-14 h-14 rounded-full border border-[#C3C5D7] flex items-center justify-center p-1 bg-gray-50 overflow-hidden shadow-sm">
                    <img src={NationalPremier2} alt="SOU" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <span className="font-semibold text-sm tracking-widest text-[#191B23]">SOU</span>
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">
                    Yet to bat
                  </div>
                </div>
              </div>

              {/* Footer info & Match Center */}
              <div className="pt-4 border-t border-[#C3C5D7]/30 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#434654] font-regular">NOR need 42 runs from 10 balls.</span>
                <a href="#match-center" className="text-[#00389E] font-semibold hover:underline flex items-center space-x-1">
                  <span>Match Center</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Bottom Row: Prize Pool & Defending Champ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F1EDEC] rounded-xl p-6 shadow-sm">
                <span className="block text-[10px] font-bold text-[#444748] tracking-wider mb-2">
                  Prize Pool
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#4C5D8E]">
                  $2.5M
                </span>
              </div>

              <div className="bg-[#F1EDEC] rounded-xl p-6 shadow-sm">
                <span className="block text-[10px] font-bold text-[#444748] tracking-wider mb-2">
                  Defending Champ
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#4C5D8E]">
                  Lions
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Current Standings Table) */}
          <div className="lg:col-span-7 bg-[#FFFFFF]/0.2 rounded-2xl border border-[#C4C7C8]/30 p-6 sm:p-10 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1B1B] tracking-tight">
                Current Standings
              </h3>
              <a href="#full-table" className="text-xs font-bold text-[#4C5D8E] hover:underline">
                Full Table
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[#444748] text-xs font-medium tracking-widest border-b border-[#C4C7C8]/10">
                    <th className="pb-4 font-medium">Team</th>
                    <th className="pb-4 text-center font-medium">P</th>
                    <th className="pb-4 text-center font-medium">W</th>
                    <th className="pb-4 text-center font-medium">L</th>
                    <th className="pb-4 text-right font-medium">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C4C7C8]/10 text-xs sm:text-sm font-semibold">
                  {standings.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 flex items-center space-x-3 text-[#1C1B1B]">
                        <span className={`w-2 h-2 rounded-full ${row.dotColor} shrink-0`}></span>
                        <span className="font-semibold">{row.team}</span>
                      </td>
                      <td className="py-4 text-center text-[#444748]">{row.p}</td>
                      <td className="py-4 text-center text-[#444748]">{row.w}</td>
                      <td className="py-4 text-center text-[#444748]">{row.l}</td>
                      <td className="py-4 text-right font-bold text-[#4C5D8E]">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NationalPremierCup;
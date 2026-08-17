import React from 'react';
import { FaFlag, FaChartBar, FaTrophy } from 'react-icons/fa';
import { BiTrendingUp } from 'react-icons/bi';
import { GiGloves, GiRun } from 'react-icons/gi';
import { MdSportsCricket } from 'react-icons/md';
import KSangakkara from '../../assets/cricket/section7/KSangakkara.jpg';
import MMuralitharan from '../../assets/cricket/section7/MMuralitharan.jpg';
import RPonting from '../../assets/cricket/section7/RPonting.jpg';
import stendulkar from '../../assets/cricket/section7/stendulkar.jpg';
import Wakram from '../../assets/cricket/section7/Wakram.jpg';

const Analytics = () => {
  const overviewStats = [
    { label: "TOTAL MATCHES", value: "4,286" },
    { label: "RUNS", value: "1.2M+" },
    { label: "WICKETS", value: "18k+" },
    { label: "TEAMS", value: "24" },
    { label: "PLAYERS", value: "850+" },
  ];

  const teamStats = [
    {
      title: "Highest Team Score",
      value: "498/4",
      subtext: "England vs Netherlands (2022)",
      icon: <FaFlag className="w-4 h-4 text-gray-400" />
    },
    {
      title: "Best Win %",
      value: "63.4%",
      subtext: "Australia (Min 100 Matches)",
      icon: <FaChartBar className="w-4 h-4 text-gray-400" />
    },
    {
      title: "Highest NRR",
      value: "+1.842",
      subtext: "India (2023 Season)",
      icon: <BiTrendingUp className="w-4 h-4 text-gray-400" />
    },
    {
      title: "Most Wins",
      value: "398",
      subtext: "Australia",
      icon: <FaTrophy className="w-4 h-4 text-gray-400" />
    },
  ];

  const battingStats = [
    { name: "S. Tendulkar", matches: 463, runs: "18,426", avg: 44.83, sr: 86.23, hundreds: 49, fifties: 96, sixes: 195, image: stendulkar },
    { name: "K. Sangakkara", matches: 404, runs: "14,234", avg: 41.98, sr: 78.86, hundreds: 25, fifties: 93, sixes: 88, image: KSangakkara },
    { name: "R. Ponting", matches: 375, runs: "13,704", avg: 42.03, sr: 80.39, hundreds: 30, fifties: 82, sixes: 162, image: RPonting },
  ];

  const bowlingStats = [
    { name: "M. Muralitharan", matches: 350, wickets: 534, bbi: "7/30", econ: 3.93, avg: 23.08, maidens: 198, image: MMuralitharan },
    { name: "W. Akram", matches: 356, wickets: 502, bbi: "5/15", econ: 3.89, avg: 23.52, maidens: 237, image: Wakram },
  ];

  const fieldingStats = [
    { title: "Most Catches", detail: "218 M. Jayawardene", icon: <MdSportsCricket className="w-5 h-5 text-gray-500" /> },
    { title: "Most Run Outs", detail: "34 J. Rhodes", icon: <GiRun className="w-5 h-5 text-gray-500" /> },
    { title: "Most Stumpings", detail: "123 MS Dhoni", icon: <GiGloves className="w-5 h-5 text-gray-500" /> },
  ];

  return (
    <section className="py-16 bg-[#F0F5FF] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191B23] tracking-tight mb-5">
            Analytics
          </h2>
          <p className="text-[#434654] text-sm sm:text-base max-w-3xl mx-auto">
            Explore the definitive data and records that define the pinnacle of international cricket.
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#191B23] tracking-wider mb-4">Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {overviewStats.map((item, index) => (
              <div key={index} className="bg-[#FFFFFF]/70 rounded-3xl border border-[#FFFFFF]/50 p-6 text-center shadow-sm">
                <span className="block text-[13px] font-regular text-[#434654] uppercase tracking-widest mb-2">
                  {item.label}
                </span>
                <span className="text-2xl sm:text-3xl font-semibold text-[#111010]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Statistics */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#191B23] tracking-wider mb-4">Team Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div key={index} className="bg-[#FFFFFF]/70 rounded-xl border border-[#FFFFFF]/50 p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-regular text-[#434654]">{stat.title}</span>
                  <div className="w-8 h-8 text-[#0A192F] flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#00389E] mb-1">{stat.value}</div>
                  <p className="text-md font-regular text-[#434654]">{stat.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Batting Statistics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#191B23] tracking-wider mb-4">Batting Statistics</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FFF2DC] text-[#434654] text-[14px] font-black uppercase tracking-widest">
                    <th className="py-4 px-6">Player</th>
                    <th className="py-4 px-6 text-right">Matches</th>
                    <th className="py-4 px-6 text-right text-[#00389E]">Runs</th>
                    <th className="py-4 px-6 text-right">Avg</th>
                    <th className="py-4 px-6 text-right">SR</th>
                    <th className="py-4 px-6 text-right">100s</th>
                    <th className="py-4 px-6 text-right">50s</th>
                    <th className="py-4 px-6 text-right">6s</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C3C5D7]/30 text-xs sm:text-sm font-semibold">
                  {battingStats.map((batter, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#191B23] flex items-center space-x-3">
                        <img src={batter.image} alt={batter.name} className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0 shadow-sm" />
                        <span>{batter.name}</span>
                      </td>
                      <td className="py-4 px-6 text-right text-[#191B23]">{batter.matches}</td>
                      <td className="py-4 px-6 text-right font-semibold text-[#00389E]">{batter.runs}</td>
                      <td className="py-4 px-6 text-right text-[#191B23]">{batter.avg}</td>
                      <td className="py-4 px-6 text-right text-[#191B23]">{batter.sr}</td>
                      <td className="py-4 px-6 text-right text-[#191B23]">{batter.hundreds}</td>
                      <td className="py-4 px-6 text-right text-[#191B23]">{batter.fifties}</td>
                      <td className="py-4 px-6 text-right text-[#191B23]">{batter.sixes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bowling Statistics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#191B23] tracking-wider mb-4">Bowling Statistics</h3>
          <div className="bg-white rounded-3xl border border-[#C3C5D7]/30 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FFF2DC] text-[#0A192F] text-[11px] font-black uppercase tracking-widest">
                    <th className="py-4 px-6">Player</th>
                    <th className="py-4 px-6 text-right">Matches</th>
                    <th className="py-4 px-6 text-right text-[#00389E]">Wickets</th>
                    <th className="py-4 px-6 text-right">BBI</th>
                    <th className="py-4 px-6 text-right">Econ</th>
                    <th className="py-4 px-6 text-right">Avg</th>
                    <th className="py-4 px-6 text-right">Maidens</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C3C5D7]/30 text-xs sm:text-sm font-semibold">
                  {bowlingStats.map((bowler, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#434654] flex items-center space-x-3">
                        <img src={bowler.image} alt={bowler.name} className="w-8 h-8 rounded-full object-cover border border-gray-200 shrink-0 shadow-sm" />
                        <span>{bowler.name}</span>
                      </td>
                      <td className="py-4 px-6 text-right text-[#434654]">{bowler.matches}</td>
                      <td className="py-4 px-6 text-right font-semibold text-[#00389E]">{bowler.wickets}</td>
                      <td className="py-4 px-6 text-right text-[#434654]">{bowler.bbi}</td>
                      <td className="py-4 px-6 text-right text-[#434654]">{bowler.econ}</td>
                      <td className="py-4 px-6 text-right text-[#434654]">{bowler.avg}</td>
                      <td className="py-4 px-6 text-right text-[#434654]">{bowler.maidens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fielding Excellence */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#0A192F] tracking-wider mb-6">Fielding Excellence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {fieldingStats.map((field, index) => (
              <div key={index} className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#E7E7F2] flex items-center justify-center text-[#0A192F] shrink-0">
                  {field.icon}
                </div>
                <div>
                  <span className="block text-xs font-regular text-[#434654] mb-1">{field.title}</span>
                  <span className="text-sm sm:text-base font-regular text-[#434654]">{field.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Analytics;
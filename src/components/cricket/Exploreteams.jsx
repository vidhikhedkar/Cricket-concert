import React, { useState } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import pandya from '../../assets/cricket/section6/HardikPandya.jpg';
import jasprit from '../../assets/cricket/section6/JaspritBumrah.jpg';
import rohit from '../../assets/cricket/section6/rohitsharma.jpg';
import team from '../../assets/cricket/section6/teamindia.jpg';
import virat from '../../assets/cricket/section6/viratkohli.jpg';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const Exploreteams = () => {
  const [activeCountry, setActiveCountry] = useState('India');
  const [roleFilter, setRoleFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const countries = [
    { name: 'India', Image: india },
    { name: 'Australia', Image: Australia },
    { name: 'England', Image: England },
    { name: 'South Africa', Image: SouthAfrica },
    { name: 'Pakistan', Image: Pakistan },
    { name: 'New Zealand', Image: NewZealand },
  ];

  const players = [
    {
      name: 'Rohit Sharma',
      role: 'Batter',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Off Break',
      matches: 472,
      runs: '18,820',
      wickets: 11,
      iccRank: '#12',
      image: rohit,
    },
    {
      name: 'Virat Kohli',
      role: 'Batter',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Right-arm Medium',
      matches: 522,
      runs: '26,733',
      wickets: 8,
      iccRank: '#1',
      image: virat,
    },
    {
      name: 'Jasprit Bumrah',
      role: 'Bowler',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Right-arm Fast',
      matches: 188,
      runs: '212',
      wickets: 382,
      iccRank: '#1',
      image: jasprit,
    },
    {
      name: 'Hardik Pandya',
      role: 'All-Rounder',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Right-arm Fast-medium',
      matches: 192,
      runs: '3,640',
      wickets: 176,
      iccRank: '#7',
      image: pandya,
    },
  ];

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || player.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#191B23] tracking-tight mb-2">
            Explore Teams & Players
          </h2>
          <p className="text-[#434654] text-sm sm:text-base">
            Deep-dive scouting and squad analysis across all major cricketing nations.
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() => setActiveCountry(country.name)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-regular tracking-wider transition-all whitespace-nowrap shadow-sm cursor-pointer ${activeCountry === country.name
                  ? 'bg-[#0A192F] text-white'
                  : 'bg-[#F9F9F9] text-gray-700 hover:border-gray-300'
                }`}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                {typeof country.Image === 'string' && country.Image.length <= 4 ? (
                  <span>{country.Image}</span>
                ) : (
                  <img src={country.Image} alt={country.name} className="w-full h-full object-cover" />
                )}
              </div>
              <span className="uppercase">{country.name}</span>
            </button>
          ))}
        </div>

        {/* Team Overview Card */}
        <div className="bg-white rounded-3xl border border-[#A9A9A9]/46 p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[#0A4DCE]/8">
          <div className="flex items-center space-x-5 w-full md:w-auto">
            <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-2xl overflow-hidden shadow-inner shrink-0">
              <img src={team} alt="Team India" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl sm:text-2xl font-regular text-[#191B23]">Team India</h3>
                <span className="bg-[#0A4DCE]/10 text-[#0A4DCE] text-[10px] font-semibold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  Rank #1
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#434654]">
                Win Rate: <span className="text-[#0A4DCE] font-semibold">72%</span> • Last 10: W-W-L-W-W
              </p>
            </div>
          </div>

          <div className="flex items-center justify-around md:justify-end space-x-8 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
            <div className="text-center md:text-right">
              <span className="block text-[10px] font-regular text-[#737686] uppercase tracking-widest mb-1">Captain</span>
              <span className="text-sm font-regular text-[#191B23]">Shrey's leyr</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-[10px] font-regular text-[#737686] uppercase tracking-widest mb-1">Coach</span>
              <span className="text-sm font-regular text-[#191B23]">Gautam Gambhir</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

          {/* Search Bar */}
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] w-4 h-4" />
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#C3C5D7] rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm text-[#0A192F] placeholder-[#6B7280] focus:outline-none focus:border-[#C3C5D7] shadow-sm"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full sm:w-auto appearance-none bg-white border border-[#C3C5D7] rounded-2xl py-3 pl-4 pr-10 text-xs sm:text-sm font-regular text-[#434654] focus:outline-none focus:border-[#C3C5D7] shadow-sm cursor-pointer"
              >
                <option value="All">Role: All</option>
                <option value="Batter">Batter</option>
                <option value="Bowler">Bowler</option>
                <option value="All-Rounder">All-Rounder</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative flex-1 sm:flex-none">
              <select
                className="w-full sm:w-auto appearance-none bg-white border border-[#C3C5D7] rounded-2xl py-3 pl-4 pr-10 text-xs sm:text-sm font-regular text-[#434654] focus:outline-none focus:border-[#C3C5D7] shadow-sm cursor-pointer"
              >
                <option value="ICC Rank">Sort By: ICC Rank</option>
                <option value="Runs">Runs</option>
                <option value="Wickets">Wickets</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Players Table Container */}
        <div className="bg-white rounded-lg border border-gray-200/80 shadow-sm overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

              {/* Table Header */}
              <thead>
                <tr className="bg-[#0A192F] text-white text-[11px] font-black uppercase tracking-widest">
                  <th className="py-4 px-6">Player</th>
                  <th className="py-4 px-6">Role</th>
                  <th className="py-4 px-6">Batting Style</th>
                  <th className="py-4 px-6">Bowling Style</th>
                  <th className="py-4 px-6 text-right">Matches</th>
                  <th className="py-4 px-6 text-right">Runs</th>
                  <th className="py-4 px-6 text-right">Wickets</th>
                  <th className="py-4 px-6 text-right">ICC Rank</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {filteredPlayers.length > 0 ? (
                  filteredPlayers.map((player, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#0A192F] flex items-center space-x-3">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-10 h-10 rounded-full object-cover border border-gray-200 shrink-0 shadow-sm"
                        />
                        <span className="whitespace-nowrap">{player.name}</span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-600">{player.role}</td>
                      <td className="py-4 px-6 font-semibold text-gray-600">{player.battingStyle}</td>
                      <td className="py-4 px-6 font-semibold text-gray-600">{player.bowlingStyle}</td>
                      <td className="py-4 px-6 text-right font-regular text-[#0A192F]">{player.matches}</td>
                      <td className="py-4 px-6 text-right font-regular text-[#0A192F]">{player.runs}</td>
                      <td className="py-4 px-6 text-right font-regular text-[#0A192F]">{player.wickets}</td>
                      <td className="py-4 px-6 text-right font-regular text-[#0A4DCE]">{player.iccRank}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-8 text-center text-gray-400 font-semibold">
                      No players found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>

        {/* View Full Squad Details Link */}
        <div className="text-center">
          <button className="text-xs sm:text-xs font-regular text-[#0A4DCE] hover:text-blue-800 uppercase tracking-widest transition-colors cursor-pointer">
            VIEW FULL SQUAD DETAILS
          </button>
        </div>

      </div>
    </section>
  );
};

export default Exploreteams;
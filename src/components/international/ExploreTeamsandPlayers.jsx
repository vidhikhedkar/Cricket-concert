import React, { useState } from 'react';
import HardikPandya from '../../assets/international/section3/HardikPandya.jpg';
import JaspritBumrah from '../../assets/international/section3/JaspritBumrah.jpg';
import rohitsharma from '../../assets/international/section3/rohitsharma.jpg';
import viratkohli from '../../assets/international/section3/viratkohli.jpg';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const ExploreTeamsandPlayers = () => {
  const [activeTab, setActiveTab] = useState('INDIA');
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [sortBy, setSortBy] = useState('ICC Rank');

  const teams = [
    { name: 'INDIA', flag: india, code: 'IND', rank: 'RANK #1', winRate: '72%', last10: 'W-W-L-W-W', captain: "Shrey's leyr", coach: 'Gautam Gambhir' },
    { name: 'AUSTRALIA', flag: Australia, code: 'AUS', rank: 'RANK #2', winRate: '68%', last10: 'W-L-W-W-L', captain: 'P. Cummins', coach: 'Andrew McDonald' },
    { name: 'ENGLAND', flag: England, code: 'ENG', rank: 'RANK #3', winRate: '65%', last10: 'L-W-W-W-L', captain: 'J. Buttler', coach: 'Brendon McCullum' },
    { name: 'SOUTH AFRICA', flag: SouthAfrica, code: 'SA', rank: 'RANK #4', winRate: '62%', last10: 'W-W-L-L-W', captain: 'T. Bavuma', coach: 'Rob Walter' },
    { name: 'PAKISTAN', flag: Pakistan, code: 'PAK', rank: 'RANK #5', winRate: '58%', last10: 'L-L-W-W-W', captain: 'B. Azam', coach: 'Jason Gillespie' },
    { name: 'NEW ZEALAND', flag: NewZealand, code: 'NZ', rank: 'RANK #6', winRate: '55%', last10: 'W-L-L-W-L', captain: 'K. Williamson', coach: 'Gary Stead' },
  ];

  const currentTeam = teams.find((t) => t.name === activeTab) || teams[0];

  const playersData = [
    {
      name: 'Rohit Sharma',
      role: 'Batter',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Off Break',
      matches: 472,
      runs: '18,820',
      wickets: 11,
      iccRank: 12,
      image: rohitsharma,
    },
    {
      name: 'Virat Kohli',
      role: 'Batter',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Right-arm Medium',
      matches: 522,
      runs: '26,733',
      wickets: 8,
      iccRank: 1,
      image: viratkohli,
    },
    {
      name: 'Jasprit Bumrah',
      role: 'Bowler',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Right-arm Fast',
      matches: 188,
      runs: '212',
      wickets: 382,
      iccRank: 1,
      image: JaspritBumrah,
    },
    {
      name: 'Hardik Pandya',
      role: 'All-Rounder',
      battingStyle: 'Right Hand',
      bowlingStyle: 'Right-arm Fast-medium',
      matches: 192,
      runs: '3,640',
      wickets: 176,
      iccRank: 7,
      image: HardikPandya,
    },
  ];

  // Filtering logic
  const filteredPlayers = playersData.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || player.role === roleFilter;
    return matchesSearch && matchesRole;
  }).sort((a, b) => {
    if (sortBy === 'ICC Rank') return a.iccRank - b.iccRank;
    if (sortBy === 'Matches') return b.matches - a.matches;
    if (sortBy === 'Runs') return parseInt(b.runs.replace(/,/g, '')) - parseInt(a.runs.replace(/,/g, ''));
    return 0;
  });

  return (
    <section className="w-full bg-[#F5F8FF] py-14 font-sans mb-10">
      <div className="container">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191B23] tracking-tight">
            Explore Teams & Players
          </h2>
          <p className="text-[#434654] text-sm sm:text-base mt-1">
            Deep-dive scouting and squad analysis across all major cricketing nations.
          </p>
        </div>

        {/* Nations Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {teams.map((team) => {
            const isActive = activeTab === team.name;
            return (
              <button
                key={team.name}
                onClick={() => setActiveTab(team.name)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-lg font-regular text-sm transition-all duration-200 whitespace-nowrap shadow-sm border cursor-pointer ${
                  isActive
                    ? 'bg-[#0A192F] text-white border-[#0b1329]'
                    : 'bg-[#F9F9F9] text-[#434654] border-slate-200 hover:bg-slate-50'
                }`}
              >
                <img src={team.flag} alt={team.name} className="w-5 h-5 rounded-full object-cover" />
                <span>{team.name}</span>
              </button>
            );
          })}
        </div>

        {/* Team Overview Card */}
        <div className="bg-white rounded-3xl border border-[#A9A9A9]/46 p-6 sm:p-8 mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-12 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center shadow-inner bg-slate-50">
              <img src={currentTeam.flag} alt={currentTeam.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h3 className="text-xl sm:text-2xl font-regular text-[#191B23]">Team {currentTeam.name}</h3>
                <span className="bg-[#0A4DCE]/10 text-[#0A4DCE] text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100">
                  {currentTeam.rank}
                </span>
              </div>
              <p className="text-sm text-[#434654] mt-1">
                Win Rate: <span className="font-semibold text-[#0A4DCE]">{currentTeam.winRate}</span> • Last 10: <span className="font-semibold text-[#434654]">{currentTeam.last10}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-8 pt-4 md:pt-0 md:pl-8 w-full md:w-auto justify-between md:justify-start">
            <div>
              <p className="text-[11px] font-regular uppercase tracking-wider text-[#737686]">Captain</p>
              <p className="text-sm font-regular text-[#191B23] mt-0.5">{currentTeam.captain}</p>
            </div>
            <div>
              <p className="text-[11px] font-regular uppercase tracking-wider text-[#737686]">Coach</p>
              <p className="text-sm font-regular text-[#191B23] mt-0.5">{currentTeam.coach}</p>
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative w-full sm:w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#C3C5D7] rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm transition-colors"
            />
          </div>

          {/* Role and Sort Dropdowns */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="bg-white border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-sm font-medium text-[#434654] focus:outline-none focus:border-blue-500 shadow-sm cursor-pointer"
            >
              <option value="All">Role: All</option>
              <option value="Batter">Batter</option>
              <option value="Bowler">Bowler</option>
              <option value="All-Rounder">All-Rounder</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-sm font-medium text-[#434654] focus:outline-none focus:border-blue-500 shadow-sm cursor-pointer"
            >
              <option value="ICC Rank">Sort By: ICC Rank</option>
              <option value="Matches">Sort By: Matches</option>
              <option value="Runs">Sort By: Runs</option>
            </select>
          </div>
        </div>

        {/* Players Table / Card List */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden text-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-187.5">
              <thead>
                <tr className="border-b border-[#C3C5D7]/10 text-[11px] font-bold uppercase tracking-wider text-white bg-[#0A192F]">
                  <th className="py-4 px-6">Player</th>
                  <th className="py-4 px-4">Role</th>
                  <th className="py-4 px-4">Batting Style</th>
                  <th className="py-4 px-4">Bowling Style</th>
                  <th className="py-4 px-4 text-right">Matches</th>
                  <th className="py-4 px-4 text-right">Runs</th>
                  <th className="py-4 px-4 text-right">Wickets</th>
                  <th className="py-4 px-6 text-right">ICC Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C3C5D7]/10  text-sm">
                {filteredPlayers.length > 0 ? (
                  filteredPlayers.map((player, index) => (
                    <tr key={index} className=" transition-colors">
                      <td className="py-4 px-6 flex items-center space-x-3">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-10 h-10 rounded-full object-cover shadow-sm"
                        />
                        <span className="font-semibold text-[#191B23]">{player.name}</span>
                      </td>
                      <td className="py-4 px-4 text-[#191B23]">{player.role}</td>
                      <td className="py-4 px-4 text-[#191B23]">{player.battingStyle}</td>
                      <td className="py-4 px-4 text-[#191B23]">{player.bowlingStyle}</td>
                      <td className="py-4 px-4 text-right text-[#191B23] font-medium">{player.matches}</td>
                      <td className="py-4 px-4 text-right text-[#191B23] font-medium">{player.runs}</td>
                      <td className="py-4 px-4 text-right text-[#191B23] font-medium">{player.wickets}</td>
                      <td className="py-4 px-6 text-right font-regular text-[#0A4DCE]">#{player.iccRank}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-8 text-center text-slate-400">
                      No players found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* View Full Squad Link */}
          <div className="py-5 text-center border-t border-[#C3C5D7]/10 bg-white">
            <button className="text-xs font-bold uppercase tracking-wider text-[#0A4DCE] hover:text-blue-300 transition-colors cursor-pointer">
              View Full Squad Details
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreTeamsandPlayers;
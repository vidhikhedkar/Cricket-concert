import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const LiveMatchCenter = () => {
  const [activeTab, setActiveTab] = useState('Live');

  return (
    <section className="py-16 overflow-hidden">
      <div className="container">

        {/* Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight uppercase mb-1">
              Live Match Center
            </h2>
            <p className="text-[#434654] text-sm sm:text-base">
              Real-time updates from across the globe.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="bg-white p-1 rounded-2xl border border-[#D7D7D7] shadow-sm flex items-center space-x-1 self-start sm:self-auto ">
            {['Live', 'Upcoming', 'Recent'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs cursor-pointer sm:text-sm font-bold transition-all ${activeTab === tab
                  ? 'bg-[#0A192F] text-white shadow-sm'
                  : 'text-[#434654] hover:text-[#0A192F]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-4 items-start">

          {/* Left Large Live Card */}
          <div className="lg:col-span-8 bg-[#ECF3FF] rounded-3xl border border-[#C3C5D7]/40 p-6 sm:p-12 shadow-sm">

            {/* Top Tag & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-8">
              {/* Match Type */}
              <span className="w-fit max-w-full bg-[#EDEDF8] text-[#434654] border border-[#C3C5D7]/20 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider leading-tight">
                ICC World Test Championship - Final
              </span>

              {/* Live Status */}
              <span className="w-fit shrink-0 inline-flex items-center gap-1.5 bg-[#BA1A1A]/10 text-[#BA1A1A] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-[#BA1A1A]/20">
                <GoDotFill className="w-3 h-3 text-[#BA1A1A] animate-pulse shrink-0" />
                <span>Live</span>
              </span>
            </div>

            {/* Teams & Score Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-6">

              {/* Team 1: IND */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-20 h-20 rounded-full border border-[#C3C5D7]/20 shadow-sm flex items-center justify-center font-regular text-[#0A4DCE] text-xl mb-3 bg-gray-50">
                  IND
                </div>
                <div className="text-3xl sm:text-4xl font-regular text-[#191B23] tracking-tight">
                  345<span className="text-xl sm:text-2xl text-[#737686] font-regular">/6</span>
                </div>
                <p className="text-xs text-[#434654] font-regular mt-1">Overs: 82.4</p>
              </div>

              {/* Center Info: VS & Day/Session */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="text-xs font-regular text-[#737686] tracking-widest">VS</span>
                <span className="bg-[#0A4DCE]/5 text-[#0A4DCE] border border-[#0A4DCE]/10 text-xs font-bold px-4 py-1.5 rounded-full shadow-inner">
                  Day 2 - Session 3
                </span>
              </div>

              {/* Team 2: AUS */}
              <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                <div className="w-20 h-20 rounded-full border border-[#C3C5D7]/20 shadow-sm flex items-center justify-center font-regular text-[#191B23] text-xl mb-3 bg-gray-50">
                  AUS
                </div>
                <div className="text-md font-regular text-[#737686] mt-1">
                  Yet to bat
                </div>
              </div>

            </div>

            {/* Win Probability Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold text-gray-600 mb-4">
                <span className="text-[#0A4DCE]">IND WIN PROB: 64%</span>
                <span className='text-[#434654]'>DRAW: 12%</span>
                <span className="text-[#191B23]">AUS WIN PROB: 24%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="bg-[#0A4DCE] h-full rounded-l-full" style={{ width: '54%' }}></div>
                <div className="bg-[#C3C5D7]/40 h-full" style={{ width: '12%' }}></div>
                <div className="bg-[#191B23] h-full rounded-r-full" style={{ width: '24%' }}></div>
                <div className="bg-[#C3C5D7]/20 h-full" style={{ width: '12%' }}></div>
              </div>
            </div>

            {/* Bottom Stats Grid */}
            <div className="bg-[#FFFFFF]/60 p-5 rounded-2xl border border-[#C3C5D7]/30 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div>
                <span className="block text-[10px] text-[#434654] uppercase tracking-widest mb-1">Current Run Rate</span>
                <span className="text-lg text-[#191B23]">4.18</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#434654] uppercase tracking-widest mb-1">Last 10 Overs</span>
                <span className="text-lg text-[#191B23]">42/1</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#434654] uppercase tracking-widest mb-1">Partnership</span>
                <span className="text-lg text-[#191B23]">85 (124)</span>
              </div>
            </div>

          </div>

          {/* Right Smaller Matches Column */}
          <div className="lg:col-span-4 space-y-4">

            {/* Match Card 1 */}
            <div className="bg-white rounded-3xl border border-[#C3C5D7]/20 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-regular text-[#434654] tracking-wider uppercase">T20 Blast</span>
                <span className="flex items-center space-x-1 text-[#BA1A1A] text-xs">
                  <GoDotFill className="w-2.5 h-2.5 text-[#BA1A1A] animate-pulse" />
                  <span>LIVE</span>
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-[#EDEDF8] text-[#0A4DCE] flex items-center justify-center text-[10px] font-bold">SUR</span>
                    <span className="font-semibold text-#191B23] text-sm">182/4</span>
                  </div>
                  <span className="text-xs text-[#737686] font-regular">19.2 ov</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-[#EDEDF8] text-[#191B23] flex items-center justify-center text-[10px] font-bold">MID</span>
                    <span className="font-semibold text-[#191B23] text-sm">-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Card 2 */}
            <div className="bg-white rounded-3xl border border-[#C3C5D7]/20 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-regular text-[#434654] tracking-wider uppercase">Women's Super League</span>
                <span className="flex items-center space-x-1 text-[#BA1A1A] text-xs font-bold">
                  <GoDotFill className="w-2.5 h-2.5 text-[#BA1A1A] animate-pulse" />
                  <span>LIVE</span>
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-[#EDEDF8] text-[#191B23] flex items-center justify-center text-[10px] font-bold">ST</span>
                    <span className="font-medium text-[#191B23] text-sm">145/8</span>
                  </div>
                  <span className="text-xs text-[#737686] font-regular">20 ov</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-full bg-[#0A4DCE]/10 text-[#0A4DCE] flex items-center justify-center text-[10px] font-bold">BH</span>
                    <span className="font-medium text-[#0A4DCE] text-sm">62/1</span>
                  </div>
                  <span className="text-xs text-[#737686] font-regular">7.4 ov</span>
                </div>
              </div>
            </div>

            {/* Match Card 3 (Upcoming) */}
            <div className="bg-[#FAF8FF] rounded-3xl border border-[#C3C5D7]/20 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-regular text-[#434654] tracking-wider uppercase">U19 World Cup</span>
                <span className="text-[#0A4DCE] text-xs font-bold uppercase tracking-wider">Upcoming</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#191B23] flex items-center justify-center text-[10px] font-regular">SA</span>
                  <span className="font-medium text-[#191B23] text-xs">SA U19</span>
                </div>
                <span className="text-xs font-regular text-[#737686]">VS</span>
                <div className="flex items-center space-x-2">
                  <span className="font-regular text-[#191B23] text-xs">ENG U19</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#191B23] flex items-center justify-center text-[10px] font-bold">ENG</span>
                </div>
              </div>
              <div className="text-center pt-2 ">
                <span className="inline-block bg-[#0A4DCE]/5 text-[#0A4DCE] border border-[#0A4DCE]/10 text-xs font-regular px-3 py-2 rounded-full">
                  Starts in 2h 45m
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LiveMatchCenter;
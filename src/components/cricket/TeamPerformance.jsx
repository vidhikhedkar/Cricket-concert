import React, { useState } from 'react';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const TeamPerformance = () => {
  const [activeTab, setActiveTab] = useState('International');

  const categoryData = {
    International: [
      {
        name: "India",
        rank: "Rank #1 (Test)",
        form: ["W", "W", "L", "W", "W"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "83%",
        winRateWidth: "83%",
        highestTotal: "412/4",
        avgScore: "8.42",
        image: india, // Fixed property name and passed variable
      },
      {
        name: "Australia",
        rank: "Rank #1 (ODI)",
        form: ["W", "L", "W", "W", "L"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "75%",
        winRateWidth: "75%",
        highestTotal: "388/6",
        avgScore: "7.95",
        image: Australia, // Passed imported asset
      },
      {
        name: "England",
        rank: "Rank #3 (Test)",
        form: ["L", "W", "W", "L", "W"],
        formColor: "bg-[#FEF9C3] text-[#A16207]",
        winRate: "63%",
        winRateWidth: "63%",
        highestTotal: "395/7",
        avgScore: "8.15",
        image: England, // Passed imported asset
      }
    ],
    Domestic: [
      {
        name: "Mumbai",
        rank: "Ranji Elite Champion",
        form: ["W", "W", "W", "D", "W"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "80%",
        winRateWidth: "80%",
        highestTotal: "550/5",
        avgScore: "4.12",
        image: null, // Fallback if no image imported yet
        fallbackText: "MUM",
      },
      {
        name: "Karnataka",
        rank: "Ranji Elite Semifinalist",
        form: ["W", "L", "W", "D", "W"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "70%",
        winRateWidth: "70%",
        highestTotal: "480/7",
        avgScore: "3.85",
        image: null,
        fallbackText: "KAR",
      },
      {
        name: "Surrey",
        rank: "County Div 1 Winner",
        form: ["W", "W", "L", "W", "D"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "72%",
        winRateWidth: "72%",
        highestTotal: "512/6",
        avgScore: "4.30",
        image: null,
        fallbackText: "SUR",
      }
    ],
    "Women's": [
      {
        name: "Australia Women",
        rank: "Rank #1 (T20I)",
        form: ["W", "W", "W", "W", "L"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "88%",
        winRateWidth: "88%",
        highestTotal: "215/3",
        avgScore: "8.90",
        image: Australia,
      },
      {
        name: "India Women",
        rank: "Rank #3 (ODI)",
        form: ["W", "L", "W", "W", "W"],
        formColor: "bg-[#DCFCE7] text-[#15803D]",
        winRate: "74%",
        winRateWidth: "74%",
        highestTotal: "208/4",
        avgScore: "8.10",
        image: india,
      },
      {
        name: "England Women",
        rank: "Rank #2 (T20I)",
        form: ["L", "W", "W", "L", "W"],
        formColor: "bg-[#FEF9C3] text-[#A16207]",
        winRate: "68%",
        winRateWidth: "68%",
        highestTotal: "198/5",
        avgScore: "8.35",
        image: England,
      }
    ]
  };

  const currentTeams = categoryData[activeTab];

  return (
    <section className="py-16 bg-white w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">

        {/* Header & Tabs Container */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-12 gap-6 w-full">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191B23] tracking-tight mb-2">
              Team Performance
            </h2>
            <p className="text-[#434654] text-xs sm:text-sm lg:text-base">
              Visual insights across top nations and domestic leagues.
            </p>
          </div>

          {/* Category Tabs Wrapper */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center space-x-4 border-b border-[#C3C5D7]/30 min-w-max">
              {['International', 'Domestic', "Women's"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs sm:text-sm cursor-pointer font-normal pb-2 relative whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'text-[#111010] font-semibold'
                      : 'text-[#434654] hover:text-gray-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.75 bg-[#0A192F] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {currentTeams.map((team, index) => (
            <div
              key={index}
              className="bg-[#FAF8FF] rounded-3xl border border-[#C3C5D7]/20 p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full box-border overflow-hidden"
            >
              <div className="w-full">

                {/* Top Row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-6 w-full">

                  {/* Badge & Team Name Info */}
                  <div className="flex items-center space-x-3 flex-1 min-w-40">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center font-black text-xs sm:text-sm shadow-inner border border-gray-200">
                      {team.image ? (
                        <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{team.fallbackText}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-normal text-[#191B23] truncate leading-snug">{team.name}</h3>
                      <p className="text-[11px] sm:text-xs font-medium text-[#0A4DCE] truncate leading-tight mt-0.5">{team.rank}</p>
                    </div>
                  </div>

                  {/* Form Tag */}
                  <div className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider whitespace-nowrap ${team.formColor}`}>
                    Form: {team.form.join(' ')}
                  </div>
                </div>

                {/* Win Rate Bar Section */}
                <div className="mb-6 sm:mb-8 w-full">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-[#434654] uppercase tracking-wider text-[10px] sm:text-xs">Win Rate</span>
                    <span className="text-[#191B23]">{team.winRate}</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#C3C5D7]/20 rounded-full overflow-hidden">
                    <div
                      className="bg-[#111010] h-full rounded-full transition-all duration-500"
                      style={{ width: team.winRateWidth }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/60 w-full">
                <div className="min-w-0">
                  <span className="block text-[9px] sm:text-[10px] font-normal text-[#434654] uppercase tracking-widest mb-1 truncate">Highest Total</span>
                  <span className="text-sm sm:text-base font-normal text-[#191B23] truncate block">{team.highestTotal}</span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] sm:text-[10px] font-normal text-[#434654] uppercase tracking-widest mb-1 truncate">Avg Score/Over</span>
                  <span className="text-sm sm:text-base font-normal text-[#191B23] truncate block">{team.avgScore}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamPerformance;
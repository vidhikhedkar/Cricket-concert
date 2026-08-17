import React, { useState } from 'react';

const WorldRankings = () => {
  const [activeTab, setActiveTab] = useState('Teams');

  const testRankings = [
    { rank: "01", team: "Australia", points: "124 Pts" },
    { rank: "02", team: "India", points: "120 Pts" },
    { rank: "03", team: "England", points: "115 Pts" },
    { rank: "04", team: "South Africa", points: "103 Pts" },
    { rank: "05", team: "New Zealand", points: "96 Pts" },
  ];

  const odiRankings = [
    { rank: "01", team: "India", points: "121 Pts" },
    { rank: "02", team: "Australia", points: "118 Pts" },
    { rank: "03", team: "Pakistan", points: "114 Pts" },
    { rank: "04", team: "South Africa", points: "110 Pts" },
    { rank: "05", team: "England", points: "105 Pts" },
  ];

  return (
    <section className="py-16 bg-[#F3F3FE] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#151C27] tracking-tight">
            World Rankings
          </h2>

          {/* Category Tabs */}
          <div className="bg-white p-1 rounded-xl shadow-sm flex items-center space-x-1 self-start sm:self-auto">
            {['Teams', 'Batters', 'Bowlers', 'All Rounders'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === tab
                  ? 'bg-[#0A192F] text-white shadow-sm'
                  : 'text-[#151C27] hover:text-[#0A192F]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Test Ranking Table */}
          <div className="bg-white border border-[#C5C6CF] shadow-sm overflow-hidden">
            <div className="bg-[#0A192F] text-white px-6 py-5 flex items-center justify-between">
              <span className="text-xs font-black tracking-widest uppercase">TEST RANKING</span>
              <span className="text-xs font-medium text-white">Updated Dec 2024</span>
            </div>
            <div className="divide-y divide-[#EAEAEA]">
              {testRankings.map((item, index) => (
                <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm italic font-semibold text-[#151C27] w-6">{item.rank}</span>
                    <span className="text-sm sm:text-base font-semibold text-[#151C27]">{item.team}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#151C27]">{item.points}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ODI Ranking Table */}
          <div className="bg-white border border-[#C5C6CF] shadow-sm overflow-hidden">
            <div className="bg-[#0A192F] text-white px-6 py-5 flex items-center justify-between">
              <span className="text-xs font-black tracking-widest uppercase">ODI RANKING</span>
              <span className="text-xs font-medium text-white">Updated Dec 2024</span>
            </div>
            <div className="divide-y divide-gray-100">
              {odiRankings.map((item, index) => (
                <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center space-x-6">
                    <span className="text-sm italic font-semibold text-[#151C27] w-6">{item.rank}</span>
                    <span className="text-sm sm:text-base font-semibold text-[#151C27]">{item.team}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#151C27]">{item.points}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorldRankings;
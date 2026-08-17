import React from 'react';
import CoastalGround from '../../assets/international/section8/Coastal-Ground.jpg';

const RecentChampions = () => {
  const champions = [
    {
      tournament: '2023 World Shield',
      team: 'Australia',
    },
    {
      tournament: '2022 T30 Cup',
      team: 'England',
    },
    {
      tournament: '2021 Global Test Series',
      team: 'India',
    },
  ];

  const records = [
    {
      title: 'Most Runs',
      player: 'S. Tendulkar (IND)',
      value: '18,426',
      icon: (
        <svg className="w-5 h-5 text-[#00389E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
    },
    {
      title: 'Most Wickets',
      player: 'M. Muralitharan (SL)',
      value: '800',
      icon: (
        <svg className="w-5 h-5 text-[#00389E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
        </svg>
      ),
    },
    {
      title: 'Highest Score',
      player: 'B. Lara (WI)',
      value: '400*',
      icon: (
        <svg className="w-5 h-5 text-[#00389E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      ),
    },
    {
      title: 'Most Titles',
      player: 'Australia',
      value: '6 Trophies',
      icon: (
        <svg className="w-5 h-5 text-[#00389E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8m-4-4v4m4-10a4 4 0 11-8 0 4 4 0 018 0zM5 8h2a2 2 0 012 2v1a5 5 0 0010 0v-1a2 2 0 012-2h2a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 font-sans">
      <div className="container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Recent Champions Column */}
          <div>
            <h2 className="text-3xl font-bold text-[#191B23] tracking-tight mb-6">
              Recent Champions
            </h2>
            <div className="bg-[#FAF8FF] rounded-2xl border border-[#C3C5D7]/50 shadow-sm
             divide-y divide-[#C3C5D7]/20 overflow-hidden">
              {champions.map((item, index) => (
                <div key={index} className="p-7 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                  <div>
                    <p className="text-xs font-regular text-[#434654] uppercase tracking-wider mb-1">
                      {item.tournament}
                    </p>
                    <h3 className="text-lg font-semibold text-[#00389E] cursor-pointer hover:underline">
                      {item.team}
                    </h3>
                  </div>
                  <div className="w-10 h-10  flex items-center justify-center text-[#737686]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8m-4-4v4m4-10a4 4 0 11-8 0 4 4 0 018 0zM5 8h2a2 2 0 012 2v1a5 5 0 0010 0v-1a2 2 0 012-2h2a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Records Column */}
          <div>
            <h2 className="text-3xl font-bold text-[#191B23] tracking-tight mb-6">
              Global Records
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {records.map((rec, index) => (
                <div key={index} className="bg-[#F3F3FE] rounded-xl border border-[#C3C5D7]/30 p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-start justify-between mb-4">

                    <div className="w-9 h-9 rounded-xl  flex items-center justify-center">
                      {rec.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#191B23] uppercase tracking-wider">
                      {rec.title}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#434654]">{rec.player}</p>
                    <p className="text-xl font-semibold text-[#00389E] mt-0.5">{rec.value}</p>
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

export default RecentChampions;
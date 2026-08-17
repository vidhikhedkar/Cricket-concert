import React from 'react';
import { FaAward, FaBolt, FaCalendarAlt } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';

const HallOfRecords = () => {
  const records = [
    {
      title: "MOST RUNS (INTL)",
      value: "34,357",
      detail: "S. Tendulkar (IND)",
      icon: <FaAward className="w-6 h-6 text-gray-300" />
    },
    {
      title: "MOST WICKETS (INTL)",
      value: "1,347",
      detail: "M. Muralitharan (SL)",
      icon: <MdSportsCricket className="w-6 h-6 text-gray-300" />
    },
    {
      title: "FASTEST CENTURY (ODI)",
      value: "31 Balls",
      detail: "AB de Villiers (RSA)",
      icon: <FaBolt className="w-6 h-6 text-gray-300" />
    },
    {
      title: "HIGHEST SCORE (TEST)",
      value: "400*",
      detail: "B. Lara (WI)",
      icon: <FaCalendarAlt className="w-6 h-6 text-gray-300" />
    },
  ];

  const growthMetrics = [
    { label: "VIEWERSHIP GROWTH", value: "+24%", width: "60%" },
    { label: "COMMERCIAL INVESTMENT", value: "+40%", width: "75%" },
    { label: "DIGITAL ENGAGEMENT", value: "+150%", width: "95%" },
  ];

  const trivia = [
    {
      number: "01",
      title: "The Longest Match",
      description: "The 1939 Test match between England and South Africa lasted 12 days and ended in a draw because the ship home was leaving."
    },
    {
      number: "02",
      title: "Olympic Future",
      description: "Cricket is set to return to the Olympics in LA 2028 after a 128-year absence."
    },
    {
      number: "03",
      title: "First World Cup",
      description: "The first-ever Cricket World Cup was actually the Women's tournament in 1973, two years before the men's."
    },
  ];

  return (
    <section className="py-16 bg-[#0A192F] text-white overflow-hidden">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.25em]  uppercase mb-2 block">
            THE ARCHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 text-white">
            Hall of Records
          </h2>
          <p className="text-[#FFFFFF]/50 text-sm sm:text-base max-w-xl mx-auto">
            The milestones that shaped the history of the sport, immortalized forever in data.
          </p>
        </div>

        {/* Top 4 Record Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {records.map((record, index) => (
            <div 
              key={index} 
              className="bg-[#FFFFFF]/8 rounded-xl border border-[#FFFFFF]/37 p-6 shadow-sm hover:border-gray-700 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-regular text-[#C3C5D7] tracking-wider uppercase">
                  {record.title}
                </span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {record.icon}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-regular text-white mb-1">
                  {record.value}
                </div>
                <p className="text-sm font-regular text-gray-400">
                  {record.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Columns: Global Growth Index & Did You Know? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Global Growth Index */}
          <div className="lg:col-span-6 bg-[#FFFFFF]/5 border-t-4 border-2 border-[#FFFFFF] p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white
            mb-8">
              GLOBAL GROWTH INDEX
            </h3>

            <div className="space-y-6 mb-8">
              {growthMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-regular">
                    <span className="text-[#E0E3E5] tracking-wider mb-2">{metric.label}</span>
                    <span className="text-white">{metric.value}</span>
                  </div>
                  <div className="w-full h-1 bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full" 
                      style={{ width: metric.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="bg-[#101415] border border-[#FFFFFF]/5 p-6">
              <p className="text-xs sm:text-sm text-[#C6C6CD] italic leading-relaxed">
                "Cricket is no longer just a sport; it's a global digital ecosystem projected to reach 3 Billion fans by 2030."
              </p>
            </div>
          </div>

          {/* Right Column: Did You Know? */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Did You Know?
            </h3>

            <div className="space-y-8">
              {trivia.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <span className="text-2xl sm:text-3xl font-black text-gray-500 font-mono">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-regular text-[#C6C6CD] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C6C6CD] leading-relaxed font-medium">
                      {item.description}
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

export default HallOfRecords;
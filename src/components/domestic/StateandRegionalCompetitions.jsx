import React from 'react';
import { MdShield, MdOutlineTimer, MdStars, MdOutlineShield } from 'react-icons/md';
import { Link } from 'react-router-dom';

const StateandRegionalCompetitions = () => {
  const competitions = [
    {
      title: "First-Class Shield",
      format: "4-Day Multi-Innings",
      months: "Oct - Mar",
      icon: <MdOutlineShield className="w-6 h-6 text-[#434654]" />,
    },
    {
      title: "One-Day Cup",
      format: "50-Over Format",
      months: "Sep - Nov",
      icon: <MdOutlineTimer className="w-6 h-6 text-[#434654]" />,
    },
    {
      title: "Women's T20 Challenge",
      format: "Elite Women's T20",
      months: "Dec - Feb",
      icon: <MdStars className="w-6 h-6 text-[#434654]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#F3F3FE] text-[#191B23] overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191B23]">
            State & Regional Competitions
          </h2>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FFFFFF] rounded-2xl  p-6 sm:p-8 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon and Title/Format */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#E2E1ED] flex items-center justify-center shrink-0  text-[#434654]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#191B23] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#434654] font-regular">
                      {item.format}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Months and View Link */}
              <div className="pt-4  flex items-center justify-between text-xs sm:text-sm">
                <span className="font-regular text-[#434654] tracking-wider">
                  {item.months}
                </span>

                <Link
                 to="/view" className="text-[#00389E] font-regular hover:underline flex items-center space-x-1">
                  <span>View</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StateandRegionalCompetitions;
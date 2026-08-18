import React from 'react';

const tournaments = [
  {
    month: 'MAR',
    day: '15',
    title: "Women's Premier League Final",
    location: 'Mumbai, India',
  },
  {
    month: 'MAY',
    day: '02',
    title: 'Ashes Series',
    location: 'London, UK',
  },
  {
    month: 'SEP',
    day: '20',
    title: 'ICC T20 World Cup',
    location: 'Dhaka, Bangladesh',
  },
];

const UpcomingTournaments = () => {
  return (
    <div className="container py-14 font-sans text-[#1C1B1B]">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C1B1B] tracking-tight mb-6">
        UPCOMING TOURNAMENTS
      </h2>

      <div className="bg-white border border-[#C4C7C8]/80 rounded-xl shadow-sm divide-y divide-[#C4C7C8]/30 overflow-hidden">
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 md:p-6 gap-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center bg-[#4C5D8E]/10 text-[#4C5D8E] rounded-xl w-14 h-14 shrink-0 font-semibold shadow-inner">
                <span className="text-[12px] tracking-wider uppercase">
                  {tournament.month}
                </span>
                <span className="text-lg leading-tight">
                  {tournament.day}
                </span>
              </div>

              {/* Tournament Info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1C1B1B]">
                  {tournament.title}
                </h3>
                <p className="text-sm text-[#444748] mt-0.5">
                  {tournament.location}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-[#4C5D8E] bg-white border border-[#4C5D8E] rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm text-center cursor-pointer">
              Get Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTournaments;
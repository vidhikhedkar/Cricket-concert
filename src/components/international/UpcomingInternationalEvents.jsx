import React from 'react';
import GlobalChallenge from '../../assets/international/section4/GlobalChallenge.jpg';
import MastersSeries from '../../assets/international/section4/MastersSeries.jpg';
import WorldCup from '../../assets/international/section4/T3-World-Cup.jpg';
import { Link } from 'react-router-dom';

const UpcomingInternationalEvents = () => {
  const events = [
    {
      date: 'OCT 2024',
      title: 'T30 World Cup',
      description: 'The explosive short-format global championship returns with 16 competing nations.',
      image: WorldCup,
    },
    {
      date: 'NOV 2024',
      title: 'Masters Series',
      description: 'Legends of the game reunite in this exclusive invitational tournament.',
      image: MastersSeries,
    },
    {
      date: 'JAN 2025',
      title: 'U19 Global Challenge',
      description: 'Showcasing the next generation of international cricket superstars.',
      image: GlobalChallenge,
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16">
      <div className="container">
        
        {/* Header with Title and Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight">
              Upcoming International Events
            </h2>
            <p className="text-[#434654] text-sm sm:text-base mt-4">
              The global calendar of elite competitions.
            </p>
          </div>
          <Link
            to="/calendar"
            className="inline-flex items-center text-sm font-semibold text-[#00389E] hover:text-blue-700 transition-colors group"
          >
            <span>View Full Calendar</span>
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#FAF8FF] rounded-2xl border border-[#C3C5D7]/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group p-5"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col grow">
                {/* Date Badge */}
                <div className="inline-block self-start px-2.5 py-1 my-3 text-[11px] font-semibold tracking-wider text-[#434654] bg-[#E7E7F2] rounded-md uppercase border border-slate-200">
                  {event.date}
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-semibold text-[#191B23] mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="text-sm text-[#434654] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingInternationalEvents;
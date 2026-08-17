import React from 'react';
import ANALYSIS from '../../assets/international/section10/ANALYSIS.png';
import ANNOUNCEMENT from '../../assets/international/section10/ANNOUNCEMENT.jpg';
import INTERVIEW from '../../assets/international/section10/INTERVIEW.jpg';
import { Link } from 'react-router-dom';

const InternationalLatestNews = () => {
  const newsData = [
    {
      id: 1,
      category: 'ANNOUNCEMENT',
      title: 'Host Cities Confirmed for 2027 World Cup',
      description:
        'The ICC has officially announced the list of stadiums that will host matches during the upcoming global...',
      image: ANNOUNCEMENT,
      alt: 'Host Cities Confirmed',
    },
    {
      id: 2,
      category: 'ANALYSIS',
      title: 'The Tactical Shift in Modern Tournament Play',
      description:
        'How data analytics and match-up strategies are fundamentally altering the way nations approach knockout...',
      image: ANALYSIS,
      alt: 'Tactical Shift in Modern Tournament Play',
    },
    {
      id: 3,
      category: 'INTERVIEW',
      title: '"It\'s about leaving a legacy" - Player Exclusive',
      description:
        'An in-depth conversation with the leading run-scorer on the pressure of performing on the grandest stage of...',
      image: INTERVIEW,
      alt: 'Player Exclusive Interview',
    },
  ];

  return (
    <section className="container py-16">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-[#0B1F4D] tracking-tight">
          Latest News
        </h2>
        <Link
          to="#all-news"
          className="text-sm font-bold text-[#0B1E48] uppercase tracking-wider hover:underline border-b border-[#0B1E48] pb-0.5"
        >
          ALL NEWS
        </Link>
      </div>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="h-52 w-full overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col grow">
              {/* Category Tag */}
              <span className="text-xs font-bold text-[#1C1B1B] tracking-wider uppercase mb-3">
                {item.category}
              </span>

              {/* News Title */}
              <h3 className="text-xl font-bold text-[#1C1B1B] leading-snug mb-3 hover:text-blue-900 cursor-pointer">
                {item.title}
              </h3>

              {/* Description Body */}
              <p className="text-sm text-[#444748] leading-relaxed mt-auto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternationalLatestNews;
import React from 'react';
import DomesticCompetitions1 from '../../assets/domestic/section4/DomesticCompetitions1.jpg';
import DomesticCompetitions2 from '../../assets/domestic/section4/DomesticCompetitions2.jpg';
import DomesticCompetitions3 from '../../assets/domestic/section4/DomesticCompetitions3.jpg';

const DomesticCompetitions = () => {
  const competitions = [
    {
      format: "T20 Format",
      title: "Summer Smash",
      description: "The fast-paced, action-packed T20 tournament that brings families and fans together.",
      image: DomesticCompetitions1,
      badgeColor: "bg-[#4C5D8E]", // Blue
    },
    {
      format: "50-Over Format",
      title: "Challengers Cup",
      description: "The traditional one-day competition testing endurance, strategy, and skill across overs.",
      image: DomesticCompetitions2,
      badgeColor: "bg-[#5D5F5F]", // Orange
    },
    {
      format: "4-Day Format",
      title: "The Shield",
      description: "The ultimate test of character. Four days of grueling cricket where true champions emerge.",
      image: DomesticCompetitions3,
      badgeColor: "bg-[#747878]", // Gray
    },
  ];

  return (
    <section className="py-16 bg-white text-[#191B23] overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1B1B]">
            Domestic Competitions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((item, index) => (
            <div 
              key={index} 
              className="relative h-105 sm:h-112.5 rounded-3xl overflow-hidden shadow-md flex flex-col justify-end p-6 group cursor-pointer border border-gray-100"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-end h-full">
                {/* Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full ${item.badgeColor} backdrop-blur-md text-white text-[11px] font-bold tracking-wider border border-white/10 shadow-sm`}>
                    {item.format}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#FFFFFF]/80 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-white text-xs sm:text-sm font-bold group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DomesticCompetitions;
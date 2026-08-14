import React from 'react';
import Academy from '../../assets/international/section3/Academy.jpg';
import careers from '../../assets/international/section3/careers.jpg';
import CricketMatches from '../../assets/international/section3/CricketMatches.jpg';
import Media from '../../assets/international/section3/Media.jpg';
import Tournments from '../../assets/international/section3/Tournments.jpg';
import Partnership from '../../assets/international/section3/Partnership.jpg';

const WhatCanWeHelpYouWith = () => {
  const items = [
    { title: "Cricket & Matches", image: CricketMatches },
    { title: "Tournaments", image: Tournments },
    { title: "Partnerships", image: Partnership },
    { title: "Media", image: Media },
    { title: "Careers", image: careers },
    { title: "Academy", image: Academy },
  ];

  return (
    <section className="py-16 bg-[#F3F3FE] overflow-hidden">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight uppercase">
            WHAT CAN WE HELP YOU WITH?
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg h-64 sm:h-72 flex flex-col justify-end p-6 sm:p-8 group cursor-pointer"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* Title Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatCanWeHelpYouWith;
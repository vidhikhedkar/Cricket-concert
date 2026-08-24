import React from 'react';
import cricket from '../../assets/contact/section4/CricketConnect.png';

const CricketConnects = () => {
  const offices = [
    {
      city: "Dubai",
      type: "Global Headquarters",
      address: ["WCC Tower, Sports City", "Dubai, United Arab Emirates"],
      isHighlighted: true,
    },
    {
      city: "London",
      type: "Europe Operations",
      address: ["100 Premium Way, City Centre", "London, United Kingdom"],
      isHighlighted: false,
    },
    {
      city: "Singapore",
      type: "APAC Headquarters",
      address: ["Marina Bay Financial Centre", "Singapore"],
      isHighlighted: false,
    },
    {
      city: "New York",
      type: "Americas Hub",
      address: ["One World Trade Center", "New York, USA"],
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container">

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xl sm:text-3xl font-bold text-[#191B23] tracking-tight uppercase mb-4">
            CRICKET CONNECTS THE WORLD
          </h2>
          <p className="text-[#434654] text-sm sm:text-base leading-relaxed">
            With strategically located offices across major continents, the World Cricket Championship operates truly globally.
          </p>
        </div>

        {/* Global Map Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-18 bg-blue-50">
          <img
            src={cricket}
            alt="Cricket Connects the World Map"
            className="w-full h-70 sm:h-100 lg:h-170 object-cover object-center"
          />
        </div>

        {/* 4 Offices Grid with vertical line only on the first item */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`flex flex-col relative ${index === 0 ? 'pl-6' : ''} ${index !== offices.length - 1 ? 'border-r border-gray-200' : ''
                }`}
            >
              {/* Left vertical accent line only for the first item */}
              {index === 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00389E] rounded-full"></div>
              )}

              {/* City Name */}
              <h3 className="text-xl sm:text-2xl font-semibold text-[#191B23] tracking-tight mb-1">
                {office.city}
              </h3>

              {/* Office Type/Role */}
              <p className={`text-xs sm:text-sm font-bold mb-4 ${office.isHighlighted ? 'text-[#00389E]' : 'text-[#434654]'}`}>
                {office.type}
              </p>

              {/* Address Lines */}
              <div className="text-[#434654] text-sm leading-relaxed space-y-0.5">
                {office.address.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CricketConnects;
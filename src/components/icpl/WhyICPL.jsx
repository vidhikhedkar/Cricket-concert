import React from 'react';
import {
  IoGlobeOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
  IoShieldCheckmarkOutline,
  IoDiamondOutline,
  IoHeartOutline
} from 'react-icons/io5';

const whyICPLData = [
  {
    icon: <IoGlobeOutline className="w-5 h-5 text-slate-800" />,
    title: "Global Platform",
    description: "Access to international markets and high-profile broadcasting partnerships across 5 continents."
  },
  {
    icon: <IoPeopleOutline className="w-5 h-5 text-slate-800" />,
    title: "Youth Development",
    description: "World-class coaching infrastructure and pathway programs for emerging U-19 and U-23 athletes."
  },
  {
    icon: <IoStatsChartOutline className="w-5 h-5 text-slate-800" />,
    title: "Performance Data",
    description: "Real-time ball tracking and player biometrics analyzed by top-tier performance scientists."
  },
  {
    icon: <IoShieldCheckmarkOutline className="w-5 h-5 text-slate-800" />,
    title: "Highest Integrity",
    description: "Strict anti-corruption protocols and governance models managed by an independent ethics board."
  },
  {
    icon: <IoDiamondOutline className="w-5 h-5 text-slate-800" />,
    title: "Strategic Partners",
    description: "Integration with global tech giants and lifestyle brands for unparalleled commercial growth."
  },
  {
    icon: <IoHeartOutline className="w-5 h-5 text-slate-800" />,
    title: "Fan Experience",
    description: "Immersive stadium interactions and digital engagement tools designed for the modern spectator."
  }
];

const WhyICPL = () => {
  return (
    <section
      className="w-full bg-[#F0F7FF] py-12 flex items-center justify-center overflow-hidden"
      aria-label="Why ICPL Section"
    >
      <div className="container flex flex-col items-start">

        {/* Section Heading with Entrance Animation */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111C2D] tracking-tight mb-12 transform transition-all duration-700 hover:scale-[1.01]"
          aria-label="Why ICPL Title"
        >
          Why ICPL
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {whyICPLData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col items-start transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-100 group cursor-pointer"
              aria-label={`Why ICPL card: ${item.title}`}
            >

              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 mb-0 sm:mb-4 w-full">
                {/* Icon Container with Icon Bounce/Rotate Animation */}
                <div
                  className="w-12 h-12 rounded-xl bg-[#F0F7FF] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-300 group-hover:text-white"
                  aria-hidden="true"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 text-[#0A192F] group-hover:text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#111C2D] tracking-tight mb-3 transition-colors duration-300 group-hover:text-blue-300">
                  {item.title}
                </h3>
                </div>

                {/* Card Description */}
                <p className="text-[#44474D] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
          ))}
            </div>

      </div>
    </section>
  );
};

export default WhyICPL;
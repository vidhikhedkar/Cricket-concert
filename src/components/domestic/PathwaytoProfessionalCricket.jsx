import React from 'react';
import { BiBuildings, BiMapAlt } from 'react-icons/bi';
import { FaGlobeAmericas, FaLongArrowAltRight } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';

const PathwaytoProfessionalCricket = () => {
  const steps = [
    {
      title: "Grassroots",
      icon: <RiPlantLine className="w-6 h-6 text-[#4C5D8E]" />,
      active: false,
    },
    {
      title: "District",
      icon: <BiBuildings className="w-6 h-6 text-[#4C5D8E]" />,
      active: false,
    },
    {
      title: "State",
      icon: <BiMapAlt className="w-6 h-6 text-[#4C5D8E]" />,
      active: false,
    },
    {
      title: "Premier League",
      icon: <MdSportsCricket className="w-6 h-6 ttext-[#4C5D8E]" />,
      active: true,
      highlighted: true,
    },
    {
      title: "International",
      icon: <FaGlobeAmericas className="w-6 h-6 text-white" />,
      active: true,
      dark: true,
    },
  ];

  return (
    <section className="py-16 bg-[#F3F3FE] text-[#1C1B1B] overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-[#1C1B1B]">
            Pathway to Professional Cricket
          </h2>
          <p className="text-[#444748] text-sm sm:text-base">
            The journey from local parks to the world stage. Every legend started somewhere.
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-3 overflow-x-auto py-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Card Box */}
              <div
                className={`w-full sm:w-50 h-40 rounded-xl p-6 flex flex-col items-center justify-between transition-all shrink-0 border ${step.dark
                  ? 'bg-[#4C5D8E] text-white border-transparent '
                  : step.highlighted
                    ? 'bg-white text-[#191B23] border-[#C4C7C8] ring-1 ring-black/5 shadow-md'
                    : 'bg-white text-[#191B23] border-[#C4C7C8] hover:shadow-md'
                  }`}
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.dark ? 'bg-[#FFFFFF]/20' : 'bg-[#4C5D8E]/10'
                  }`}>
                  {step.icon}
                </div>

                {/* Title */}
                <span className={`text-base sm:text-lg font-bold tracking-wide text-center ${step.dark ? 'text-white' : 'text-[#1C1B1B]'
                  }`}>
                  {step.title}
                </span>
              </div>

              {/* Arrow Indicator (hidden on mobile, visible on lg screens between items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-gray-300 font-bold px-1">
                  <FaLongArrowAltRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PathwaytoProfessionalCricket;
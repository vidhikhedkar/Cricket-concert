import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiTemplate } from 'react-icons/hi';
import { LuMessagesSquare, LuSendHorizontal } from 'react-icons/lu';
import { MdOutlineManageSearch } from 'react-icons/md';

const ResponseRoadmap = () => {
  const steps = [
    {
      title: "MESSAGE SENT",
      icon: <LuSendHorizontal className="w-7 h-7 text-[#0A192F]" />,
    },
    {
      title: "TEAM REVIEW",
      icon: <MdOutlineManageSearch className="w-7 h-7 text-[#0A192F]" />,
    },
    {
      title: "RIGHT DEPT.",
      icon: <HiTemplate className="w-7 h-7 text-[#0A192F]" />,
    },
    {
      title: "RESPONSE",
      icon: <LuMessagesSquare className="w-7 h-7 text-[#0A192F]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#E5EDF4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-md sm:text-lg font-bold text-[#434654] tracking-[0.2em] uppercase">
            RESPONSE ROADMAP
          </h2>
        </div>

        {/* Roadmap Grid / Timeline */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-xs sm:text-md font-regular text-[#191B23] tracking-widest uppercase">
                  {step.title}
                </h3>

                {/* Arrow between items on large screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] text-gray-400 pointer-events-none">
                    <FaArrowRightLong className="w-5 h-5 text-gray-400/70" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResponseRoadmap;
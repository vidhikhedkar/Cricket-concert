import React from 'react';
import { HiMail, HiUserGroup, HiSpeakerphone, HiSupport } from 'react-icons/hi';

const HowcanWeHelp = () => {
  const departments = [
    {
      icon: <HiMail className="w-5 h-5 text-white" />,
      title: "GENERAL ENQUIRIES",
      email: "hello@wcc.com",
    },
    {
      icon: <HiUserGroup className="w-5 h-5 text-white" />,
      title: "PARTNERSHIPS",
      email: "partnerships@wcc.com",
    },
    {
      icon: <HiSpeakerphone className="w-5 h-5 text-white" />,
      title: "MEDIA & PRESS",
      email: "media@wcc.com",
    },
    {
      icon: <HiSupport className="w-5 h-5 text-white" />,
      title: "SUPPORT",
      email: "support@wcc.com",
    },
  ];

  return (
    <section className="py-16  bg-white overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight uppercase mb-2">
            HOW CAN WE HELP?
          </h2>
          <p className="text-[#434654] text-sm sm:text-base">
            Select the most relevant department for an expedited response.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E2E1ED] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center mb-6 shadow-md">
                  {dept.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#191B23] tracking-tight mb-2">
                  {dept.title}
                </h3>

                {/* Email Address */}
                <p className="text-[#434654] text-sm font-medium mb-8">
                  {dept.email}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors">
                  Contact Team
                </span>
                <span className="text-sm font-bold text-[#0A192F] group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowcanWeHelp;
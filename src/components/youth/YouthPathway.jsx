import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBuilding, FaSchool, FaFlag, FaClipboardList, FaTrophy } from 'react-icons/fa';

const YouthPathway = () => {
  const steps = [
    {
      title: "SCHOOL",
      subtitle: "Early dev",
      icon: <FaSchool className="text-2xl" />,
      active: false,
    },
    {
      title: "DISTRICT",
      subtitle: "Trials",
      icon: <FaBuilding className="text-2xl" />,
      active: false,
    },
    {
      title: "ACADEMY",
      subtitle: "Elite training",
      icon: <FaGraduationCap className="text-2xl" />,
      active: true, 
    },
    {
      title: "NATIONAL",
      subtitle: "High perf",
      icon: <FaFlag className="text-2xl" />,
      active: false,
    },
    {
      title: "DRAFT",
      subtitle: "Selection",
      icon: <FaClipboardList className="text-2xl" />,
      active: false,
    },
    {
      title: "PRO",
      subtitle: "Debut",
      icon: <FaTrophy className="text-2xl" />,
      active: true, 
    },
  ];

  return (
    <section className="bg-white py-16 text-slate-900 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-[#0B1F4D] uppercase mb-3">
            THE PATHWAY
          </h2>
          <p className="text-sm sm:text-base text-[#444748] font-medium leading-relaxed">
            Your structured journey from grassroots to greatness.
          </p>
        </div>

        {/* Pathway Container */}
        <div className="relative">
          {/* Connecting Horizontal Line (desktop) */}
          <div className="hidden md:block absolute bottom-25 left-12 right-12 h-0.5 bg-slate-200 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-md ${
                    step.active && step.title === "PRO"
                      ? "bg-slate-900 text-white shadow-xl scale-105"
                      : step.active
                      ? "bg-slate-900 text-white shadow-xl scale-105 ring-8 ring-slate-100"
                      : "bg-white text-[#0B1F4D] border-2 border-[#0B1F4D] hover:border-slate-900"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-lg font-bold tracking-wider text-[#1C1B1B] uppercase mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#444748] font-regular">
                  {step.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default YouthPathway;
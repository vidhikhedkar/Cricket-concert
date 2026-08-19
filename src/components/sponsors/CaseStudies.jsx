import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const cases = [
    {
      companyTag: "GLOBAL TECH",
      partnerBadge: "Platinum Partner",
      title: "Driving Global App Downloads",
      challenge: "Launch a new mobile application across Asian and European markets simultaneously.",
      solution: "Integrated QR codes on LED perimeters and exclusive in-app content during the ICPL Finals.",
      resultValue: "2.4M+ Downloads",
      resultDesc: "in first 48 hours of launch",
    },
    {
      companyTag: "AERO AIRLINES",
      partnerBadge: "Official Airline",
      title: "Elevating Brand Preference",
      challenge: "Increase brand preference among premium international travelers.",
      solution: 'Title sponsorship of the VIP Hospitality Suites and "Catch of the Match" broadcast segment.',
      resultValue: "+45% Increase",
      resultDesc: "in premium brand perception",
    },
  ];

  return (
    <section className="bg-[#F1F6FF] py-16 text-slate-900 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-start max-w-2xl mb-10">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3 block">
            CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            Proven Results
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 sm:p-8 shadow-sm border border-[#C3C5D7]/30 flex flex-col justify-between"
            >
              <div>
                {/* Header Tags */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3 py-2 bg-[#E2E1ED] text-[#434654] text-[10px] font-semibold tracking-widest uppercase rounded-md">
                    {item.companyTag}
                  </span>
                  <span className="px-3 py-2 bg-[#0A4DCE]/20 text-[#00389E] text-[10px] font-regular tracking-widest uppercase rounded-md">
                    {item.partnerBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#191B23] tracking-tight mb-6">
                  {item.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-[#191B23]  tracking-wider mb-1">
                    The Challenge:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-[#191B23] tracking-wider mb-1">
                    The Solution:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-[#00389E]/5 rounded-2xl p-6 shadow-sm border-l-4 border-l-[#00389E]">
                <h4 className="text-[10px] font-semibold text-[#00389E]  tracking-widest mb-1">
                  The Result:
                </h4>
                <div className="text-lg sm:text-xl font-regular text-[#00389E] tracking-tight">
                  {item.resultValue}
                </div>
                <div className="text-xs sm:text-sm text-[#434654] font-regular">
                  {item.resultDesc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
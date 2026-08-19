import React from 'react';
import { motion } from 'framer-motion';

const TheWccGrowthStory = () => {
  const stages = [
    {
      period: "PAST (2015-2020)",
      title: "Foundation",
      description: "Establishing global broadcasting standards and standardizing tournament structures.",
      active: false,
    },
    {
      period: "PRESENT (2021-2025)",
      title: "Expansion",
      description: "Digital transformation, new franchise leagues, and Olympic inclusion efforts.",
      active: false,
    },
    {
      period: "NEXT (2026+)",
      title: "Dominance",
      description: "AI-driven fan engagement, Web3 monetization, and full US market penetration.",
      active: true,
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden text-[#191B23]">
      <div className="container mx-auto px-4 relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            THE WCC GROWTH STORY
          </h2>
        </div>

        {/* Growth Timeline Cards Wrapper */}
        <div className="relative">

          {/* Horizontal Connector Line (Visible on md and larger screens) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#2D6BFF] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-center">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-xl p-8 flex flex-col justify-between transition-all duration-300 relative bg-white ${stage.active
                    ? 'border-2 border-[#2D6BFF] shadow-xl'
                    : 'border border-[#C3C5D7]/30 shadow-sm'
                  }`}
              >
                <div className="space-y-4 text-center">
                  {/* Period / Phase */}
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#2D6BFF] block">
                    {stage.period}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#191B23] tracking-tight">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TheWccGrowthStory;
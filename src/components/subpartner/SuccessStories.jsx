import React from 'react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const stories = [
    {
      challenge: "Scaling fan engagement during non-match days across diverse global time zones.",
      solution: "Implemented an AI-driven digital content platform in partnership with TechCorp Global.",
      result: "300% increase in daily active users and 45% growth in digital ad revenue.",
    },
    {
      challenge: "Modernizing venue operations to reduce carbon footprint while improving spectator experience.",
      solution: "Deployed smart stadium infrastructure supplied by our sustainability partners.",
      result: "40% reduction in energy consumption and a 95% positive fan feedback rating.",
    },
    {
      challenge: "Expanding merchandise reach into emerging markets without heavy physical retail investment.",
      solution: "Launched a localized e-commerce ecosystem integrated with broadcast viewing.",
      result: "$12M new revenue stream from emerging markets in Year 1.",
    },
  ];

  return (
    <section className="bg-[#F4F8FF] py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            Success Stories
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-[#C3C5D7]/10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Challenge */}
                <div>
                  <span className="text-[12px] sm:text-md font-bold uppercase tracking-widest text-[#00389E] block mb-2">
                    Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-[#434654] font-medium leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                <div className="border-t border-[#C3C5D7]/20 pt-6">
                  {/* Solution */}
                  <span className="text-[12px] sm:text-md font-bold uppercase tracking-widest text-[#00389E] block mb-2">
                    Solution
                  </span>
                  <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                    {story.solution}
                  </p>
                </div>

                <div className="border-t border-[#C3C5D7]/20 pt-6">
                  {/* Business Result */}
                  <span className="text-[12px] sm:text-md font-bold uppercase tracking-widest text-[#5D5F5F] block mb-2">
                    Business Result
                  </span>
                  <p className="text-xs sm:text-sm text-[#191B23] font-semibold leading-relaxed">
                    {story.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
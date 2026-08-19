import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Submit Interest",
      description: "Fill out our initial contact form to outline your brand's objectives.",
    },
    {
      number: "2",
      title: "Discussion",
      description: "Our team connects with yours to understand your specific marketing goals.",
    },
    {
      number: "3",
      title: "Custom Proposal",
      description: "We present a tailored partnership package designed to maximize ROI.",
    },
    {
      number: "4",
      title: "Agreement",
      description: "Finalize terms, assets, and sign the official partnership contract.",
    },
    {
      number: "5",
      title: "Launch",
      description: "Execute the strategy and begin tracking performance metrics.",
    },
  ];

  return (
    <section className="bg-[#F1F6FF] py-16 text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-start max-w-2xl mb-20">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3 block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            The Partnership Journey
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[1%] right-[10%] h-1 bg-[#E2E1ED] z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-regular mb-6 shadow-sm border ${
                    index === 0
                      ? "bg-[#00389E] text-white border-[#00389E] shadow-md ring-8 ring-white"
                      : "bg-[#E2E1ED] text-[#191B23] border-[#E2E1ED] ring-8 ring-white"
                  }`}
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-regular text-[#191B23] tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
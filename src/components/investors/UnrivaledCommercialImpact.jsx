import React from 'react';
import { motion } from 'framer-motion';

const UnrivaledCommercialImpact = () => {
  const metrics = [
    { value: "35M+", label: "Registered Global Fans" },
    { value: "108", label: "Member Nations" },
    { value: "$1.2B", label: "Annual Commercial Value" },
  ];

  return (
    <section className="bg-[#0A192F] py-16 relative overflow-hidden text-white">
      <div className="container text-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            UNRIVALED COMMERCIAL IMPACT
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className=" text-center max-w-3xl"
            >
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white/80 tracking-wide">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UnrivaledCommercialImpact;
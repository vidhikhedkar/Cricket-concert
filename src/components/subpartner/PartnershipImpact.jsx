import React from 'react';
import { motion } from 'framer-motion';

const PartnershipImpact = () => {
  const stats = [
    { value: "250+", label: "Events Powered" },
    { value: "35M+", label: "Fans Reached" },
    { value: "85+", label: "Countries Active" },
    { value: "98%", label: "Partner Satisfaction" },
  ];

  return (
    <section className="bg-white py-16  relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23]">
            Partnership Impact
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-[#FAF8FF] sm:bg-transparent rounded-2xl border border-[#C3C5D7] sm:border-none"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#0A192F] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-regular text-[#191B23] uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipImpact;
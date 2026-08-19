import React from 'react';
import { motion } from 'framer-motion';
import DIGITALMEDIA from '../../assets/investors/section6/DIGITAL-MEDIA.jpg';

const DigitalAndMediaEcosystem = () => {
  const stats = [
    { value: "150M+", label: "APP DOWNLOADS" },
    { value: "2.5B", label: "VIDEO VIEWS (YTD)" },
    { value: "45%", label: "YOY DIGITAL REV GROWTH" },
    { value: "#1", label: "SPORTS APP GLOBALLY (Q3)" },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] mb-2 uppercase">
              DIGITAL & MEDIA ECOSYSTEM
            </h2>
            <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-10 max-w-xl">
              We are transforming how fans consume cricket, creating a highly monetizable, year-round digital relationship.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#F3F7FF] border border-[#C3C5D7]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#0A192F] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#434654] tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={DIGITALMEDIA}
                alt="Digital & Media Ecosystem"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigitalAndMediaEcosystem;
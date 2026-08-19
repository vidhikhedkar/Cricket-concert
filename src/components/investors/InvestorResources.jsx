import React from 'react';
import { motion } from 'framer-motion';

const InvestorResources = () => {
  return (
    <section className="bg-[#0A192F] py-16 relative overflow-hidden text-white flex items-center justify-center">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase mb-4 text-white">
            INVESTOR RESOURCES
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-white/80 font-regular max-w-xl leading-relaxed mb-10">
            Access comprehensive data rooms, historical performance metrics, and investment prospectuses.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <motion.a
              href="#data-room"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#0F2B5B] font-semibold py-4 px-8 rounded-xl shadow-xl hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
            >
              Request Access to Data Room
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="#investor-deck"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-white text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:bg-white/10 transition-all text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
            >
              Download Investor Deck
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorResources;
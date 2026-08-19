import React from 'react';
import { motion } from 'framer-motion';
import investorscta from '../../assets/investors/section12/investorscta.jpg';

const InvestorsCta = () => {
  return (
    <section className="relative py-28 overflow-hidden flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={investorscta}
          alt="Build the future of cricket with us"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-[#0A192F]/80 mix-blend-multiply" /> */}
        <div className="absolute inset-0 bg-[#0F2B5B]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase mb-8 text-white leading-tight">
            BUILD THE FUTURE OF CRICKET WITH US
          </h2>

          {/* Action Button */}
          <motion.a
            href="#invest-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white text-[#0A192F] font-semibold py-4 px-10 rounded-xl shadow-2xl hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
          >
            Invest Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsCta;
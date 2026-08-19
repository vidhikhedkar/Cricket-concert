import React from 'react';
import { motion } from 'framer-motion';
import cta from '../../assets/subpartner/section10/beapartnercta.jpg';

const BeAPartnerCta = () => {
  return (
    <section className="relative py-30 bg-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cta}
          alt="Let's Build the Future of Cricket Together"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2E3038]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Subheading/Tagline */}
          <p className="text-sm sm:text-base lg:text-lg text-white font-regular tracking-tight mb-8">
            Let's Build the Future of Cricket Together
          </p>

          {/* Action Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-white text-[#0A192F] font-semibold py-4 px-8 rounded-xl shadow-xl hover:bg-slate-100 transition-all text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
          >
            Contact Partnership Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeAPartnerCta;
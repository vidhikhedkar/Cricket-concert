import React from 'react';
import { motion } from 'framer-motion';
import sponsors from '../../assets/sponsors/section11/Sponosorscta.jpg';

const SponosorsCTA = () => {
  return (
    <section className="relative py-20 text-white overflow-hidden bg-slate-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={sponsors}
          alt="Become Part of Cricket History"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-regular tracking-tight uppercase mb-6 leading-tight">
            Become Part of Cricket History
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#E2E1ED] font-regular max-w-xl mb-10 leading-relaxed">
            Join the world's most prestigious cricket league. Connect your brand with millions of passionate fans globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0A192F] hover:bg-[#0A192F] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-lg cursor-pointer border border-white">
              Become a Sponsor
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FAF8FF] hover:bg-slate-100 text-[#0A192F] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-lg cursor-pointer">
              Contact Partnership Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponosorsCTA;
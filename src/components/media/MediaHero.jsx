import React from 'react';
import { motion } from 'framer-motion';
import mhero from '../../assets/media/section1/mediahero.jpg';

const MediaHero = () => {
  return (
    <section className="relative py-32 sm:py-44 overflow-hidden flex items-center justify-center text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mhero}
          alt="Stories. Moments. Everything WCC."
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071A33]/50" />
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
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase mb-6 text-white leading-tight">
            STORIES. MOMENTS. <br />
            EVERYTHING WCC.
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-[#E2E1ED] font-regular max-w-2xl leading-relaxed">
            Discover the stories, announcements, and moments shaping the future of global cricket. The ultimate destination for all WCC media and press updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaHero;
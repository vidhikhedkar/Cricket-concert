import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cta from '../../assets/media/section8/mediacta.jpg';

const MediaCta = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="relative py-24 overflow-hidden flex items-center justify-center text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cta}
          alt="Stay close to the game"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071A33]/80" />
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
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase mb-4 text-white">
            STAY CLOSE TO THE GAME.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#E2E1ED] font-regular max-w-xl leading-relaxed mb-10">
            Subscribe to the official WCC Media Newsletter for weekly updates, press briefings, and exclusive editorial access.
          </p>

          {/* Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 "
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8FF] text-slate-900 placeholder:text-[#737686] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0A192F] hover:bg-[0A192F] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 shrink-0 cursor-pointer shadow-md"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCta;
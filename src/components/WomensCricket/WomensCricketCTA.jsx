import React from 'react';
import { motion } from 'framer-motion';
import womenscta from '../../assets/WomensCricket/section11/womenscta.png';

const WomensCricketCTA = () => {
  return (
    <section className="relative py-16 text-white overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={womenscta}
          alt="Be part of the revolution stadium background"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/60 to-slate-950/90" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight max-w-3xl">
            BE PART OF<br />THE REVOLUTION
          </h2>
          <p className="text-sm sm:text-lg font-normal tracking-tight leading-relaxed max-w-xl">
            Sign up for exclusive content, early ticket access, and the latest updates from the world of women's cricket.
          </p>

          {/* Subscription Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full sm:flex-1 bg-white text-slate-900 placeholder:text-slate-400 text-sm px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 shadow-2xl"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#111010] hover:bg-slate-900 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded-lg border border-white shadow-2xl transition-colors duration-300 cursor-pointer shrink-0"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WomensCricketCTA;
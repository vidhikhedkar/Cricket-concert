import React from 'react';
import { motion } from 'framer-motion';
import youthHeroBg from '../../assets/youth/section1/youthhero.png'; 

const YouthHero = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img
          src={youthHeroBg}
          alt="Youth Cricket stadium background"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-1"
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight">
            YOUTH CRICKET
          </h1>

          {/* Description Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white font-regular tracking-wide leading-relaxed max-w-3xl">
            Cultivating the legends of tomorrow through world-class development programs, elite coaching, and high-stakes competitive frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default YouthHero;
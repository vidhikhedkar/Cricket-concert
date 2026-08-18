import React from 'react';
import { motion } from 'framer-motion';
import womenshero from '../../assets/WomensCricket/section1/womencrickethero.png';

const WomensCricketHero = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] min-h-112.5 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={womenshero}
          alt="Women's Cricket Hero"
          className="w-full h-full object-cover object-center scale-105  duration-1000"
        />
      
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase drop-shadow-lg mb-4">
            Women's Cricket
          </h1>

          {/* Subtitle / Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto font-regular leading-relaxed drop-shadow">
            Empowering excellence and breaking boundaries on the global stage. Experience the velocity and precision of the world's best.
          </p>
        </motion.div>
      </div>

    
    </section>
  );
};

export default WomensCricketHero;
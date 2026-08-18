import React from 'react';
import { motion } from 'framer-motion';
import Spotlight from '../../assets/WomensCricket/section3/ChampionshipSpotlight.jpg';

const UnprecedentedGrowth = () => {
  const stats = [
    {
      value: "300%",
      title: "Investment Growth",
      description: "Increase in global franchise investment over the last 5 years."
    },
    {
      value: "50M+",
      title: "Global Viewership",
      description: "Peak concurrent viewers during major international finals."
    },
    {
      value: "104",
      title: "Nations Playing",
      description: "Countries with active women's national cricket programs."
    }
  ];

  return (
    <section className="relative py-14 text-white overflow-hidden bg-slate-950">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Spotlight}
          alt="Unprecedented Growth Stadium Background"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-3">
            Unprecedented Growth
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/80 font-regular">
            The exponential rise of women's cricket across all formats and continents.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {stat.value}
              </span>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-regular  leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UnprecedentedGrowth;
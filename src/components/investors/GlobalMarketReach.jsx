import React from 'react';
import { motion } from 'framer-motion';
import GLOBALMARKET from '../../assets/investors/section3/GLOBAL-MARKET.png';

const GlobalMarketReach = () => {
  const markets = [
    { title: "South Asia", subtitle: "Core Market • 1.5B Fans" },
    { title: "Americas", subtitle: "Growth Region • 50M+ Potential" },
    { title: "UK & Europe", subtitle: "Traditional Base • High Yield" },
    { title: "South Asia", subtitle: "Core Market • 1.5B Fans" },
    { title: "Americas", subtitle: "Growth Region • 50M+ Potential" },
    { title: "UK & Europe", subtitle: "Traditional Base • High Yield" },
    { title: "Oceania", subtitle: "Legacy Market • Strong Broadcast" },
    { title: "Africa", subtitle: "Emerging Base • Youth Demo" },
    { title: "Middle East", subtitle: "Hub • Infrastructure Growth" },
  ];

  return (
    <section className="bg-[#0A192F] py-16 relative overflow-hidden text-white">
      <div className="container text-center">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2 uppercase">
            Global Market Reach
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-regular leading-relaxed">
            Unlocking value across established strongholds and high-growth frontier markets.
          </p>
        </motion.div>

        {/* Container with Map Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${GLOBALMARKET})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-[#0A192F]/85 backdrop-blur-[1px]" />

          {/* Markets Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-center shadow-lg hover:bg-white/15 transition-all"
              >
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white mb-1">
                  {market.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-regular text-white/70 tracking-wide">
                  {market.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalMarketReach;
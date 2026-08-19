import React from 'react';
import { motion } from 'framer-motion';
import sponsor from '../../assets/sponsors/section1/sponsorshero.png';

const SponsorsHero = () => {
  const stats = [
    { value: "50+", label: "Global Brands" },
    { value: "35M+", label: "Fans" },
    { value: "108", label: "Countries" },
    { value: "150+", label: "Events" },
  ];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="relative min-h-137.5 sm:min-h-110 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={sponsor}
            alt="Official Sponsors Stadium"
            className="w-full h-full object-cover object-center filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase mb-3 text-white">
            OFFICIAL SPONSORS
          </h1>
          <p className="text-sm sm:text-base text-[#E2E1ED] font-regular max-w-xl mx-auto leading-relaxed">
            Powering the future of world cricket through trusted global partnerships.
          </p>
        </motion.div>
      </div>

      {/* Bottom Stats Banner */}
      <div className="bg-[#0A192F] border-t border-white/10 relative z-20 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center justify-center md:gap-2"
              >
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-regular text-[#E2E1ED] tracking-widest ">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsHero;
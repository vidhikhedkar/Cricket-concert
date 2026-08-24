import React from 'react';
import { motion } from 'framer-motion';
import asiacup from '../../assets/youth/section2/asiacup.jpg'; 
import worldcup from '../../assets/youth/section2/worldcup.jpg'; 

const RoadToGlory = () => {
  const tournaments = [
    {
      category: "GLOBAL",
      title: "U19 WORLD CUP",
      description: "The ultimate proving ground for the best young talent worldwide.",
      image: worldcup,
    },
    {
      category: "CONTINENTAL",
      title: "ASIA CUP U19",
      description: "Fierce regional rivalry showcasing rising stars of the subcontinent.",
      image: asiacup,
    },
  ];

  return (
    <section className="bg-white py-16  text-slate-900 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-8 sm:max-w-xl max-w-sm">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:max-w-60 w-full font-extrabold tracking-tight text-[#0B1F4D] uppercase leading-tight mb-5">
            ROAD TO GLORY
          </h2>
          <p className="text-sm sm:text-base text-[#444748] font-regular leading-relaxed">
            Explore the premier youth tournaments shaping tomorrow's legends. From regional qualifiers to the global stage.
          </p>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-xl min-h-105 sm:min-h-110 flex flex-col justify-end group border border-slate-200"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>

              {/* Content Area */}
              <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs font-regular uppercase tracking-widest text-white/80 mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-regular leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoadToGlory;
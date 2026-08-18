import React from 'react';
import { motion } from 'framer-motion';
import {  FaGlobe, FaShieldAlt, FaTrophy, FaRocket, FaRegFlag } from 'react-icons/fa';
import { FaEarthAmericas } from 'react-icons/fa6';
import { LuHandshake } from 'react-icons/lu';

const WomensJourney = () => {
  const milestones = [
    {
      year: "1973",
      title: "First World Cup",
      description: "The inaugural Women's Cricket World Cup was held in England, pre-dating the men's tournament by two years.",
      icon: <FaRegFlag   className="text-white text-md" />,
      align: "left"
    },
    {
      year: "1997",
      title: "Global Expansion",
      description: "The World Cup in India drew record crowds, signaling a massive shift in popularity in the subcontinent.",
      icon: <FaEarthAmericas  className="text-white text-md" />,
      align: "right"
    },
    {
      year: "2005",
      title: "ICC Integration",
      description: "The International Women's Cricket Council (IWCC) merged with the ICC, bringing professional structure.",
      icon: <LuHandshake  className="text-white text-md" />,
      align: "left"
    },
    {
      year: "2020",
      title: "MCG Final",
      description: "86,174 fans packed the MCG for the T20 World Cup final, a watershed moment for women's sports globally.",
      icon: <FaTrophy className="text-white text-md" />,
      align: "right"
    },
    {
      year: "Today",
      title: "Franchise Era",
      description: "The launch of massive global franchise leagues has professionalized the sport entirely.",
      icon: <FaRocket className="text-white text-md" />,
      align: "left"
    }
  ];

  return (
    <section className="bg-white py-16  text-[#1C1B1B] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight uppercase mb-4">
            Journey Through History
          </h2>
          <p className="text-sm sm:text-md text-[#444748] font-regular">
            Milestones that defined the sport.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-[#C4C7C8]/30 hidden md:block" />

          <div className="space-y-12 md:space-y-16 relative">
            {milestones.map((item, index) => {
              const isLeft = item.align === "right";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-0`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'} text-start`}>
                    <div className="">
                      <span className="text-2xl sm:text-3xl font-bold text-s[#0A192F] tracking-tight">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-2xl font-bold text-[#1C1B1B] mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-md text-[#444748] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-[#0A192F] items-center justify-center shadow-md border-4  z-10">
                    {item.icon}
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WomensJourney;
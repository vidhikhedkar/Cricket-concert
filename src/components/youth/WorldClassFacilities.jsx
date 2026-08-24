import React from 'react';
import { motion } from 'framer-motion';
import highperformance from '../../assets/youth/section9/high-performance.jpg'; 
import indoorbiomechanics from '../../assets/youth/section9/indoor-biomechanics.jpg'; 
import recoverypools from '../../assets/youth/section9/recovery-pools.jpg'; 

const WorldClassFacilities = () => {
  return (
    <section className="bg-white py-16 text-slate-900 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-12 max-w-xl">
          <h2 className="text-2xl sm:text-4xl sm:max-w-80 w-full font-extrabold tracking-tight text-[#0B1F4D] uppercase leading-tight mb-3">
            WORLD-CLASS FACILITIES
          </h2>
          <p className="text-sm sm:text-base text-[#444748] font-regular leading-relaxed">
            Train in environments designed for champions.
          </p>
        </div>

        {/* Facilities Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Large Card: Indoor Biomechanics Lab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative rounded-xl overflow-hidden shadow-xl min-h-112.5 sm:min-h-130 flex flex-col justify-end group border border-slate-200"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={indoorbiomechanics}
                alt="Indoor Biomechanics Lab"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            </div>

            <div className="relative z-10 p-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight uppercase">
                INDOOR BIOMECHANICS LAB
              </h3>
            </div>
          </motion.div>

          {/* Right Stacked Cards: Gym & Recovery Pools */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Top Right Card: High-Performance Gym */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-xl h-60 sm:h-61.5 flex flex-col justify-end group border border-slate-200"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={highperformance}
                  alt="High-Performance Gym"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase">
                  HIGH-PERFORMANCE GYM
                </h3>
              </div>
            </motion.div>

            {/* Bottom Right Card: Recovery Pools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl h-60 sm:h-61.5 flex flex-col justify-end group border border-slate-200"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={recoverypools}
                  alt="Recovery Pools"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase">
                  RECOVERY POOLS
                </h3>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WorldClassFacilities;
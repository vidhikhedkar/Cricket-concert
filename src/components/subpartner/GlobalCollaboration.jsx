import React from 'react';
import { motion } from 'framer-motion';
import map from '../../assets/subpartner/section5/map.png';

const GlobalCollaboration = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 uppercase">
            Global Collaboration
          </h2>
          <p className="text-sm sm:text-base text-[#E2E1ED] font-regular leading-relaxed">
            A network that spans continents, uniting diverse markets through a shared passion for the sport.
          </p>
        </motion.div>

        {/* World Map Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto flex items-center justify-center p-4"
        >
          <img 
            src={map} 
            alt="Global Collaboration Map" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalCollaboration;
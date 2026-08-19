import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import frame from '../../assets/media/section5/frame.jpg';
import frame1 from '../../assets/media/section5/frame1.jpg';
import frame2 from '../../assets/media/section5/frame2.jpg';
import frame3 from '../../assets/media/section5/frame3.jpg';
import { Link } from 'react-router-dom';

const InTheFrame = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'International', 'Domestic', "Women's", 'Youth', 'Fans'];

  return (
    <section className="bg-[#071A33] py-16 relative overflow-hidden text-white">
      <div className="container">
        
        {/* Header and Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase mb-2">
              IN THE FRAME
            </h2>
            <p className="text-xs sm:text-sm text-[#E2E1ED] font-regular max-w-md leading-relaxed">
              The most compelling visual moments from around the cricketing globe.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#0B4DBB] text-white shadow-lg'
                    : 'bg-[#FAF8FF]/10 text-white hover:bg-white/20 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-6 mb-6">
          
          {/* Large Main Feature Image (Left - 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-87.5 sm:h-112.5 lg:h-137.5 rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            <img
              src={frame}
              alt="In the frame main feature"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Right Column Grid (3 Images - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-4 h-87.5 sm:h-112.5 lg:h-137.5">
            
            {/* Top Row: Two smaller images */}
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-full rounded-xl overflow-hidden shadow-xl relative group cursor-pointer"
              >
                <img
                  src={frame1}
                  alt="Gallery thumbnail 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full rounded-xl overflow-hidden shadow-xl relative group cursor-pointer"
              >
                <img
                  src={frame2}
                  alt="Gallery thumbnail 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Bottom Row: Wide image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1/2 rounded-xl overflow-hidden shadow-xl relative group cursor-pointer"
            >
              <img
                src={frame3}
                alt="Gallery thumbnail 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        {/* Explore Full Gallery CTA */}
        <div className="text-center">
          <Link
            to="/full-gallery"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-wider group cursor-pointer"
          >
            <span>Explore Full Gallery</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InTheFrame;
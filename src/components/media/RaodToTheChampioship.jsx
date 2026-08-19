import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import frame from '../../assets/media/section2/frame.jpg';
import { Link } from 'react-router-dom';

const RaodToTheChampioship = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start gap-10 max-w-6xl"
        >
          {/* Left Image Column */}
          <div className="w-full lg:w-7/12 h-64 sm:h-80 rounded-xl overflow-hidden shrink-0 shadow-md">
            <img
              src={frame}
              alt="The Road to the Championship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content Column */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            {/* Tag & Date Info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#0B4DBB]/10 text-[#0B4DBB] font-semibold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Championship
              </span>
              <span className="text-[#434654] font-semibold text-xs sm:text-sm tracking-wide">
                12 AUG 2026
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191B23] tracking-tight mb-4 uppercase">
              THE ROAD TO THE CHAMPIONSHIP
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-8">
              Explore the pivotal moments and groundbreaking strategies shaping the upcoming global tournament. Inside the minds of the athletes preparing for the world's biggest stage.
            </p>

            {/* Action Link */}
            <Link
              to="/read-story"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A192F] hover:text-blue-600 transition-colors uppercase tracking-wider group"
            >
              <span>Read Story</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RaodToTheChampioship;
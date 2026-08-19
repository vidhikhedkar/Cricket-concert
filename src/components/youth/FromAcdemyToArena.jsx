import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import rohitsharma from '../../assets/youth/section8/rohitsharma.jpg';

const FromAcdemyToArena = () => {
  return (
    <section className="bg-[#F0F5FF] py-16 text-slate-900 relative overflow-hidden">
      <div className="container text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Subheading */}
          <span className="text-[10px] sm:text-xs font-regular uppercase tracking-widest text-[#0B1F4D] mb-3">
            ALUMNI SPOTLIGHT
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1F4D] uppercase leading-tight mb-6">
            FROM ACADEMY<br />TO ARENA
          </h2>

          {/* Large Quote Mark */}
          <div className="text-slate-200 mb-6">
            <FaQuoteRight className="text-4xl sm:text-5xl mx-auto opacity-60" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-xl font-regular text-[#1C1B1B] leading-relaxed  max-w-3xl mb-10">
            "The rigorous training and exposure I received at the Elite Academy laid the foundation for my international debut. It's not just about cricket; it's about building character to handle pressure at the highest level."
          </blockquote>

          {/* Author / Profile Details */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-md mb-3">
              <img
                src={rohitsharma}
                alt="Rohan Sharma"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0B1F4D] tracking-tight">
              Rohan Sharma
            </h3>
            <p className="text-[10px] sm:text-xs font-regular uppercase tracking-widest text-[#444748] mt-0.5">
              CLASS OF '21 • NATIONAL TEAM
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FromAcdemyToArena;
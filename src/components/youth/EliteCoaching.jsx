import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBrain, FaUtensils, FaArrowRight } from 'react-icons/fa';
import elite from '../../assets/youth/section6/elite-coaching.jpg';
import { Link } from 'react-router-dom';

const EliteCoaching = () => {
  const features = [
    {
      icon: <FaChartLine className="text-white/50 text-base sm:text-lg" />,
      text: "1-on-1 Technical Analysis",
    },
    {
      icon: <FaBrain className="text-white/50 text-base sm:text-lg" />,
      text: "Sports Psychology Workshops",
    },
    {
      icon: <FaUtensils className="text-white/50 text-base sm:text-lg" />,
      text: "Nutritional Planning",
    },
  ];

  return (
    <section className="bg-[#0A192F] text-white relative overflow-hidden">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch ">
          
          {/* Left Dark Content Pane */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center container"
          >
            {/* Mentorship Subheading */}
            <span className="text-[10px] sm:text-xs font-normal uppercase tracking-widest text-white/60 mb-3 block mt-5 sm:mt-0">
              MENTORSHIP
            </span>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl sm:max-w-60 w-full font-extrabold tracking-tight uppercase leading-tight mb-6 text-white">
              ELITE COACHING
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-8 max-w-lg">
              Learn from international veterans and certified ICC coaches. Our methodology blends technical refinement with mental conditioning to produce match-ready professionals.
            </p>

            {/* Features List with Dividers */}
            <div className="space-y-4 mb-10 max-w-lg">
              {features.map((item, index) => (
                <div key={index} className="pb-4 border-b border-white/10 flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-white tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <Link
                to="/meet-coaches"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-full text-xs font-normal uppercase tracking-widest transition-all duration-300 group w-fit cursor-pointer"
              >
                MEET THE COACHES <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Image Pane */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative min-h-80 sm:min-h-105 lg:min-h-ful overflow-hidden shadow-lg"
          >
            <img
              src={elite}
              alt="Elite coaching session in locker room"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/10 lg:hidden" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EliteCoaching;
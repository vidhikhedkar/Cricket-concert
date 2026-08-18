import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ruralindia from '../../assets/WomensCricket/section8/ruralindia.png';
import mindset from '../../assets/WomensCricket/section8/mindset.png';
import tacticalevolution from '../../assets/WomensCricket/section8/tactical-evolution.png';
import { Link } from 'react-router-dom';

const InspiringStories = () => {
  const stories = [
    {
      category: "Feature",
      categoryColor: "text-[#F43F5E]",
      title: "Breaking Boundaries in Rural India",
      description: "How grassroots academies are unearthing the next generation of fast bowlers.",
      image: ruralindia,
    },
    {
      category: "Interview",
      categoryColor: "text-[#F43F5E]",
      title: "The Mindset of a Champion",
      description: "An exclusive sit-down with the leading run-scorer of the decade.",
      image: mindset,
    },
    {
      category: "Analysis",
      categoryColor: "text-[#F43F5E]",
      title: "Tactical Evolution of T20",
      description: "Analyzing the shift in power-hitting dynamics in the modern game.",
      image: tacticalevolution,
    },
  ];

  return (
    <section className="bg-[#F2F6FF] py-16  text-[#1C1B1B] relative overflow-hidden mb-15">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1C1B1B] uppercase">
              Inspiring Stories
            </h2>
          </div>
          
          <Link
            to="#read-more"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4C5D8E] hover:text-[#4C5D8E] transition-colors w-fit group border-b border-[#4C5D8E]"
          >
            READ MORE <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg  flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-6 flex flex-col grow justify-between">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${story.categoryColor} block mb-2`}>
                    {story.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1B1B] tracking-tight mb-3 group-hover:text-[#4C5D8E] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444748] leading-relaxed font-regular">
                    {story.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InspiringStories;
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import anoucement from '../../assets/WomensCricket/section10/squad-anoucement.png';
import broadcast from '../../assets/WomensCricket/section10/new-broadcast.png';
import { Link } from 'react-router-dom';

const WomensLatestNews = () => {
  const newsItems = [
    {
      category: "ANNOUNCEMENT",
      categoryColor: "text-rose-600",
      title: "Host Cities Confirmed for 2027 World Cup",
      description: "The ICC has officially announced the list of stadiums that will host matches during the upcoming global...",
      image: anoucement,
    },
    {
      category: "ANALYSIS",
      categoryColor: "text-rose-600",
      title: "The Tactical Shift in Modern Tournament Play",
      description: "How data analytics and match-up strategies are fundamentally altering the way nations approach knockout...",
      image: broadcast,
    },
    {
      category: "INTERVIEW",
      categoryColor: "text-rose-600",
      title: "\"It's about leaving a legacy\" - Player Exclusive",
      description: "An in-depth conversation with the leading run-scorer on the pressure of performing on the grandest stage of...",
      image: broadcast,
    },
  ];

  return (
    <section className="bg-white py-16 text-[#1C1B1B] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1B1B] uppercase">
              Latest News
            </h2>
          </div>

          <Link
            href="#all-news"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4C5D8E] hover:text-[#4C5D8E] border-b border-[#4C5D8E] transition-colors w-fit group tracking-wider"
          >
            ALL NEWS <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 flex flex-col grow justify-between">
                <div>
                  <span className={`text-xs font-black uppercase tracking-wider ${item.categoryColor} block mb-2`}>
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black  tracking-tight mb-3 group-hover:text-[#4C5D8E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
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

export default WomensLatestNews;
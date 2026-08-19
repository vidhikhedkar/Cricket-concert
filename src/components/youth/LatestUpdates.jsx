import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import development from '../../assets/youth/section12/development.png'; 
import scouting from '../../assets/youth/section12/scouting.png'; 
import tournment from '../../assets/youth/section12/tournment.png'; 
import { Link } from 'react-router-dom';

const LatestUpdates = () => {
  const articles = [
    {
      image: development,
      category: "DEVELOPMENT",
      date: "Oct 05, 2024",
      title: "New Training Hub Opens in Cape Town",
      description: "Expanding our global footprint with a state-of-the-art high-performance center dedicated to fast bowling analysis.",
    },
    {
      image: tournment,
      category: "TOURNAMENT",
      date: "Oct 12, 2024",
      title: "U-19 Global Cup Dates Announced",
      description: "The highly anticipated international youth tournament is set to kick off this December across three major host cities.",
    },
    {
      image: scouting,
      category: "SCOUTING",
      date: "Oct 08, 2024",
      title: "Top 10 Prospects to Watch",
      description: "Our analytics team breaks down the metrics of the most promising young talents entering this year's regional draft.",
    },
  ];

  return (
    <section className="bg-[#F3F7FF] py-16 text-[#191B23] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
              Latest Updates
            </h2>
          </div>
          
          <Link
            to="/view-all-news"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-regular text-[#00389E] hover:text-blue-600 transition-colors w-fit group tracking-wider uppercase"
          >
            View All News <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" overflow-hidden  flex flex-col group"
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col grow mt-2">
                {/* Category & Date */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#792300]">
                    {article.category}
                  </span>
                  <span className="text-[#434654]">•</span>
                  <span className="text-[11px] font-regular text-[#434654]">
                    {article.date}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#191B23] tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Article Description */}
                <p className="text-xs sm:text-sm text-[#434654] leading-relaxed font-regular">
                  {article.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import medianews1 from '../../assets/media/section3/medianews1.jpg';
import medianews2 from '../../assets/media/section3/medianews2.jpg';
import medianews3 from '../../assets/media/section3/medianews3.jpg';
import medianews4 from '../../assets/media/section3/medianews4.jpg';
import medianews5 from '../../assets/media/section3/medianews5.jpg';
import { Link } from 'react-router-dom';

const MediaLatestNews = () => {
  return (
    <section className="bg-[#F3F3FE] py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            LATEST NEWS
          </h2>
          <Link
            to="/all-news"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A192F] hover:text-blue-600 transition-colors uppercase tracking-wider mt-4 sm:mt-0 group"
          >
            <span>View All News</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Main Featured News Card (Left - 6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between group cursor-pointer overflow-hidden transition-all"
          >
            <div>
              {/* Image Container */}
              <div className="w-full h-64 sm:h-80 overflow-hidden">
                <img
                  src={medianews1}
                  alt="WCC Announces International Championship Schedule"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-8">
                {/* Tag & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#0B4DBB] font-semibold text-[10px] sm:text-xs rounded-full uppercase tracking-wider">
                    Official
                  </span>
                  <span className="text-[#737686] font-semibold text-xs sm:text-sm tracking-wide">
                    24 HOURS AGO
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#191B23] tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  WCC Announces International Championship Schedule
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                  The World Cricket Championship has revealed the highly anticipated fixtures for the 2027 season, spanning 12 nations and promising unprecedented global reach.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column 2x2 Grid (4 smaller cards - 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                img: medianews2,
                tag: "Talent",
                time: "2 DAYS AGO",
                title: "New Generation of Cricket Talent Emerges",
              },
              {
                img: medianews3,
                tag: "Media",
                time: "3 DAYS AGO",
                title: "Global Broadcasting Rights Secured for 2027",
              },
              {
                img: medianews4,
                tag: "Infrastructure",
                time: "4 DAYS AGO",
                title: "New Elite Stadiums Nearing Completion",
              },
              {
                img: medianews5,
                tag: "Community",
                time: "5 DAYS AGO",
                title: "Record-Breaking Fan Engagement Metrics",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="w-full h-40 sm:h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#0B4DBB] font-bold text-[10px] uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <span className="text-[#737686] font-normal text-[10px] sm:text-xs">
                        {item.time}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191B23] tracking-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MediaLatestNews;
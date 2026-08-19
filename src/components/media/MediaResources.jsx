import React from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaImage, FaFileAlt, FaDownload, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MediaResources = () => {
  const resources = [
    {
      title: "MEDIA KIT",
      description: "Comprehensive information packets, historical data, and official WCC organizational details.",
      icon: <FaFolderOpen />,
      actionText: "Download PDF",
      actionIcon: <FaDownload className="text-xs" />,
      href: "#download-pdf",
    },
    {
      title: "BRAND ASSETS",
      description: "High-resolution logos, brand guidelines, and official typography for editorial use.",
      icon: <FaImage />,
      actionText: "Access Assets",
      actionIcon: <FaArrowRight className="text-xs" />,
      href: "#access-assets",
    },
    {
      title: "B-ROLL & DOWNLOADS",
      description: "Uncut footage, clean audio feeds, and official high-res promotional imagery.",
      icon: <FaFileAlt />,
      actionText: "View Library",
      actionIcon: <FaArrowRight className="text-xs" />,
      href: "#view-library",
    },
  ];

  return (
    <section className="bg-[#F3F3FE] py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            MEDIA RESOURCES
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#FAF8FF] rounded-xl p-8 flex flex-col items-center text-center group cursor-pointer transition-all hover:bg-white"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#0B4DBB]/10 text-[#0B4DBB] shadow-sm flex items-center justify-center text-xl mb-6 transition-all group-hover:bg-[#0A192F] group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#191B23] tracking-tight uppercase mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-8 flex-1">
                {item.description}
              </p>

              {/* Action Link */}
              <Link
                to={item.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B4DBB] hover:text-[#191B23] transition-colors uppercase tracking-wider group/link"
              >
                <span>{item.actionText}</span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                  {item.actionIcon}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaResources;
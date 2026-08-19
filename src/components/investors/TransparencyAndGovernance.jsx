import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaChartBar, FaGavel, FaCalendarAlt, FaDownload, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TransparencyAndGovernance = () => {
  const documents = [
    {
      title: "2023 Annual Report",
      description: "Comprehensive overview of financial performance and strategic initiatives.",
      actionText: "Download PDF",
      actionType: "download",
      icon: <FaFileAlt />,
    },
    {
      title: "Q3 Financials",
      description: "Latest quarterly earnings report and management discussion.",
      actionText: "Download PDF",
      actionType: "download",
      icon: <FaChartBar />,
    },
    {
      title: "Corporate Governance",
      description: "Guidelines, committee charters, and ethical standards.",
      actionText: "View Charter",
      actionType: "link",
      icon: <FaGavel />,
    },
    {
      title: "ESG Report 2023",
      description: "Our commitment to environmental sustainability and social impact.",
      actionText: "Download PDF",
      actionType: "download",
      icon: <FaCalendarAlt />,
    },
  ];

  return (
    <section className="bg-[#F3F7FF] py-16 relative overflow-hidden text-white">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            TRANSPARENCY & GOVERNANCE
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 text-[#191B23] shadow-xl flex flex-col justify-between border border-[#C3C5D7]/20 hover:shadow-2xl transition-all"
            >
              <div>
                {/* Icon */}
                <div className=" text-[#434654] flex items-start justify-start text-lg mb-4">
                  {doc.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#191B23] tracking-tight mb-3">
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-2">
                  {doc.description}
                </p>
              </div>

              {/* Action Button/Link */}
              <div>
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D6BFF] hover:text-blue-700 transition-colors uppercase tracking-wider group"
                >
                  <span>{doc.actionText}</span>
                  {doc.actionType === 'download' ? (
                    <FaDownload className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
                  ) : (
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransparencyAndGovernance;
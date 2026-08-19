import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SportsEvents from '../../assets/investors/section5/Sports-Events-Properties.jpg';
import DigitalPlatforms from '../../assets/investors/section5/Digital-Platforms.jpg';
import MediaBroadcastingRights from '../../assets/investors/section5/Media-Broadcasting-Rights.jpg';
import GlobalDevelopmentInitiatives from '../../assets/investors/section5/Global-Development-Initiatives.jpg';
import CommercialPartnerships from '../../assets/investors/section5/Commercial-Partnerships.jpg';

const InvestmentOpportunities = () => {
  const opportunities = [
    {
      title: "Sports & Events Properties",
      description: "Direct equity in marquee global tournaments and emerging regional franchise leagues. High-visibility assets with proven year-over-year attendance and viewership growth.",
      image: SportsEvents,
      imageOnRight: false,
    },
    {
      title: "Digital Platforms",
      description: "Investment in our proprietary OTT streaming services, fantasy sports integrations, and exclusive digital collectibles ecosystems driving year-round fan monetization.",
      image: DigitalPlatforms,
      imageOnRight: true,
    },
    {
      title: "Media & Broadcasting Rights",
      description: "Participate in syndication and global media rights distribution. Our content portfolio commands premium valuations from tier-1 networks globally.",
      image: MediaBroadcastingRights,
      imageOnRight: false,
    },
    {
      title: "Global Development Initiatives",
      description: "Funding infrastructure projects, academies, and grassroots programs in emerging markets, creating long-term brand equity and localized revenue streams.",
      image: GlobalDevelopmentInitiatives,
      imageOnRight: true,
    },
    {
      title: "Commercial Partnerships",
      description: "Strategic sponsorships, licensing, and merchandising opportunities leveraging the immense brand power of WCC properties.",
      image: CommercialPartnerships,
      imageOnRight: false,
    },
  ];

  return (
    <section className="bg-[#FAF8FF] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-[#191B23]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-start mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            INVESTMENT OPPORTUNITIES
          </h2>
        </div>

        {/* Cards List */}
        <div className="space-y-6 sm:space-y-8">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col md:flex-row items-stretch overflow-hidden"
            >
              {/* Image Container (Left or Right depending on layout flag) */}
              <div 
                className={`w-full md:w-5/12 h-56 sm:h-64 md:h-auto shrink-0 overflow-hidden relative ${
                  item.imageOnRight ? 'order-1 md:order-2' : 'order-1 md:order-1'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Content Container */}
              <div 
                className={`w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-center ${
                  item.imageOnRight ? 'order-2 md:order-1 md:pr-10' : 'order-2 md:order-2 md:pl-10'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#191B23] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#434654] font-normal leading-relaxed mb-6">
                  {item.description}
                </p>
                <a
                  href="#learn-more"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A192F] hover:text-blue-600 transition-colors uppercase tracking-wider group cursor-pointer w-fit"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InvestmentOpportunities;
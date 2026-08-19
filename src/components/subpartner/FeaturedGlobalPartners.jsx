import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import AeroFlyAirways from '../../assets/subpartner/section4/AeroFly-Airways.png';
import TechCorpGlobal from '../../assets/subpartner/section4/TechCorp-Global.png';
import { Link } from 'react-router-dom';

const FeaturedGlobalPartners = () => {
  const partners = [
    {
      name: "TechCorp Global",
      country: "USA",
      description: "Driving digital transformation in cricket analytics and fan engagement platforms worldwide.",
      image: TechCorpGlobal,
      link: "#case-study",
    },
    {
      name: "AeroFly Airways",
      country: "UAE",
      description: "Connecting teams, officials, and fans across the globe as the official travel partner.",
      image: AeroFlyAirways,
      link: "#case-study",
    },
  ];

  return (
    <section className="bg-[#F4F8FF] py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23]">
            Featured Global Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl  shadow-sm border border-[#C3C5D7]/30 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all bg-white"
            >
              {/* Partner Image */}
              <div className="w-full sm:w-48 h-48 rounded-l-xl overflow-hidden shrink-0 shadow-inner">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Details */}
              <div className="flex flex-col justify-between flex-1 w-full">
                <div>
                  <div className="flex items-center justify-between sm:justify-start gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#191B23] tracking-tight">
                      {partner.name}
                    </h3>
                    <span className="text-[10px] font-semibold bg-[#EDEDF8] text-[#434654] px-2.5 py-0.5 rounded-full tracking-wider">
                      {partner.country}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>

                {/* Link */}
                <div>
                  <Link
                    to="/partner.link"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-regular text-[#00389E] hover:text-blue-700 tracking-wider transition-colors group/link"
                  >
                    View Case Study <FaArrowRight className="text-[10px] transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedGlobalPartners;
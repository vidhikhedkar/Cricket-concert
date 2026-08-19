import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import titlesponsors from '../../assets/sponsors/section2/title-sponsors.jpg';
import { FaRegCircleCheck } from 'react-icons/fa6';

const OfficialTitleSponsor = () => {
  const benefits = [
    "Naming rights for all major tournaments",
    "Prime broadcast integration reaching 108 countries",
    "Exclusive digital content partnerships",
  ];

  return (
    <section className="bg-[#F1F6FF] py-16 text-slate-900 relative overflow-hidden">
      <div className="container">
        
        {/* Main Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Trophy Image */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden shadow-lg aspect-4/3 bg-slate-950">
            <img
              src={titlesponsors}
              alt="Championship Trophy"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subheading */}
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3">
              OFFICIAL TITLE SPONSOR
            </span>

            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-[#191B23] uppercase leading-tight mb-6">
              Driving Excellence in Global Cricket
            </h2>

            {/* Logo Placeholder Box */}
            <div className="w-full sm:w-40 h-12 bg-[#E2E1ED] rounded-lg flex items-center justify-center mb-6 shadow-inner">
              <span className="text-xs font-semibold tracking-widest text-[#434654] uppercase">
                LOGO PLACEHOLDER
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-8 max-w-md">
              Our Title Sponsor represents the pinnacle of corporate partnership, enjoying exclusive naming rights and unprecedented global broadcast exposure across all ICPL premier events.
            </p>

            {/* Benefits List */}
            <div className="space-y-3.5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaRegCircleCheck  className="text-[#0A192F] shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm font-regular text-[#434654] tracking-wide">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OfficialTitleSponsor;
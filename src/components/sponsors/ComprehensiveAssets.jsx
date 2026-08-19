import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaBuilding, FaTicketAlt } from 'react-icons/fa';
import comprehensive from '../../assets/sponsors/section6/comprehensive-assets.jpg';

const ComprehensiveAssets = () => {
  const assets = [
    {
      icon: <FaDesktop className="text-[#0A192F] text-md" />,
      title: "Broadcast & Media Rights",
      description: "On-screen graphics, virtual advertising, and commercial broadcast spots.",
    },
    {
      icon: <FaBuilding className="text-[#0A192F] text-md" />,
      title: "In-Stadia Branding",
      description: "Prime LED perimeter boards, sight-screen branding, and giant screen activations.",
    },
    {
      icon: <FaTicketAlt className="text-[#0A192F] text-md" />,
      title: "Hospitality & Ticketing",
      description: "Exclusive suite access, VIP experiences, and premium ticket allocations.",
    },
  ];

  return (
    <section className="bg-white py-16 text-[#0A192F] relative overflow-hidden">
      <div className="container">
        
        {/* Main Grid Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Heading & Feature Items */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subheading */}
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3">
              COMPREHENSIVE ASSETS
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase leading-tight mb-4">
              Maximize Your Brand Potential
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-10">
              Our partnership packages are built on a foundation of premium assets, delivering value across multiple touchpoints.
            </p>

            {/* Assets List */}
            <div className="space-y-8">
              {assets.map((asset, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-full bg-[#EDEDF8] shadow-sm flex items-center justify-center shrink-0 mt-1">
                    {asset.icon}
                  </div>

                  {/* Text Info */}
                  <div>
                    <h3 className="text-base font-semibold text-[#191B23] tracking-tight mb-1">
                      {asset.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stadium Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-slate-950">
            <img
              src={comprehensive}
              alt="Comprehensive Assets Stadium"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComprehensiveAssets;
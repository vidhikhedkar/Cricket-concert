import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PartnershipLevels = () => {
  const tiers = [
    {
      name: "Platinum Partner",
      description: "Maximum visibility across all global events and premium digital real estate.",
      features: [
        "Global LED perimeter boards",
        "Broadcast integrations",
        "VVIP Hospitality suites",
      ],
      borderGradient: 'linear-gradient(to right, #D1D5DB, #9CA3AF)',
      buttonColor: "text-[#00389E] hover:text-[#00389E]",
    },
    {
      name: "Gold Partner",
      description: "Strong regional presence and targeted digital campaigns for key markets.",
      features: [
        "Regional LED perimeter boards",
        "Targeted social media campaigns",
        "VIP Hospitality access",
      ],
      borderGradient: 'linear-gradient(to right, #FDE047, #EAB308)',
      buttonColor: "text-[#00389E] hover:text-[#00389E]",
    },
    {
      name: "Silver Partner",
      description: "Entry-level engagement focusing on specific tournaments or demographics.",
      features: [
        "Static stadium branding",
        "Logo on partner collateral",
        "Premium ticketing",
      ],
      borderGradient: 'linear-gradient(to right, #9CA3AF, #6B7280)',
      buttonColor: "text-[#00389E] hover:text-[#00389E]",
    },
    {
      name: "Official Supplier",
      description: "Value-in-kind partnerships providing essential services to the league.",
      features: [
        "Category exclusivity",
        "Product integration",
        "Official designation",
      ],
      borderGradient: 'linear-gradient(to right, #00389E, #3B82F6)',
      buttonColor: "text-blue-600 hover:text-blue-800",
    },
  ];

  return (
    <section className="bg-white py-16 text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3 block">
            PARTNERSHIP LEVELS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase mb-4">
            Choose Your Impact
          </h2>
          <p className="text-sm sm:text-base text-[#434654] font-normal leading-relaxed">
            We offer flexible partnership tiers designed to align with your brand's strategic objectives and global marketing goals.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF8FF] rounded-2xl p-8 shadow-sm border border-[#C3C5D7]/30 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Gradient Border Accent (Reliable absolute bar approach) */}
              <div 
                className="absolute top-0 left-0 right-0 h-2" 
                style={{ background: tier.borderGradient }}
              />

              <div>
                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-[#191B23] tracking-tight mb-3">
                  {tier.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-3.5 mb-8 ">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#0A192F] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <FaCheck className="text-[9px]" />
                      </div>
                      <span className="text-xs sm:text-sm font-regular text-[#434654] tracking-wide leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  to="#learn-more"
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors group w-fit ${tier.buttonColor}`}
                >
                  Learn more <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipLevels;
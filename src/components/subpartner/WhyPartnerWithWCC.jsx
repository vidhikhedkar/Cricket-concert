import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLightbulb, FaUsers, FaHandshake, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const WhyPartnerWithWCC = () => {
  const benefits = [
    {
      title: "Global Visibility",
      description: "Access a massive, diverse, and deeply engaged audience across multiple continents.",
      icon: <FaGlobe />,
    },
    {
      title: "Innovation Hub",
      description: "Collaborate on cutting-edge sports tech, from broadcasting to performance analytics.",
      icon: <FaLightbulb />,
    },
    {
      title: "Audience Demographics",
      description: "Target highly desirable demographics with a passion that transcends traditional marketing.",
      icon: <FaUsers />,
    },
    {
      title: "B2B Networking",
      description: "Join an exclusive network of global business leaders and decision-makers.",
      icon: <FaHandshake />,
    },
    {
      title: "Brand Association",
      description: "Align your brand with the prestige, integrity, and rich heritage of elite cricket.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Measurable ROI",
      description: "Data-driven partnership activations designed to deliver clear, accountable business results.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23]">
            Why Partner With WCC
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-start group"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 mb-4 sm:mb-4">
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-full bg-[#0A192F] text-white flex items-center justify-center sm:mb-4 mb-2 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <span className="text-base">{benefit.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-regular text-[#191B23] tracking-tight">
                  {benefit.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyPartnerWithWCC;
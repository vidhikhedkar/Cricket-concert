import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaLaptop, FaBuilding, FaHandshake, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const StrategicValue = () => {
  const cards = [
    {
      icon: <FaBullhorn className="text-[#C1CEFF] text-md" />,
      title: "Worldwide Exposure",
      description: "Put your brand in front of millions of passionate fans through extensive live broadcasts and global media coverage.",
    },
    {
      icon: <FaLaptop className="text-[#C1CEFF] text-md" />,
      title: "Digital Integration",
      description: "Engage fans through innovative digital activations across our app, website, and social media channels.",
    },
    {
      icon: <FaBuilding className="text-[#C1CEFF] text-md" />,
      title: "Premium Stadium Branding",
      description: "Dominate the visual landscape with high-impact LED perimeter boards and physical branding assets.",
    },
    {
      icon: <FaHandshake className="text-[#C1CEFF] text-md" />,
      title: "B2B Networking",
      description: "Connect with other global leaders and decision-makers in our exclusive VIP corporate hospitality areas.",
    },
    {
      icon: <FaShieldAlt className="text-[#C1CEFF] text-md" />,
      title: "Brand Association",
      description: "Align your brand with the prestige, excellence, and sporting integrity of the world's premier cricket league.",
    },
    {
      icon: <FaChartLine className="text-[#C1CEFF] text-md" />,
      title: "Measurable ROI",
      description: "Receive comprehensive analytics and reporting on brand visibility, engagement, and media value.",
    },
  ];

  return (
    <section className="bg-[#F1F6FF] py-16  text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-start max-w-2xl mb-10">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3 block">
            STRATEGIC VALUE
          </span>
          <h2 className="text-2xl sm:text-4xl  font-bold tracking-tight text-[#191B23] uppercase">
            Why Partner With ICPL?
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 sm:p-10 border border-[#C3C5D7]/30 flex flex-col justify-start"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 mb-4 sm:mb-6">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center mb-6 shadow-md">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#191B23] tracking-tight mb-3">
                  {card.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicValue;
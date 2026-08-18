import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaUsers, FaGraduationCap } from 'react-icons/fa';

const FutureVision = () => {
  const visions = [
    {
      title: "Equal Investment",
      description: "Striving for pay parity and equitable resource allocation across all levels of the professional game.",
      icon: <FaWallet className="text-white text-lg" />,
    },
    {
      title: "Mass Participation",
      description: "Driving grassroots programs to ensure every young girl has access to a bat and ball.",
      icon: <FaUsers className="text-white text-lg" />,
    },
    {
      title: "Youth Pathways",
      description: "Building robust academy structures to nurture the next generation of elite talent.",
      icon: <FaGraduationCap className="text-white text-lg" />,
    },
  ];

  return (
    <section className="bg-[#0A192F] py-16 text-white relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-6xl font-bold tracking-tight uppercase">
            Future Vision
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-15 h-15 rounded-full bg-white/10 flex items-center justify-center mb-4 shadow-inner">
                {vision.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 tracking-wide">
                {vision.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm font-regular">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FutureVision;
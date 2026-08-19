import React from 'react';
import { motion } from 'framer-motion';
import JamesSterling from '../../assets/investors/section9/James-Sterling.jpg';
import ElenaRostova from '../../assets/investors/section9/Elena-Rostova.jpg';
import DavidChen from '../../assets/investors/section9/David-Chen.jpg';

const ExecutiveLeadership = () => {
  const leaders = [
    {
      name: "James Sterling",
      role: "Chief Executive Officer",
      description: "Former MD at Global Sports Media. 20+ years driving international sports expansion.",
      image: JamesSterling,
    },
    {
      name: "Elena Rostova",
      role: "Chief Financial Officer",
      description: "Previously Partner at Tier 1 Investment Bank, specializing in sports media rights.",
      image: ElenaRostova,
    },
    {
      name: "David Chen",
      role: "Chief Commercial Officer",
      description: "Pioneer in sports digital transformation and international licensing.",
      image: DavidChen,
    },
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase mb-4">
            EXECUTIVE LEADERSHIP
          </h2>
          <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
            Guided by experienced professionals with a proven track record in global sports management and institutional finance.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 text-center flex flex-col items-center transition-all"
            >
              {/* Leader Image */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-slate-50">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-[#191B23] tracking-tight mb-1">
                {leader.name}
              </h3>

              {/* Role */}
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2D6BFF] mb-2 block">
                {leader.role}
              </span>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExecutiveLeadership;
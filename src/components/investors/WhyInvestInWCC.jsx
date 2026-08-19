import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaChartLine, FaLaptopCode, FaSeedling } from 'react-icons/fa';
import InvestINWCC from '../../assets/investors/section2/Invest-IN-WCC.jpg';

const WhyInvestInWCC = () => {
  const benefits = [
    {
      title: "Global Audience",
      description: "Cricket boasts the second-largest global fan base, with rapidly expanding demographics across key economic corridors.",
      icon: <FaGlobe className='text-lg'/>,
    },
    {
      title: "Growing Markets",
      description: "Strategic penetration into the Americas and Europe presents unprecedented commercial upside and broadcasting potential.",
      icon: <FaChartLine className='text-lg'/>,
    },
    {
      title: "Digital Innovation",
      description: "Pioneering direct-to-consumer platforms, Web3 integration, and advanced data analytics to maximize fan monetization.",
      icon: <FaLaptopCode className='text-lg'/>,
    },
    {
      title: "Long-Term Development",
      description: "Sustainable grassroots programs ensuring a continuous pipeline of world-class talent and engaged local communities.",
      icon: <FaSeedling className='text-lg'/>,
    },
  ];

  return (
    <section className="bg-[#F2F6FF] py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  items-center">
          
          {/* Left Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={InvestINWCC}
                alt="Why Invest In WCC"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] mb-10">
              WHY INVEST IN WCC
            </h2>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className=" text-[#2D6BFF] flex items-center justify-center shrink-0 mt-2 ">
                    <span className="text-sm">{benefit.icon}</span>
                  </div>

                  {/* Text content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#191B23] tracking-tight mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestInWCC;
import React from 'react';
import { motion } from 'framer-motion';

const OurNetwork = () => {
  const brands = [
    "BRAND A", "BRAND B", "BRAND C", "BRAND D", "BRAND E", "BRAND F",
    "BRAND G", "BRAND H", "BRAND I", "BRAND J", "BRAND K", "BRAND L"
  ];

  return (
    <section className="bg-white py-16 text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00389E] mb-3 block">
            OUR NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            Trusted by Global Leaders
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#E2E1ED] h-20 rounded-lg flex items-center justify-center p-4 hover:border-blue-600 transition-colors group"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#434654] group-hover:text-blue-600 uppercase transition-colors">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurNetwork;
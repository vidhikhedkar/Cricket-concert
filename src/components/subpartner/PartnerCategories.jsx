import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaSatellite, FaBuilding, FaTools, FaUtensils, FaGraduationCap, FaPlane, FaStore } from 'react-icons/fa';

const PartnerCategories = () => {
  const categories = [
    { name: "Technology", icon: <FaLaptopCode className='text-2xl' /> },
    { name: "Broadcast", icon: <FaSatellite className='text-2xl' /> },
    { name: "Venue", icon: <FaBuilding className='text-2xl' /> },
    { name: "Equipment", icon: <FaTools className='text-2xl' /> },
    { name: "Hospitality", icon: <FaUtensils className='text-2xl' /> },
    { name: "Education", icon: <FaGraduationCap className='text-2xl' /> },
    { name: "Travel", icon: <FaPlane className='text-2xl' /> },
    { name: "Commercial", icon: <FaStore className='text-2xl' /> },
  ];

  return (
    <section className="bg-white py-16  relative overflow-hidden text-[#191B23]">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23]">
            Partner Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#F4F8FF] rounded-xl p-8 shadow-sm border border-[#C3C5D7]/10 flex flex-col items-center justify-center text-center group cursor-pointer transition-all hover:shadow-md hover:bg-white"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center text-[#0A192F] mb-4 transition-all  ">
                <span className="text-lg">{category.icon}</span>
              </div>

              {/* Category Name */}
              <span className="text-sm sm:text-base font-regular text-[#191B23] tracking-tight">
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerCategories;
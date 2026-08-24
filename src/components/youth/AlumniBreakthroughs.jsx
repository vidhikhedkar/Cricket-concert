import React from 'react';
import { motion } from 'framer-motion';
import DavidReynolds from '../../assets/youth/section11/David-Reynolds.jpg'; 
import MarcusLee from '../../assets/youth/section11/Marcus-Lee.jpg'; 

const AlumniBreakthroughs = () => {
  const testimonials = [
    {
      name: "David Reynolds",
      role: "Class of 2019 • National Team Captain",
      quote: `"The ICPL Academy structure provided me with the technical foundation and mental toughness required to survive the pressures of international cricket. The biomechanical analysis completely revamped my bowling action."`,
      image: DavidReynolds,
    },
    {
      name: "Marcus Lee",
      role: "Class of 2021 • Franchise MVP",
      quote: `"Transitioning from the Youth U-19 World Challenge straight into the main franchise draft was seamless. The competition level at the academy perfectly mirrored professional environments."`,
      image: MarcusLee,
    },
  ];

  return (
    <section className="bg-white py-16 my-6 border-t border-b border-[#C3C5D74D] text-[#191B23] relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#191B23]">
            Alumni Breakthroughs
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF8FF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm border border-[#C3C5D7]/30 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
            >
              {/* Avatar Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content Info */}
              <div className="flex flex-col grow">
                <h3 className="text-lg sm:text-xl font-bold text-[#191B23] tracking-tight">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold text-[#00389E] tracking-wider uppercase mb-4 mt-1">
                  {item.role}
                </p>
                <blockquote className="text-xs sm:text-sm text-[#434654] font-normal leading-relaxed italic">
                  {item.quote}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AlumniBreakthroughs;
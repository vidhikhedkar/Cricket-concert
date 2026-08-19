import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaDumbbell, FaChartBar } from 'react-icons/fa';
import coaching from '../../assets/youth/section3/coaching-framework.jpg';

const EliteCoachingFrameworks = () => {
  const frameworks = [
    {
      icon: <FaBrain className="text-white text-lg" />,
      title: "Cognitive Training",
      description: "Enhancing decision-making and situational awareness under pressure.",
    },
    {
      icon: <FaDumbbell className="text-white text-lg" />,
      title: "Physical Conditioning",
      description: "Tailored athletic development to prevent injury and maximize power.",
    },
    {
      icon: <FaChartBar className="text-white text-lg" />,
      title: "Biomechanical Analysis",
      description: "Advanced motion capture to refine technique and improve efficiency.",
    },
  ];

  return (
    <section className="bg-[#FAF8FF] py-16  text-[#191B23] relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl  font-bold tracking-tight text-[#191B23] uppercase leading-tight mb-4">
              Elite Coaching<br />Frameworks
            </h2>
            <p className="text-sm sm:text-base text-[#434654] font-regular leading-relaxed mb-8">
              Our development programs are built on data-driven methodologies and world-class coaching. We focus on holistic player development, combining technical skills, tactical awareness, and mental resilience.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {frameworks.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#191B23] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-16/11">
              <img
                src={coaching}
                alt="Elite Coaching Frameworks"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EliteCoachingFrameworks;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

const SponosorsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the minimum commitment for a sponsorship?",
      answer: "We offer flexible partnership tiers designed to accommodate various budget levels and marketing objectives, starting from single-tournament activations to multi-year global alliances.",
    },
    {
      question: "Can we sponsor specific regional tournaments?",
      answer: "Yes, brands have the option to target specific territories or regional segments depending on their geographic marketing strategy and target audience.",
    },
    {
      question: "How do you measure sponsorship ROI?",
      answer: "We provide comprehensive analytics and reporting, tracking metrics such as broadcast viewership, brand visibility, social media engagement, and media value equivalence.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 text-slate-900 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F1F6FF] rounded-2xl border border-[#C3C5D7]/30 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-regular text-[#191B23] tracking-tight">
                    {faq.question}
                  </span>

                  <div className={` flex items-center cursor-pointer justify-center shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <IoMdArrowDropdown  className="text-slate-700 text-2xl" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="bg-white px-6 pb-6 pt-2 text-xs sm:text-sm text-[#191B23] font-regular leading-relaxed border-t border-[#C3C5D7]/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SponosorsFAQ;
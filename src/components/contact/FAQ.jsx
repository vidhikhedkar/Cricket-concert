import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can i became WCC Partner ?",
      answer: "You can become a WCC partner by reaching out to our partnerships team via partnerships@wcc.com or by filling out the contact form above with your organization details."
    },
    {
      question: "Where i can find tournament schedules ?",
      answer: "Tournament schedules are regularly updated on our official website under the Tournaments section, providing full fixture dates, times, and venue details."
    },
    {
      question: "Where i Can see live scores ?",
      answer: "Live scores can be accessed directly on our platform via the Cricket & Matches section, or through our official mobile application updates."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-4xl font-bold text-[#191B23] tracking-tight uppercase mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-[#434654] text-sm sm:text-base">
            Find quick answers to common queries.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E2E1ED] shadow-sm transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-regular text-[#434654] group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 text-[#434654] group-hover:text-blue-600 ${isOpen ? 'rotate-180' : ''}`}>
                    <HiChevronDown className="w-6 h-6" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-[#434654] text-sm sm:text-base leading-relaxed border-t border-[#E2E1ED] mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
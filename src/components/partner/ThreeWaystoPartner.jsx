import React from 'react';
import partners from '../../assets/partner/section3/partners.jpg';
import investors from '../../assets/partner/section3/investors.jpg';
import sponsors from '../../assets/partner/section3/sponsors.jpg';

const ThreeWaystoPartner = () => {
  const cards = [
    {
      title: "Sponsors",
      description: "Elevate your brand with premier visibility across global tournaments, driving unprecedented fan engagement and global reach.",
      buttonText: "BECOME A SPONSOR",
      image: sponsors,
    },
    {
      title: "Partners",
      description: "Integrate your cutting-edge technology and media solutions to revolutionize the global cricket experience and development.",
      buttonText: "BECOME A PARTNER",
      image: partners,
    },
    {
      title: "Investors",
      description: "Capitalize on the rapid global expansion of cricket. Drive long-term strategic growth and build institutional legacy.",
      buttonText: "EXPLORE INVESTMENT",
      image: investors,
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#191B23] tracking-tight uppercase">
            THREE WAYS TO PARTNER
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl h-120 sm:h-130 flex flex-col justify-end p-6 sm:p-8 group"
            >
              {/* Background Image & Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black via-[#0F2B5B]/20 to-[#0F2B5B]"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF8FF] mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[#FAF8FFCC]/80 text-xs sm:text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <button className="w-full bg-[#FFFFFF]/33 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-xl border border-white/20 transition-all duration-300 cursor-pointer">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThreeWaystoPartner;
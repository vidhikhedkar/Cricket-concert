import React, { useRef } from 'react';
import Series1 from '../../assets/home/section9/Series1.jpg';
import Series2 from '../../assets/home/section9/Series2.jpg';
import Series3 from '../../assets/home/section9/Series3.jpg';
import Series4 from '../../assets/home/section9/Series4.jpg';

const seriesData = [
  {
    id: 1,
    title: 'ICC World Cup 2026',
    date: '28 May 2026',
    image: Series1,
  },
  {
    id: 2,
    title: 'ICC Champions Trophy 2025',
    date: '19 Feb 2025',
    image: Series2,
  },
  {
    id: 3,
    title: 'Indian Premier League 2026',
    date: '22 Mar 2026',
    image: Series3,
  },
  {
    id: 4,
    title: 'Asia Cup 2025',
    date: '10 Sep 2025',
    image: Series4,
  },
];

const ArrowRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const SeriesTournaments = () => {
  const scrollRef = useRef(null);


  const handleScrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.querySelector(':scope > div');
      if (firstCard) {
        const style = window.getComputedStyle(container);
        const gap = parseFloat(style.gap) || 20;
        const cardWidth = firstCard.clientWidth + gap;
        container.scrollBy({
          left: cardWidth,
          behavior: 'smooth',
        });
      }
    }
  };


  return (
    <section className="container py-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B192C] tracking-tight">
          Series & Tournaments
        </h2>

        <button
          type="button"
          onClick={() => { }}
          className="group flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-[#0B192C] hover:text-[#0B5FFF] transition-colors cursor-pointer self-start sm:self-auto active:scale-95"
        >
          <span>View All Tournaments</span>
          <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="relative group/carousel">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory mx-0  scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {seriesData.map((item) => (
            <div
              key={item.id}
              className="group/card relative w-65 sm:w-70 shrink-0 snap-start h-50 sm:h-55 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-100/50 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 h-full p-4 sm:p-5 flex flex-col justify-end text-white">
                <div className="flex items-end justify-between gap-2">
                  <div className="pr-2">
                    <h3 className="text-base sm:text-lg font-bold leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-2">
                      Starts From
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      {item.date}
                    </p>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover/card:bg-white group-hover/card:text-black transition-colors duration-200">
                    <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleScrollRight}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-100 items-center justify-center hover:bg-slate-50 transition-all cursor-pointer active:scale-95"
          aria-label="Scroll right"
        >
          <ArrowRightIcon className="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </section>
  );
};

export default SeriesTournaments;
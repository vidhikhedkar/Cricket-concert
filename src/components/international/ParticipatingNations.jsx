import React, { useEffect, useRef } from 'react';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const ParticipatingNations = () => {
  const nations = [
    {
      name: 'India',
      rank: 'Rank #1',
      captain: 'R. Sharma',
      flag: india,
    },
    {
      name: 'Australia',
      rank: 'Rank #2',
      captain: 'P. Cummins',
      flag: Australia,
    },
    {
      name: 'England',
      rank: 'Rank #3',
      captain: 'J. Buttler',
      flag: England,
    },
    {
      name: 'South Africa',
      rank: 'Rank #4',
      captain: 'T. Bavuma',
      flag: SouthAfrica,
    },
    {
      name: 'New Zealand',
      rank: 'Rank #5',
      captain: 'K. Williamson',
      flag: NewZealand,
    },
    {
      name: 'Pakistan',
      rank: 'Rank #6',
      captain: 'B. Azam',
      flag: Pakistan,
    },
    {
      name: 'Sri Lanka',
      rank: 'Rank #7',
      captain: 'C. Asalanka',
      flag: SriLanka,
    },
    {
      name: 'Bangladesh',
      rank: 'Rank #8',
      captain: 'N. Hasan',
      flag: Bangladesh,
    },
  ];

  const scrollerRef = useRef(null);

  // Smooth continuous auto-scroll effect with pause on hover
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId;
    let scrollSpeed = 0.8;
    let isPaused = false;

    const scroll = () => {
      if (scroller && !isPaused) {
        scroller.scrollLeft += scrollSpeed;
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scroller) {
        scroller.removeEventListener('mouseenter', handleMouseEnter);
        scroller.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Duplicate items array to make the infinite loop completely seamless
  const duplicatedNations = [...nations, ...nations];

  return (
    <section className=" bg-white py-12 font-sans overflow-hidden">
      <div className="container mb-10">
        {/* Section Heading with subtle entrance animation */}
        <div className="transition-all duration-700 transform">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F4D] tracking-tight">
            Participating Nations
          </h2>
        </div>
      </div>

      {/* Dynamic Scrolling Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Fades for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>

        <div
          ref={scrollerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 lg:px-8 select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedNations.map((nation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#C4C7C8]/30 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between min-w-75 sm:min-w-85 max-w-85 shrink-0 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Left Side: Flag & Details */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#C4C7C8]/30 shrink-0 shadow-inner bg-slate-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={nation.flag}
                    alt={nation.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1C1B1B] transition-colors duration-300 group-hover:text-[#0b1329]">
                    {nation.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#444748] mt-0.5">
                    {nation.rank}
                  </p>
                </div>
              </div>

              {/* Right Side: Captain */}
              <div className="text-right pl-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#1C1B1B]">
                  Captain
                </p>
                <p className="text-sm font-bold text-[#0B1F4D] mt-0.5">
                  {nation.captain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipatingNations;
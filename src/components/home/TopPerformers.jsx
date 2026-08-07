import React from 'react';
import top1 from '../../assets/home/section6/top1.jpg';
import top2 from '../../assets/home/section6/top2.jpg';
import top3 from '../../assets/home/section6/top3.jpg';
import top4 from '../../assets/home/section6/top4.jpg';

const performersData = [
  {
    id: 1,
    category: 'Most Runs',
    stat: '726',
    name: 'Virat Kohli',
    subtitle: 'In 12 Matches',
    image: top1,
  },
  {
    id: 2,
    category: 'Most Wickets',
    stat: '18',
    name: 'Adam Zampa',
    subtitle: 'In 8 Matches',
    image: top2,
  },
  {
    id: 3,
    category: 'Highest Score',
    stat: '211*',
    name: 'Rohit Sharma',
    subtitle: 'vs SL',
    image: top3,
  },
  {
    id: 4,
    category: 'Best Strike Rate',
    stat: '187.6',
    name: 'Tim David',
    subtitle: 'In 10 Matches',
    image: top4,
  },
];

const TopPerformers = () => {
  return (
    <section className="container mx-auto  py-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B192C] tracking-tight">
          Top Performers
        </h2>

        <button
          type="button"
          onClick={() => { }}
          className="group flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer self-start sm:self-auto active:scale-95"
        >
          <span>View Full Stats</span>
          <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {performersData.map((item) => (
          <div
            key={item.id}
            className="group relative h-55 sm:h-60 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-100/50"
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />

            <div className="relative z-10 h-full p-4 sm:p-5 flex flex-col justify-between text-white">
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 opacity-90 tracking-wide">
                  {item.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                  {item.stat}
                </h3>
              </div>

              <div>
                <p className="text-base sm:text-lg font-bold leading-tight">
                  {item.name}
                </p>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPerformers;
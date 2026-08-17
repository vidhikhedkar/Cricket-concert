import React from 'react'
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const TopRankedNations = () => {
  const topNations = [
    {
      name: 'India',
      rank: 'Rank #1',
      flag: india,
    },
    {
      name: 'Australia',
      rank: 'Rank #2',
      flag: Australia,
    },
    {
      name: 'England',
      rank: 'Rank #3',
      flag: England,
    },
    {
      name: 'South Africa',
      rank: 'Rank #4',
      flag: SouthAfrica,
    },
  ];

  return (
    <section className="bg-[#F3F3FE] py-16  font-sans">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight">
            Top Ranked Nations
          </h2>
        </div>

        {/* Top Ranked Nations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topNations.map((nation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#C3C5D7]/50 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Flag Container */}
              <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-100 shadow-inner bg-slate-50 flex items-center justify-center mb-4">
                <img
                  src={nation.flag}
                  alt={nation.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nation Name & Rank */}
              <h3 className="text-xl font-semibold text-[#191B23] mb-1">
                {nation.name}
              </h3>
              <p className="text-sm font-regular text-[#434654]">
                {nation.rank}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopRankedNations;
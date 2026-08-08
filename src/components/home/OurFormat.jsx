import React from 'react';
import {FiClock,FiUsers,FiGlobe,FiArrowRight,FiPlayCircle,FiZap} from 'react-icons/fi';
import { TbChessKnight, TbScale } from 'react-icons/tb';
import object1 from '../../assets/home/section8/Group.png';


const FEATURES_DATA = [
  {
    id: '30-overs',
    icon: FiClock,
    title: '30 OVERS',
    description: 'The ideal format that offers more overs, more action and more excitement.'
  },
  {
    id: 'more-strategy',
    icon: TbChessKnight,
    title: 'MORE STRATEGY',
    description: 'Captains get more room to plan, adapt and make an impact.'
  },
  {
    id: 'more-players',
    icon: FiUsers,
    title: 'MORE PLAYERS',
    description: 'More opportunities for players to perform and shine on the field.'
  },
  {
    id: 'global-appeal',
    icon: FiGlobe,
    title: 'GLOBAL APPEAL',
    description: 'Designed for modern fans and a global cricketing audience.'
  }
];

const GLANCE_DATA = [
  {
    id: 'overs',
    icon: FiClock,
    title: '30',
    subtitle: 'Overs'
  },
  {
    id: 'innings',
    icon: FiZap,
    title: '2',
    subtitle: 'Innings'
  },
  {
    id: 'action',
    icon: FiGlobe,
    title: 'More Overs',
    subtitle: 'More Action'
  },
  {
    id: 'competition',
    icon: TbScale,
    title: 'Balanced',
    subtitle: 'Competition'
  },
  {
    id: 'entertainment',
    icon: FiGlobe,
    title: 'Maximum',
    subtitle: 'Entertainment'
  }
];

const SECTION_CONTENT = {
  badge: '@OUR FORMAT',
  title: 'T30 Format',
  description: 'T30 is the perfect balance between skill, strategy and speed – 30 overs of pure entertainment.',
  leftCtaText: 'Explore T30 Format',
  glanceHeading: 'T30 AT A GLANCE',
  rightCtaText: 'Why T30?'
};

const OurFormat = () => {
  return (
    <section className="container mx-auto py-2  font-sans">
      <div className="bg-white rounded-3xl py-4 sm:py-6 px-6 sm:px-8 lg:px-10 shadow-xl shadow-slate-300 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
          <span className="text-[200px] sm:text-[280px] lg:text-[340px] font-black tracking-tighter text-slate-900 leading-none">
            30
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center relative z-10">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block mb-1">
                {SECTION_CONTENT.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-2">
                {SECTION_CONTENT.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed max-w-sm">
                {SECTION_CONTENT.description}
              </p>
            </div>

            <div className="space-y-6 py-1">
              {FEATURES_DATA.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#0A192F] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#6B7280] font-medium leading-tight mt-0.5 max-w-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-1">
              <button className="inline-flex items-center justify-center cursor-pointer space-x-2 bg-[#0A192F] hover:bg-[#132845] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg">
                <span>{SECTION_CONTENT.leftCtaText}</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center relative my-2 lg:my-0">
            <div className="relative flex items-center justify-center overflow-hidden w-full">
              <img
                src={object1}
                alt="T30 Format Visual"
                className="w-full max-h-80 sm:max-h-95 lg:max-h-115 object-contain z-10 lg:scale-105 transition-transform duration-300 drop-shadow-xl"
              />

              {/* <div className="absolute inset-0 bg-white/20 backdrop-brightness-100 z-20 pointer-events-none rounded-3xl" /> */}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xl shadow-slate-300 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1F2937] mb-3 border-b border-slate-100 pb-2">
                  {SECTION_CONTENT.glanceHeading}
                </h3>

                <div className="space-y-3">
                  {GLANCE_DATA.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full border border-[#DBEAFE] flex items-center justify-center text-slate-700 shrink-0">
                          <IconComponent className="w-5 h-5 text-[#0A192F]" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-[#111827] leading-none">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-[#6B7280] font-medium mt-0.5">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button className="w-full bg-[#0A192F] hover:bg-[#132845] cursor-pointer text-white py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm">
                <span>{SECTION_CONTENT.rightCtaText}</span>
                <FiPlayCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFormat;
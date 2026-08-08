import React, { useState, useEffect } from 'react';
import featureImg from '../../assets/home/section3/feature-match.png';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const UsersIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const FeatureMatch = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '08',
    hours: '14',
    minutes: '22',
    seconds: '02'
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-28T00:00:00');
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({
          days: days < 10 ? `0${days}` : days.toString(),
          hours: hours < 10 ? `0${hours}` : hours.toString(),
          minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
          seconds: seconds < 10 ? `0${seconds}` : seconds.toString()
        });
      }
    };
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);


  const teams = [
    { name: 'India', flag: india },
    { name: 'Australia', flag: Australia },
    { name: 'England', flag: England },
    { name: 'South Africa', flag: SouthAfrica },
    { name: 'New Zealand', flag: NewZealand },
    { name: 'Pakistan', flag: Pakistan },
    { name: 'Sri Lanka', flag: SriLanka },
    { name: 'Bangladesh', flag: Bangladesh }
  ];


  return (
    <div className="container font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-8 relative rounded-2xl overflow-hidden shadow-gray-400 shadow-2xl border border-slate-100 min-h-85 sm:min-h-95 flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: `url(${featureImg})` }}>
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-transparent lg:to-transparent z-0" />
          <div className="relative z-10 p-5 sm:p-7 md:p-8 flex flex-col justify-between h-full max-w-xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1FAF5B] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                FEATURE MATCH: THE ASHES 2026
              </span>
            </div>

            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#5283E0] uppercase">
                Elite Championship <br />
                <span className="text-[#5283E0]">2026</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-slate-200/60 shadow-xs">
                <UsersIcon />
                <span className="text-[#303030] font-bold">32</span>
                <span className="text-[#303030] font-normal text-xs">Teams</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-slate-200/60 shadow-xs">
                <CalendarIcon />
                <span className="text-[#111C2D]">28 May - 15 Jun 2026</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-slate-200/60 shadow-xs">
                <MapPinIcon />
                <span className="text-[#111C2D]">Delhi</span>
                <span className="text-[#111C2D] font-normal text-xs">Venue</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#081C35] font-medium mb-6 line-clamp-2">
              The biggest domestic cricket tournament bringing the best talent together. ✨
            </p>

            <div>
              <button className="bg-[#0A192F] hover:bg-[#112240] text-white text-xs sm:text-sm font-semibold tracking-wider px-6 py-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer active:scale-95 uppercase">
                Tournament Details
              </button>
            </div>
          </div>
        </div>

        <div className="sm:my-0 my-5 lg:col-span-4 bg-white p-5 sm:p-6 rounded-2xl overflow-hidden shadow-gray-400 shadow-2xl border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#111C2D] mb-4 tracking-wide">
              Tournaments Countdown
            </h3>

            <div className="grid grid-cols-4 gap-2 text-center py-2">
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-[#5283E0] tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] font-bold text-[#111010] tracking-wider mt-1 uppercase">
                  DAYS
                </span>
              </div>

              <div className="flex flex-col items-center border-l border-[#BBCBE7]">
                <span className="text-xl sm:text-2xl font-bold text-[#5283E0] tracking-tight">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] font-bold text-[#111010] tracking-wider mt-1 uppercase">
                  HRS
                </span>
              </div>

              <div className="flex flex-col items-center border-l border-[#BBCBE7]">
                <span className="text-xl sm:text-2xl font-bold text-[#5283E0] tracking-tight">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] font-bold text-[#111010] tracking-wider mt-1 uppercase">
                  MINS
                </span>
              </div>

              <div className="flex flex-col items-center border-l border-[#BBCBE7]">
                <span className="text-xl sm:text-2xl font-bold text-[#5283E0] tracking-tight">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] font-bold text-[#111010] tracking-wider mt-1 uppercase">
                  SECS
                </span>
              </div>
            </div>

            <hr className="my-5 border-[#BBCBE7]" />

            <h3 className="text-sm font-bold text-[#111C2D] mb-4 tracking-wide">
              Top Teams
            </h3>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-11 sm:h-11  flex items-center justify-center shrink-0 overflow-hidden  transition-transform cursor-pointer p-1"
                  title={team.name}
                >
                  <img
                    src={team.flag}
                    alt={`${team.name} flag`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#BBCBE7] flex justify-center">
            <button className="group flex items-center text-xs sm:text-sm font-bold text-[#06218F] hover:text-blue-700 transition-colors cursor-pointer">
              View Fixtures
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureMatch;
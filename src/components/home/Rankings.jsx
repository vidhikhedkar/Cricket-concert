import React, { useState } from 'react';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';
import bcci from '../../assets/home/section5/BCCI-Logo.png';

// SVG Icons
const GlobeIcon = ({ className }) => (
    <svg className={className || "w-5 h-5 text-blue-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const UsersIcon = ({ className }) => (
    <svg className={className || "w-5 h-5 text-blue-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const StarIcon = ({ className }) => (
    <svg className={className || "w-5 h-5 text-amber-500"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const CalendarIcon = ({ className }) => (
    <svg className={className || "w-5 h-5 text-blue-600"} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const InfoIcon = () => (
    <svg className="w-3.5 h-3.5 text-slate-400 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
    </svg>
);

const Rankings = () => {
    const [activeFormat, setActiveFormat] = useState('ODI');

    const rankingData = [
        { rank: '01', flagImg: india, name: 'India', rating: 124, matches: 35, points: '4,340', trend: 'up', isTop: true, badgeBg: 'bg-[#FDE047] text-white' },
        { rank: '02', flagImg: Australia, name: 'Australia', rating: 118, matches: 34, points: '4,012', trend: 'same', badgeBg: 'bg-[#E5E7EB] text-[#4B5563]' },
        { rank: '03', flagImg: England, name: 'England', rating: 115, matches: 33, points: '3,795', trend: 'up', badgeBg: 'bg-[#D9AF6B] text-white' },
        { rank: '04', flagImg: SouthAfrica, name: 'South Africa', rating: 111, matches: 30, points: '3,330', trend: 'down' },
        { rank: '05', flagImg: NewZealand, name: 'New Zealand', rating: 109, matches: 31, points: '3,379', trend: 'up' },
        { rank: '06', flagImg: Pakistan, name: 'Pakistan', rating: 105, matches: 30, points: '3,150', trend: 'down' },
        { rank: '07', flagImg: SriLanka, name: 'Sri Lanka', rating: 100, matches: 28, points: '2,800', trend: 'same' },
        { rank: '08', flagImg: Bangladesh, name: 'Bangladesh', rating: 95, matches: 27, points: '2,565', trend: 'up' },
    ];

    return (
        <section className="w-full  p-4 sm:p-0 lg:p-8 font-sans bg-[#F5F8FE] my-6">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase">Rankings</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                            World Cricket Rankings
                        </h2>
                        <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                            Stay updated with the latest rankings of top cricket nations across all formats.
                        </p>
                    </div>

                    <div className="flex items-center bg-white p-1 rounded-xl shadow-xs self-start md:self-auto">
                        {['ODI', 'TEST', 'T20', 'T20I'].map((format) => (
                            <button
                                key={format}
                                onClick={() => setActiveFormat(format)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeFormat === format
                                    ? 'bg-[#0A192F] text-white shadow-xs'
                                    : 'text-[#4B5563] hover:text-slate-800'
                                    }`}
                            >
                                {format}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-3.5 shadow-md hover:shadow-lg border border-slate-100 transition-shadow">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                            <GlobeIcon className="text-[#2563EB] w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-base sm:text-xl font-bold text-[#1D4ED8] truncate">
                                108
                            </div>
                            <div className="text-xs font-semibold text-[#6B7280] truncate">
                                Countries
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-3.5 shadow-md hover:shadow-lg border border-slate-100 transition-shadow">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                            <UsersIcon className="text-[#2563EB] w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-base sm:text-xl font-extrabold text-[#2563EB] truncate">
                                12
                            </div>
                            <div className="text-xs font-semibold text-[#6B7280] truncate">
                                Full Members
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-3.5 shadow-md hover:shadow-lg border border-slate-100 transition-shadow">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FEFCE8] flex items-center justify-center shrink-0">
                            <StarIcon className="text-[#EAB308] w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-base sm:text-xl font-bold text-[#1D4ED8] truncate">
                                96
                            </div>
                            <div className="text-xs font-semibold text-[#6B7280] truncate">
                                Associate Nations
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-3.5 shadow-md hover:shadow-lg border border-slate-100 transition-shadow">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0">
                            <CalendarIcon className="text-[#4B5563] w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="text-xs sm:text-sm font-bold text-[#111827] truncate">
                                Updated Today
                            </div>
                            <div className="text-[11px] sm:text-xs font-semibold text-[#6B7280] truncate">
                                May 15, 2026
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-8 bg-white rounded-2xl shadow-gray-400/20 shadow-2xl border border-slate-100 overflow-hidden flex flex-col justify-between">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-125">
                                <thead>
                                    <tr className="bg-[#0A192F] text-white text-[11px] font-bold tracking-wider uppercase">
                                        <th className="py-3.5 px-4 sm:px-6">Rank</th>
                                        <th className="py-3.5 px-4">Team</th>
                                        <th className="py-3.5 px-4 text-center">
                                            Rating <InfoIcon />
                                        </th>
                                        <th className="py-3.5 px-4 text-center">Matches</th>
                                        <th className="py-3.5 px-4 text-center">Points</th>
                                        <th className="py-3.5 px-4 text-center">Trend</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F3F4F6] text-xs sm:text-sm font-semibold text-slate-700">
                                    {rankingData.map((row) => (
                                        <tr
                                            key={row.rank}
                                            className={`transition-colors hover:bg-slate-50/80 ${row.isTop ? 'bg-[#FEFCE8]/50' : ''
                                                }`}
                                        >
                                            <td className="py-5 px-4 sm:px-6">
                                                <span
                                                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${row.badgeBg || 'text-slate-400 font-medium'
                                                        }`}
                                                >
                                                    {row.rank}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-2.5 font-bold text-[#111827]">
                                                    <img
                                                        src={row.flagImg}
                                                        alt={`${row.name} flag`}
                                                        className="w-6 h-4 object-cover rounded-xs border border-slate-200"
                                                    />
                                                    <span>{row.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-center font-extrabold text-[#111827]">
                                                {row.rating}
                                            </td>
                                            <td className="py-3 px-4 text-center text-[#6B7280]">{row.matches}</td>
                                            <td className="py-3 px-4 text-center text-[#6B7280]">{row.points}</td>
                                            <td className="py-3 px-4 text-center font-bold">
                                                {row.trend === 'up' && <span className="text-[#22C55E]">∧</span>}
                                                {row.trend === 'down' && <span className="text-[#EF4444]">∨</span>}
                                                {row.trend === 'same' && <span className="text-[#9CA3AF]">—</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-white">
                            <button className="group inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-blue-800 transition-colors cursor-pointer">
                                View Full Rankings
                                <ArrowRightIcon />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-white rounded-2xl overflow-hidden shadow-gray-400/20 shadow-2xl border border-[#E5E7EB]">
                        <div className="bg-[#0A192F] text-white p-6 flex flex-col items-center justify-center text-center relative">
                            <span className="text-[10px] font-extrabold tracking-widest text-[#EAB308] uppercase mb-2">
                                #1 TEAM
                            </span>

                            <div className="flex items-center gap-2.5 mb-4">
                                <img
                                    src={india}
                                    alt="India Flag"
                                    className="w-7 h-4 object-cover rounded-xs border border-white/20"
                                />
                                <h3 className="text-2xl font-black  uppercase">INDIA</h3>
                            </div>

                            <div className="w-30 h-30 rounded-full flex items-center justify-center shadow-md relative overflow-hidden">
                                <img
                                    src={bcci}
                                    alt="BCCI Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>


                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-4 text-center mb-6">
                                <div className="p-2">
                                    <div className="text-xs font-bold tracking-wider text-[#6B7280] uppercase mb-1">
                                        RATING
                                    </div>
                                    <div className="text-2xl font-black text-[#111827]">124</div>
                                </div>

                                <div className="p-2">
                                    <div className="text-xs font-bold tracking-wider text-[#6B7280] uppercase mb-1">
                                        WIN %
                                    </div>
                                    <div className="text-2xl font-black text-[#111827]">78%</div>
                                </div>

                                <div className="p-2">
                                    <div className="text-xs font-bold tracking-wider text-[#6B7280] uppercase mb-1">
                                        MATCHES
                                    </div>
                                    <div className="text-2xl font-black text-[#111827]">35</div>
                                </div>

                                <div className="p-2">
                                    <div className="text-xs font-bold tracking-wider text-[#6B7280] uppercase mb-1">
                                        POINTS
                                    </div>
                                    <div className="text-2xl font-black text-[#111827]">4,340</div>
                                </div>
                            </div>

                            <div className="text-center border-t border-[#F3F4F6] pt-5 mb-5">
                                <div className="text-[10px]  text-[#6B7280] uppercase mb-3">
                                    RECENT FORM
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    {['W', 'W', 'W', 'W', 'W'].map((result, idx) => (
                                        <span
                                            key={idx}
                                            className="w-8 h-8 rounded-full bg-[#22C55E] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs"
                                        >
                                            {result}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center border-t border-slate-100 pt-4">
                                <div className="text-[10px] font-bold tracking-wider text-[#6B7280] uppercase mb-0.5">
                                    CAPTAIN
                                </div>
                                <div className="text-sm font-extrabold text-[#111827]">Shreyas Iyer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rankings;
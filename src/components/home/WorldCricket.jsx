import React from 'react';

// SVG Icon Components using Lucide design system
const GlobeIcon = () => (
    <svg className="w-6 h-6 text-[#102A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const UserIcon = () => (
    <svg className="w-6 h-6 text-[#102A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const TrophyIcon = () => (
    <svg className="w-6 h-6 text-[#102A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17M14 14.66V17M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
);

const BuildingIcon = () => (
    <svg className="w-6 h-6 text-[#102A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
);

const NetworkGlobeIcon = () => (
    <svg className="w-6 h-6 text-[#102A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const HistoryIcon = () => (
    <svg className="w-6 h-6 text-[#102A43]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const WorldCricket = () => {
    const statsData = [
        {
            id: 1,
            icon: <GlobeIcon />,
            value: '108+',
            title: 'Countries',
            description: 'Member nations across 6 continents',
        },
        {
            id: 2,
            icon: <UserIcon />,
            value: '850+',
            title: 'Registered Players',
            description: 'Professional cricketers worldwide',
        },
        {
            id: 3,
            icon: <TrophyIcon />,
            value: '112',
            title: 'Tournaments',
            description: 'Annual international & domestic events',
        },
        {
            id: 4,
            icon: <BuildingIcon />,
            value: '120+',
            title: 'Associations',
            description: 'National & regional cricket bodies',
        },
        {
            id: 5,
            icon: <NetworkGlobeIcon />,
            value: '35M+',
            title: 'Fans Worldwide',
            description: 'Passionate supporters globally',
        },
        {
            id: 6,
            icon: <HistoryIcon />,
            value: '150+',
            title: 'Years of History',
            description: "Preserving cricket's rich heritage",
        },
    ];

    return (
        <section className="container py-14 font-sans">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0A2540] tracking-tight">
                    World Cricket
                </h2>

                <button className="group inline-flex items-center text-sm sm:text-base font-semibold text-[#0B5FFF] hover:text-[#254EDB] transition-colors cursor-pointer">
                    View All
                    <ArrowRightIcon />
                </button>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
                {statsData.map((stat) => (
                    <div
                        key={stat.id}
                        className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-gray-400/30 shadow-2xl border border-[#0B5FFF]/8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group h-full justify-between"
                    >
                        <div className="w-12 h-12 rounded-xl bg-linear-to-b from-[#EAF4FF] to-[#D4EAFF] flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shrink-0">
                            {stat.icon}
                        </div>

                        <div className="flex flex-col items-center justify-center w-full">
                            <span className="text-2xl sm:text-3xl font-extrabold text-[#001A41] tracking-tight mb-1">
                                {stat.value}
                            </span>

                            <h3 className="text-xs sm:text-sm font-bold text-[#0A2540] mb-2 leading-tight">
                                {stat.title}
                            </h3>

                            <p className="text-[11px] sm:text-xs text-[#0A2540]/40 leading-snug font-normal">
                                {stat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorldCricket;
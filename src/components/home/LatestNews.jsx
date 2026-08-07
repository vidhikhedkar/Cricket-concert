import React from 'react';
import news1 from '../../assets/home/section11/news1.jpg';
import news2 from '../../assets/home/section11/news2.jpg';
import news3 from '../../assets/home/section11/news3.jpg';

const newsData = [
    {
        id: 1,
        category: 'DEVELOPMENT',
        categoryBg: 'bg-[#081C35]', 
        date: 'September 24, 2024',
        title: 'National Academy Announces New Grassroots Program',
        description:
            'The initiative aims to identify talent across 50 regional centers with world-class coaching staff',
        image: news1,
    },
    {
        id: 2,
        category: 'AWARDS',
        categoryBg: 'bg-[#0047CE]', 
        date: 'September 22, 2024',
        title: 'Player of the Month: Nominations Open for August',
        description:
            'Cast your vote for the standout performers across all formats. Winners will be announced at',
        image: news2,
    },
    {
        id: 3,
        category: 'INFRASTRUCTURE',
        categoryBg: 'bg-[#1FAF5B]', 
        date: 'September 20, 2024',
        title: 'Grand Unveiling of the New Central Sports Complex',
        description:
            'A state-of-the-art facility featuring 12 indoor nets, hydrotherapy pools, and high-performance',
        image: news3,
    },
];

const ArrowRightIcon = () => (
    <svg
        className="w-4 h-4 text-current"
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

const LatestNews = () => {
    return (
        <section className="container  py-8 font-sans">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111C2D] tracking-tight">
                    Latest News
                </h2>
                <button
                    type="button"
                    onClick={() => { }}
                    className="text-xs sm:text-sm font-bold text-[#0A192F] hover:text-[#0052FF] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                    All News
                    <ArrowRightIcon />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {newsData.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between cursor-pointer"
                    >
                        <div>
                            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <span
                                    className={`absolute top-3.5 left-3.5 ${item.categoryBg} text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs`}
                                >
                                    {item.category}
                                </span>
                            </div>

                            <div className="p-5">
                                <p className="text-xs font-medium text-[#74777E] mb-2">
                                    {item.date}
                                </p>

                                <h3 className="text-base sm:text-lg font-bold text-[#111C2D] leading-snug group-hover:text-[#0052FF] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-[#44474D]  mt-2.5 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;
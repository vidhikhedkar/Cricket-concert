import React from 'react';
import icplnews1 from '../../assets/icpl/section10/icplnews1.jpg';
import icplnews2 from '../../assets/icpl/section10/icplnews2.jpg';
import icplnews3 from '../../assets/icpl/section10/icplnews3.jpg';

const LatestNews = () => {
    const newsItems = [
        {
            image: icplnews1,
            category: 'TOURNAMENTS',
            date: 'May 10, 2026',
            title: 'ICPL 2026 Schedule Announced',
            description: 'The much-awaited schedule for ICPL season is here. Plan your cricket summer with us.'
        },
        {
            image: icplnews2,
            category: 'NEWS',
            date: 'May 08, 2026',
            title: 'New Partnerships Power ICPL Growth',
            description: 'ICPL signs global partnerships to expand the game worldwide and reach new audiences.'
        },
        {
            image: icplnews3,
            category: 'FEATURES',
            date: 'May 04, 2026',
            title: 'Emerging Talent to Watch in ICPL 2026',
            description: 'Young players ready to make their mark on the big stage. Scouting the future legends.'
        }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container ">

                {/* Header Section: Title & View All News Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold  tracking-tight">
                        LATEST NEWS
                    </h2>
                    <button className="inline-flex items-center text-sm font-bold text-[#0A192F] hover:text-blue-600 transition-colors group self-start sm:self-auto cursor-pointer">
                        <span>VIEW ALL NEWS</span>
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                </div>

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="w-full h-56 sm:h-60 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col grow justify-between">
                                <div>
                                    {/* Category & Date */}
                                    <div className="flex items-center space-x-3 mb-3">
                                        <span className="bg-[#4069F2] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="text-[#44474E] text-xs sm:text-sm font-medium">
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-regular text-[#0B1C30] mb-3 leading-snug">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#44474E] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LatestNews;
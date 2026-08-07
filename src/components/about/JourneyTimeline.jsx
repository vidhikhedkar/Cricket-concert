import React from 'react';
import Foundation from '../../assets/about/section2/Foundation.png';
import Expansion from '../../assets/about/section2/Expansion.png';
import DigitalEra from '../../assets/about/section2/DigitalEra.png';
import THEFUTURE from '../../assets/about/section2/THEFUTURE.png';

// Data structure matching the layout
const TIMELINE_DATA = [
    {
        year: '1975',
        title: 'FOUNDATION',
        description: 'WCC was established with a vision to create a stronger global cricket ecosystem and provide opportunities for every cricketing nation.',
        tag: 'LONDON, UK',
        image: Foundation,
        dotColor: 'text-[#191C1D]'
    },
    {
        year: '1998',
        title: 'EXPANSION',
        description: 'The organization expanded its reach by introducing international tournaments, strengthening member associations, and promoting cricket across new regions.',
        tag: 'GLOBAL SHIFT',
        image: Expansion,
        dotColor: 'text-[#D4FF00]'
    },
    {
        year: '2012',
        title: 'DIGITAL ERA',
        description: 'Modern technology, live scoring, digital engagement, and global broadcasting have transformed how fans experience cricket.',
        tag: 'EXPLORE DATA',
        image: DigitalEra,
        dotColor: 'text-[#191C1D]'
    },
    {
        year: '2026',
        title: 'THE FUTURE',
        description: 'WCC continues to innovate through youth development, women\'s cricket, sustainability, and worldwide community initiatives.',
        tag: 'GLOBAL SHIFT',
        image: THEFUTURE,
        dotColor: 'text-[#D4FF00]'
    }
];

const JourneyTimeline = () => {
    return (
        <section className="bg-white py-8 sm:py-12 font-sans overflow-hidden">
            <div className="container mx-auto space-y-10 sm:space-y-12">

                {/* TOP DESCRIPTION CARD */}
                <div className="max-w-2xl mx-auto bg-[#F2F6FF] rounded-xl p-5 sm:p-8 text-center">
                    <p className="text-black text-xs sm:text-sm leading-relaxed font-normal">
                        From its foundation, WCC has been committed to growing cricket beyond boundaries.
                        Through international competitions, strategic partnerships, and grassroots
                        development, WCC continues to unite nations through the spirit of cricket.
                    </p>
                </div>

                {/* SECTION HEADING WITH UNDERLINE */}
                <div className="text-center pt-2 pb-4">
                    <h2 className="text-base sm:text-lg font-bold tracking-[0.25em] text-[#191C1D] uppercase inline-block border-b-2 border-slate-800 pb-1">
                        JOURNEY TIMELINE
                    </h2>
                </div>

                {/* TIMELINE LIST */}
                <div className="space-y-10 sm:space-y-12 lg:space-y-18">
                    {TIMELINE_DATA.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={item.year}
                                className={`flex flex-col ${
                                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-start justify-between gap-6 lg:gap-8 relative`}
                            >

                                {/* TEXT CONTENT COLUMN */}
                                <div className={`w-full lg:w-5/12 flex flex-col ${
                                    isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'
                                } text-left`}>
                                    <div className="max-w-sm space-y-2.5">
                                        <h3 className="text-lg sm:text-xl font-bold tracking-wider text-[#191C1D] uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#444932] leading-relaxed font-normal">
                                            {item.description}
                                        </p>

                                        {/* FILLED LOCATION / ACTION TAG */}
                                        <div className={`pt-2 flex ${isEven ? 'lg:justify-end justify-start' : 'justify-start'}`}>
                                            <span className="bg-[#E7E8E9] text-[#191C1D] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-xs inline-block">
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* IMAGE CONTAINER WITH OFFSET GREY BORDER & OVERLAYING YEAR */}
                                <div className="w-full lg:w-6/12 relative mt-4 lg:mt-0">

                                    {/* YEAR CALLOUT OVERLAY */}
                                    {isEven ? (
                                        <div className="absolute -top-6 sm:-top-7 lg:-top-8 -left-2 sm:-left-4 z-20 flex items-center gap-1 select-none pointer-events-none">
                                            <span className={`text-xl sm:text-2xl ${item.dotColor} font-black leading-none`}>
                                                •
                                            </span>
                                            <span className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#C4C7C8] tracking-tight leading-none">
                                                {item.year}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="absolute -top-6 sm:-top-7 lg:-top-8 -right-2 sm:-right-4 lg:right-auto lg:-left-2 z-20 flex items-center gap-1 select-none pointer-events-none">
                                            <span className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#C4C7C8] tracking-tight leading-none">
                                                {item.year}
                                            </span>
                                            <span className={`text-xl sm:text-2xl ${item.dotColor} font-black leading-none`}>
                                                •
                                            </span>
                                        </div>
                                    )}

                                    {/* PARTIAL OFFSET GREY FRAME LINE */}
                                    <div className={`absolute border border-[#D2D5D6] pointer-events-none z-0 rounded-2xl ${
                                        isEven 
                                            ? 'top-0 -left-3 sm:top-0 sm:-left-4 w-full h-full' 
                                            : 'top-0 -right-3 sm:top-0 sm:-right-4 w-full h-full'
                                    }`} />

                                    {/* LIGHT BLUE BACKDROP CONTAINER */}
                                    <div className="relative z-10 bg-[#F2F6FF] rounded-2xl p-2 sm:p-3">
                                        <div className="overflow-hidden rounded-xl bg-white shadow-xs">
                                            <img
                                                src={item.image}
                                                alt={`${item.title} ${item.year}`}
                                                className="w-full h-auto object-cover object-center max-h-52 sm:max-h-60 hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default JourneyTimeline;
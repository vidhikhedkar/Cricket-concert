import React, { useRef, useEffect } from 'react';
import viratkohli from '../../assets/home/section7/player1.png';
import BabaAzam from '../../assets/home/section7/player2.png';
import JoeRoot from '../../assets/home/section7/player3.png';
import KaneWilliamson from '../../assets/home/section7/player4.png';
import PatCummins from '../../assets/home/section7/player5.png';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';

const playersData = [
    {
        id: 1,
        name: 'Virat Kohli',
        country: 'India',
        role: 'Batsman',
        image: viratkohli,
        flag: india,
        rating: 887,
        maxRating: 1000,
        stats: {
            runs: '15,821',
            average: '53.5',
            hundreds: '80',
        },
    },
    {
        id: 2,
        name: 'Babar Azam',
        country: 'Pakistan',
        role: 'Batsman',
        image: BabaAzam,
        flag: Pakistan,
        rating: 854,
        maxRating: 1000,
        stats: {
            runs: '11,344',
            average: '49.2',
            hundreds: '33',
        },
    },
    {
        id: 3,
        name: 'Joe Root',
        country: 'England',
        role: 'Batsman',
        image: JoeRoot,
        flag: England,
        rating: 842,
        maxRating: 1000,
        stats: {
            runs: '12,473',
            average: '50.1',
            hundreds: '35',
        },
    },
    {
        id: 4,
        name: 'Kane Williamson',
        country: 'New Zealand',
        role: 'Batsman',
        image: KaneWilliamson,
        flag: NewZealand,
        rating: 828,
        maxRating: 1000,
        stats: {
            runs: '9,122',
            average: '54.8',
            hundreds: '32',
        },
    },
    {
        id: 5,
        name: 'Pat Cummins',
        country: 'Australia',
        role: 'Bowler',
        image: PatCummins,
        flag: Australia,
        rating: 824,
        maxRating: 1000,
        stats: {
            runs: '1,244',
            average: '22.3',
            hundreds: '0',
        },
    },
];

const ArrowLeftIcon = () => (
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
            d="M15 19l-7-7 7-7"
        />
    </svg>
);

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

const TopPlayers = () => {
    const scrollRef = useRef(null);
    const isInteracting = useRef(false);

    // Duplicating items to guarantee infinite scrolling on all screen sizes
    const loopedPlayers = [...playersData, ...playersData, ...playersData];

    const getCardWidth = () => {
        if (!scrollRef.current) return 300;
        const firstCard = scrollRef.current.children[0];
        if (!firstCard) return 300;
        const style = window.getComputedStyle(scrollRef.current);
        const gap = parseFloat(style.gap) || 20;
        return firstCard.offsetWidth + gap;
    };

    // Center starting scroll position to the middle loop set
    useEffect(() => {
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    // Seamless scroll loop boundary listener
    const handleScrollEvent = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const singleSetWidth = scrollWidth / 3;

        if (scrollLeft <= 10) {
            scrollRef.current.scrollLeft = singleSetWidth + scrollLeft;
        } else if (scrollLeft >= singleSetWidth * 2 - 10) {
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    };

    // Dynamic Interval Timer for Auto Scroll
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !isInteracting.current) {
                const cardWidth = getCardWidth();
                scrollRef.current.style.scrollBehavior = 'smooth';
                scrollRef.current.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth',
                });
            }
        }, 3200);

        return () => clearInterval(interval);
    }, []);

    const handleManualScroll = (direction) => {
        if (!scrollRef.current) return;
        const cardWidth = getCardWidth();
        scrollRef.current.style.scrollBehavior = 'smooth';
        scrollRef.current.scrollBy({
            left: direction === 'right' ? cardWidth : -cardWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="container mx-auto py-8 font-sans select-none overflow-hidden">
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                        Top Players
                    </h2>

                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B5FFF] uppercase sm:mt-1">
                        <span className="w-4 h-0.5 bg-[#0B5FFF] inline-block"></span>
                        Rankings
                        <span className="w-4 h-0.5 bg-[#0B5FFF] inline-block"></span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => handleManualScroll('left')}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-[#0A192F] hover:text-white hover:border-[#0A192F] transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
                        aria-label="Previous"
                    >
                        <ArrowLeftIcon />
                    </button>

                    <button
                        type="button"
                        onClick={() => handleManualScroll('right')}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0A192F] text-white border border-[#0A192F] hover:bg-white hover:text-slate-700 hover:border-slate-200 transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
                        aria-label="Next"
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                onScroll={handleScrollEvent}
                onMouseEnter={() => {
                    isInteracting.current = true;
                }}
                onMouseLeave={() => {
                    isInteracting.current = false;
                }}
                onTouchStart={() => {
                    isInteracting.current = true;
                }}
                onTouchEnd={() => {
                    isInteracting.current = false;
                }}
                className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory px-4 lg:mx-0 lg:px-0 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
            >
                {loopedPlayers.map((player, index) => {
                    const ratingPercentage = Math.min(
                        100,
                        (player.rating / player.maxRating) * 100
                    );

                    return (
                        <div
                            key={`${player.id}-${index}`}
                            className="w-65 sm:w-70 shrink-0 snap-always snap-start bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative bg-[#DCE3E8] h-52 sm:h-56 flex items-end justify-center overflow-hidden">
                                    <div className="absolute top-3 right-3 z-10 bg-[#0A2540] backdrop-blur-xs text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
                                        <img
                                            src={player.flag}
                                            alt={`${player.country} flag`}
                                            className="w-4 h-3 sm:w-4.5 sm:h-3.5 object-cover rounded-xs"
                                        />
                                        <span>{player.rating}</span>
                                    </div>

                                    <img
                                        src={player.image}
                                        alt={player.name}
                                        className="h-full object-cover object-bottom pointer-events-none"
                                    />
                                </div>

                                <div className="p-4 sm:p-5 pb-2">
                                    <h3 className="text-lg font-bold text-[#0A2540] leading-tight">
                                        {player.name}
                                    </h3>
                                    <p className="text-xs text-[#0A2540]/50 mt-0.5">
                                        {player.country} · {player.role}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 my-4 text-center">
                                        <div>
                                            <div className="text-sm font-bold text-[#0B5FFF]">
                                                {player.stats.runs}
                                            </div>
                                            <div className="text-[11px] font-medium text-[#0A2540]/40">
                                                Runs
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#0B5FFF]">
                                                {player.stats.average}
                                            </div>
                                            <div className="text-[11px] font-medium text-[#0A2540]/40">
                                                Average
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#0B5FFF]">
                                                {player.stats.hundreds}
                                            </div>
                                            <div className="text-[11px] font-medium text-[#0A2540]/40">
                                                100s
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                                <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                                    <span className="text-[#0A2540]/40">ICC Rating</span>
                                    <span className="text-[#0B5FFF] font-bold">
                                        {player.rating}
                                    </span>
                                </div>
                                <div className="w-full bg-slate-200/60 h-1.5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500 bg-linear-to-r from-[#0052FF] via-[#3B82F6] to-white"
                                        style={{ width: `${ratingPercentage}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopPlayers;
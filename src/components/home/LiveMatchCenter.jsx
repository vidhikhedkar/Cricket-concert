import React, { useState, useRef, useEffect } from 'react';
import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import England from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const matchesData = [
    {
        id: 1,
        status: 'LIVE',
        statusType: 'live',
        innings: '1ST INNINGS',
        tournament: 'WC 2024',
        stage: 'FINAL',
        team1: { code: 'IND', flag: india, score: '284/4 (42.1)' },
        team2: { code: 'AUS', flag: Australia, score: 'Yet to bat' },
        footerInfo: 'V. Kohli 104* (98) • S. Smith 0/45 (8)',
        isHighlighted: true,
    },
    {
        id: 2,
        status: 'INNINGS BREAK',
        statusType: 'break',
        tournament: 'WC 2024',
        stage: 'SF 1',
        team1: { code: 'ENG', flag: England, score: '312/8 (50.0)' },
        team2: { code: 'NZ', flag: NewZealand, score: 'Target: 313' },
        footerInfo: 'NZ need 313 runs to win at 6.26 RPO',
        isHighlighted: false,
    },
    {
        id: 3,
        status: 'INNINGS BREAK',
        statusType: 'break',
        tournament: 'WC 2024',
        stage: 'SF 3',
        team1: { code: 'SA', flag: SouthAfrica, score: '289/7 (50.0)' },
        team2: { code: 'PAK', flag: Pakistan, score: 'Target: 290' },
        footerInfo: 'PAK need 290 runs to win at 5.80 RPO',
        isHighlighted: false,
    },
    {
        id: 4,
        status: 'INNINGS BREAK',
        statusType: 'break',
        tournament: 'WC 2024',
        stage: 'SF 3',
        team1: { code: 'SA', flag: SouthAfrica, score: '289/7 (50.0)' },
        team2: { code: 'PAK', flag: Pakistan, score: 'Target: 290' },
        footerInfo: 'PAK need 290 runs to win at 5.80 RPO',
        isHighlighted: false,
    },
];


const BatIcon = () => (
    <svg
        className="w-5 h-5 text-amber-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m14 18 6.5-6.5a2.12 2.12 0 0 0-3-3L11 15" />
        <path d="m15 11-8.5 8.5a2.12 2.12 0 0 1-3-3L12 8" />
        <line x1="18" y1="6" x2="22" y2="2" />
    </svg>
);

const LiveMatchCenter = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    const loopedMatches = [...matchesData, ...matchesData, ...matchesData];


    const getCardWidth = () => {
        if (!scrollRef.current) return 336;
        const firstCard = scrollRef.current.children[0];
        if (!firstCard) return 336;
        const style = window.getComputedStyle(scrollRef.current);
        const gap = parseFloat(style.gap) || 16;
        return firstCard.offsetWidth + gap;
    };


    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const singleSetWidth = scrollWidth / 3;
        if (scrollLeft <= 0) {
            scrollRef.current.scrollLeft = singleSetWidth;
        } else if (scrollLeft >= singleSetWidth * 2) {
            scrollRef.current.scrollLeft = singleSetWidth;
        }
        const cardWidth = getCardWidth();
        const index = Math.round((scrollLeft % singleSetWidth) / cardWidth);
        setActiveIndex(index % matchesData.length);
    };


    useEffect(() => {
        if (scrollRef.current) {
            const singleSetWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);



    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const cardWidth = getCardWidth();
                scrollRef.current.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth',
                });
            }
        }, 3000); 
        return () => clearInterval(interval);
    }, [isPaused]);


    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = getCardWidth();
        scrollRef.current.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };


    const scrollToCard = (index) => {
        if (!scrollRef.current) return;
        const singleSetWidth = scrollRef.current.scrollWidth / 3;
        const cardAmount = getCardWidth();
        scrollRef.current.scrollTo({
            left: singleSetWidth + index * cardAmount,
            behavior: 'smooth',
        });
    };


    const handleMouseDown = (e) => {
        isDragging.current = true;
        setIsPaused(true);
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeftStart.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    };


    const handleMouseLeaveOrUp = () => {
        isDragging.current = false;
        setIsPaused(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
        }
    };


    const handleMouseMove = (e) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    };


    return (
        <div className="container py-4 sm:py-14 font-sans select-none overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#BA1A1A]"></span>
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#00113A] tracking-tight">
                        Live Match Center
                    </h2>
                </div>
            </div>


            <div
                ref={scrollRef}
                onScroll={handleScroll}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
                className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-1  snap-x snap-mandatory scrollbar-none touch-pan-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {loopedMatches.map((match, idx) => (
                    <div
                        key={`${match.id}-${idx}`}
                        className={`w-[82vw] min-w-65 max-w-75 sm:w-[320px] sm:max-w-none shrink-0 snap-center sm:snap-start bg-[#F2F6FF] backdrop-blur border border-[#C5C6D2]/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden relative ${match.isHighlighted ? 'bg-linear-to-br from-slate-50 via-blue-50/40 to-slate-50' : ''
                            }`}
                    >
                        {match.statusType === 'live' && (
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#BA1A1A] rounded-l-2xl" />
                        )}

                        <div className="p-3.5 sm:p-4 pl-4 sm:pl-5 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 flex-wrap">
                                {match.statusType === 'live' ? (
                                    <span className="bg-[#FFDAD6] text-[#BA1A1A] px-2 py-0.5 rounded font-bold">
                                        {match.status} {match.innings && `• ${match.innings}`}
                                    </span>
                                ) : (
                                    <span className="bg-[#CCA830]/20 text-[#735C00] px-2 py-0.5 rounded font-bold">
                                        {match.status}
                                    </span>
                                )}
                                <span className="text-[#444650]">• {match.tournament}</span>
                                <span className="text-[#444650]">• {match.stage}</span>
                            </div>

                            <div className="flex items-center justify-between my-1.5 sm:my-2 gap-1">
                                <div className="flex flex-col items-start min-w-17.5 sm:min-w-22.5">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#00113A]">
                                            {match.team1.code}
                                        </span>
                                        <img
                                            src={match.team1.flag}
                                            alt={`${match.team1.code} flag`}
                                            className="w-5 h-5 sm:w-6 sm:h-6 object-cover rounded-full border border-slate-200 shadow-xs"
                                        />
                                    </div>
                                    <span className="text-[11px] sm:text-xs text-[#444650] font-medium mt-1">
                                        {match.team1.score}
                                    </span>
                                </div>

                                <div className="flex items-center justify-center px-1 sm:px-2 shrink-0">
                                    {match.statusType === 'live' ? (
                                        <div className="rotate-45">
                                            <BatIcon />
                                        </div>
                                    ) : (
                                        <span className="text-slate-300 font-light text-xl sm:text-2xl">—</span>
                                    )}
                                </div>

                                <div className="flex flex-col items-end min-w-17.5 sm:min-w-22.5">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <img
                                            src={match.team2.flag}
                                            alt={`${match.team2.code} flag`}
                                            className="w-5 h-5 sm:w-6 sm:h-6 object-cover rounded-full border border-slate-200 shadow-xs"
                                        />
                                        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#444650]/50">
                                            {match.team2.code}
                                        </span>
                                    </div>
                                    <span className="text-[11px] sm:text-xs text-[#444650] font-medium mt-1 text-right">
                                        {match.team2.score}
                                    </span>
                                </div>
                            </div>

                            <div className="h-px w-full bg-[#C5C6D2]/20 my-2 sm:my-3" />

                            <div className="text-[10px] sm:text-[11px] text-[#444650] font-medium truncate">
                                {match.footerInfo}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-2">
                {matchesData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        className={`transition-all duration-300 cursor-pointer rounded-full h-1.5 sm:h-2 ${activeIndex === idx
                            ? 'w-6 sm:w-8 bg-slate-800'
                            : 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LiveMatchCenter;
import React, { useState } from 'react';
import WCC1 from '../../assets/home/section12/WCC1.png';
import WCC2 from '../../assets/home/section12/WCC2.png';
import WCC3 from '../../assets/home/section12/WCC3.png';
import WCC4 from '../../assets/home/section12/WCC4.png';
import WCC5 from '../../assets/home/section12/WCC5.png';
import WCC6 from '../../assets/home/section12/WCC6.png';
import WCC7 from '../../assets/home/section12/WCC7.png';
import trophy from '../../assets/home/section12/trophy.png';

const GlobalEcosystem = () => {
    const [partners, setPartners] = useState([
        {
            id: 'p1',
            img: WCC3,
            positionClass: 'top-[0%] sm:top-[2%] left-1/2 -translate-x-1/2',
            animationClass: 'animate-float-slow',
            sizeClass: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
        },
        {
            id: 'p2',
            img: WCC2,
            positionClass: 'top-[16%] sm:top-[20%] left-[4%] sm:left-[10%] md:left-[16%]',
            animationClass: 'animate-float-diagonal',
            sizeClass: 'w-15 h-15 sm:w-20 sm:h-20 md:w-28 md:h-28',
        },
        {
            id: 'p3',
            img: WCC4,
            positionClass: 'top-[15%] sm:top-[18%] right-[6%] sm:right-[12%] md:right-[18%]',
            animationClass: 'animate-float-slow',
            sizeClass: 'w-13 h-13 sm:w-18 sm:h-18 md:w-26 md:h-26',
        },
        {
            id: 'p4',
            img: WCC5,
            positionClass: 'top-[58%] right-[2%] sm:right-[5%] md:right-[9%]',
            animationClass: 'animate-float-reverse',
            sizeClass: 'w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18',
        },
        {
            id: 'p5',
            img: WCC1,
            positionClass: 'top-[55%] left-[2%] sm:left-[4%] md:left-[8%]',
            animationClass: 'animate-float-slow',
            sizeClass: 'w-11 h-11 sm:w-15 sm:h-15 md:w-20 md:h-20',
        },
        {
            id: 'p6',
            img: WCC6,
            positionClass: 'bottom-[4%] sm:bottom-[6%] left-[18%] sm:left-[22%] md:left-[27%]',
            animationClass: 'animate-float-reverse',
            sizeClass: 'w-12 h-12 sm:w-18 sm:h-18 md:w-26 md:h-26',
        },
        {
            id: 'p7',
            img: WCC7,
            positionClass: 'bottom-[2%] sm:bottom-[4%] right-[16%] sm:right-[20%] md:right-[25%]',
            animationClass: 'animate-float-diagonal',
            sizeClass: 'w-12 h-12 sm:w-18 sm:h-18 md:w-26 md:h-26',
        },
    ]);

    const [draggedIndex, setDraggedIndex] = useState(null);

    // Swap logic helper
    const swapPartners = (fromIndex, toIndex) => {
        if (fromIndex === null || toIndex === null || fromIndex === toIndex) return;

        const updatedPartners = [...partners];
        const tempImg = updatedPartners[fromIndex].img;
        updatedPartners[fromIndex].img = updatedPartners[toIndex].img;
        updatedPartners[toIndex].img = tempImg;

        setPartners(updatedPartners);
    };

    // Desktop Mouse Handlers
    const handleDragStart = (e, index) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, dropIndex) => {
        e.preventDefault();
        swapPartners(draggedIndex, dropIndex);
        setDraggedIndex(null);
    };

    // Mobile Touch Handlers
    const handleTouchStart = (index) => {
        setDraggedIndex(index);
    };

    const handleTouchEnd = (e) => {
        if (draggedIndex === null) return;

        const touch = e.changedTouches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

        if (targetElement) {
            const partnerNode = targetElement.closest('[data-partner-index]');
            if (partnerNode) {
                const dropIndex = parseInt(partnerNode.getAttribute('data-partner-index'), 10);
                swapPartners(draggedIndex, dropIndex);
            }
        }

        setDraggedIndex(null);
    };

    return (
        <section className="bg-[#F5FAFF] py-10 overflow-hidden relative font-sans">
            <div className="max-w-5xl mx-auto text-center">
                <div className="container mx-auto mb-8 sm:mb-16">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0047CE] uppercase">
                        Global Ecosystem
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight mt-1 sm:mt-2 mb-3 sm:mb-4">
                        WCC Partners
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#44474D] font-medium leading-relaxed px-2">
                        Join the world&apos;s most prestigious cricket ecosystem. We invite
                        global leaders to shape the future of professional cricket across
                        countries.
                    </p>
                </div>

                <div className="relative w-full max-w-85 sm:max-w-125 md:max-w-212.5 h-95 sm:h-110 md:h-135 mx-auto">

                    {/* BACKGROUND ORBITAL RINGS */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-blue-300/40 animate-spin-slow" />
                        <div className="absolute w-[60%] h-[60%] rounded-full border border-blue-200/50 animate-spin-reverse-slow" />
                    </div>

                    {/* CENTER TROPHY NODE */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="group relative flex items-center justify-center">
                            <div className="absolute w-full h-full rounded-full border border-blue-400/40 animate-pulse-ring" />
                            <div className="absolute w-full h-full rounded-full border border-blue-500/30 animate-pulse-ring-delayed" />
                            <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-2xl animate-glow-pulse group-hover:bg-blue-500/50 transition-colors duration-300" />

                            <div className="relative w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 bg-linear-to-b from-blue-50/60 to-white/90 rounded-full p-1.5 sm:p-2.5 shadow-2xl shadow-blue-500/10 border border-blue-100/60 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-300">
                                <div className="w-full h-full bg-white rounded-full p-2.5 sm:p-4 md:p-6 shadow-inner border border-slate-200 flex flex-col items-center justify-center">
                                    <img
                                        src={trophy}
                                        alt="WCC Trophy"
                                        className="h-16 sm:h-20 md:h-32 object-contain mb-1 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                                    />
                                    <h3 className="text-[10px] sm:text-xs md:text-base font-extrabold text-[#0B192C] tracking-tight">
                                        Who we work with
                                    </h3>
                                    <div className="w-5 sm:w-6 md:w-8 h-0.5 sm:h-1 bg-[#0052CC] rounded-full mt-1 sm:mt-1.5 md:mt-2 group-hover:w-12 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC PARTNER LOGOS (DESKTOP DRAG & MOBILE TOUCH SUPPORT) */}
                    {partners.map((partner, index) => (
                        <div
                            key={partner.id}
                            data-partner-index={index}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, index)}
                            onTouchStart={() => handleTouchStart(index)}
                            onTouchEnd={handleTouchEnd}
                            className={`absolute ${partner.positionClass} ${partner.animationClass} z-10 cursor-grab active:cursor-grabbing transition-transform duration-300 touch-none ${draggedIndex === index ? 'scale-125 opacity-80 z-30' : ''}`}
                        >
                            <div className="group relative">
                                <div className="absolute -inset-2 sm:-inset-3 bg-blue-400/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className={`relative ${partner.sizeClass} bg-white rounded-full p-1.5 sm:p-3 shadow-xl border border-slate-100 flex items-center justify-center group-hover:scale-120 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-300`}>
                                    <img
                                        src={partner.img}
                                        alt={`Partner Logo ${index + 1}`}
                                        className="w-full h-full object-contain rounded-full pointer-events-none select-none"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default GlobalEcosystem;
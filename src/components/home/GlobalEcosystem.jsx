import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WCC1 from '../../assets/home/section12/WCC1.png';
import WCC2 from '../../assets/home/section12/WCC2.png';
import WCC3 from '../../assets/home/section12/WCC3.png';
import WCC4 from '../../assets/home/section12/WCC4.png';
import WCC5 from '../../assets/home/section12/WCC5.png';
import WCC6 from '../../assets/home/section12/WCC6.png';
import WCC7 from '../../assets/home/section12/WCC7.png';
import trophy from '../../assets/home/section12/trophy.png';

const GlobalEcosystem = () => {
    const containerRef = useRef(null);
    const [draggingId, setDraggingId] = useState(null);

    const partners = [
        {
            id: 'p1',
            img: WCC3,
            positionClass: 'top-[0%] sm:top-[2%] left-1/2 -translate-x-1/2',
            animationClass: 'animate-float-slow',
            sizeClass: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
        },
        {
            id: 'p2',
            img: WCC2,
            positionClass: 'top-[16%] sm:top-[20%] left-[4%] sm:left-[10%] md:left-[16%]',
            animationClass: 'animate-float-diagonal',
            sizeClass: 'w-12 h-12 sm:w-16 sm:h-16 md:w-22 md:h-22',
        },
        {
            id: 'p3',
            img: WCC4,
            positionClass: 'top-[15%] sm:top-[18%] right-[6%] sm:right-[12%] md:right-[18%]',
            animationClass: 'animate-float-slow',
            sizeClass: 'w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20',
        },
        {
            id: 'p4',
            img: WCC5,
            positionClass: 'top-[58%] right-[2%] sm:right-[5%] md:right-[9%]',
            animationClass: 'animate-float-reverse',
            sizeClass: 'w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14',
        },
        {
            id: 'p5',
            img: WCC1,
            positionClass: 'top-[55%] left-[2%] sm:left-[4%] md:left-[8%]',
            animationClass: 'animate-float-slow',
            sizeClass: 'w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16',
        },
        {
            id: 'p6',
            img: WCC6,
            positionClass: 'bottom-[4%] sm:bottom-[6%] left-[18%] sm:left-[22%] md:left-[27%]',
            animationClass: 'animate-float-reverse',
            sizeClass: 'w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20',
        },
        {
            id: 'p7',
            img: WCC7,
            positionClass: 'bottom-[2%] sm:bottom-[4%] right-[16%] sm:right-[20%] md:right-[25%]',
            animationClass: 'animate-float-diagonal',
            sizeClass: 'w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20',
        },
    ];

    const handleDragStart = (id) => {
        setDraggingId(id);
        // Prevent body scroll on mobile touch devices when dragging starts
        document.body.style.overflow = 'hidden';
    };

    const handleDragEnd = () => {
        setDraggingId(null);
        // Restore body scroll when dragging ends
        document.body.style.overflow = '';
    };

    return (
        <section className="bg-[#F5FAFF] py-8 sm:py-10 overflow-hidden relative font-sans">
            <div className="max-w-5xl mx-auto text-center">
                <div className="container mx-auto mb-6 sm:mb-12">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0047CE] uppercase">
                        Global Ecosystem
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight mt-1 sm:mt-2 mb-3 sm:mb-4">
                        WCC Partners
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#44474D] font-medium leading-relaxed px-2">
                        Drag any partner logo over others and release to bounce it back to its place.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-75 sm:max-w-110 md:max-w-180 h-80 sm:h-96 md:h-120 mx-auto touch-none"
                >

                    {/* BACKGROUND ORBITAL RINGS */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-blue-300/40 animate-spin-slow" />
                        <div className="absolute w-[60%] h-[60%] rounded-full border border-blue-200/50 animate-spin-reverse-slow" />
                    </div>

                    {/* CENTER TROPHY NODE */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <div className="group relative flex items-center justify-center">
                            <div className="absolute w-full h-full rounded-full border border-blue-400/40 animate-pulse-ring" />
                            <div className="absolute w-full h-full rounded-full border border-blue-500/30 animate-pulse-ring-delayed" />
                            <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-2xl animate-glow-pulse group-hover:bg-blue-500/50 transition-colors duration-300" />

                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-linear-to-b from-blue-50/60 to-white/90 rounded-full p-1.5 sm:p-2 shadow-2xl shadow-blue-500/10 border border-blue-100/60 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-300">
                                <div className="w-full h-full bg-white rounded-full p-2 sm:p-3 md:p-5 shadow-inner border border-slate-200 flex flex-col items-center justify-center">
                                    <img
                                        src={trophy}
                                        alt="WCC Trophy"
                                        className="h-12 sm:h-16 md:h-26 object-contain mb-1 sm:mb-1.5 md:mb-2 group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                                    />
                                    <h3 className="text-[9px] sm:text-[11px] md:text-sm font-extrabold text-[#0B192C] tracking-tight">
                                        Who we work with
                                    </h3>
                                    <div className="w-4 sm:w-5 md:w-7 h-0.5 sm:h-1 bg-[#0052CC] rounded-full mt-0.5 sm:mt-1 md:mt-1.5 group-hover:w-10 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC PARTNER LOGOS */}
                    {partners.map((partner, index) => {
                        const isDragging = draggingId === partner.id;

                        return (
                            <div
                                key={partner.id}
                                className={`absolute ${partner.positionClass} ${partner.animationClass} touch-none`}
                                style={{
                                    zIndex: isDragging ? 100 : 20,
                                    touchAction: 'none'
                                }}
                            >
                                <motion.div
                                    drag
                                    dragSnapToOrigin={true}
                                    dragElastic={0.6}
                                    onDragStart={() => handleDragStart(partner.id)}
                                    onDragEnd={handleDragEnd}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 20,
                                    }}
                                    className="cursor-grab active:cursor-grabbing select-none outline-none touch-none"
                                    style={{ touchAction: 'none' }}
                                >
                                    <div className="group relative touch-none">
                                        <div className="absolute -inset-2 sm:-inset-2.5 rounded-full blur-xl bg-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div
                                            className={`relative ${partner.sizeClass} bg-white rounded-full p-1 sm:p-1 shadow-xl border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]`}
                                        >
                                            <img
                                                src={partner.img}
                                                alt={`Partner Logo ${index + 1}`}
                                                className="w-full h-full object-contain rounded-full pointer-events-none select-none"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default GlobalEcosystem;
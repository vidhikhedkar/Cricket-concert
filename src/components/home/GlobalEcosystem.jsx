import React from 'react';
import WCC1 from '../../assets/home/section12/WCC1.png';
import WCC2 from '../../assets/home/section12/WCC2.png';
import WCC3 from '../../assets/home/section12/WCC3.png';
import WCC4 from '../../assets/home/section12/WCC4.png';
import WCC5 from '../../assets/home/section12/WCC5.png';
import WCC6 from '../../assets/home/section12/WCC6.png';
import trophy from '../../assets/home/section12/trophy.png';

const GlobalEcosystem = () => {
    return (
        <section className="bg-[#F5FAFF] py-10  overflow-hidden relative font-sans">
            <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(-12px) rotate(-2deg); }
          50% { transform: translateY(12px) rotate(2deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(12px) rotate(2deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15); transform: translateY(-4px); }
          50% { box-shadow: 0 22px 40px -5px rgba(59, 130, 246, 0.35); transform: translateY(4px); }
        }
        .animate-float-slow {
          animation: floatSlow 6.5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 7s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
      `}</style>

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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-65 md:h-65 bg-linear-to-b from-blue-50/60 to-white/90 rounded-full p-1.5 sm:p-2.5 shadow-2xl shadow-blue-500/10 border border-blue-100/60 flex items-center justify-center animate-pulse-glow group hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-full h-full bg-white rounded-full p-2.5 sm:p-4 md:p-6 shadow-inner border border-slate-200 flex flex-col items-center justify-center">
                                <img
                                    src={trophy}
                                    alt="WCC Trophy"
                                    className="h-16 sm:h-20 md:h-32 object-contain mb-1 sm:mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="text-[10px] sm:text-xs md:text-base font-extrabold text-[#0B192C] tracking-tight">
                                    Who we work with
                                </h3>
                                <div className="w-5 sm:w-6 md:w-8 h-0.5 sm:h-1 bg-[#0052CC] rounded-full mt-1 sm:mt-1.5 md:mt-2" />
                            </div>
                        </div>
                    </div>

                    {/*   Top Center Logo */}
                    <div className="absolute top-[0%] sm:top-[2%] left-1/2 -translate-x-1/2 animate-float-slow z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full p-1.5 sm:p-2 shadow-lg border border-blue-100/60 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <img
                                src={WCC3}
                                alt="Partner Logo"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                    </div>

                    {/* Top Left Logo */}
                    <div className="absolute top-[16%] sm:top-[20%] left-[4%] sm:left-[10%] md:left-[16%] animate-float-reverse z-10">
                        <div className="w-15 h-15 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white rounded-full p-2 sm:p-3 shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <img
                                src={WCC2}
                                alt="Partner Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/*  Top Right Logo */}
                    <div className="absolute top-[15%] sm:top-[18%] right-[6%] sm:right-[12%] md:right-[18%] animate-float-slow z-10">
                        <div className="w-13 h-13 sm:w-18 sm:h-18 md:w-26 md:h-26 bg-white rounded-full p-1.5 sm:p-3 shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <img
                                src={WCC4}
                                alt="Partner Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Far Right Middle Logo */}
                    <div className="absolute top-[58%] right-[2%] sm:right-[5%] md:right-[9%] animate-float-reverse z-10">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 bg-white rounded-full p-1.5 sm:p-2.5 shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <img
                                src={WCC5}
                                alt="Partner Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/*  Far Left Middle Logo */}
                    <div className="absolute top-[55%] left-[2%] sm:left-[4%] md:left-[8%] animate-float-slow z-10">
                        <div className="w-11 h-11 sm:w-15 sm:h-15 md:w-20 md:h-20 bg-white rounded-full p-1.5 sm:p-2.5 shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <img
                                src={WCC1}
                                alt="Partner Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Bottom Left Logo */}
                    <div className="absolute bottom-[4%] sm:bottom-[6%] left-[18%] sm:left-[22%] md:left-[27%] animate-float-reverse z-10">
                        <div className="w-12 h-12 sm:w-18 sm:h-18 md:w-26 md:h-26 bg-white rounded-full p-1.5 sm:p-3 shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <img
                                src={WCC6}
                                alt="Partner Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/*  Bottom Right Dark Blue Counter Badge */}
                    <div className="absolute bottom-[2%] sm:bottom-[4%] right-[16%] sm:right-[20%] md:right-[25%] animate-float-slow z-10">
                        <div className="w-14 h-14 sm:w-22 sm:h-22 md:w-32 md:h-32 bg-[#0B192C] text-white rounded-full shadow-2xl flex flex-col items-center justify-center p-1 sm:p-2 md:p-3 hover:scale-110 transition-transform duration-300 border-2 border-blue-400/20">
                            <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight">
                                500+
                            </span>
                            <span className="text-[7px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-blue-200 uppercase mt-0.5 text-center leading-tight">
                                Global Partners
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalEcosystem;
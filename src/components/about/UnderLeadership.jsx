import React from 'react';
import leadership from '../../assets/about/section4/leadership.png';
import { NavLink } from 'react-router-dom';

const UnderLeadership = () => {
    return (
        <section
            className="w-full bg-white py-2 flex flex-col items-center justify-center"
            aria-label="Under Leadership Section"
        >
            {/* Top Horizontal Divider */}
            <div
                className="w-full max-w-7xl bg-[#E1E3E4] h-px mb-12 px-4"
                aria-hidden="true"
            />

            <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

                {/* Left Content Column */}
                <div
                    className="flex flex-col items-start justify-center"
                    aria-label="Leadership Information"
                >
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#5283E0] uppercase mb-3">
                        STADIUM WALK
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-slate-900">
                        UNDER LEADERSHIP
                    </h2>

                    <p className="text-[#4B5563] sm:text-md leading-relaxed mb-8 max-w-xl">
                        Our leadership team brings together experienced professionals dedicated to shaping the future of cricket through innovation, integrity, and strategic vision.
                    </p>

                    <NavLink
                        to="/leadership"
                        aria-label="Meet our leadership team"
                        className={({ isActive }) =>
                            `inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-wide border-b-2 pb-1 transition-colors duration-200 ${isActive
                                ? 'text-blue-600 border-blue-600'
                                : 'text-slate-900 border-slate-900 hover:text-blue-600 hover:border-blue-600'
                            }`
                        }
                    >
                        MEET OUR LEADERSHIP
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </NavLink>
                </div>

                {/* Right Image Column */}
                <div className="w-full flex justify-start lg:justify-end">
                    <div
                        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
                        aria-label="Stadium Walk leadership preview graphic container"
                    >
                        <img
                            src={leadership}
                            alt="Stadium Walk Leadership panoramic view"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>

            {/* Bottom Horizontal Divider */}
            <div
                className="w-full max-w-7xl bg-[#E1E3E4] h-px mt-16 px-4"
                aria-hidden="true"
            />
        </section>
    );
};

export default UnderLeadership;
import React from 'react';
import ourboard from '../../assets/about/section6/ourboard.jpg';
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

const OurBoard = () => {
    return (
        <section
            className="w-full bg-[#F0F7FF] py-12  flex items-center justify-center"
            aria-label="Our Board Section"
        >
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                <div
                    className="lg:col-span-4 flex flex-col items-start justify-center"
                    aria-label="Board Information"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111010] mb-4">
                        OUR BOARD
                    </h2>

                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-6">
                        The Board provides strategic direction, governance, and oversight to ensure WCC continues to grow the game while maintaining the highest standards of transparency and excellence.
                    </p>

                    <NavLink
                        to="/board"
                        aria-label="View full board members list"
                        className="inline-flex items-center gap-1 text-xs  font-bold text-[#071B34] tracking-wide hover:text-blue-600 transition-colors duration-200"
                    >
                        VIEW FULL BOARD <span><IoIosArrowRoundForward />
                        </span>
                    </NavLink>
                </div>

                {/* Center Column: Chairman Portrait Image */}
                <div
                    className="lg:col-span-4 w-full flex justify-start"
                    aria-label="Chairman portrait container"
                >
                    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white">
                        <img
                            src={ourboard}
                            alt="Jonathan Williams, Chairman of World Cricket Championship"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Right Column: Chairman Details and Highlights */}
                <div
                    className="lg:col-span-4 flex flex-col items-start justify-center"
                    aria-label="Chairman Profile and Highlights"
                >
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#0A192F] uppercase mb-1">
                        CHAIRMAN
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#071B34] tracking-tight mb-1">
                        Jonathan Williams
                    </h3>

                    <p className="text-[#6B7280] text-xs sm:text-sm mb-6">
                        Chairman, World Cricket Championship
                    </p>

                    {/* Highlights List */}
                    <ul className="flex flex-col gap-3 mb-8 w-full" aria-label="Chairman career highlights">
                        <li className="flex items-center gap-3 text-slate-700 text-sm sm:text-base font-medium">
                            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#071B34] text-xs shrink-0 shadow-sm" aria-hidden="true">
                                <MdLocationPin className='w-4 h-4' />

                            </span>
                            25+ Years of Sports Leadership
                        </li>
                        <li className="flex items-center gap-3 text-[#071B34] text-sm  font-medium">
                            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#071B34] text-xs shrink-0 shadow-sm" aria-hidden="true">
                                <MdLocationPin className='w-4 h-4' />


                            </span>
                            Global Cricket Development
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 text-sm sm:text-base font-medium">
                            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#071B34] text-xs shrink-0 shadow-sm" aria-hidden="true">
                                <MdLocationPin className='w-4 h-4' />

                            </span>
                            International Governance
                        </li>
                    </ul>

                    <NavLink
                        to="/board/members"
                        aria-label="View board members"
                        className="w-full sm:w-auto text-center bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-sm px-14 py-2.5 rounded-xl shadow-lg transition-all duration-200"
                    >
                        VIEW BOARD MEMBERS →
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default OurBoard;
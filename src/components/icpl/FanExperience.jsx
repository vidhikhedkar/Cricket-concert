import React from 'react';
import fan from '../../assets/icpl/section8/FanExperience.jpg';
import { FaTachometerAlt, FaTicketAlt, FaGamepad, FaStar, FaGlobe, FaTrophy, FaBalanceScale, FaDesktop, FaGraduationCap, FaFemale, FaCube, FaVrCardboard, FaTag } from 'react-icons/fa';

const FanExperience = () => {
    return (
        <section className="relative w-full py-12 bg-[#0B132B] overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={fan}
                    alt="Fan Experience Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#081C3591]/57 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 container flex flex-col items-center">

                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-center mb-6">
                    Fan Experience
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-4xl mb-4">

                    {/* Feature 1: Live Scores */}
                    <div className="py-3.5 px-6 flex items-center space-x-4 ">
                        <div className="bg-white text-[#0A192F] p-2.5 rounded-md flex items-center justify-center shrink-0 shadow">
                            <FaTachometerAlt className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm tracking-wide">LIVE SCORES</h3>
                            <p className="text-white text-xs mt-0.5">
                                Real-time scores and ball-by-ball updates.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: Tickets & Events */}
                    <div className="py-3.5 px-6 flex items-center space-x-4 ">
                        <div className="bg-white text-[#0A192F] p-2.5 rounded-md flex items-center justify-center shrink-0 shadow">
                            <FaTicketAlt className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm tracking-wide">TICKETS & EVENTS</h3>
                            <p className="text-white text-xs mt-0.5">
                                Be part of the live experience.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Fantasy Cricket */}
                    <div className="py-3.5 px-6 flex items-center space-x-4 ">
                        <div className="bg-white text-[#0A192F] p-2.5 rounded-md flex items-center justify-center shrink-0 shadow">
                            <FaGamepad className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm tracking-wide">FANTASY CRICKET</h3>
                            <p className="text-white text-xs mt-0.5">
                                Create your team and compete globally.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4: Exclusive Content */}
                    <div className="py-3.5 px-6 flex items-center space-x-4 ">
                        <div className="bg-white text-[#0A192F] p-2.5 rounded-md flex items-center justify-center shrink-0 shadow">
                            <FaStar className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm tracking-wide">EXCLUSIVE CONTENT</h3>
                            <p className="text-white text-xs mt-0.5">
                                Behind-the-scenes access and special stories.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Key Highlights Section */}
                <div className="w-full max-w-5xl mb-8">
                    <div className="mb-3 text-left sm:text-left">
                        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-400 uppercase">
                            KEY HIGHLIGHTS
                        </span>
                    </div>

                    {/* 6 pill-shaped white cards matching the screenshot layout exactly */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

                        {/* Highlight 1 */}
                        <div className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-md">
                            <div className="text-[#0A192F] mb-1.5">
                                <FaGlobe className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-[#0A192F] tracking-wider">GLOBAL REACH</span>
                        </div>

                        {/* Highlight 2 */}
                        <div className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-md">
                            <div className="text-[#0A192F] mb-1.5">
                                <FaTrophy className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-[#0A192F] tracking-wider">ELITE COMPETITION</span>
                        </div>

                        {/* Highlight 3 */}
                        <div className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-md">
                            <div className="text-[#0A192F] mb-1.5">
                                <FaBalanceScale className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-[#0A192F] tracking-wider">TRANSPARENT GOVERNANCE</span>
                        </div>

                        {/* Highlight 4 */}
                        <div className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-md">
                            <div className="text-[#0A192F] mb-1.5">
                                <FaDesktop className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-[#0A192F] tracking-wider">DIGITAL PLATFORM</span>
                        </div>

                        {/* Highlight 5 */}
                        <div className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-md">
                            <div className="text-[#0A192F] mb-1.5">
                                <FaGraduationCap className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-[#0A192F] tracking-wider">YOUTH DEVELOPMENT</span>
                        </div>

                        {/* Highlight 6 */}
                        <div className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center shadow-md">
                            <div className="text-[#0A192F] mb-1.5">
                                <FaFemale className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-[#0A192F] tracking-wider">WOMEN'S CRICKET</span>
                        </div>

                    </div>
                </div>

                {/* Bottom Three White Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-6xl">

                    {/* Card 1: Digital Collectibles */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 mb-4 sm:mb-6">
                                <div className="text-[#0A192F] sm:mb-6 mb-0 bg-gray-100 w-12 h-12 rounded-2xl flex items-center justify-center">
                                    <FaCube className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A192F] mb-3">Digital Collectibles</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Own limited-edition digital match moments as unique assets.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Immersive VR View */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 mb-4 sm:mb-6">
                                <div className="text-[#0A192F] sm:mb-6 mb-0 bg-gray-100 w-12 h-12 rounded-2xl flex items-center justify-center">
                                    <FaVrCardboard className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A192F] mb-3">Immersive VR View</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Experience the game from the middle of the pitch with VR.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Loyalty Rewards */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 mb-4 sm:mb-6">
                            <div className="text-[#0A192F] sm:mb-6 mb-0 bg-gray-100 w-12 h-12 rounded-2xl flex items-center justify-center">
                                <FaTag className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A192F] mb-3">Loyalty Rewards</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Exclusive access to player meets and training sessions.
                        </p>
                    </div>
                </div>

            </div>

        </div>
        </section >
    );
};

export default FanExperience;
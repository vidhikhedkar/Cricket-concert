import React from 'react';
import SarahMitchell from '../../assets/about/section7/SarahMitchell.jpg';
import ArunPatel from '../../assets/about/section7/ArunPatel.jpg';
import DavidMorgan from '../../assets/about/section7/DavidMorgan.jpg';
import PriyaSharma from '../../assets/about/section7/PriyaSharma.jpg';
import MichaelBrown from '../../assets/about/section7/MichaelBrown.jpg';

import india from '../../assets/home/section2/india.png';
import Australia from '../../assets/home/section2/Australia.png';
import UnitedKingdom from '../../assets/home/section2/England.jpg';
import SouthAfrica from '../../assets/home/section2/South_Africa.jpg';
import NewZealand from '../../assets/home/section2/New-Zealand.png';
import Pakistan from '../../assets/home/section2/Pakistan.png';
import SriLanka from '../../assets/home/section2/SriLanka.png';
import Bangladesh from '../../assets/home/section2/Bangladesh.png';

const advisoryMembers = [
    {
        name: "Sarah Mitchell",
        role: "SPORTS GOVERNANCE",
        image: SarahMitchell,
        flag: UnitedKingdom,
        country: "United Kingdom",
    },
    {
        name: "Arun Patel",
        role: "SPORTS ADMINISTRATION",
        image: ArunPatel,
        flag: SouthAfrica,
        country: "South Africa",
    },
    {
        name: "David Morgan",
        role: "INTERNATIONAL CRICKET DEVELOPMENT",
        image: DavidMorgan,
        flag: Australia,
        country: "Australia",
    },
    {
        name: "Priya Sharma",
        role: "DIGITAL STRATEGY & INNOVATION",
        image: PriyaSharma,
        flag: india,
        country: "India",
    },
    {
        name: "Michael Brown",
        role: "COMMERCIAL PARTNERSHIPS",
        image: MichaelBrown,
        flag: Pakistan,
        country: "Pakistan",
    },
    {
        name: "Arun Patel",
        role: "SPORTS ADMINISTRATION",
        image: ArunPatel,
        flag: NewZealand,
        country: "New Zealand",
    },
];

const AdvisoryBoard = () => {
    return (
        <section
            className="w-full bg-white py-12 flex items-center justify-center"
            aria-label="Advisory Board Section"
        >
            <div className="container flex flex-col items-start">

                {/* Section Heading */}
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-12"
                    aria-label="Advisory Board Title"
                >
                    ADVISORY BOARD
                </h2>

                {/* Grid of Advisory Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
                    {advisoryMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl flex flex-col items-center text-center group"
                            aria-label={`Advisory member card for ${member.name}`}
                        >
                            {/* Image Container */}
                            <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-4 aspect-3/4 bg-slate-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            {/* Member Name */}
                            <h3 className="text-base sm:text-lg font-bold text-[#071B34] tracking-wide mb-1">
                                {member.name}
                            </h3>

                            {/* Member Role */}
                            <p className="text-[10px]  text-[#6B7280] tracking-wider uppercase mb-3 px-1">
                                {member.role}
                            </p>

                            {/* Country Flag & Name */}
                            <div className="flex items-center gap-1.5 ">
                                <img
                                    src={member.flag}
                                    alt={`${member.country} flag`}
                                    className="w-4 h-3 object-cover shadow-xs"
                                />
                                <span className="text-[11px] font-bold text-[#9CA3AF]">
                                    {member.country}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AdvisoryBoard;
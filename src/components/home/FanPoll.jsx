import React, { useState } from 'react';
import sachin from '../../assets/home/section10/sachin.png';
import NarendraModiStadium from '../../assets/home/section10/NarendraModiStadium.jpg';
import LordsCricketGround from '../../assets/home/section10/LordsCricketGround.jpg';
import MelbourneCricketGround from '../../assets/home/section10/MelbourneCricketGround.jpg';

const pollOptionsData = [
    { id: 1, name: 'Virat Kohli', percentage: 45, isSelected: true },
    { id: 2, name: 'Rohit Sharma', percentage: 28, isSelected: false },
    { id: 3, name: 'Jasprit Bumrah', percentage: 17, isSelected: false },
    { id: 4, name: 'Glenn Maxwell', percentage: 10, isSelected: false },
];

const venuesData = [
    {
        id: 1,
        name: 'Narendra Modi Stadium',
        location: 'Ahmedabad, India',
        capacity: 'Capacity: 132,000',
        image: NarendraModiStadium
    },
    {
        id: 2,
        name: 'Melbourne Cricket Ground',
        location: 'Melbourne, Australia',
        capacity: 'Capacity: 100,024',
        image: MelbourneCricketGround,
    },
    {
        id: 3,
        name: "Lord's Cricket Ground",
        location: 'London, England',
        capacity: 'Capacity: 31,100',
        image: LordsCricketGround,
    },
    {
        id: 4,
        name: 'Melbourne Cricket Ground',
        location: 'Melbourne, Australia',
        capacity: 'Capacity: 100,024',
        image: MelbourneCricketGround,
    },
];

const ArrowRightIcon = ({ className = 'w-3.5 h-3.5' }) => (
    <svg
        className={className}
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

const LightBulbIcon = () => (
    <svg
        className="w-4 h-4 text-[#3B82F6]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
    </svg>
);

const FanPoll = () => {
    const [pollOptions, setPollOptions] = useState(pollOptionsData);

    const handleSelectOption = (id) => {
        setPollOptions((prev) =>
            prev.map((opt) => ({
                ...opt,
                isSelected: opt.id === id,
            }))
        );
    };

    return (
        <section className="container mx-auto px-4 lg:px-0 py-8 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-white rounded-2xl p-5  border-5 border-[#F1F5F9] shadow-xs flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-[#1E293B]">Fan Poll</h3>
                        <p className="text-xs text-[#475569] font-medium mt-1 mb-5">
                            Who is the Player of the Tournament?
                        </p>

                        <div className="space-y-4">
                            {pollOptions.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => handleSelectOption(option.id)}
                                    className="cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                                        <span
                                            className={
                                                option.isSelected
                                                    ? 'text-[#1E293B] font-bold'
                                                    : 'text-slate-600 group-hover:text-[#0B192C]'
                                            }
                                        >
                                            {option.name}
                                        </span>
                                        <span className="text-[#64748B] font-medium">
                                            {option.percentage}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-300 ${option.isSelected
                                                ? 'bg-[#3B82F6]'
                                                : 'bg-[#F1F5F9] group-hover:bg-slate-400'
                                                }`}
                                            style={{ width: `${option.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100/60 text-xs">
                        <span className="text-[#64748B] font-medium">
                            Total Votes: 12,458
                        </span>
                        <button
                            type="button"
                            className="text-[#0A192F] font-bold flex items-center gap-1 hover:text-[#3B82F6] transition-colors cursor-pointer"
                        >
                            View Result <ArrowRightIcon />
                        </button>
                    </div>
                </div>

                <div className="bg-[#F0F7FF] rounded-2xl p-5 sm:p-6 border border-[#EFF6FF] shadow-xs relative overflow-hidden flex flex-col justify-between min-h-80">
                    <div className="relative z-10 max-w-[58%] sm:max-w-[55%]">
                        <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center mb-4">
                            <LightBulbIcon className="text-[#3B82F6]" />
                        </div>

                        <h3 className="text-lg font-bold text-[#1E293B] mb-3">
                            Did You Know?
                        </h3>

                        <p className="text-sm text-[#475569] leading-relaxed font-medium mb-6">
                            Sachin Tendulkar is the only player in the world to score 100 international centuries.
                        </p>

                        <button
                            type="button"
                            className="px-3.5 py-2 rounded-lg bg-white border border-[#3B82F6] text-[#3B82F6] text-xs font-semibold hover:bg-blue-50 transition-colors shadow-2xs cursor-pointer"
                        >
                            Explore More Facts
                        </button>
                    </div>

                    <div className="absolute right-1 bottom-0 h-[92%] w-1/2 flex items-end justify-end pointer-events-none">
                        <img
                            src={sachin}
                            alt="Sachin Tendulkar"
                            className="h-full object-contain object-bottom"
                        />
                    </div>
                </div>


                <div className="bg-white rounded-2xl p-5 border-5 border-[#F1F5F9] shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-1">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 mb-4">
                            <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
                                Upcoming Venues
                            </h3>

                            <button
                                type="button"
                                onClick={() => { }}
                                className="group flex items-center gap-1 text-xs font-semibold text-[#0A192F] hover:text-[#3B82F6] transition-colors cursor-pointer self-start sm:self-auto active:scale-95"
                            >
                                <span>View All Venues</span>
                                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </button>
                        </div>

                        <div className="space-y-3.5">
                            {venuesData.map((venue) => (
                                <div
                                    key={venue.id}
                                    className="flex items-center gap-3 group cursor-pointer"
                                >
                                    <img
                                        src={venue.image}
                                        alt={venue.name}
                                        className="w-16 h-11 rounded-lg object-cover shrink-0 bg-slate-100"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-xs font-bold text-[#1E293B] truncate group-hover:text-[#3B82F6] transition-colors">
                                            {venue.name}
                                        </h4>
                                        <p className="text-[11px] text-[#64748B] truncate mt-0.5">
                                            {venue.location}
                                        </p>
                                        <p className="text-[10px] text-[#94A3B8] truncate">
                                            {venue.capacity}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FanPoll;
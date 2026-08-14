import React from 'react';
import icplBackground from '../../assets/icpl/section1/icplBackground.jpg';

const IcplHeroSection = () => {
    return (
        <section
            className="relative w-full min-h-[85vh] sm:min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-20"
            aria-label="ICPL Hero Section"
        >
            {/* Background Image with Dark Gradient Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${icplBackground})` }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80 z-0"
                aria-hidden="true"
            />

            {/* Content Container */}
            <div
                className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center"
                aria-label="Hero content container"
            >

                {/* Main Headings */}
                <h1 className="flex flex-col items-center tracking-tight uppercase drop-shadow-2xl mb-6">
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide mb-2">
                        THE FUTURE OF
                    </span>
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#7CAEFF] tracking-wide">
                        GLOBAL CRICKET
                    </span>
                </h1>

                {/* Subtitle Paragraph */}
                <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-md">
                    Experience the pinnacle of sports entertainment. Institutional excellence meets next-generation athleticism on the world's grandest stage.
                </p>

            </div>
        </section>
    );
};

export default IcplHeroSection;
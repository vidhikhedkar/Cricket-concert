import React from 'react';
import cricket from '../../assets/partner/section2/buildingcricket.jpg';

const BuildingCricketTogether = () => {
    return (
        <section className="py-16  bg-[#F2F6FF] overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <h2 className="text-xl sm:text-3xl lg:text-4xl sm:max-w-80 w-full font-bold text-[#0A192F] tracking-tight leading-[1.15] mb-6">
                            BUILDING CRICKET   TOGETHER
                        </h2>

                        <p className="text-[#434654] text-base sm:text-lg leading-relaxed mb-6">
                            The World Cricket Championship is more than a governing body; it is a dynamic platform that unites world-class brands, innovative organizations, and forward-thinking investors.
                        </p>

                        <p className="text-[#434654] text-base sm:text-lg leading-relaxed">
                            Our partnership model is built on mutual growth, global resonance, and a shared commitment to elevating the sport across every continent. We offer unparalleled access to an engaged global audience, driving measurable impact and lasting legacy.
                        </p>
                    </div>

                    {/* Right Image Container with rounded corners and subtle shadow */}
                    <div className="lg:col-span-6 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-16/10">
                            <img
                                src={cricket}
                                alt="Business professionals collaborating in a meeting room with stadium view"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BuildingCricketTogether;
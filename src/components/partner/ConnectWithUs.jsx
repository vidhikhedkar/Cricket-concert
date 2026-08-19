import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ConnectWithUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="bg-[#FAF8FF] py-16 relative overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-8 sm:p-12 shadow-xl border border-[#C3C5D7]/20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Column: Info */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight uppercase mb-4">
                            Connect With Us
                        </h2>
                        <p className="text-sm sm:text-base text-[#434654] font-normal leading-relaxed mb-8">
                            Our Investor Relations team is available to discuss strategy, performance, and partnership opportunities.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[#191B23]">
                                <div className=" text-[#2D6BFF] flex items-center justify-center shrink-0">
                                    <FaEnvelope className="text-sm" />
                                </div>
                                <span className="text-xs sm:text-sm font-regular tracking-wide">
                                    investors@wcc-international.com
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-[#191B23]">
                                <div className=" text-[#2D6BFF] flex items-center justify-center shrink-0">
                                    <FaPhoneAlt className="text-sm" />
                                </div>
                                <span className="text-xs sm:text-sm font-regular tracking-wide">
                                    +44 (0) 20 7123 4567
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-[#191B23]">
                                <div className=" text-[#2D6BFF] flex items-center justify-center shrink-0">
                                    <FaMapMarkerAlt className="text-sm" />
                                </div>
                                <span className="text-xs sm:text-sm font-regular tracking-wide">
                                    WCC Headquarters, London, UK
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div>
                            <label className="block text-xs font-semibold tracking-widest text-[#434654] mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Doe"
                                required
                                className="w-full bg-white border border-[#C3C5D7] rounded-xl px-4 py-3 text-sm text-[#191B23] placeholder:text-[#6B7280] focus:outline-none focus:border-[#191B23] transition-colors shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold tracking-widest text-[#434654] mb-2">
                                Organization
                            </label>
                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Investment Group LLC"
                                required
                                className="w-full bg-white border border-[#C3C5D7] rounded-xl px-4 py-3 text-sm text-[#191B23] placeholder:text-[#6B7280] focus:outline-none focus:border-[#191B23] transition-colors shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold tracking-widest text-[#434654] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@example.com"
                                required
                                className="w-full bg-white border border-[#C3C5D7] rounded-xl px-4 py-3 text-sm text-[#191B23] placeholder:text-[#6B7280] focus:outline-none focus:border-[#191B23] transition-colors shadow-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0A192F] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-md cursor-pointer mt-2"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ConnectWithUs;
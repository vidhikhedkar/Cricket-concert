import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const JoinTheEliteNetwork = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyName: '',
    interestArea: 'Technology',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    "Customized activation plans",
    "Dedicated partnership management team",
    "Exclusive access to premier events",
  ];

  return (
    <section className="bg-[#F4F8FF] py-16 relative overflow-hidden text-[#191B23]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Dark Info Panel */}
          <div className="lg:col-span-5 bg-[#0A192F] p-8 sm:p-12 text-white flex flex-col justify-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 leading-snug">
                Join the Elite Network
              </h2>
              <p className="text-xs sm:text-sm text-[#B5C4FF] font-regular leading-relaxed mb-8">
                Ready to elevate your brand on the global stage? Let's discuss how we can build a tailored partnership that meets your strategic objectives.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#DBE1FF] text-sm shrink-0" />
                  <span className="text-xs sm:text-sm font-regular text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#191B23] tracking-wider mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full bg-slate-50 border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#191B23] tracking-wider mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-slate-50 border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#191B23] tracking-wider mb-1.5">
                  Company Email
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full bg-slate-50 border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none  transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#191B23] tracking-wider mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Global Corp"
                  className="w-full bg-slate-50 border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none  transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#191B23]  tracking-wider mb-1.5">
                  Interest Area
                </label>
                <select
                  name="interestArea"
                  value={formData.interestArea}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-[#C3C5D7] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none  transition-all cursor-pointer"
                >
                  <option value="Technology">Technology</option>
                  <option value="Broadcast">Broadcast</option>
                  <option value="Venue">Venue</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Education">Education</option>
                  <option value="Travel">Travel</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0A192F] text-white font-regular py-3.5 px-6 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-[#191B23]/10 text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTheEliteNetwork;
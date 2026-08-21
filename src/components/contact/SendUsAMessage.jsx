import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SendUsAMessage = () => {
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-[#EAF1FF] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading, Description & Privacy Notice */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191B23] tracking-tight uppercase mb-8">
                SEND US A MESSAGE
              </h2>
              <p className="text-[#434654] text-sm sm:text-base leading-relaxed max-w-lg">
                Our global support team aims to respond to all enquiries within 24 hours. Please provide as much detail as possible to help us direct your request accurately.
              </p>
            </div>

            {/* Privacy Box */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/60 shadow-sm flex items-start space-x-4 max-w-lg">
              <div className="text-[#00389E] shrink-0 mt-0.5">
                <HiShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-[#434654] text-xs sm:text-sm leading-relaxed">
                Your data is securely processed in accordance with our{' '}

                <Link to="/privacy" className="text-[#00389E] font-semibold underline hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#434654] uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-white border border-[#C3C5D7] rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:border-transparent transition-all shadow-sm"
                />
              </div>

              {/* Organization Field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#434654] uppercase tracking-wider mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Investment Group LLC"
                  className="w-full bg-white border border-[#C3C5D7] rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:border-transparent transition-all shadow-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#434654] uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                  className="w-full bg-white border border-[#C3C5D7] rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:border-transparent transition-all shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0A192F] hover:bg-[#122c54] text-white font-semibold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SendUsAMessage;
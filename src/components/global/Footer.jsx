import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGlobe, FiMail, FiShare2 } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Section: Icons, Logo, and Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-200">

          {/* Left: Social / Action Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors" aria-label="Globe">
              <FiGlobe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors" aria-label="Email">
              <FiMail className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors" aria-label="Share">
              <FiShare2 className="w-5 h-5" />
            </a>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-sm text-gray-800">
              Logo
            </div>
            <span className="text-[10px] tracking-widest text-gray-500 mt-1 uppercase font-semibold">World Cricket Council</span>
          </div>

          {/* Right: Newsletter Subscription */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-72 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm"
            />
            <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#07162C] hover:bg-[#0b2244] text-white text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section: Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-10 border-b border-gray-200 text-sm">

          {/* Column 1: About WCC */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">About WCC</h4>
            <ul className="space-y-2.5">
              <li><NavLink to="/about" className="text-gray-500 hover:text-gray-900 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/vision" className="text-gray-500 hover:text-gray-900 transition-colors">Vision & Mission</NavLink></li>
              <li><NavLink to="/leadership" className="text-gray-500 hover:text-gray-900 transition-colors">Leadership</NavLink></li>
              <li><NavLink to="/global-presence" className="text-gray-500 hover:text-gray-900 transition-colors">Global Presence</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 2: Cricket */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Cricket</h4>
            <ul className="space-y-2.5">
              <li><NavLink to="/t30-format" className="text-gray-500 hover:text-gray-900 transition-colors">T30 Format</NavLink></li>
              <li><NavLink to="/tournaments" className="text-gray-500 hover:text-gray-900 transition-colors">Tournaments</NavLink></li>
              <li><NavLink to="/teams" className="text-gray-500 hover:text-gray-900 transition-colors">Teams</NavLink></li>
              <li><NavLink to="/rankings" className="text-gray-500 hover:text-gray-900 transition-colors">Rankings</NavLink></li>
              <li><NavLink to="/schedule" className="text-gray-500 hover:text-gray-900 transition-colors">Schedule</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Media */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Media</h4>
            <ul className="space-y-2.5">
              <li><NavLink to="/news" className="text-gray-500 hover:text-gray-900 transition-colors">News</NavLink></li>
              <li><NavLink to="/gallery" className="text-gray-500 hover:text-gray-900 transition-colors">Gallery</NavLink></li>
              <li><NavLink to="/videos" className="text-gray-500 hover:text-gray-900 transition-colors">Videos</NavLink></li>
              <li><NavLink to="/press-releases" className="text-gray-500 hover:text-gray-900 transition-colors">Press Releases</NavLink></li>
              <li><NavLink to="/downloads" className="text-gray-500 hover:text-gray-900 transition-colors">Downloads</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Partners */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Partners</h4>
            <ul className="space-y-2.5">
              <li><NavLink to="/sponsors" className="text-gray-500 hover:text-gray-900 transition-colors">Sponsors</NavLink></li>
              <li><NavLink to="/franchise-opportunities" className="text-gray-500 hover:text-gray-900 transition-colors">Franchise Opportunities</NavLink></li>
              <li><NavLink to="/broadcasters" className="text-gray-500 hover:text-gray-900 transition-colors">Broadcasters</NavLink></li>
              <li><NavLink to="/partner" className="text-gray-500 hover:text-gray-900 transition-colors">Become a Partner</NavLink></li>
              <li><NavLink to="/community" className="text-gray-500 hover:text-gray-900 transition-colors">Community</NavLink></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-gray-500 text-xs sm:text-sm">
              <li>100 Premium Way, Cricket City, CC 12345</li>
              <li>info@icpl.com</li>
              <li>+1 (800) 123-4567</li>
              <li>support@icpl.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-xs text-gray-500 gap-4">
          <div>
            © 2026 International Cricket Premier League. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <NavLink to="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms-of-service" className="hover:text-gray-900 transition-colors">Terms of Service</NavLink>
            <NavLink to="/cookie-policy" className="hover:text-gray-900 transition-colors">Cookie Policy</NavLink>
            <NavLink to="/accessibility" className="hover:text-gray-900 transition-colors">Accessibility</NavLink>
            <NavLink to="/sitemap" className="hover:text-gray-900 transition-colors">Sitemap</NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
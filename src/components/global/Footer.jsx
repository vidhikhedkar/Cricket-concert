import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGlobe, FiMail, FiShare2 } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 text-slate-600 font-sans">
      <div className="container py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-100">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs">
            Logo
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-80 px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-400 text-sm text-slate-700 bg-slate-50/50 placeholder:text-slate-400"
            />
            <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#132845] text-white text-sm font-semibold transition-colors shadow-sm">
              Subscribe
            </button>
          </div>


          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              aria-label="Globe"
            >
              <FiGlobe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              aria-label="Share"
            >
              <FiShare2 className="w-4 h-4" />
            </a>
          </div>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-10 border-b border-slate-100 text-sm">
          <div>
            <h4 className="font-bold text-slate-900 mb-4">About WCC</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li><NavLink to="/about" className="hover:text-slate-900 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/vision" className="hover:text-slate-900 transition-colors">Vision &amp; Mission</NavLink></li>
              <li><NavLink to="/leadership" className="hover:text-slate-900 transition-colors">Leadership</NavLink></li>
              <li><NavLink to="/global-presence" className="hover:text-slate-900 transition-colors">Global Presence</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-slate-900 transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Cricket</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li><NavLink to="/t30-format" className="hover:text-slate-900 transition-colors">T30 Format</NavLink></li>
              <li><NavLink to="/tournaments" className="hover:text-slate-900 transition-colors">Tournaments</NavLink></li>
              <li><NavLink to="/teams" className="hover:text-slate-900 transition-colors">Teams</NavLink></li>
              <li><NavLink to="/rankings" className="hover:text-slate-900 transition-colors">Rankings</NavLink></li>
              <li><NavLink to="/schedule" className="hover:text-slate-900 transition-colors">Schedule</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Media</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li><NavLink to="/news" className="hover:text-slate-900 transition-colors">News</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-slate-900 transition-colors">Gallery</NavLink></li>
              <li><NavLink to="/videos" className="hover:text-slate-900 transition-colors">Videos</NavLink></li>
              <li><NavLink to="/press-releases" className="hover:text-slate-900 transition-colors">Press Releases</NavLink></li>
              <li><NavLink to="/downloads" className="hover:text-slate-900 transition-colors">Downloads</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Partners</h4>
            <ul className="space-y-3 text-slate-500 font-medium">
              <li><NavLink to="/sponsors" className="hover:text-slate-900 transition-colors">Sponsors</NavLink></li>
              <li><NavLink to="/franchise-opportunities" className="hover:text-slate-900 transition-colors">Franchise Opportunities</NavLink></li>
              <li><NavLink to="/broadcasters" className="hover:text-slate-900 transition-colors">Broadcasters</NavLink></li>
              <li><NavLink to="/partner" className="hover:text-slate-900 transition-colors">Become a Partner</NavLink></li>
              <li><NavLink to="/community" className="hover:text-slate-900 transition-colors">Community</NavLink></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">
              <li>100 Premium Way, Cricket City, CC 12345</li>
              <li>info@icpl.com</li>
              <li>+1 (800) 123-4567</li>
              <li>support@icpl.com</li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} International Cricket Premier League. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <NavLink to="/privacy-policy" className="hover:text-slate-700 transition-colors">Privacy Policy</NavLink>
            <span className="text-slate-300">|</span>
            <NavLink to="/terms-of-service" className="hover:text-slate-700 transition-colors">Terms of Service</NavLink>
            <span className="text-slate-300">|</span>
            <NavLink to="/cookie-policy" className="hover:text-slate-700 transition-colors">Cookie Policy</NavLink>
            <span className="text-slate-300">|</span>
            <NavLink to="/accessibility" className="hover:text-slate-700 transition-colors">Accessibility</NavLink>
            <span className="text-slate-300">|</span>
            <NavLink to="/sitemap" className="hover:text-slate-700 transition-colors">Sitemap</NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
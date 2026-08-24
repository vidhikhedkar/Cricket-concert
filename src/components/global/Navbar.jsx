import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiUser, FiMenu, FiX, FiChevronDown, FiChevronUp, FiChevronRight, FiHome, FiRadio, FiCalendar, FiGrid, FiBarChart2, FiUsers, FiAward, FiFileText, FiImage, FiVideo } from 'react-icons/fi';
import logo from '../../assets/global/logo.png';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOverlayOpen, setIsDropdownOverlayOpen] = useState(false);
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    const desktopDropdownRef = useRef(null);

    const navLinks = [
        { name: 'About us', to: '/about' },
        { name: 'icpl', to: '/icpl' },
        { name: 'Cricket', to: '/cricket' },
        { name: 'be a partner', to: '/partner' },
        { name: 'contact us', to: '/contact' },
    ];

    const quickAccessLinks = [
        { name: 'Home', to: '/', icon: FiHome },
        { name: 'Cricket', to: '/cricket', icon: FiRadio },
        { name: 'Domestic', to: '/domestic', icon: FiCalendar },
        { name: 'International', to: '/international', icon: FiGrid },
        { name: 'Womens Cricket', to: '/womens-cricket', icon: FiBarChart2 },
    ];

    const exploreLinks = [
        { name: 'Youth', to: '/youth', icon: FiUsers },
        { name: 'Sponsors', to: '/sponsors', icon: FiUser },
        { name: 'Sub Partners', to: '/subpartner', icon: FiAward },
        { name: 'Investors', to: '/investors', icon: FiFileText },
        { name: 'Media', to: '/media', icon: FiImage },
        // { name: 'Videos', to: '/videos', icon: FiVideo },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
                setIsDesktopDropdownOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsDesktopDropdownOpen(false);
            }
        };

        // Close the dropdown when scrolling the page
        const handleScroll = () => {
            if (isDesktopDropdownOpen) {
                setIsDesktopDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDesktopDropdownOpen]);

    return (
        <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none md:hidden z-50 relative"
                            aria-label="Toggle Menu"
                        >
                            <FiMenu className="w-7 h-7" />
                        </button>

                        <div className="relative flex items-center space-x-1 sm:space-x-2" ref={desktopDropdownRef}>
                            {/* Logo linking to Home Page */}
                            <Link 
                                to="/" 
                                className="flex items-center"
                                onClick={() => {
                                    setIsDesktopDropdownOpen(false);
                                    setIsDropdownOverlayOpen(false);
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-15 h-15 sm:w-20 sm:h-20 object-contain hover:opacity-90 transition-opacity"
                                />
                            </Link>

                            {/* Chevron button to trigger the dropdown menu */}
                            <button
                                type="button"
                                className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
                                aria-label="Toggle Quick Navigation"
                                onClick={() => {
                                    if (window.innerWidth < 768) {
                                        setIsDropdownOverlayOpen(true);
                                    } else {
                                        setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
                                    }
                                }}
                            >
                                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDesktopDropdownOpen && (
                                <div className="absolute top-12 md:top-14 left-0 lg:-left-12 w-72 md:w-80 bg-[#05142c] border border-blue-900/60 rounded-xl shadow-2xl py-3 z-50 text-white">
                                    <div className="max-h-[calc(100vh-140px)] overflow-y-auto px-3 md:px-4 space-y-3.5 no-scrollbar">
                                        <div>
                                            <div className="text-[11px] font-bold tracking-widest text-[#00E5FF] px-2 mb-1.5 uppercase">
                                                Quick Access
                                            </div>
                                            <div className="space-y-1">
                                                {quickAccessLinks.map((link) => {
                                                    const IconComponent = link.icon;
                                                    return (
                                                        <NavLink
                                                            key={link.name}
                                                            to={link.to}
                                                            className={({ isActive }) =>
                                                                `flex items-center justify-between uppercase px-3 py-2 rounded-lg text-sm font-medium  transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
                                                                }`
                                                            }
                                                            onClick={() => setIsDesktopDropdownOpen(false)}
                                                        >
                                                            <div className="flex items-center space-x-3">
                                                                {IconComponent && <IconComponent className="w-4 h-4 text-gray-400" />}
                                                                <span>{link.name}</span>
                                                            </div>
                                                            <FiChevronRight className="w-4 h-4 text-gray-400" />
                                                        </NavLink>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-[11px] font-bold tracking-widest text-[#00E5FF] px-2 mb-1.5 uppercase">
                                                Explore
                                            </div>
                                            <div className="space-y-1">
                                                {exploreLinks.map((link) => {
                                                    const IconComponent = link.icon;
                                                    return (
                                                        <NavLink
                                                            key={link.name}
                                                            to={link.to}
                                                            className={({ isActive }) =>
                                                                `flex items-center justify-between uppercase px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
                                                                }`
                                                            }
                                                            onClick={() => setIsDesktopDropdownOpen(false)}
                                                        >
                                                            <div className="flex items-center space-x-3">
                                                                {IconComponent && <IconComponent className="w-4 h-4 text-gray-400" />}
                                                                <span>{link.name}</span>
                                                            </div>
                                                            <FiChevronRight className="w-4 h-4 text-gray-400" />
                                                        </NavLink>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="hidden md:block h-6 w-px bg-gray-300 mx-2" />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors uppercase relative py-2 ${isActive
                                        ? 'text-gray-900 font-semibold'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 rounded-full" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <button className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Search">
                            <FiSearch className="w-5 h-5" />
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Profile">
                            <FiUser className="w-5 h-5" />
                        </button>
                        <button className="hidden sm:inline-flex items-center justify-center uppercase px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#07162C] hover:bg-[#0b2244] transition-colors">
                            Join us
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-[#05142c] text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b border-blue-900/60">
                    <span className="font-bold text-lg tracking-wider text-[#00E5FF]">Menu</span>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-white hover:text-gray-300 focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <FiX className="w-7 h-7" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            className={({ isActive }) =>
                                `flex items-center uppercase justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
                                }`
                            }
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <span>{link.name}</span>
                            <FiChevronRight className="w-4 h-4 text-gray-400" />
                        </NavLink>
                    ))}
                </div>

                <div className="p-4 border-t border-blue-900/40 bg-[#05142c]">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="flex items-center justify-center space-x-2 w-full text-center py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-950/40 transition-colors"
                    >
                        <FiX className="w-5 h-5" />
                        <span>Close Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay Navigation */}
            <div className={`fixed inset-0 bg-[#05142c] text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isDropdownOverlayOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b border-blue-900/60 ">
                    <div className="w-7"></div>
                    <div className="flex items-center space-x-2">
                        <Link 
                            to="/" 
                            onClick={() => setIsDropdownOverlayOpen(false)} 
                            className="flex items-center"
                        >
                            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                        </Link>
                        <button 
                            onClick={() => setIsDropdownOverlayOpen(false)} 
                            className="text-white focus:outline-none"
                            aria-label="Close Overlay"
                        >
                            <FiChevronUp className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        onClick={() => setIsDropdownOverlayOpen(false)}
                        className="text-white hover:text-gray-300 focus:outline-none"
                        aria-label="Close Menu"
                    >
                        <FiX className="w-7 h-7" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                    <div>
                        <div className="text-[11px] font-bold tracking-widest text-[#00E5FF] px-3 mb-2 uppercase">
                            Quick Access
                        </div>
                        <div className="space-y-1">
                            {quickAccessLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <NavLink
                                        key={link.name}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between uppercase px-3 py-3 rounded-lg text-sm font-medium  transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
                                            }`
                                        }
                                        onClick={() => setIsDropdownOverlayOpen(false)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            {IconComponent && <IconComponent className="w-4 h-4 text-gray-400" />}
                                            <span>{link.name}</span>
                                        </div>
                                        <FiChevronRight className="w-4 h-4 text-gray-400 " />
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="text-[11px] font-bold tracking-widest text-[#00E5FF] px-3 mb-2 uppercase">
                            Explore
                        </div>
                        <div className="space-y-1">
                            {exploreLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <NavLink
                                        key={link.name}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between uppercase px-3 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
                                            }`
                                        }
                                        onClick={() => setIsDropdownOverlayOpen(false)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            {IconComponent && <IconComponent className="w-4 h-4 text-gray-400" />}
                                            <span>{link.name}</span>
                                        </div>
                                        <FiChevronRight className="w-4 h-4 text-gray-400" />
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-blue-900/60 bg-[#05142c] text-center">
                    <button
                        onClick={() => setIsDropdownOverlayOpen(false)}
                        className="text-xs font-bold tracking-widest text-gray-400 hover:text-white py-2 uppercase"
                    >
                        Back to Menu
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
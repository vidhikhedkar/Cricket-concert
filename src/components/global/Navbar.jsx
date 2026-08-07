import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiUser, FiMenu, FiX, FiChevronDown, FiChevronUp, FiChevronRight, FiHome, FiRadio, FiCalendar, FiGrid, FiBarChart2, FiUsers, FiAward, FiFileText, FiImage, FiVideo } from 'react-icons/fi';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOverlayOpen, setIsDropdownOverlayOpen] = useState(false);
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    const desktopDropdownRef = useRef(null);

    const navLinks = [
        { name: 'About', to: '/about' },
        { name: 'icpl', to: '/icpl' },
        { name: 'Cricket', to: '/cricket' },
        { name: 'be a partner', to: '/partner' },
        { name: 'contact us', to: '/contact' },
    ];


    const quickAccessLinks = [
        { name: 'Home', to: '/', icon: FiHome },
        { name: 'Live Scores', to: '/live-scores', icon: FiRadio },
        { name: 'Fixtures', to: '/fixtures', icon: FiCalendar },
        { name: 'Results', to: '/results', icon: FiGrid },
        { name: 'Rankings', to: '/rankings', icon: FiBarChart2 },
    ];

    const exploreLinks = [
        { name: 'Teams', to: '/teams', icon: FiUsers },
        { name: 'Players', to: '/players', icon: FiUser },
        { name: 'Tournaments', to: '/tournaments', icon: FiAward },
        { name: 'News', to: '/news', icon: FiFileText },
        { name: 'Gallery', to: '/gallery', icon: FiImage },
        { name: 'Videos', to: '/videos', icon: FiVideo },
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

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    // Prevent background scrolling when mobile overlays are open
    
    // useEffect(() => {
    //     if (isSidebarOpen || isDropdownOverlayOpen || isDesktopDropdownOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     };
    // }, [isSidebarOpen, isDropdownOverlayOpen, isDesktopDropdownOpen]);



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

                        <div className="relative flex items-center" ref={desktopDropdownRef}>
                            <div
                                className="flex items-center space-x-1 sm:space-x-2 cursor-pointer select-none py-2"
                                onClick={() => {
                                    if (window.innerWidth < 768) {
                                        setIsDropdownOverlayOpen(true);
                                    } else {
                                        setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
                                    }
                                }}
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs">
                                    Logo
                                </div>
                                <FiChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>


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
                                                                `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
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
                                                                `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
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
                                    `text-sm font-medium transition-colors relative py-2 ${isActive
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
                        <button className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#07162C] hover:bg-[#0b2244] transition-colors">
                            Join us
                        </button>
                    </div>
                </div>
            </div>

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
                                `flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
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


            <div className={`fixed inset-0 bg-[#05142c] text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isDropdownOverlayOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b border-blue-900/60">
                    <div className="w-7"></div>
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => setIsDropdownOverlayOpen(false)}
                    >
                        <span className="font-bold text-lg tracking-wider italic">Logo</span>
                        <FiChevronUp className="w-4 h-4 text-white" />
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
                                            `flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
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
                                            `flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-950/85 text-white font-semibold' : 'text-gray-200 hover:bg-blue-950/40 hover:text-white'
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
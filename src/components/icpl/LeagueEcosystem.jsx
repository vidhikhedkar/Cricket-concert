import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../assets/icpl/section6/bg.png';
import ecosystem from '../../assets/icpl/section6/LeagueEcosystem.jpg';
import { GiCricketBat } from 'react-icons/gi';
import { FaUsers, FaHandshake, FaBuilding, FaFan, FaTv, FaVideo } from 'react-icons/fa';
import { MdStadium } from 'react-icons/md';

const ecosystemItems = [
  { id: 'players', label: 'Players', icon: GiCricketBat },
  { id: 'teams', label: 'Teams', icon: FaUsers },
  { id: 'sponsors', label: 'Sponsors', icon: FaHandshake },
  { id: 'venues', label: 'Venues/Events', icon: MdStadium },
  { id: 'broadcasters', label: 'Broadcasters', icon: FaVideo },
  { id: 'media', label: 'Media', icon: FaTv },
  { id: 'fans', label: 'Fans', icon: FaFan },
  { id: 'associations', label: 'Associations', icon: FaBuilding },
];

const VIEWBOX_SIZE = 100;
const CENTER = VIEWBOX_SIZE / 2;
const NUM_ITEMS = ecosystemItems.length;
const RING_RADIUS = 30;   
const ORBIT_RADIUS = 43;  

const LeagueEcosystem = () => {
  const itemData = ecosystemItems.map((item, index) => {
    const angle = (index * 360) / NUM_ITEMS - 90;
    const rad = (angle * Math.PI) / 180;
    
    const x = CENTER + ORBIT_RADIUS * Math.cos(rad);
    const y = CENTER + ORBIT_RADIUS * Math.sin(rad);

    return { ...item, angle, rad, x, y };
  });

  return (
    <div 
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-8 overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container flex flex-col items-start text-start gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 max-w-5xl">
    
        {/* Header Section (Aligned to the start/left) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start max-w-xl"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#031b38] uppercase tracking-wider mb-1.5">
            League Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Connecting global stakeholders through a unified sports platform designed for maximum commercial impact and fan engagement.
          </p>
        </motion.div>

        {/* Unified Radial View Container (Centered within the section layout) */}
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full max-w-[320px] sm:max-w-120 lg:max-w-130 aspect-square flex justify-center items-center my-2">
            
            {/* Animated Globe-like Network Background SVG Layer */}
            <svg 
              className="absolute inset-0 w-full h-full z-0 overflow-visible" 
              viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Rotating Global Blue Meridian Rings */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ originX: `${CENTER}%`, originY: `${CENTER}%` }}
              >
                <ellipse cx={CENTER} cy={CENTER} rx={RING_RADIUS} ry={RING_RADIUS * 0.3} fill="none" stroke="#3b82f6" strokeWidth="0.25" strokeDasharray="2 2" strokeOpacity="0.7" />
                <ellipse cx={CENTER} cy={CENTER} rx={RING_RADIUS * 0.3} ry={RING_RADIUS} fill="none" stroke="#3b82f6" strokeWidth="0.25" strokeDasharray="2 2" strokeOpacity="0.7" />
              </motion.g>

              {/* Pulsing Outer Blue Concentric Ring */}
              <motion.circle 
                cx={CENTER} cy={CENTER} r={RING_RADIUS} 
                fill="none" stroke="#2563eb" strokeWidth="0.35" strokeDasharray="2 3" 
                animate={{ scale: [1, 1.015, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: `${CENTER}%`, originY: `${CENTER}%` }}
              />

              {/* Inner Blue Concentric Rings */}
              <circle cx={CENTER} cy={CENTER} r={RING_RADIUS * 0.65} fill="none" stroke="#60a5fa" strokeWidth="0.25" strokeDasharray="1.5 1.5" strokeOpacity="0.7" />
              <circle cx={CENTER} cy={CENTER} r={RING_RADIUS * 0.32} fill="none" stroke="#93c5fd" strokeWidth="0.3" strokeDasharray="1 1" strokeOpacity="0.8" />
            </svg>

            {/* Central Hub / Globe at Center */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.03, 1], opacity: 1 }}
              transition={{ 
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                default: { type: "spring", stiffness: 220, damping: 20 }
              }}
              whileHover={{ scale: 1.08 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#031b38] rounded-full flex flex-col justify-center items-center shadow-xl z-10 ring-8px lg:ring-10px ring-white/60 cursor-pointer"
            >
              <div className="mb-4 w-12 sm:w-16 flex items-center justify-center shadow-md">
                  <img 
                src={ecosystem} 
                alt="League Ecosystem" 
                className="w-full h-full object-cover" 
              />
              </div>
              <span className="text-white font-bold text-[10px] sm:text-sm tracking-wider uppercase">ICPL</span>
            </motion.div>

            {/* Rotating Wrapper Container for All Ecosystem Items */}
            <motion.div 
              className="absolute inset-0 z-20 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              style={{ originX: `${CENTER}%`, originY: `${CENTER}%` }}
            >
              {itemData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Counter-rotation wrapper so icons and text stay upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="relative flex items-center justify-center">
                        {/* Animated Blue Pulse Rings behind/around each icon */}
                        <motion.div 
                          className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-blue-400 pointer-events-none"
                          animate={{ scale: [0.8, 1.3], opacity: [0.8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div 
                          className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-blue-500 pointer-events-none"
                          animate={{ scale: [0.8, 1.5], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                        />

                        {/* Main Icon Circle */}
                        <motion.div 
                          whileHover={{ scale: 1.15 }}
                          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-white rounded-full shadow-md flex justify-center items-center border border-blue-200 group-hover:border-blue-400 text-[#031b38] transition-colors duration-300 relative z-10"
                        >
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 relative z-10 text-black" />
                        </motion.div>
                      </div>

                      <span className="mt-2 text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-gray-900 tracking-tight text-center whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-xs border border-blue-100">
                        {item.label}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LeagueEcosystem;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import cta from '../../assets/media/section8/mediacta.jpg';
import pressglobe from '../../assets/media/section6/press-globe.jpg';
import cricketbroadcast from '../../assets/media/section6/cricket-broadcast.jpg';
import playerspotlight from '../../assets/media/section6/player-spotlight.jpg';
import { Link } from 'react-router-dom';

const WatchWcc = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      image: cta,
      title: "INSIDE THE CHAMPIONSHIP: EPISODE 1",
      description: "An exclusive behind-the-scenes look at the preparation, the pressure, and the passion of elite athletes.",
      duration: "Live",
    },
    {
      image: pressglobe,
      title: "Press Globe",
      description: "Global press coverage and media briefings regarding upcoming tournament schedules and regulations.",
      duration: "15 MIN",
    },
    {
      image: cricketbroadcast,
      title: "The Future of Cricket Broadcasting",
      description: "Exploring next-generation broadcast technologies, immersive camera angles, and interactive fan viewing experiences.",
      duration: "8 MIN",
    },
    {
      image: playerspotlight,
      title: "Player Spotlight: Emerging Talents",
      description: "A deep dive into the rising stars making waves across international fixtures and domestic circuits.",
      duration: "12 MIN",
    },
  ];

  const current = videos[activeVideo];

  return (
    <section className="bg-[#FAF8FF] py-16 my-10 relative overflow-hidden text-[#191B23]">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#191B23] uppercase">
            WATCH WCC
          </h2>
          <Link
            to="/all-videos"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B4DBB] hover:text-blue-600 transition-colors uppercase tracking-wider mt-4 sm:mt-0 group cursor-pointer"
          >
            <span>All Videos</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Player / Feature Showcase (7 Cols) */}
          <motion.div
            key={activeVideo}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Video Screen Container */}
            <div className="relative w-full h-75 sm:h-100  rounded-xl overflow-hidden shadow-xl group cursor-pointer bg-[#191B23]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full  text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <FaPlay className="text-xl sm:text-2xl ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {current.duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#191B23] uppercase tracking-tight mb-2">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#434654] font-regular leading-relaxed">
                {current.description}
              </p>
            </div>
          </motion.div>

          {/* Right Playlist Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {videos.map((video, index) => {
              if (index === 0) return null; 
              const isSelected = activeVideo === index;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveVideo(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-l-md cursor-pointer flex items-center gap-4 group"
                >
                  {/* Thumbnail with Play Icon */}
                  <div className="relative w-28 sm:w-32 h-20  rounded-md overflow-hidden shrink-0 shadow-sm bg-[#191B23]">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full text-white flex items-center justify-center shadow-md">
                        <FaPlay className="text-xs ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center flex-1 pr-2">
                    <span className="text-[10px] sm:text-xs font-regular text-[#737686] uppercase tracking-wider mb-1">
                      {video.duration}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191B23] line-clamp-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}

 

          </div>

        </div>

      </div>
    </section>
  );
};

export default WatchWcc;
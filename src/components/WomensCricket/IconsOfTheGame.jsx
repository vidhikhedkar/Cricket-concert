import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import EllyseP from '../../assets/WomensCricket/section6/EllyseP.jpg';
import MegL from '../../assets/WomensCricket/section6/MegL.jpg';
import SmritiM from '../../assets/WomensCricket/section6/SmritiM.jpg';
import SophieD from '../../assets/WomensCricket/section6/SophieD.png';
import { Link } from 'react-router-dom';

const IconsOfTheGame = () => {
  const players = [
    {
      name: "Smriti M.",
      image: SmritiM,
      role: "Opening Batter",
    },
    {
      name: "Ellyse P.",
      image: EllyseP,
      role: "All-Rounder",
    },
    {
      name: "Sophie D.",
      image: SophieD,
      role: "Captain",
    },
    {
      name: "Meg L.",
      image: MegL,
      role: "Batter",
    },
  ];

  return (
    <section className="bg-[#F2F6FF] py-16 text-slate-900 relative overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1C1B1B] uppercase">
              Icons of the Game
            </h2>
            <p className="text-sm sm:text-lg text-[#444748] mt-2">
              The trailblazers defining modern cricket excellence.
            </p>
          </div>

          <Link
            to="#view-all-players"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4C5D8E] hover:text-[#4C5D8E] transition-colors w-fit group border-b border-[#4C5D8E]"
          >
            VIEW ALL PLAYERS <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              {/* Image Container with Proper Height */}
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-200 h-95 sm:h-110 mb-3 border border-slate-200">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Player Info */}
              <h3 className="text-base sm:text-lg font-bold text-[#1C1B1B]">
                {player.name}
              </h3>

              <h3 className="text-base sm:text-md font-regular text-[#444748]">
                {player.role}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IconsOfTheGame;
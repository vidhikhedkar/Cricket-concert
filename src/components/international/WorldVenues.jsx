import React from 'react';
import MelbourneCricketGround from '../../assets/international/section6/Melbourne-Cricket-Ground.jpg';
import NarendraModiStadium from '../../assets/international/section6/Narendra-Modi-Stadium.png';

const WorldVenues = () => {
  const venues = [
    {
      name: 'Narendra Modi Stadium',
      location: 'AHMEDABAD, INDIA',
      capacity: 'Capacity: 132,000',
      image: NarendraModiStadium,
    },
    {
      name: 'Melbourne Cricket Ground',
      location: 'MELBOURNE, AUSTRALIA',
      capacity: 'Capacity: 100,024',
      image: MelbourneCricketGround,
    },
  ];

  return (
    <section className="w-full bg-white py-12 font-sans">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F4D] tracking-tight">
            World Venues
          </h2>
          <p className="text-[#444748] text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Iconic stadiums preparing to host the world's greatest cricketing spectacles.
          </p>
        </div>

        {/* Venues Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group h-95 sm:h-105 bg-slate-900 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Image with Hover Effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10"></div>
              </div>

              {/* Venue Details */}
              <div className="relative z-10 flex flex-col justify-end">
                <p className="text-xs font-bold tracking-widest text-[#FFFFFF]/80 uppercase mb-1">
                  {venue.location}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {venue.name}
                </h3>
                <p className="text-sm font-regular text-[#FFFFFF]/70">
                  {venue.capacity}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorldVenues;
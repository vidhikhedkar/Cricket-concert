import React from 'react';
import TheGrandArena from '../../assets/international/section8/Grand-Arena.jpg';
import CoastalGround from '../../assets/international/section8/Coastal-Ground.jpg';

const IconicVenues = () => {
  const venues = [
    {
      name: 'The Grand Arena',
      location: 'Mumbai, India',
      capacity: '110,000 Capacity',
      image: TheGrandArena,
    },
    {
      name: 'Coastal Ground',
      location: 'Sydney, Australia',
      capacity: '45,000 Capacity',
      image: CoastalGround,
    },
  ];

  return (
    <section className=" bg-white py-16 font-sans">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191B23] tracking-tight">
            Iconic Venues
          </h2>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">
                  {venue.name}
                </h3>
                <p className="text-sm font-regular text-slate-300">
                  {venue.location} • {venue.capacity}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IconicVenues;
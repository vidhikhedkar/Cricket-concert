import React from 'react';
import domesticnews1 from '../../assets/domestic/section9/domesticnews1.jpg';
import domesticnews2 from '../../assets/domestic/section9/domesticnews2.jpg';
import domesticnews3 from '../../assets/domestic/section9/domesticnews3.jpg';

const DomesticNews = () => {
  const newsItems = [
    {
      badge: "Match Report",
      badgeColor: "bg-[#00389E] text-white",
      title: "Knights secure crucial victory in top-of-table clash",
      description: "A masterclass in death bowling saw the Northern Knights defend a modest total...",
      time: "2 hours ago",
      image: domesticnews1,
    },
    {
      badge: "Interview",
      badgeColor: "bg-[#792300] text-white",
      title: "\"The domestic structure prepared me for international cricket\"",
      description: "Recent national call-up discusses the intensity of the Premier Franchise League.",
      time: "5 hours ago",
      image: domesticnews2,
    },
    {
      badge: "Announcement",
      badgeColor: "bg-[#5D5F5F] text-white",
      title: "New pathways program launched for regional areas",
      description: "The ICPL announces expanded funding for grassroots development in non-metro...",
      time: "1 day ago",
      image: domesticnews3,
    },
  ];

  return (
    <section className="py-16 bg-[#F3F3FE] text-[#191B23] overflow-hidden">
      <div className="container">

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191B23]">
            Domestic News
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              {/* Image & Badge Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wider shadow-sm ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#191B23] mb-2 tracking-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[#434654] text-xs sm:text-sm leading-relaxed mb-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer Time */}
                <div className="">
                  <span className="text-[10px] font-regular text-[#737686] uppercase tracking-wider">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DomesticNews;
import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const scheduleData = [
    {
      tournament: "ICPL World Shield",
      dates: "Aug 12 - Sep 30, 2024",
      hosts: "UK, India",
      format: "ODI",
      status: "Ongoing",
      isOngoing: true,
      link: "#"
    },
    {
      tournament: "T30 World Cup",
      dates: "Oct 15 - Nov 20, 2024",
      hosts: "Australia",
      format: "T30",
      status: "Upcoming",
      isOngoing: false
    },
    {
      tournament: "Masters Series",
      dates: "Nov 25 - Dec 10, 2024",
      hosts: "UAE",
      format: "T20",
      status: "Upcoming",
      isOngoing: false
    },
    {
      tournament: "U19 Global Challenge",
      dates: "Jan 5 - Feb 15, 2025",
      hosts: "South Africa",
      format: "ODI",
      status: "Upcoming",
      isOngoing: false
    }
  ];

  return (
    <section className="py-12 bg-white font-sans">
      <div className="container box-border">

        {/* Section Heading */}
        <div className="mb-8 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191B23] tracking-tight">
            2024–2025 Calendar
          </h2>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-xl border border-[#D4D8FC]/50 shadow-sm bg-[#F2F6FF]">
          <table className="w-full text-left border-collapse min-w-162.5">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-[#0A192F] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <th className="py-4 px-6 rounded-tl-xl">Tournament</th>
                <th className="py-4 px-6">Dates</th>
                <th className="py-4 px-6">Host(s)</th>
                <th className="py-4 px-6">Format</th>
                <th className="py-4 px-6 rounded-tr-xl">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#C3C5D7]/20 text-sm">
              {scheduleData.map((item, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-[#F8FAFC] transition-colors duration-150 text-[#191B23]"
                >
                  {/* Tournament */}
                  <td className="py-5 px-6 font-semibold">
                    {item.isOngoing ? (
                      <Link to={item.link} className="text-[#00389E] hover:underline">
                        {item.tournament}
                      </Link>
                    ) : (
                      <span>{item.tournament}</span>
                    )}
                  </td>

                  {/* Dates */}
                  <td className="py-5 px-6 text-[#191B23] font-regular">
                    {item.dates}
                  </td>

                  {/* Host(s) */}
                  <td className="py-5 px-6 text-[#191B23] font-regular">
                    {item.hosts}
                  </td>

                  {/* Format */}
                  <td className="py-5 px-6 text-[#191B23] font-regular">
                    {item.format}
                  </td>

                  {/* Status */}
                  <td className="py-5 px-6 font-medium">
                    {item.isOngoing ? (
                      <span className="inline-flex items-center text-[#00389E] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#00389E] mr-2 inline-block"></span>
                        {item.status}
                      </span>
                    ) : (
                      <span className="text-[#434654] font-normal">
                        {item.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default Calendar;
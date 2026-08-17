import React from 'react';

const SeasonSpotlight = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-[#D6DAFF] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          
          {/* Header Row: Title & Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl  font-bold text-[#191B23] tracking-tight mb-1">
                Season 2026 Spotlight
              </h2>
              <p className="text-[#434654] text-sm sm:text-base">
                Live metrics from the current international calendar.
              </p>
            </div>

            <button className="bg-[#00389E] hover:bg-[#00288c] text-white text-xs sm:text-sm font-extrabold px-6 py-3 rounded-full shadow-sm transition-all self-start sm:self-auto tracking-wide cursor-pointer">
              View Full Report
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-2">
            
            {/* Metric 1: Total Attendance */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-regular text-[#434654] uppercase tracking-wider">Total Attendance</span>
                <span className="text-base sm:text-lg font-semibold text-[#191B23]">2.4M / 3M</span>
              </div>
              <div className="w-full h-2.5 bg-[#E2E1ED] rounded-full overflow-hidden">
                <div className="bg-[#00389E] h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Metric 2: Total Runs Scored */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-regular text-[#434654] uppercase tracking-wider">Total Runs Scored</span>
                <span className="text-base sm:text-lg font-semibold text-[#191B23]">45,210</span>
              </div>
              <div className="w-full h-2.5 bg-[#E2E1ED] rounded-full overflow-hidden">
                <div className="bg-[#00389E] h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* Metric 3: Wickets Taken */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-regular text-[#434654] uppercase tracking-wider">Wickets Taken</span>
                <span className="text-base sm:text-lg font-semibold text-[#191B23]">1,840</span>
              </div>
              <div className="w-full h-2.5 bg-[#E2E1ED] rounded-full overflow-hidden">
                <div className="bg-[#00389E] h-full rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SeasonSpotlight;
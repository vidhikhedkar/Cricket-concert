import React from 'react';

const UpcomingFixtures = () => {
  const fixtures = [
    {
      time: "Tomorrow, 14:00 Local",
      teams: "WES vs CEN",
      action: "Match Center",
      isButton: true,
    },
    {
      time: "Oct 12, 19:00 Local",
      teams: "NOR vs EAS",
      action: "Tickets",
      isButton: true,
    },
    {
      time: "Oct 14, 14:00 Local",
      teams: "SOU vs WES",
      action: "Tickets",
      isButton: true,
    },
  ];

  const standings = [
    { pos: "1", team: "Northern Knights", p: 5, w: 4, l: 1, nrr: "+1.24", pts: "8", highlight: true },
    { pos: "2", team: "Southern Spartans", p: 4, w: 3, l: 1, nrr: "+0.85", pts: "6", highlight: false },
    { pos: "3", team: "Western Warriors", p: 5, w: 2, l: 3, nrr: "-0.12", pts: "4", highlight: false },
    { pos: "4", team: "Eastern Eagles", p: 4, w: 1, l: 3, nrr: "-0.95", pts: "2", highlight: false },
    { pos: "5", team: "Lion Cape", p: 4, w: 1, l: 3, nrr: "-0.95", pts: "2", highlight: false },
  ];

  return (
    <section className="py-16 bg-white text-[#191B23] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Upcoming Fixtures */}
          <div className="lg:col-span-6 space-y-6">

            {/* Header with Full Schedule link */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191B23]">
                Upcoming Fixtures
              </h2>
              <a href="#full-schedule" className="text-xs font-semibold text-[#00389E] hover:underline">
                Full Schedule
              </a>
            </div>

            {/* Fixture Cards */}
            <div className="space-y-5">
              {fixtures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#C3C5D7]/30 p-6 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-regular text-[#434654] tracking-wider block mb-2">
                      {item.time}
                    </span>
                    <span className="text-md sm:text-lg font-semibold tracking-wider text-[#191B23]">
                      {item.teams}
                    </span>
                  </div>

                  <div>
                    <button className="px-5 py-2.5 rounded-lg bg-[#00389E]/10 text-[#00389E] font-regular text-xs sm:text-sm hover:bg-blue-100 transition-colors cursor-pointer">
                      {item.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Full Standings */}
          <div className="lg:col-span-6 space-y-6">

            {/* Header with League Switcher */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#191B23]">
                Full Standings
              </h2>
              <div className="px-4 py-2 bg-[#EDEDF8] rounded-lg text-sm font-regular text-[#434654]">
                Premier League
              </div>
            </div>

            {/* Standings Card Container */}
            <div className="bg-white rounded-2xl border border-[#C3C5D7]/30 p-6 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[#434654] text-xs font-bold uppercase tracking-widest border-b border-[#C3C5D7]/30">
                      <th className="pb-4 font-semibold w-12">Pos</th>
                      <th className="pb-4 font-semibold">Team</th>
                      <th className="pb-4 text-center font-semibold">P</th>
                      <th className="pb-4 text-center font-semibold">W</th>
                      <th className="pb-4 text-center font-semibold">L</th>
                      <th className="pb-4 text-center font-semibold">NRR</th>
                      <th className="pb-4 text-right font-semibold">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C3C5D7]/30 text-xs sm:text-sm font-semibold">
                    {standings.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                        <td className={`py-4 font-black ${row.highlight ? 'text-[#00389E]' : 'text-[#191B23]'}`}>
                          {row.pos}
                        </td>
                        <td className="py-4 font-medium text-[#191B23]">
                          {row.team}
                        </td>
                        <td className="py-4 text-center text-[#434654]">{row.p}</td>
                        <td className="py-4 text-center text-[#434654]">{row.w}</td>
                        <td className="py-4 text-center text-[#434654]">{row.l}</td>
                        <td className="py-4 text-center text-[#434654]">{row.nrr}</td>
                        <td className="py-4 text-right font-semibold text-[#191B23]">{row.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default UpcomingFixtures;
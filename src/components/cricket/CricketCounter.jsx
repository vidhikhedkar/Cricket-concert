import React, { useEffect, useState, useRef } from 'react';

const CricketCounter = () => {
  const stats = [
    {
      endValue: 104,
      suffix: "",
      label: "Global Nations",
    },
    {
      endValue: 4.2,
      suffix: "k",
      isDecimal: true,
      label: "Active Profiles",
    },
    {
      endValue: 28,
      suffix: "",
      label: "Major Tournaments",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // Animation duration in ms
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      // Ease out exponential formula for smooth slowdown at the end
      const currentProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const updatedCounts = stats.map((stat) => {
        const currentVal = stat.endValue * currentProgress;
        if (stat.isDecimal) {
          return currentVal.toFixed(1);
        }
        return Math.floor(currentVal);
      });

      setCounts(updatedCounts);

      if (frame === totalFrames) {
        clearInterval(counterInterval);
        // Ensure exact final values are set
        setCounts(stats.map((stat) => (stat.isDecimal ? stat.endValue.toFixed(1) : stat.endValue)));
      }
    }, 1000 / fps);

    return () => clearInterval(counterInterval);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#F0F5FF] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Counter Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-4 relative ${index !== stats.length - 1
                  ? 'md:border-r md:border-[#292929]/20'
                  : ''
                }`}
            >
              {/* Stat Value */}
              <h3 className="text-4xl sm:text-5xl font-regular text-[#111010] tracking-tight mb-2">
                {counts[index]}{stat.suffix}
              </h3>

              {/* Stat Label */}
              <p className="text-[#434654] text-xs sm:text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CricketCounter;
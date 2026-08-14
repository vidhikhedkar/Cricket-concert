import React, { useState, useEffect, useRef } from 'react';

const States = () => {
  const stats = [
    { target: 108, suffix: "+", label: "NATIONS" },
    { target: 35, suffix: "M+", label: "FANS" },
    { target: 250, suffix: "+", label: "EVENTS" },
    { target: 120, suffix: "+", label: "RELATIONSHIPS" }
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

    const duration = 2000; // Animation duration in milliseconds
    const framesPerSecond = 60;
    const totalFrames = Math.round((duration / 1000) * framesPerSecond);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      // Ease-out expo function for smooth slowing down effect near the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(
        stats.map((stat) => Math.floor(easeProgress * stat.target))
      );

      if (frame === totalFrames) {
        clearInterval(counterInterval);
        setCounts(stats.map((stat) => stat.target)); // Ensure exact final target values
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(counterInterval);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#FAF8FF] border-y border-[#C3C5D7]/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 ${index !== stats.length - 1 ? 'md:border-r md:border-[#C3C5D7]/30' : ''
                }`}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A192F] tracking-tight mb-1">
                {counts[index]}{stat.suffix}
              </h3>
              <span className="text-[11px] sm:text-xs font-bold text-[#434654] tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default States;
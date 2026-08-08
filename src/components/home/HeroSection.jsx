import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoAsset from '../../assets/home/section1/Batsman_hitting1.mp4';
import mobileversion from '../../assets/home/section1/mobileversion.mp4';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [videoSrc, setVideoSrc] = useState(videoAsset);

    // 1. Detect device width & set source
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setVideoSrc(isMobile ? mobileversion : videoAsset);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. Setup GSAP Scrub Control with Frame-Throttled RAF
    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;
        const video = videoRef.current;

        if (!container || !text || !video) return;

        let animationContext;
        let rafId;

        const handleCanPlay = () => {
            setIsLoading(false);

            // Virtual object to hold GSAP's scroll position
            const scrollTarget = { time: 0 };

            // Dedicated render loop that only updates currentTime when decoder isn't busy
            const updateVideoTime = () => {
                if (
                    video &&
                    !video.seeking &&
                    Math.abs(video.currentTime - scrollTarget.time) > 0.03
                ) {
                    if ('fastSeek' in video) {
                        video.fastSeek(scrollTarget.time);
                    } else {
                        video.currentTime = scrollTarget.time;
                    }
                }
                rafId = requestAnimationFrame(updateVideoTime);
            };

            rafId = requestAnimationFrame(updateVideoTime);

            animationContext = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: 'top top',
                        end: '+=150%',
                        scrub: 0.1, // Quick response
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                // Fade out text overlay
                tl.to(
                    text,
                    {
                        yPercent: -30,
                        opacity: 0,
                        duration: 1,
                        ease: 'power1.out',
                    },
                    0
                );

                // Scrub virtual target time instead of updating DOM property directly
                tl.to(
                    scrollTarget,
                    {
                        time: video.duration || 1,
                        duration: 3,
                        ease: 'none',
                    },
                    0
                );
            }, containerRef);
        };

        video.addEventListener('loadedmetadata', handleCanPlay);

        if (video.readyState >= 1) {
            handleCanPlay();
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            video.removeEventListener('loadedmetadata', handleCanPlay);
            if (animationContext) animationContext.revert();
        };
    }, [videoSrc]);

    return (
        <div className="w-full bg-[#0a192f] text-white font-sans antialiased overflow-hidden">
            {/* PINNED CONTAINER */}
            <div
                ref={containerRef}
                className="relative w-full h-screen overflow-hidden bg-[#0a192f]"
            >
                {/* Native Direct Hardware Accelerated Video */}
                <video
                    ref={videoRef}
                    src={videoSrc}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                />

                {/* Loading State Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a192f] z-30">
                        <span className="text-sm font-medium tracking-wide text-blue-200 uppercase">
                            Loading Experience...
                        </span>
                    </div>
                )}

                {/* Dark Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#0a192f]/70 via-[#0a192f]/30 to-transparent pointer-events-none z-10" />

                {/* Text Content */}
                <div
                    ref={textRef}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-20 pointer-events-none pb-[8vh] sm:pb-[12vh]"
                >
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white mb-3 opacity-90">
                        Welcome to Cricket World
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-semibold text-white mb-5 tracking-tight leading-[1.1] drop-shadow-md max-w-5xl">
                        Precision. Power. Perfection.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
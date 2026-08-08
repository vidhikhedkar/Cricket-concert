import React from 'react'
import LiveMatchCenter from '../components/home/LiveMatchCenter'
import FeatureMatch from '../components/home/FeatureMatch'
import WorldCricket from '../components/home/WorldCricket'
import Rankings from '../components/home/Rankings'
import TopPerformers from '../components/home/TopPerformers'
import TopPlayers from '../components/home/TopPlayers'
import OurFormat from '../components/home/OurFormat'
import SeriesTournaments from '../components/home/SeriesTournaments'
import FanPoll from '../components/home/FanPoll'
import LatestNews from '../components/home/LatestNews'
import GlobalEcosystem from '../components/home/GlobalEcosystem'
import HeroSection from '../components/home/HeroSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <LiveMatchCenter />
            <FeatureMatch />
            <WorldCricket />
            <Rankings />
            <TopPerformers />
            <TopPlayers />
            <OurFormat />
            <SeriesTournaments />
            <FanPoll />
            <LatestNews />
            <GlobalEcosystem />
        </>
    )
}

export default HomePage
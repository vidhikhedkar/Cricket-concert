import React from 'react'
import CricketHero from '../components/cricket/CricketHero'
import LiveMatchCenter from '../components/cricket/LiveMatchCenter'
import CricketCounter from '../components/cricket/CricketCounter'
import TeamPerformance from '../components/cricket/TeamPerformance'
import WorldRankings from '../components/cricket/WorldRankings'
import Exploreteams from '../components/cricket/Exploreteams'
import Analytics from '../components/cricket/Analytics'
import SeasonSpotlight from '../components/cricket/SeasonSpotlight'
import HallOfRecords from '../components/cricket/HallOfRecords'
import CricketCta from '../components/cricket/CricketCta'

const CricketPage = () => {
    return (
        <>
            <CricketHero />
            <LiveMatchCenter />
            <CricketCounter />
            <TeamPerformance />
            <WorldRankings />
            <Exploreteams />
            <Analytics />
            <SeasonSpotlight />
            <HallOfRecords />
            <CricketCta />
        </>
    )
}

export default CricketPage
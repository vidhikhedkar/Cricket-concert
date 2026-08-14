import React from 'react'
import IcplHeroSection from '../components/icpl/IcplHeroSection'
import Abouticpl from '../components/icpl/Abouticpl'
import DrivingFuture from '../components/icpl/DrivingFuture'
import WhyICPL from '../components/icpl/WhyICPL'
import Evolution from '../components/icpl/Evolution'
import LeagueEcosystem from '../components/icpl/LeagueEcosystem'
import OurFormat from '../components/home/OurFormat'
import PartnershipOpportunities from '../components/icpl/PartnershipOpportunities'
import FanExperience from '../components/icpl/FanExperience'
import WhyPlayers from '../components/icpl/WhyPlayers'
import LatestNews from '../components/icpl/LatestNews'
import IcplCta from '../components/icpl/IcplCta'

const IcplPage = () => {
    return (
        <>
            <IcplHeroSection />
            <Abouticpl />
            <DrivingFuture />
            <WhyICPL />
            <Evolution />
            <LeagueEcosystem />
            <OurFormat />
            <PartnershipOpportunities />
            <FanExperience />
            <WhyPlayers />
            <LatestNews />
            <IcplCta />
        </>
    )
}

export default IcplPage
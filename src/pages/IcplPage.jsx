import React from 'react'
import IcplHeroSection from '../components/icpl/IcplHeroSection'
import Abouticpl from '../components/icpl/Abouticpl'
import DrivingFuture from '../components/icpl/DrivingFuture'
import WhyICPL from '../components/icpl/WhyICPL'
import Evolution from '../components/icpl/Evolution'
import LeagueEcosystem from '../components/icpl/LeagueEcosystem'
import OurFormat from '../components/home/OurFormat'

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
        </>
    )
}

export default IcplPage
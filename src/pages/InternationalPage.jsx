import React from 'react'
import InternationalHero from '../components/International/InternationalHero'
import HowcanWeHelp from '../components/International/HowcanWeHelp'
import WhatCanWeHelpYouWith from '../components/International/WhatCanWeHelpYouWith'
import CricketConnects from '../components/International/CricketConnects'
import SendUsAMessage from '../components/International/SendUsAMessage'
import FAQ from '../components/International/FAQ'
import ResponseRoadmap from '../components/International/ResponseRoadmap'
import HaveSomethingToSay from '../components/International/HaveSomethingToSay'

const InternationalPage = () => {
    return (
        <>
            <InternationalHero />
            <HowcanWeHelp />
            <WhatCanWeHelpYouWith />
            <CricketConnects />
            <SendUsAMessage />
            <FAQ />
            <ResponseRoadmap />
            <HaveSomethingToSay />
        </>
    )
}

export default InternationalPage
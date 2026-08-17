import React from 'react'
import InternationalHero from '../components/contact/InternationalHero'
import HowcanWeHelp from '../components/contact/HowcanWeHelp'
import WhatCanWeHelpYouWith from '../components/contact/WhatCanWeHelpYouWith'
import CricketConnects from '../components/contact/CricketConnects'
import SendUsAMessage from '../components/contact/SendUsAMessage'
import FAQ from '../components/contact/FAQ'
import ResponseRoadmap from '../components/contact/ResponseRoadmap'
import HaveSomethingToSay from '../components/contact/HaveSomethingToSay'

const ContactusPage = () => {
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

export default ContactusPage
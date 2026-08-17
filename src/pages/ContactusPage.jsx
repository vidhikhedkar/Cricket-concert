import React from 'react'
import HowcanWeHelp from '../components/contact/HowcanWeHelp'
import WhatCanWeHelpYouWith from '../components/contact/WhatCanWeHelpYouWith'
import CricketConnects from '../components/contact/CricketConnects'
import SendUsAMessage from '../components/contact/SendUsAMessage'
import FAQ from '../components/contact/FAQ'
import ResponseRoadmap from '../components/contact/ResponseRoadmap'
import HaveSomethingToSay from '../components/contact/HaveSomethingToSay'
import ContactHero from '../components/contact/ContactHero'

const ContactusPage = () => {
    return (
        <>
            <ContactHero />
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
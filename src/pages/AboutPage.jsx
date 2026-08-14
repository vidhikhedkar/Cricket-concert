import React from 'react'
import JourneyTimeline from '../components/about/JourneyTimeline'
import VisionMission from '../components/about/VisionMission'
import UnderLeadership from '../components/about/UnderLeadership'
import GlobalPresence from '../components/about/GlobalPresence'
import OurBoard from '../components/about/OurBoard'
import AdvisoryBoard from '../components/about/AdvisoryBoard'
import CTA from '../components/about/CTA'

const AboutPage = () => {
    return (
        <>
            <JourneyTimeline />
            <VisionMission />
            <UnderLeadership />
            <GlobalPresence />
            <OurBoard />
            <AdvisoryBoard />
            <CTA />
        </>
    )
}

export default AboutPage
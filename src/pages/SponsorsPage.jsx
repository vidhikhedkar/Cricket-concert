import React from 'react'
import OfficialTitleSponsor from '../components/sponsors/OfficialTitleSponsor'
import SponsorsHero from '../components/sponsors/SponsorsHero'
import PartnershipLevels from '../components/sponsors/PartnershipLevels'
import GlobalAudience from '../components/sponsors/GlobalAudience'
import StrategicValue from '../components/sponsors/StrategicValue'
import ComprehensiveAssets from '../components/sponsors/ComprehensiveAssets'
import CaseStudies from '../components/sponsors/CaseStudies'
import OurNetwork from '../components/sponsors/OurNetwork'
import HowItWorks from '../components/sponsors/HowItWorks'
import SponosorsFAQ from '../components/sponsors/SponosorsFAQ'
import SponosorsCTA from '../components/sponsors/SponosorsCTA'

const SponsorsPage = () => {
    return (
        <>
            <SponsorsHero />
            <OfficialTitleSponsor />
            <PartnershipLevels />
            <GlobalAudience />
            <StrategicValue />
            <ComprehensiveAssets />
            <CaseStudies />
            <OurNetwork />
            <HowItWorks />
            <SponosorsFAQ />
            <SponosorsCTA />
        </>
    )
}

export default SponsorsPage
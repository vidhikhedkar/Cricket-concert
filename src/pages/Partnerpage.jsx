import React from 'react'
import PartnerHero from '../components/partner/PartnerHero'
import BuildingCricketTogether from '../components/partner/BuildingCricketTogether'
import ThreeWaystoPartner from '../components/partner/ThreeWaystoPartner'
import States from '../components/partner/States'
import PartnerCta from '../components/partner/PartnerCta'
import ConnectWithUs from '../components/partner/ConnectWithUs'

const Partnerpage = () => {
    return (
        <>
            <PartnerHero />
            <BuildingCricketTogether />
            <ThreeWaystoPartner />
            <States />
            <PartnerCta />
            <ConnectWithUs />
        </>
    )
}

export default Partnerpage
import React from 'react'
import DomesticHero from '../components/domestic/DomesticHero'
import NationalPremierCup from '../components/domestic/NationalPremierCup'
import PathwaytoProfessionalCricket from '../components/domestic/PathwaytoProfessionalCricket'
import DomesticCompetitions from '../components/domestic/DomesticCompetitions'
import StateandRegionalCompetitions from '../components/domestic/StateandRegionalCompetitions'
import UpcomingFixtures from '../components/domestic/UpcomingFixtures'
import RisingStars from '../components/domestic/RisingStars'
import ClubSpotlight from '../components/domestic/ClubSpotlight'
import DomesticNews from '../components/domestic/DomesticNews'
import DomesticCTA from '../components/domestic/DomesticCTA'

const DomesticPage = () => {
    return (
        <>
            <DomesticHero />
            <NationalPremierCup />
            <PathwaytoProfessionalCricket />
            <DomesticCompetitions />
            <StateandRegionalCompetitions />
            <UpcomingFixtures />
            <RisingStars />
            <ClubSpotlight />
            <DomesticNews />
            <DomesticCTA />
        </>
    )
}

export default DomesticPage
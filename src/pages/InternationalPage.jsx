import React from 'react'
import InternationalHero from '../components/international/InternationalHero'
import FeaturedEvent from '../components/international/FeaturedEvent'
import ExploreTeamsandPlayers from '../components/international/ExploreTeamsandPlayers'
import UpcomingInternationalEvents from '../components/international/UpcomingInternationalEvents'
import ParticipatingNations from '../components/international/ParticipatingNations'
import Calendar from '../components/international/Calendar'
import WorldVenues from '../components/international/WorldVenues'
import TopRankedNations from '../components/international/TopRankedNations'
import IconicVenues from '../components/international/IconicVenues'
import RecentChampions from '../components/international/RecentChampions'
import InternationalLatestNews from '../components/international/InternationalLatestNews'
import DomesticCTA from '../components/domestic/DomesticCTA'

const InternationalPage = () => {
    return (
        <>
            <InternationalHero />
            <FeaturedEvent />
            <ExploreTeamsandPlayers />
            <UpcomingInternationalEvents />
            <ParticipatingNations />
            <Calendar />
            <WorldVenues />
            <TopRankedNations />
            <IconicVenues />
            <RecentChampions />
            <InternationalLatestNews />
            <DomesticCTA />
        </>
    )
}

export default InternationalPage
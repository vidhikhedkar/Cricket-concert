import React from 'react'
import InvestorsHeroSection from '../components/investors/InvestorsHeroSection'
import WhyInvestInWCC from '../components/investors/WhyInvestInWCC'
import GlobalMarketReach from '../components/investors/GlobalMarketReach'
import TheWccGrowthStory from '../components/investors/TheWccGrowthStory'
import InvestmentOpportunities from '../components/investors/InvestmentOpportunities'
import DigitalAndMediaEcosystem from '../components/investors/DigitalAndMediaEcosystem'
import UnrivaledCommercialImpact from '../components/investors/UnrivaledCommercialImpact'
import TransparencyAndGovernance from '../components/investors/TransparencyAndGovernance'
import ExecutiveLeadership from '../components/investors/ExecutiveLeadership'
import ConnectWithWcc from '../components/investors/ConnectWithWcc'
import InvestorsCta from '../components/investors/InvestorsCta'
import InvestorResources from '../components/investors/InvestorResources'

const InvestorsPage = () => {
    return (
        <>
            <InvestorsHeroSection />
            <WhyInvestInWCC />
            <GlobalMarketReach />
            <TheWccGrowthStory />
            <InvestmentOpportunities />
            <DigitalAndMediaEcosystem />
            <UnrivaledCommercialImpact />
            <TransparencyAndGovernance />
            <ExecutiveLeadership />
            <InvestorResources />
            <ConnectWithWcc />
            <InvestorsCta />
        </>
    )
}

export default InvestorsPage
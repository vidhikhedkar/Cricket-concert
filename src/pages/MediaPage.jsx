import React from 'react'
import MediaHero from '../components/media/MediaHero'
import RaodToTheChampioship from '../components/media/RaodToTheChampioship'
import MediaLatestNews from '../components/media/MediaLatestNews'
import PressReleases from '../components/media/PressReleases'
import InTheFrame from '../components/media/InTheFrame'
import WatchWcc from '../components/media/WatchWcc'
import MediaResources from '../components/media/MediaResources'
import MediaCta from '../components/media/MediaCta'

const MediaPage = () => {
    return (
        <>
            <MediaHero />
            <RaodToTheChampioship />
            <MediaLatestNews />
            <PressReleases />
            <InTheFrame />
            <WatchWcc />
            <MediaResources />
            <MediaCta />
        </>
    )
}

export default MediaPage
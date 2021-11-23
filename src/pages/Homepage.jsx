import React from 'react'
import CardSlider from '../components/CardSlider'
import FunActivities from '../components/FunAtivities'
import LaughterTherapy from '../components/LaughterTherapy'
import OnlineEvents from '../components/OnlineEvents'
import OutdoorEvents from '../components/OutdoorEvents'
import PopularEvents from '../components/PopularEvents'
import Premieres from '../components/premiere'
import Slider from '../components/Slider'
import TopGames from '../components/TopGames'
import TrendingSearches from '../components/TrendingSearches'

export default function Homepage() {
    return (
        <>
            <Slider/>
            <CardSlider />
            <Premieres/>
            <OnlineEvents/>
            <OutdoorEvents/>
            <LaughterTherapy/>
            <PopularEvents />
            <TopGames/>
            <TrendingSearches/>
            <FunActivities/>
        </>
    )
}

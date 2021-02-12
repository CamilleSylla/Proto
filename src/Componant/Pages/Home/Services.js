import React from 'react'
import '../../../style/Services.scss'
import ServicesBanner from '../../Layers/HeroBanner/ServicesBanner'
import SCards from '../../Layers/Services_cards/SCards'
import WhyUs from '../../Layers/WhyUs/WhyUs'
import Offers from '../../Offers/Offers'

export default function Services () {

    return (
        <div className="services">
            <ServicesBanner/>
            <SCards/>
            <WhyUs/>
            <Offers/>
        </div>
    )
}
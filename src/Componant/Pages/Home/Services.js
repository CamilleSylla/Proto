import React from 'react'
import '../../../style/Services.scss'
import ServicesBanner from '../../Layers/HeroBanner/ServicesBanner'
import SCards from '../../Layers/Services_cards/SCards'
import WhyUs from '../../Layers/WhyUs/WhyUs'

export default function Services () {

    return (
        <div className="services">
            <ServicesBanner/>
            <SCards/>
            <WhyUs/>
        </div>
    )
}
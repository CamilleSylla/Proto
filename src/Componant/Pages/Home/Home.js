import React from 'react'
import Tech  from '../../../assets/Img/Tech.svg'
import '../../../style/Home.scss'
import Desc from '../../Layers/Desc/Desc'
import HeroBanner from '../../Layers/HeroBanner/HeroBanner'

export default function Home () {

    return (
        <div className="home">
            <HeroBanner/>
            <Desc/>
        </div>
    )
}
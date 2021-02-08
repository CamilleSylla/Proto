import React from 'react'
import Tech  from '../../../assets/Img/Tech.svg'
import '../../../style/Home.scss'
import Avis from '../../Layers/Avis/Avis'
import Desc from '../../Layers/Desc/Desc'
import HeroBanner from '../../Layers/HeroBanner/HeroBanner'
import LastProject from '../../Layers/LastProject/LastProject'
import PSM from '../../Layers/PSM/PSM'

export default function Home () {

    return (
        <div className="home">
            <HeroBanner/>
            <Desc/>
            <PSM/>
            <LastProject/>
            <Avis/>
        </div>
    )
}
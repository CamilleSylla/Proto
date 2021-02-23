import React from 'react'
import '../../style/AtelierBanner.scss'
import Helmet from '../Elements/Scene/Helmet'
import IMG from '../../assets/Img/PSM.webp'

export default function AtelierBanner () {

    return (

        <section className="atelier_banner">
            <article className="atelier_title">
            <h1 className="page_title"> Découvrer nos micros projet de test</h1>
            <ul className="ul_scroll">
                <li>
                    <img src={IMG} alt="imagecontent"/>
                    <div className="atelier_list">
                    <h3>Text effet Glitch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lorem ultricies.</p>
                    </div>
                </li>
                <li>
                    <img src={IMG} alt="imagecontent"/>
                    <div className="atelier_list">
                    <h3>Text effet Glitch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lorem ultricies.</p>
                    </div>
                </li>
                <li>
                    <img src={IMG} alt="imagecontent"/>
                    <div className="atelier_list">
                    <h3>Text effet Glitch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lorem ultricies.</p>
                    </div>
                </li>
                <li>
                    <img src={IMG} alt="imagecontent"/>
                    <div className="atelier_list">
                    <h3>Text effet Glitch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lorem ultricies.</p>
                    </div>
                </li>
            </ul>
            </article>
            <Helmet/>
        </section>
    )
}
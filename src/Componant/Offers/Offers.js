import React from 'react'
import '../../style/Offers.scss'
import Icon from '../../assets/Icon/Dev.svg'

export default function Offers  () {

    return (
<section className="offers">
        <articles className="offers_content">
            <img src={Icon} alt="Icon"/>
            <h1>Achat de site internet</h1>
            <ul>
                <li>Vitrine</li>
                <li>E-commerce</li>
                <li>Institutionnel</li>
            </ul>

        </articles>
        <articles className="offers_content">
            <img src={Icon} alt="Icon"/>

            <h1>Location de site internet</h1>
            <ul>
                <li>Vitrine</li>
                <li>E-commerce</li>
                <li>Institutionnel</li>
            </ul>
        </articles>
</section>
    )
}
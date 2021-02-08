import React from 'react'
import '../../../style/LastProject.scss'
import Demetis from '../../../assets/Logos/Demetis.svg'
import OPC from '../../../assets/Logos/OPConsult.svg'

export default function LastProject () {

    return (
        <section className="Last_project">
            <div className="Last_project_name">
                <h3> Nos derniers projets</h3>
                <p>Retrouver l'étude de nos derniers projets </p>
            </div>
            <article className="Last_project_item">
                <div className="hidded_text"></div>
                <img src={Demetis} alt="Demetis Conseil"/>
            </article>
            <article className="Last_project_item">
                <div className="hidded_text"></div>
                <img src={OPC} alt="OPConsult"/>
            </article>
        </section>
    )
}
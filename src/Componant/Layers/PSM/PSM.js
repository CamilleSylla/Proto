import React from 'react'
import Build from '../../../assets/Img/PSM.webp'
import '../../../style/PSM.scss'

export default function PSM () {
    

    return (
        <section className="PSM">

            <div className="PSM_container">
                <img className="PSM_Img" src={Build} alt="Buildiungs"/>
                <article className="PSM_content">
                    <h1> Pourquoi un site internet sur mesure</h1>
                    <p> Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here</p>
                </article>
            </div>
        </section>
    )
}
import React, { useEffect } from 'react'
import Build from '../../../assets/Img/PSM.webp'
import '../../../style/PSM.scss'

export default function PSM () {
    
    
    const Words = ["iconicdev ","front-end ","developpement ","webdesign ","internet ","sur-mesure ", "web", "digital", "responsive", "seo"]
    
    function RandomWords () {
        let result = []
        for(let i = 0; i <= 2; i++) {
            const Random = Math.floor(Math.random()*10) 
            result.push(Words[Random])
        }
        return result
    }
    return (
        <section className="PSM">
            <div className="PSM_txt_bk">
                <span className="rolling_txt_right">{RandomWords()}</span>
                <span className="rolling_txt_left">{RandomWords()}</span>
                <span className="rolling_txt_right">{RandomWords()}</span>
                <span className="rolling_txt_left">{RandomWords()}</span>
                <span className="rolling_txt_right">{RandomWords()}</span>

            </div>
            <div className="PSM_container">
                <img className="PSM_Img" src={Build} alt="Buildiungs"/>
                <article className="PSM_content">
                    <div className="PSM_content_wrapper">
                        
                    <h1 className="secondary_title"> Pourquoi un site internet sur-mesure ?</h1>
                    <p> Que votre site internet est un but lucratif ou simplement une vitrine, c'est l'occasion de partager avec vos utilisateurs vos valeurs mais surtout de mettre en avant votre identité visuelle en offrant à vos ceux-ci une meilleure expérience et une interface design et moderne.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
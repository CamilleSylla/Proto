import { random } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap/gsap-core'
import React, { useEffect } from 'react'
import Build from '../../../assets/Img/PSM.webp'
import '../../../style/PSM.scss'

export default function PSM () {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(".rolling_txt_right", {
            scrollTrigger: {
                trigger: '.PSM',
                start: "-75% top",
                scrub: 0.3
            },
            x: -1000
        })
        gsap.from(".rolling_txt_left", {
            scrollTrigger: {
                trigger: '.PSM',
                start: "-75% top",
                scrub: 0.3
            },
            x: 1000
        })
    })
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
                    <h1> Pourquoi un site internet sur mesure</h1>
                    <p> Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here Some random text here</p>
                </article>
            </div>
        </section>
    )
}
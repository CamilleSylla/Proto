import React, { useEffect } from 'react'
import '../../../style/LastProject.scss'
import Demetis from '../../../assets/Logos/Demetis.svg'
import OPC from '../../../assets/Logos/OPConsult.svg'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap/gsap-core'

export default function LastProject () {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".Last_project_item", {
            scrollTrigger: {
                trigger: ".Last_project",
          start: "-35%  50%",
          toggleActions: "restart none none reverse"
            },
            opacity: 0,
            x: 100,
            stagger: 0.3
        })
        gsap.from(".Last_project_name", {
            scrollTrigger: {
                trigger: ".Last_project",
          start: "-35%  50%",
          toggleActions: "restart none none reverse"
            },
            opacity: 0,
            y: -200,
            stagger: 0.3,
            scale: 1.5
        })
        gsap.to(".Last_circle", {
            scrollTrigger: {
                trigger: ".Last_project",
          start: "-50%  50%",
          end: "60% 50%",
          toggleActions: "restart none none reverse",
          scrub: 0.8
            },
            scale: 22,
            background: "#a5167f57"
        })


    })

    return (
        <section className="Last_project">
            <div className="Last_circle" style={{background: "#F2F2F2", width: "80px", height: "80px"}}></div>
            <div className="Last_circle"></div>
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
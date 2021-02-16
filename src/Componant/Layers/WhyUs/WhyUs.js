import React, { useEffect } from 'react'
import '../../../style/WhyUs.scss'
import Hi from '../../Elements/Scene/Hi'
import Icon from '../../../assets/Icon/Dev.svg'
import gsap from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'

export default function WhyUs () {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(".whyus_articles_content", {
            scrollTrigger: {
                trigger: ".whyus",
                toggleActions: "restart none none reverse"
            },
            x: -100,
            opacity: 0,
            stagger: 0.3
        })
        gsap.from(".Hi", {
            scrollTrigger: {
                trigger: ".whyus",
                start: "top 80%",
                toggleActions: "restart none none reverse"
            },
            scale: 0
        })
    })

    return (
        <section className="whyus">
            <section className="whyus_content">
                <article className="whyus_articles">
                    <div className="whyus_articles_content">
                        <img src={Icon} alt="Icon"/>
                        <h1>Point principal blablabla</h1>
                    </div>
                    <div className="whyus_articles_content">
                        <img src={Icon} alt="Icon"/>
                        <h2>Point principal blablabla</h2>
                    </div>
                    <div className="whyus_articles_content">
                        <img src={Icon} alt="Icon"/>
                        <h3>Point principal blablabla</h3>
                    </div>
                </article>
            <Hi/>
            </section>
        </section>
    )
}
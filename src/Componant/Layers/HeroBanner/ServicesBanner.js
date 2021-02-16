import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react'

export default function ServicesBanner () {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".services_banner_article", {
            scrollTrigger: {
                trigger: ".services_banner",
                start: "20% 10%",
                scrub: 0.3
            },
            y : 50,
            opacity: 0
        })
        gsap.to(".services_banner_img", {
            scrollTrigger: {
                trigger: ".services_banner",
                start: "20% 10%",
                scrub: 0.3
            },
            y : -200,
            opacity: 0,
        })
    })

    return (
        <section className="services_banner">
            <div className="services_banner_img">
            </div>
            <article className="services_banner_article">
                <div className="services_title_wrapper">
                <h1 className="page_title">Conception de site internet sur mesure.</h1>
                <p>Faites de votre projet le reflet de votre image tout en vous démarquant sur Internet.</p>
                </div>
            </article>
        </section>
    )
}

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import '../../../style/Services.scss'
import ServicesBanner from '../../Layers/HeroBanner/ServicesBanner'
import SCards from '../../Layers/Services_cards/SCards'
import WhyUs from '../../Layers/WhyUs/WhyUs'
import Offers from '../../Offers/Offers'

export default function Services () {

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
        gsap.from(".scard", {
            scrollTrigger: {
              trigger: ".scards_container",
              start: "-30% top",
              toggleActions: "restart none none reverse",
            },
            opacity: 0,
            y: 100,
            stagger: 0.3,
          });
          gsap.from(".motion", {
            scrollTrigger: {
              trigger: ".whyus",
              start: "-10% top",
              toggleActions: "restart none none reverse",
            },
            x: -100,
            opacity: 0,
            stagger: 0.1,
          });
          gsap.from(".Hi, .scene_circle", {
            scrollTrigger: {
              trigger: ".whyus",
              start: "-10% 80%",
              end: "10%",
              toggleActions: "restart none none reverse",
              scrub: 0.3
            },
            scale: 0,
            stagger: 0.3
          });
    })
    return (
        <div className="services">
            <ServicesBanner/>
            <SCards/>
            <WhyUs/>
            <Offers/>
        </div>
    )
}
import React, { useEffect } from "react";
import "../../../style/WhyUs.scss";
import Hi from "../../Elements/Scene/Hi";
import Icon from "../../../assets/Icon/Dev.svg";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

export default function WhyUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".whyus_articles_content", {
      scrollTrigger: {
        trigger: ".whyus",
        start: "top top",
        toggleActions: "restart none none reverse",
      },
      x: -100,
      opacity: 0,
      stagger: 0.3,
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
  });

  return (
    <section className="whyus">
      <div className="section_title">
        <h3> Nos derniers projets</h3>
      </div>
      <section className="whyus_content">
        <article className="whyus_articles">
          <div className="whyus_articles_content">
            <img src={Icon} alt="Icon" />
            <h1>Point principal blablabla</h1>
          </div>
          <div className="whyus_articles_content">
            <img src={Icon} alt="Icon" />
            <h2>Point principal blablabla</h2>
          </div>
          <div className="whyus_articles_content">
            <img src={Icon} alt="Icon" />
            <h3>Point principal blablabla</h3>
          </div>
        </article>
        <div className="scene_wrapper">
          <div className="scene_circle"></div>
          <Hi />
        </div>
      </section>
    </section>
  );
}

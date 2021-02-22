import React, { useEffect } from "react";
import "../../../style/WhyUs.scss";
import Hi from "../../Elements/Scene/Hi";
import Etude from "../../../assets/Icon/Etude.svg";
import Production from "../../../assets/Icon/Production.svg";
import Project from "../../../assets/Icon/ProjectDev.svg";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

export default function WhyUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  });

  return (
    <section className="whyus">
      <div className="section_title">
        <h3> Notre fonctionnement</h3>
      </div>
      <section className="whyus_content">
        <article className="whyus_articles">
          <div className="whyus_articles_content">
            <img src={Etude} alt="Icon" className="motion"/>
            <h3 className="motion">Étude de vos besoins</h3>
            <p className="motion">Afin de vous proposer une solution 100% adapté, nous etudirons votre projet dans le moindre de details et discuterons avec vous des solutions que nous pouvons vous apporter</p>
          </div>
          <div className="whyus_articles_content">
            <img className="motion" src={Project} alt="Icon" />
            <h3 className="motion">Mise en place du projet</h3>
            <p className="motion">Vous pourreze suivre l'avancer du projet grace a un serveur de developpement mis a votre disposition. Cela vous permettera d'avoir un rendu reel de votre futur outil.</p>
          </div>
          <div className="whyus_articles_content">
            <img className="motion" src={Production} alt="Icon" />
            <h3 className="motion">Développement et mise en production</h3>
            <p className="motion">Une fois le developpement terminé et validé par vos soins. votre site sdera mis en production et consultable.</p>
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

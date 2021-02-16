import React, { useContext, useEffect } from "react";
import Regle from "../../../assets/Img/regle.webp";
import Design from "../../../assets/Img/design.webp";
import Scene from "../../Elements/Scene/Scene";
import Logo from "../../../assets/Logos/IDLine.svg";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { TransitionContext } from "../../../Context/TransitionContext";

export default function HeroBanner() {
  const [transition, setTransition] = useContext(TransitionContext)

  function SetTransition () {
    setTransition(!transition)
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".scene_container", {
      scrollTrigger: {
        trigger: ".hero_banner",
        start: "+=35% +=30% ",
        scrub: 0.3,
        // toggleActions: "none restart none reset",
      },
      scale: 0,
      opacity: 0
    });
  });

  return (
    <section className="hero_banner">
      <article className="intro">
        <div className="overlay">
          <section className="hero_main_title">
            <div className="hero_main_container">
              <img src={Logo} alt="IconicDev" />
              <h1 className="page_title">
                Marquez internet
                <br /> de votre empreinte
              </h1>
              <div className="hero_button">
                    <Link onClick={SetTransition} className="button_border" to="/services">
                      Services
                    </Link>
                    <Link onClick={SetTransition} className="button_plain" to="/contact">
                      Consultation
                    </Link>
              </div>
            </div>
          </section>
          <Scene />
        </div>
      </article>
      <div className="hero_cards_container">
        <article className="hero_cards">
          <img src={Regle} alt="Règle" />
          <div className="hero_cards_content">
            <h1>Sur_Mesure</h1>
            <p>Vos valeurs sur un ecran vos valeurs sur un ecran</p>
            <p>Vos valeurs sur un ecran </p>
          </div>
        </article>
        <article className="hero_cards">
          <img src={Design} alt="Règle" />
          <div className="hero_cards_content">
            <h1>Design</h1>
            <p>Vos valeurs sur un ecran vos valeurs sur un ecran</p>
            <p>Vos valeurs sur un ecran </p>
          </div>
        </article>
      </div>
    </section>
  );
}

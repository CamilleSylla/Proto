import React, { useContext, useEffect } from "react";
import Regle from "../../../assets/Img/regle.webp";
import Design from "../../../assets/Img/design.webp";
import Scene from "../../Elements/Scene/Scene";
import Logo from "../../../assets/Logos/IDLine.svg";
import { Link } from "react-router-dom";
import { TransitionContext } from "../../../Context/TransitionContext";

export default function HeroBanner() {
  const [transition, setTransition] = useContext(TransitionContext)

  function SetTransition () {
    setTransition(!transition)
  }


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
            <h1>Le vrai sur mesure</h1>
            <p>Retrancriver vos valeurs différement de vos concurent !</p>
            <p>Vos valeurs sur un ecran </p>
          </div>
        </article>
        <article className="hero_cards">
          <img src={Design} alt="Règle" />
          <div className="hero_cards_content">
            <h1>Sites internet modernes et design </h1>
            <p>Donnez à vos utilisateurs une expérience digne de ce nom</p>
            <p>Vos valeurs sur un ecran </p>
          </div>
        </article>
      </div>
    </section>
  );
}

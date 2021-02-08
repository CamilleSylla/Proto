import React from "react";
import Regle from "../../../assets/Img/regle.webp";
import Design from "../../../assets/Img/design.webp";
import Scene from "../../Elements/Scene/Scene";
import Logo from '../../../assets/Logos/IDLine.svg'

export default function HeroBanner() {
  return (
    <section className="hero_banner">
      <article className="intro">
        <div className="overlay">
            <section className="hero_main_title">
              <div className="hero_main_container">
              <img src={Logo} alt="IconicDev"/>
                <h1 className="page_title">Marquez internet<br/> de votre empreinte</h1>
              </div>
              
            </section>
            <Scene/>
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

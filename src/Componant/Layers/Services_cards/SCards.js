
import React, { useEffect } from "react";
import "../../../style/SCards.scss";
import Icon from "../../../assets/Icon/Dev.svg";

export default function SCards() {
  
  return (
    <section className="scards_container">
      <div className="section_title">
      <h3> Ce que nous pouvons vous offrir.</h3>
      </div>
      <article className="scard">
        <img src={Icon} alt="icon" />
        <h1>Site vitrine</h1>
        <div className="scards_text_wrapper">
          <ul>
            <li>Un études de votre cas</li>
            <li>Interface et expérience utilisateur intuitive</li>
            <li>WebDesign tendance</li>
            <li>Responsive</li>
          </ul>
          <a>En savoir plus</a>
        </div>
      </article>
      <article className="scard" >
        <img src={Icon} alt="icon" />
        <h1>Site E-Commerce</h1>
        <div className="scards_text_wrapper">
        <ul>
            <li>Mettre en avant vos produits.</li>
            <li>Référencement optimisé pour vos produits.</li>
            <li>Filtre performant.</li>
            <li>Paiement securisé.</li>
          </ul>
          <a>En savoir plus</a>
        </div>
      </article>
      <article className="scard">
        <img src={Icon} alt="icon" />
        <h1>Site Complexe</h1>
        <div className="scards_text_wrapper">
        <ul>
            <li>Adaptation complète</li>
            <li>Étude des meilleures solutions pour votre projet</li>
            <li>Performances optimisées</li>
            <li>Formation a l'utilisation dans vos locaux</li>
          </ul>
          <a>En savoir plus</a>
        </div>
      </article>
    </section>
  );
}

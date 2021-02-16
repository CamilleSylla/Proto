import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import "../../../style/SCards.scss";
import Icon from '../../../assets/Icon/Dev.svg'

export default function SCards() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  });
  return (
    <section className="scards_container">
      <article className="scard">
        <img src={Icon} alt="icon"/>
        <h1>Site vitrine</h1>
        <div className="scards_text_wrapper">
        <p>
          Lorem blab bla bla bla Lorem blab bla bla bla Lorem blab bla bla bla
          Lorem blab bla bla bla Lorem blab bla bla bla 
        </p>
        <a>En savoir plus</a>
        </div>
      </article>
      <article className="scard">
        <img src={Icon} alt="icon"/>
        <h1>Site E-Commerce</h1>
        <div className="scards_text_wrapper">
        <p>
          Lorem blab bla bla bla Lorem blab bla bla bla Lorem blab bla bla bla
          Lorem blab bla bla bla Lorem blab bla bla bla 
        </p>
        <a>En savoir plus</a>
        </div>
      </article>
      <article className="scard">
        <img src={Icon} alt="icon"/>
        <h1>Site Complexe</h1>
        <div className="scards_text_wrapper">
        <p>
          Lorem blab bla bla bla Lorem blab bla bla bla Lorem blab bla bla bla
          Lorem blab bla bla bla Lorem blab bla bla bla 
        </p>
        <a>En savoir plus</a>
        </div>
      </article>
    </section>
  );
}

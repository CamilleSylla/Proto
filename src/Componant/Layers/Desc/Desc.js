import React, { useEffect } from "react";
import Circle from "../../../assets/Icon/SpinCircle.svg";
import AZ from "../../../assets/Icon/AZ.svg";
import Dev from "../../../assets/Icon/Dev.svg";
import Acc from "../../../assets/Icon/Accomp.svg";
import "../../../style/Desc.scss";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";

export default function Desc() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
      gsap.from(".desc_middle", {
        scrollTrigger: {
          trigger: ".desc",
          start: "-35%  50%",
          toggleActions: "restart none none reverse"
        },
        duration: .4,
        scale: 0,
        stagger: 0.3
      })
      gsap.from(".desc_left, .desc_right", {
        scrollTrigger: {
          trigger: ".desc",
          start: "-25%  50%",
          toggleActions: "restart none none reverse"
        },
        delay: 2,
        duration: .2,
        opacity: 0,
        stagger: 0.3,
        y : 100
      })

  });

  return (
    <section className="desc">
      <div className="desc_container">
        <article className="desc_grid">
          <div className="desc_left">
            <div className="desc_cont">
              <h1>Conception de votre site web de A à Z</h1>
              <p>
                Afin de vous demarquer le plus possible de vos concurents, nous
                n'utilisons pas de thème dans la creation de votre porjet
              </p>
            </div>
          </div>
          <div className="desc_middle">
            <img src={Circle} alt="Circle" className="anim_circle" />
            <div className="middle_steps">
              <p>01</p>
              <p>step</p>
            </div>
            <div className="middle_bck_circle"></div>
          </div>
          <div className="desc_right">
            <img src={AZ} alt="Creation de votre site" />
          </div>
        </article>
        <article className="desc_grid desc_verticall">
          <div className="desc_left">
            <img src={Dev} alt="Creation de votre site" />
          </div>
          <div className="desc_middle">
            <img src={Circle} alt="Circle" className="anim_circle" />

            <div className="middle_steps">
              <p>02</p>
              <p>step</p>
            </div>
            <div className="middle_bck_circle"></div>
          </div>
          <div className="desc_right">
            <div className="desc_cont">
              <h1>Spécialiste en developpement web</h1>
              <p>
                Afin de vous demarquer le plus possible de vos concurents, nous
                n'utilisons pas de thème dans la creation de votre porjet
              </p>
            </div>
          </div>
        </article>
        <article className="desc_grid">
          <div className="desc_left">
            <div className="desc_cont">
              <h1>Un accompagnement complet et adapté</h1>
              <p>
                Afin de vous demarquer le plus possible de vos concurents, nous
                n'utilisons pas de thème dans la creation de votre porjet
              </p>
            </div>
          </div>
          <div className="desc_middle">
            <img src={Circle} alt="Circle" className="anim_circle" />
            <div className="middle_steps">
              <p>03</p>
              <p>step</p>
            </div>
            <div className="middle_bck_circle"></div>
          </div>
          <div className="desc_right">
            <img src={Acc} alt="Creation de votre site" />
          </div>
        </article>
      </div>
    </section>
  );
}

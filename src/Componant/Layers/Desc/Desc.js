import React, { useEffect } from "react";
import Circle from "../../../assets/Icon/SpinCircle.svg";
import AZ from "../../../assets/Icon/AZ.svg";
import Dev from "../../../assets/Icon/Dev.svg";
import Acc from "../../../assets/Icon/Accomp.svg";
import "../../../style/Desc.scss";

export default function Desc() {
  return (
    <section className="desc">
      <div className="desc_container">
        <article className="desc_grid">
          <div className="desc_left">
            <div className="desc_cont">
              <h1 className="secondary_title">Spécialiste en developpement web</h1>
              <p>
                La programmation est une passion chez Iconic Dev, nous saurons
                faire les bons choix des meilleurs technologies pour votre
                projet.{" "}
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
              <h1 className="secondary_title">Conception de votre site internet de A à Z</h1>
              <p>
                Nous ne concevons que des sites internet sur mesure. Ce
                démarquer sur internet nécessite une identité spécifique a
                chaque projet
              </p>
            </div>
          </div>
        </article>
        <article className="desc_grid">
          <div className="desc_left">
            <div className="desc_cont">
              <h1 className="secondary_title">Adapté à vous et vos réels besoins</h1>
              <p>
                Ici pas fonctionnalités superflues, votre site sera simple dans
                sa gestion et comportera ce qui lui est vraiment nécessaire pour
                un bon fonctionnement et de bonnes performances
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

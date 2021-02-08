import React from "react";
import Circle from "../../../assets/Icon/SpinCircle.svg";
import "../../../style/Desc.scss";

export default function Desc() {
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
            <img src={Circle} alt="Circle" />
          </div>
          <div className="desc_right"></div>
        </article>
        <article className="desc_grid desc_verticall">
          <div className="desc_left"></div>
          <div className="desc_middle">
            <img src={Circle} alt="Circle" />
          </div>
          <div className="desc_right">
            <div className="desc_cont">
              <h1>Conception de votre site web de A à Z</h1>
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
              <h1>Conception de votre site web de A à Z</h1>
              <p>
                Afin de vous demarquer le plus possible de vos concurents, nous
                n'utilisons pas de thème dans la creation de votre porjet
              </p>
            </div>
          </div>
          <div className="desc_middle">
            <img src={Circle} alt="Circle" />
          </div>
          <div className="desc_right"></div>
        </article>
      </div>
    </section>
  );
}

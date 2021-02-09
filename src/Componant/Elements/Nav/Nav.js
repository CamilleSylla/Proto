import React, { useEffect, useState, Fragment } from "react";
import "../../../style/Nav.scss";
import Insta from "../../../assets/Icon/insta.svg";
import Git from "../../../assets/Icon/github.svg";
import FB from "../../../assets/Icon/facebook.svg";
import Menu from "../../Layers/Menu/Menu";

export default function Nav({active, setActive}) {

  const ShowMenu = () => {
    setActive(!active);
  };

  return (
    <>
    <div className="nav">
      <div className="hamburger_container">
        <div className="hamburger" onClick={ShowMenu}>
          <div className="bars " id="top_bar"></div>
          <div className="bars " id="middle_bar"></div>
          <div className="bars " id="bottom_bar"></div>
          <div className="menuCircle purple"></div>
          <div className="menuCircle blue"></div>
        </div>
      </div>
      <div className="social">
        <div className="social_icon">
          <img src={FB} alt="Facebook" />
          <div className="icon_circle"></div>
        </div>
        <div className="social_icon">
          <img src={Insta} alt="Instagram" />
          <div className="icon_circle"></div>
        </div>
        <div className="social_icon">
          <img src={Git} alt="Github" />
          <div className="icon_circle"></div>
        </div>
      </div>
    </div>
    </>
  );
}

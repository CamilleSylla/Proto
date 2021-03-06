import React from "react";
import "../../../style/Nav.scss";
import Insta from "../../../assets/Icon/insta.svg";
import Git from "../../../assets/Icon/github.svg";
import FB from "../../../assets/Icon/facebook.svg";

export default function Nav() {


  return (
    <>
    <div className="nav">
      <div className="hamburger_container">
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

import React, { useEffect, useState } from "react";
import "../../../style/TestMenu.scss";
import Logo from "../../../assets/Logos/IDLine.svg";
import { NavLink } from "react-router-dom";

export default function TestMenu() {
  const [isActive, setIsActive] = useState(false);

  const ShowMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const Purple = document.querySelector(".purple");
    const Blue = document.querySelector(".blue");
    const Top = document.getElementById("top_bar");
    const Middle = document.getElementById("middle_bar");
    const Bottom = document.getElementById("bottom_bar");
    const MenuLeft = document.querySelector(".menu_left");
    const MenuRight = document.querySelector(".menu_right");
    const Hamburger = document.querySelector(".hamburger");
    const Menu = document.querySelector(".menu");

    function isTrue() {
      Purple.classList.add("active");
      Top.style.transform = "rotate(-45deg)";
      Bottom.style.transform = "rotate(45deg)";
      Middle.style.transform = "translate3d(100%,0,0)";
      Middle.style.opacity = "0";
      Menu.style.transform = "translate3d(0,0,0)";

      setTimeout(() => {
        MenuLeft.style.transform = "translate3d(0, 0, 0)";
        MenuRight.style.transform = "translate3d(0, 0, 0)";
      }, 500);
      setTimeout(() => {
        Blue.classList.add("active");
      }, 200);
      setTimeout(() => {
        Blue.style.opacity = "0";
        Purple.style.opacity = "0";
        Blue.style.display = "none";
        Purple.style.display = "none";
      }, 600);
    }
    function isFalse() {
      Blue.style.opacity = "1";
      Purple.style.opacity = "1";
      Blue.style.display = "block";
      Purple.style.display = "block";
      Blue.classList.remove("active");
      Menu.style.transform = "translate3d(0,-100%,0)";
      Top.style.transform = "rotate(0deg)";
      Middle.style.transform = "translate3d(0,0,0)";
      Middle.style.opacity = "1";
      Bottom.style.transform = "rotate(0deg)";
      MenuLeft.style.transform = "translate3d(0, -100%, 0)";
      MenuRight.style.transform = "translate3d(100%, 0, 0)";
      setTimeout(() => {
        Purple.classList.remove("active");
      }, 200);
    }
    isActive ? isTrue() : isFalse();
  });

  return (
    <div className="testMenu">
      <div className="hamburger_container">
        <div className="hamburger" onClick={ShowMenu}>
          <div className="bars " id="top_bar"></div>
          <div className="bars " id="middle_bar"></div>
          <div className="bars " id="bottom_bar"></div>
          <div className="menuCircle purple"></div>
          <div className="menuCircle blue"></div>
        </div>
      </div>
      <div className="menu">
        <div className="menu_left">
          <img src={Logo} className="menu_logo" />
          <ul>
            <li>
            <NavLink
            className="nav_link"
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#a5167e",
                  textDecoration: "none"
                }}
                onClick={ShowMenu}
              >
                Accueil
              </NavLink>
            </li>
            <li>
            <NavLink
            className="nav_link"
                to="/services"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#a5167e",
                  textDecoration: "none"
                }}
                onClick={ShowMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <a className="nav_link">Nos dossier</a>
            </li>
            <li>
              <NavLink
              className="nav_link"
                to="/atelier"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#a5167e",
                  textDecoration: "none"
                }}
                onClick={ShowMenu}
              >
                L'atelier
              </NavLink>
            </li>
            <li>
            <NavLink
              className="nav_link"
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#a5167e",
                  textDecoration: "none"
                  
                }}
                onClick={ShowMenu}
              >
                Consultation !
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu_right"></div>
      </div>
    </div>
  );
}

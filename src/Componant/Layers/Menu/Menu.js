import React, { useEffect, useState } from 'react'
import '../../../style/Menu.scss'
import Logo from '../../../assets/Logos/IDLine.svg'
import Nav from '../../Elements/Nav/Nav'
import Hamburger from '../Hamburger/Hamburger';
export default function Menu () {

    const [isActive, setIsActive] = useState(true);
    console.log(isActive)

    const ShowMenu = () => {
        setIsActive(!isActive);
      };
  
    useEffect(() => {
      const Purple = document.querySelector(".purple");
      const Blue = document.querySelector(".blue");
      const Top = document.getElementById('top_bar')
      const Middle = document.getElementById('middle_bar')
      const Bottom = document.getElementById('bottom_bar')
      const MenuLeft = document.querySelector('.menu_left')
      const MenuRight = document.querySelector('.menu_right')
  
      function isTrue() {
        Purple.classList.add("active");
        Top.style.transform = 'rotate(-45deg)'
        Bottom.style.transform = 'rotate(45deg)'
        Middle.style.transform = 'translate3d(100%,0,0)'
        Middle.style.opacity = '0'
        MenuLeft.style.transform = 'translate3d(0, 0, 0)'
        MenuRight.style.transform = 'translate3d(0, 0, 0)'
        setTimeout(() => {
          Blue.classList.add("active");
        }, 200);
      }
      function isFalse() {
        Blue.classList.remove("active");
        Top.style.transform = 'rotate(0deg)'
        Middle.style.transform = 'translate3d(0,0,0)'
        Middle.style.opacity = '1'
        Bottom.style.transform = 'rotate(0deg)'
        MenuLeft.style.transform = 'translate3d(0, -100%, 0)'
        MenuRight.style.transform = 'translate3d(100%, 0, 0)'
        setTimeout(() => {
          Purple.classList.remove("active");
        }, 200);
      }
      isActive ? isTrue() : isFalse();
      console.log(isActive);
    })
    return (
        
      <div className="menu">
          <Hamburger toggleActive={ShowMenu}/>
          <Nav />
          <div className="menu_left">
              <img src={Logo} className="menu_logo"/>
              <ul>
                  <li><a className="nav_link">Accueil</a></li>
                  <li><a className="nav_link">Service</a></li>
                  <li><a className="nav_link">Nos dossier</a></li>
                  <li><a className="nav_link">Contactez IconicDev !</a></li>
              </ul>
          </div>
          <div className="menu_right"></div>
        
      </div>
    )
}
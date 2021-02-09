import React from 'react'

export default function Hamburger ({toggleActive}) {

    return (
        <div className="hamburger_container">
        <div className="hamburger" onClick={toggleActive}>
          <div className="bars " id="top_bar"></div>
          <div className="bars " id="middle_bar"></div>
          <div className="bars " id="bottom_bar"></div>
          <div className="menuCircle purple"></div>
          <div className="menuCircle blue"></div>
        </div>
      </div>
    )
}
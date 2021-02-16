import React, { useContext, useEffect, useState } from 'react'
import { TransitionContext } from '../../Context/TransitionContext'
import '../../style/Transition.scss'
import ID from '../../assets/Logos/IDtext.svg'

export default function Transition () {
    const [transition, setTransition] = useContext(TransitionContext)
    
    useEffect(() => {
        const el = document.getElementById('transition_wrapper')
        const icon =  document.getElementById('img_icon')
        if (transition === true) {
            el.style.transform = "translate3d(0,100%,0)"
            icon.style.transition = "all ease .6s"
            setTimeout(() => {
                el.style.transition = "all ease .6s"
                icon.style.transform = "translate3d(0,0,0)"
            }, 500);
            
            
            setTimeout(() => {
                el.style.background = "#06070c"
            }, 1000);
            setTimeout(() => {
                icon.style.transform = "translate3d(0,200%,0)"
            }, 1500);
            setTimeout(() => {
                el.style.transform = "translate3d(0,0,0)"
            }, 2000);
            setTimeout(() => {
                setTransition(false)
            }, 2500);

        } else {
            el.style.background = "#121525"
            el.style.transition = "none"
        }
    }, [transition])

    return (
        <div id="transition_wrapper">
            <div className="transition_first">
                <img id="img_icon" src={ID} alt="IconicDev"/>
            </div>
        </div>
    )
}
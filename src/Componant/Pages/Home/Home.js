
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "../../../style/Home.scss";
import Avis from "../../Layers/Avis/Avis";
import Desc from "../../Layers/Desc/Desc";
import HeroBanner from "../../Layers/HeroBanner/HeroBanner";
import LastProject from "../../Layers/LastProject/LastProject";
import PSM from "../../Layers/PSM/PSM";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".PSM_Img", {
      scrollTrigger: { 
          trigger: ".PSM",
          start: "+=25% +=100%",
          end: "+=60% +=100%",
          toggleActions: "restart none none reverse"
         },
      x: 400,
      opacity: 0,
      duration: 0.5,
    } )
    ;
    gsap.from(".PSM_content", {
      scrollTrigger: { 
          trigger: ".PSM",
          start: "+=60% +=100%",
          end: "+=80% +=100%",
          toggleActions: "restart none none reverse"
         },
      x: 400,
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(".scene_container", {
      scrollTrigger: {
        trigger: ".hero_banner",
        start: "+=35% +=30% ",
        scrub: 0.3,
        // toggleActions: "none restart none restart",
      },
      opacity: 0,
      y: -500
    });
    gsap.to(".hero_cards, .hero_main_title", {
      scrollTrigger: {
        trigger: ".hero_banner",
        start: "+=35% +=30% ",
        end: "50%",
        scrub: 0.3,
        // toggleActions: "none restart none restart",
      },
      opacity: 0,
      y: 100,
    });
    gsap.from(".desc_middle", {
      scrollTrigger: {
        trigger: ".desc",
        start: "-35%  50%",
        toggleActions: "restart none none reverse"
      },
      duration: .4,
      scale: 3,
      opacity: 0,
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
    gsap.from(".rolling_txt_right", {
      scrollTrigger: {
          trigger: '.PSM',
          start: "-75% top",
          scrub: 0.3
      },
      x: -1000
  })
  gsap.from(".rolling_txt_left", {
      scrollTrigger: {
          trigger: '.PSM',
          start: "-75% top",
          scrub: 0.3
      },
      x: 1000
  })
  gsap.from(".Last_project_item", {
    scrollTrigger: {
        trigger: ".Last_project",
  start: "-35%  50%",
  toggleActions: "restart none none reverse"
    },
    opacity: 0,
    x: 100,
    stagger: 0.3
})
gsap.from(".Last_project_name", {
    scrollTrigger: {
        trigger: ".Last_project",
  start: "-35%  50%",
  toggleActions: "restart none none reverse"
    },
    opacity: 0,
    y: -200,
    stagger: 0.3,
})

  }, []);

  return (
    <div className="home">
      <HeroBanner />
      <Desc />
      <PSM />
      <LastProject />
      <Avis />
    </div>
  );
}

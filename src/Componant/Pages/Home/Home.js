import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import "../../../style/Home.scss";
import Avis from "../../Layers/Avis/Avis";
import Desc from "../../Layers/Desc/Desc";
import HeroBanner from "../../Layers/HeroBanner/HeroBanner";
import LastProject from "../../Layers/LastProject/LastProject";
import PSM from "../../Layers/PSM/PSM";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
  });

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

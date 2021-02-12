import React, { useState } from "react";
import "../../style/Contact.scss";
import Mail from "../Elements/Scene/Mail";
import ContactForm from "../Layers/ContactForm/ContactFrom";
import ReactMapGL, {Marker} from "react-map-gl";

export default function Contact() {
  const [viewport, setViewport] = useState({
    latitude: 49.83840393066406,
    longitude: 3.2786340618133545,
    width: "100%",
    height: "100%",
    zoom: 13,
    pitch: 60,
    bearing: -60
  });
  const id = {
      key :'test',
      latitude: 49.853832353731335,
    longitude: 3.2817226126638976,
  }

  return (
    <section className="contact">
      <ReactMapGL
        id="map"
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaWNvbmljZGV2IiwiYSI6ImNrbDJoNnF6dzByaWEzMG80ZnBmZWl4a3UifQ.sW5RLknqjZOb-0V5sxSJJw"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/iconicdev/ckl2ijgmv188l17tb2xkrcxls"
      >
          <Marker
          key="test"
          latitude={id.latitude}
          longitude={id.longitude}
          >
Yo
          </Marker>
        
      </ReactMapGL>
      {/* <article className="global_infos">
          <h1>N'hesitez pas à discuter de votre projet</h1>
          <p>IconicDev vous recontactera pour discuter de votre projet</p>
        </article>
        <ContactForm /> */}
    </section>
  );
}

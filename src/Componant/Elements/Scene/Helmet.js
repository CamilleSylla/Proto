import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

export default function Helmet () {
  useEffect(() => {
    const scene = new THREE.Scene();
    const el = document.querySelector(".helmet");
    const camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0,0,1)
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);
    //responsivness
    window.addEventListener("resize", function () {
      const width = el.clientWidth;
      const height = el.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    let LeMan;
    const Man = new GLTFLoader();
    Man.load("/Helmet/scene.gltf", (gltf) => {
      gltf.scene.scale.setScalar(0.15);
      gltf.scene.rotation.y = -0.8
      LeMan = gltf.scene;
      gltf.scene.traverse((n) => {
        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          if (n.material.map) n.material.map.anisotropy = 16;
        }
      });
      scene.add(gltf.scene);
    });

    const spotLight = new THREE.SpotLight(0xffffff, 4);
    spotLight.castShadow = true
    spotLight.shadow.bias = -0.0001
    spotLight.shadow.mapSize.width = 1024*4
    spotLight.shadow.mapSize.height = 1024*4
    spotLight.position.x = 50
    spotLight.position.y = 50
    spotLight.position.z = 50
    scene.add(spotLight);
    const spotLight2 = new THREE.SpotLight(0xa5167e, 2);
    spotLight2.castShadow = true
    spotLight2.shadow.bias = -0.0001
    spotLight2.shadow.mapSize.width = 1024*4
    spotLight2.shadow.mapSize.height = 1024*4
    spotLight2.position.x = 50
    spotLight2.position.y = -50
    spotLight2.position.z = 50
    scene.add(spotLight2);

    const light = new THREE.AmbientLight( 0xffffff, 2 ); // soft white light
scene.add( light );

//Mouse
const mouse = {x: 0.5, y: 0.5}
window.addEventListener('mousemove', (event) => {
    mouse.x =  (event.clientX  / (window.innerHeight / 4)) / 4
    mouse.y =  (event.clientY  - (window.innerWidth / 4) ) / 1000
})
    function upDate(){
        scene.rotation.y = mouse.x
        scene.rotation.x = mouse.y
     }
      
       function render () {
        
        camera.lookAt( scene.position );
           renderer.render(scene, camera)
           
       }
      
       function Loop () {
           //run all the stuf (update, render, repeat)
           
          //  camera.rotation.z = mouse.y
           requestAnimationFrame(Loop)
           upDate()
           render()
       }
       Loop()


  });

  return <div className="helmet"></div>;
}
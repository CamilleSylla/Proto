import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

export default function GameBoy () {
  useEffect(() => {
    const scene = new THREE.Scene();
    const el = document.querySelector(".gameboy");
    const camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0,0,0.75)
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
    Man.load("/GameBoy/scene.gltf", (gltf) => {
      gltf.scene.scale.setScalar(0.15);
      LeMan = gltf.scene;
      console.log(gltf.scene)
      gltf.scene.traverse((n) => {
        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          if (n.material.map) n.material.map.anisotropy = 16;
        }
      });
      scene.add(gltf.scene);
    });

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.castShadow = true
    spotLight.shadow.bias = -0.0001
    spotLight.shadow.mapSize.width = 1024*4
    spotLight.shadow.mapSize.height = 1024*4
    spotLight.position.x = 50
    spotLight.position.y = 50
    spotLight.position.z = 50
    scene.add(spotLight);

    const light = new THREE.AmbientLight( 0xA5167E, 0.1 ); // soft white light
scene.add( light );

    function upDate(){
        // scene.rotation.z = 50
        // scene.rotation.x = -50
        // scene.rotation.y = 200
        scene.rotation.y +=0.002
        // spotLight.position.y += 0.05
        // camera.rotation.z += 0.01
        // hemiLight.position.set( mouse.x + 10,mouse.x + 10,mouse.x + 10)
       }
      
       function render () {
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

  return <div className="gameboy"></div>;
}
import React, { useEffect } from "react";
import * as THREE from "three";
import { FBXLoader } from "../../../../node_modules/three/examples/jsm/loaders/FBXLoader.js";

export default function GameBoy() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const el = document.querySelector(".Hi");
    const camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 25);
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
    let Mixer;
    
    const Man = new FBXLoader();
    Man.load("/Hi/character.fbx", (fbx) => {
      fbx.scale.setScalar(0.1);
      fbx.position.x = 0;
      fbx.rotation.x = 0.5;
      fbx.traverse((n) => {
        if (n.isMesh) {
          n.castShadow = false;
          n.receiveShadow = true;
          if (n.material.map) n.material.map.anisotropy = 16;
        }
      });
      const Anim = new FBXLoader();
      Anim.load("/Hi/dance.fbx", (anim) => {
        Mixer = new THREE.AnimationMixer(fbx);
        console.log(anim.animations[0]);
        Mixer.clipAction(anim.animations[0]).play();
      });
      scene.add(fbx);
    });

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024 * 4;
    spotLight.shadow.mapSize.height = 1024 * 4;
    spotLight.position.x = 50;
    spotLight.position.y = 50;
    spotLight.position.z = 50;
    scene.add(spotLight);

    const light = new THREE.AmbientLight(0xa5167e, 0.1); // soft white light
    scene.add(light);

    function upDate() {
      
      // scene.rotation.z = 50
      // scene.rotation.x = -50
      // scene.rotation.y = 200
      // scene.rotation.y +=0.002
      // spotLight.position.y += 0.05
      // camera.rotation.z += 0.01
      // hemiLight.position.set( mouse.x + 10,mouse.x + 10,mouse.x + 10)
    }

    function render() {
        
      renderer.render(scene, camera);
    }

    function Loop() {
      //run all the stuf (update, render, repeat)
      
      //  camera.rotation.z = mouse.y
      requestAnimationFrame(Loop);
      upDate();
      render();
    }
    Loop();
  });

  return <div className="Hi"></div>;
}

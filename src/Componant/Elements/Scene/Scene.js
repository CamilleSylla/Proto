import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "../../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

export default function Scene({ layerModel }) {
  const Model_to_display = {
    AstoBoy: {
      el: ".scene_container",
      path: "/Astro/scene.gltf",
      camera_position_set: [0, 0, 0.5],
      scale: 0.15,
      class: "scene_container",
      loaded: null,
    },
    Helmet: {
      el: ".helmet",
      path: "/Helmet/scene.gltf",
      camera_position_set: [0, 0, 1],
      scale: 0.15,
      class: "helmet",
      loaded: null,
    },
    Avatar: {
      el: ".Hi",
      path: "/Hi/scene.gltf",
      camera_position_set: [0.5, 1, 2],
      scale: 2,
      class: "Hi",
      loaded: null,
    }
  };

  useEffect(() => {
    const scene1 = new THREE.Scene();
    const scene2 = new THREE.Scene();
    const el = document.querySelector(`${Model_to_display[layerModel].el}`);
    const camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    camera.position.set(
      Model_to_display[layerModel].camera_position_set[0],
      Model_to_display[layerModel].camera_position_set[1],
      Model_to_display[layerModel].camera_position_set[2]
    );
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

    //Model PreLoader
    const Man = new GLTFLoader();
    Man.load(`${Model_to_display[layerModel].path}`, (gltf) => {
      gltf.scene.scale.setScalar(Model_to_display[layerModel].scale);
      if (layerModel === "Avatar") {
        gltf.scene.position.set(0, -2.8, 0);
        gltf.scene.rotation.y = -1.5;
      } else if (layerModel === "Helmet") {
        gltf.scene.rotation.y = -0.8
      }
      Model_to_display[layerModel].loaded = gltf.scene;
      gltf.scene.traverse((n) => {
        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          if (n.material.map) n.material.map.anisotropy = 16;
        }
      });
      scene1.add(Model_to_display[layerModel].loaded);
    });

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024 * 4;
    spotLight.shadow.mapSize.height = 1024 * 4;
    spotLight.position.x = 50;
    spotLight.position.y = 50;
    spotLight.position.z = 50;
    scene1.add(spotLight);

    const purpleLight = new THREE.SpotLight(0xa5167e, 2);
    purpleLight.castShadow = true
    purpleLight.shadow.bias = -0.0001
    purpleLight.shadow.mapSize.width = 1024*4
    purpleLight.shadow.mapSize.height = 1024*4
    purpleLight.position.x = 50
    purpleLight.position.y = -50
    purpleLight.position.z = 50
    if (layerModel === "Helmet") {
      scene1.add(purpleLight);
    }

    const light = new THREE.AmbientLight(0xa5167e, 0.1); // soft white light
    scene1.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(scene1.position);
    controls.update();

    //Mouse
const mouse = {x: 0.5, y: 0.5}
window.addEventListener('mousemove', (event) => {
    mouse.x =  (event.clientX  / (window.innerHeight / 4)) / 4
    mouse.y =  (event.clientY  - (window.innerWidth / 4) ) / 1000
})

    function upDate() {
      if (layerModel === "AstoBoy") {
        scene1.rotation.y += 0.015;
        scene1.rotation.z += 0.005;
        spotLight.position.y += 0.05;
      } else if (layerModel === "Helmet") {
        scene1.rotation.y = mouse.x
        scene1.rotation.x = mouse.y
      }
      // camera.rotation.y +=0.01
      // hemiLight.position.set( mouse.x + 10,mouse.x + 10,mouse.x + 10)
    }

    function render() {
      renderer.render(scene1, camera);
    }

    function Loop() {
      //run all the stuf (update, render, repeat)
      //  camera.rotation.z = mouse.y
      window.requestAnimationFrame(Loop);
      upDate();
      render();
    }
    Loop();
  });

  return null;
}

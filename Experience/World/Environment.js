import * as THREE from "three";
import Experience from "../Experience.js";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setLights()

  }

  setLights() {
    this.sunlight = new THREE.DirectionalLight( 0xf8f8f8, 4)
    this.sunlight.position.set(-3, 2.5, 2)
    this.sunlight.shadow.normalBias = 0.05;
    this.scene.add(this.sunlight);

    // this.sunlightHelper = new THREE.DirectionalLightHelper( this.sunlight,2,  0xff0000)
    // this.scene.add(this.sunlightHelper)

    this.ambientLight = new THREE.AmbientLight(0xf8f8f8, 0.2);
    this.scene.add(this.ambientLight)

  }
}

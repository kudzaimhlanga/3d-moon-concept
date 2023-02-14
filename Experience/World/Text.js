import * as THREE from "three";
import Experience from "../Experience.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export default class Text {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.font = this.resources.items.font;

    this.setText();
  }

  setText() {
    this.innerText = ["3", "D"];
    this.textMeshes = [];
    this.textMaterial = new THREE.MeshBasicMaterial();

    for (let i = 0; i < this.innerText.length; i++) {
      const textGeometry = new TextGeometry(`${this.innerText[i]}`, {
        font: this.font,
        size: 1,
        height: 0.1,
        curveSegments: 6,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 2,
      });

      textGeometry.center();
      const textMesh = new THREE.Mesh(textGeometry, this.textMaterial);
      this.textMeshes.push(textMesh);

      this.scene.add(textMesh);
    }

    this.textMeshes[0].position.set(-0.75, 0.9, -2)
    this.textMeshes[0].rotation.z = -Math.PI * 0.25

    this.textMeshes[1].position.set(-0.25, 0.3, 2)
    this.textMeshes[1].rotation.z = -Math.PI * 0.25

  }
}

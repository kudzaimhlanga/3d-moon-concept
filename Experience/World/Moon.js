import * as THREE from "three"
import Experience from "../Experience.js"

export default class Moon{
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.moon = this.resources.items.moon;
        this.actualMoon = this.resources.items.moon.scene;

        this.setModel()
        this.animate();
  

    }

    setModel(){
        this.scene.add(this.actualMoon)
        this.actualMoon.scale.set(1, 1, 1)
    }

    animate(){
        this.actualMoon.rotation.y += 0.001;
        window.requestAnimationFrame(() => this.animate())
    }
}
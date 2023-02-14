import * as THREE from "three"
import Experience from "../Experience.js"

export default class Particles{
    constructor(){
        this.experienc = new Experience();
        this.scene = this.experienc.scene;

        this.createParticles()
    }

    createParticles(){
        this.particlesGeometry = new THREE.BufferGeometry();
        this.count = 500;

        this.positions = new Float32Array(this.count * 3);

        for(let i = 0; i < this.count * 3; i++){
            this.positions[i] = (Math.random() - 0.5) * 20
        }

        this.particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(this.positions, 3)
        )

        this.particlesMaterial = new THREE.PointsMaterial();
        this.particlesMaterial.size = 5;
        this.particlesMaterial.sizeAttenuation = true;
        this.particlesMaterial.map = this.texture;

        this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial)
        this.scene.add(this.particles)

    }
}
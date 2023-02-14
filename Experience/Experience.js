import * as THREE from "three"

//Experience
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";

//Utils
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import assets from "./Utils/assets.js"
import Resources from "./Utils/Resources.js";

//World

export default class Experience{
    
    static instance;

    constructor(canvas){
        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this
        this.canvas = canvas;
        this.scene = new THREE.Scene();

        //utilies
        this.sizes = new Sizes();
        this.time = new Time();

        //Experience
        this.camera = new Camera();
        this.renderer = new Renderer()

        //Resources
        this.resources = new Resources(assets)
        this.world = new World();

        this.sizes.on("resize", () => { this.resize() })
        this.time.on("update", () => { this.update() })
        
    }

    resize(){
        this.camera.resize();
        this.renderer.resize();
    }

    update(){
        this.renderer.update();
        this.camera.update();
    }
}
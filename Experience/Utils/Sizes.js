import { EventEmitter } from "events";

export default class Sizes extends EventEmitter{
    constructor() {
        super();

        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.aspectRatio = window.innerWidth / window.innerHeight;
        this.devicePixelRatio = Math.min(window.devicePixelRatio, 2);
        this.frustrum = 5;

        window.addEventListener("resize", () => {
            this.height = window.innerHeight;
            this.width = window.innerWidth;
            this.aspectRatio = window.innerWidth / window.innerHeight;
            this.devicePixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        })
    }
}
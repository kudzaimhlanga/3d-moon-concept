import Experience from "../Experience.js";
import Moon from "./Moon.js";
import Environment from "./Environment.js";
import Text from "./Text.js";
import Particles from "./Particles.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.moon = new Moon();
      this.environment = new Environment();
      this.text = new Text();
      this.particles = new Particles();
    })

  }
}

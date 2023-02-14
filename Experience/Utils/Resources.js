import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
    console.log("start loading");

    this.assets = assets;

    this.items = {};
    this.queue = this.assets.length;
    this.loaded = 0;

    //set loaders
    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.fontLoader = new FontLoader();
  }

  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === "glbModel") {
        this.loaders.gltfLoader.load(asset.path, (gltf) => {
          this.singleAssetLoaded(asset, gltf);
        });
      } else if (asset.type === "font") {
        this.loaders.fontLoader.load(asset.path, (font) => {
          this.singleAssetLoaded(asset, font);
        });
      }
    }
  }

  singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;

    if (this.loaded === this.queue) {
      console.log("assets loaded");
      this.emit("ready");
    }
  }
}

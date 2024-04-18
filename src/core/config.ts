import GridEngine from "grid-engine";
import PreloadAssets from "./preload";
import InitGame from "./main";
import InitScene from "./first";
import ModalScene from "./modal";

export const scaleObject: Phaser.Types.Core.ScaleConfig = {
  // autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: "", // matches App.jsx
  mode: Phaser.Scale.ScaleModes.RESIZE,
  width: "100%",
  height: "100%",
};

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#839ac7",
  seed: [(Date.now() * Math.random()).toString()],
  antialias: true,
  scale: scaleObject,
  scene: [PreloadAssets, InitScene, InitGame, ModalScene],
  parent: "", // matches App.jsx
  physics: {
    default: "matter",
    matter: {
      gravity: { y: 0 },
    },
  },
  // dom: {
  //   createContainer: true,
  // },
  plugins: {
    scene: [
      {
        key: "gridEngine",
        plugin: GridEngine,
        mapping: "gridEngine",
      },
    ],
  },
  // pixelArt: true,
};

import GridEngine, { Direction } from "grid-engine";
export default class Lecture extends Phaser.Scene {
  private gridEngine!: GridEngine;
  constructor() {
    super({ key: "Lecture" });
  }
  init() {}
  create() {}
  update(): void {
    const cursors = this.input.keyboard!.createCursorKeys();
    if (cursors.left.isDown) {
      this.gridEngine.move("player", Direction.LEFT);
    } else if (cursors.right.isDown) {
      this.gridEngine.move("player", Direction.RIGHT);
    } else if (cursors.up.isDown) {
      this.gridEngine.move("player", Direction.UP);
    } else if (cursors.down.isDown) {
      this.gridEngine.move("player", Direction.DOWN);
    }
  }
}

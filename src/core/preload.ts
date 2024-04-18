// loading bar
const titleText: string = "working";
const titleFont: string = "20px monospace";
const progressFont: string = "18px monospace";
const assetFont: string = "9px monospace";
const colorWhite: string = "#fff";
const colorCyan: number = 3905712;
const greyColor: number = 0x222222;
const progressBarOpacity: number = 0.8;
const progressOpacity: number = 0.75;
const progressBarHeight: number = 10;
const progressSpacing: number = 4;
const elementSpacing: number = 50;
const half: number = 2;
const third: number = 3;

// (public/)
const map: string = "assets/react-test.json";
const tiles: string = "assets/gather-m.png";
const tiles2: string = "assets/gather-p.png";
const player: string = "assets/characters.png";

export default class PreloadAssets extends Phaser.Scene {
  constructor() {
    super({
      key: "PreloadAssets",
    });
  }

  preload(): void {
    const { width }: { width: number } = this.cameras.main;
    const { height }: { height: number } = this.cameras.main;
    const middleX: number = width / half;
    const middleY: number = height / half;
    const progressBarWidth: number = width / third;
    //
    const progressContainer: Phaser.GameObjects.Graphics = this.add.graphics();
    const progressBar: Phaser.GameObjects.Graphics = this.add.graphics();

    progressContainer.fillStyle(greyColor, progressBarOpacity);
    progressContainer
      .fillRect(
        middleX - progressBarWidth / half,
        middleY + elementSpacing,
        progressBarWidth,
        progressBarHeight
      )
      .setDepth(0);

    const titleObject: Phaser.GameObjects.Text = this.make.text({
      x: middleX,
      y: middleY - elementSpacing,
      text: titleText,
      style: {
        font: titleFont,
        color: colorWhite,
      },
    });
    titleObject.setOrigin();

    const progressObject: Phaser.GameObjects.Text = this.make.text({
      x: middleX,
      y: middleY,
      style: {
        font: progressFont,
        color: colorWhite,
      },
    });
    progressObject.setOrigin();

    const assetObject: Phaser.GameObjects.Text = this.make.text({
      x: middleX,
      y: middleY + elementSpacing / half,
      style: {
        font: assetFont,
        color: colorWhite,
      },
    });
    assetObject.setOrigin();

    this.load.on("progress", (val: number): void => {
      progressObject.setText(`${Math.floor(val * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(colorCyan, progressOpacity);
      progressBar
        .fillRect(
          middleX - progressBarWidth / half,
          middleY + elementSpacing + progressSpacing / half,
          progressBarWidth * val,
          progressBarHeight - progressSpacing
        )
        .setDepth(1);
    });

    this.load.on("fileprogress", (file: Phaser.Loader.File): void => {
      assetObject.setText(`${file.type} - ${file.key}`);
    });

    this.load.on("complete", (): void => {
      progressBar.destroy();
      progressContainer.destroy();
      titleObject.destroy();
      progressObject.destroy();
      assetObject.destroy();
    });

    this.load.image("tiles", tiles);
    this.load.image("tiles2", tiles2);
    this.load.tilemapTiledJSON("map", map);
    this.load.spritesheet("player", player, {
      frameWidth: 52,
      frameHeight: 72,
    });
    this.load.spritesheet("object", tiles2, {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.on("complete", () => {
      this.scene.start("init");
      document.getElementById("ui-section")!.style.display = "block";
    });
  }
}

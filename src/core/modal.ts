export default class ModalScene extends Phaser.Scene {
  constructor(data: any) {
    super({ key: "modal" });
  }
  init(data: any) {
    console.log(data);
  }
  create() {
    // const modal = document.getElementById("inRoom");
    // const visible = document.getElementById("entModal");
    // modal?.addEventListener("click", () => {
    //   visible!.style.display = "none";
    //   this.scene.pause("modal");
    //   this.scene.run("HelloWorldScene");
    // });
  }
  exit(data: any) {}
}

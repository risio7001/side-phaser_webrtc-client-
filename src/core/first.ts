export default class InitScene extends Phaser.Scene {
  startContainer: any;
  constructor() {
    super({ key: "init" });
  }
  preload() {}
  create() {
    //   let name = "";
    //   // event
    //   const inputName = document.getElementById("name");
    //   inputName?.addEventListener("change", (e: any) => {
    //     name = e.target.value;
    //   });
    //   const startbtn = document.getElementById("startBtn");
    //   startbtn?.addEventListener("click", () => {
    //     this.start(name);
    //     // this.scene.start("InitGame");
    //   });
    // }
    // start(data: any) {
    //   const firstUi = document.getElementById("first-ui");
    //   firstUi!.style.display = "none";
    //   this.scene.start("InitGame", { name: data });
    //   // this.scene.remove("init");
  }
}

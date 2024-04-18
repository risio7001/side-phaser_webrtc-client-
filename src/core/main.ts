import GridEngine, { Direction } from "grid-engine";
import { store } from "../redux/store";
import { setRooms } from "../redux/reducers/gameInfo";
import { socketRoot } from "../socket/socket";

const socket = socketRoot;

export default class InitGame extends Phaser.Scene {
  private gridEngine!: GridEngine;
  name: any;
  id: any;
  socket: any;

  constructor() {
    super({ key: "InitGame" });
  }

  init(data: any) {
    this.name = data.name;
    this.id = data.id;
    socket.emit("init", { name: data.name });
  }
  create(): void {
    let zoom = 1;
    const gatTilemap = this.make.tilemap({ key: "map" });
    gatTilemap.addTilesetImage("gather-m", "tiles");
    gatTilemap.addTilesetImage("gather-p", "tiles2");
    let layer: any;
    for (let i = 0; i < gatTilemap.layers.length; i++) {
      layer = gatTilemap.createLayer(i, ["gather-m", "gather-p"], 0, 0);
      layer!.scale = 1;
      if (layer.layer.name === "lecture_1") {
        // layer.setVisible(false)
        // console.log(layer);
      }
    }
    gatTilemap.createFromObjects(
      "Object Layer 1",
      { key: "object", gid: 5196, frame: "120" },
      false
    );

    const playerSprite = this.add.sprite(0, 0, "player");
    playerSprite.scale = 0.6;

    const nameLabel = this.add
      .text(15, 0, `🔵 ` + this.name, {
        // backgroundColor: "#757474aa",
        align: "center",
        padding: { x: 6, y: 4 },
        fontSize: "12px",
      })
      .setOrigin(0.5, 1);
    // console.log(nameLabel.width);

    const rect = this.add.graphics();
    rect.fillStyle(0x757474aa, 0.3);
    rect.fillRoundedRect(
      nameLabel.x + -nameLabel.width / 2,
      -20,
      nameLabel.width,
      20,
      10
    );

    const container = this.add.container(0, 0, [playerSprite, rect, nameLabel]);

    this.cameras.main.startFollow(container, true);
    this.cameras.main.setFollowOffset(
      -playerSprite.width / 2,
      -playerSprite.height / 2
    );

    // this.cameras.main.setZoom(0.8);
    // this.cameras.main.zoomTo(1);
    const gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: playerSprite,
          walkingAnimationMapping: 6,
          startPosition: { x: 20, y: 20 },
          collision: {
            collisionGroup: ["cg1"],
          },
          container,
        },
      ],
    };

    socket.on("init", (data) => {
      data.userList
        .filter((el: any) => el !== socket.id)
        .map((el: any, index: number) => {
          if (!this.gridEngine.getAllCharacters().includes(`player-${el}`)) {
            const id = el;
            const playerSprite = this.add.sprite(0, 0, `player`);
            playerSprite.scale = 0.6;

            const nameLabel = this.add
              .text(15, 0, `🔵 ` + el, {
                // backgroundColor: "#757474aa",
                align: "center",
                padding: { x: 6, y: 4 },
                fontSize: "12px",
              })
              .setOrigin(0.5, 1);

            const rect = this.add.graphics();
            rect.fillStyle(0x757474aa, 0.3);
            rect.fillRoundedRect(
              nameLabel.x + -nameLabel.width / 2,
              -20,
              nameLabel.width,
              20,
              10
            );

            const container = this.add.container(0, 0, [
              playerSprite,
              rect,
              nameLabel,
            ]);
            this.gridEngine.addCharacter({
              id: `player-${id}`,
              sprite: playerSprite,
              walkingAnimationMapping: 6,
              startPosition: { x: 20, y: 20 },
              speed: 5,
              container,
            });

            if (Object.keys(data.users).includes(id)) {
              this.gridEngine.setPosition(`player-${id}`, data.users[id]);
            }
          }
        });
    });
    // socket
    socket.on("move", (data) => {
      this.gridEngine.moveTo(`player-${data.id}`, data.position);
    });
    socket.on("roomIn", (data) => {
      console.log(data);
      this.gridEngine.setPosition(
        `player-${Object.keys(data)[0]}`,
        data[Object.keys(data)[0]]
      );
    });
    socket.on("disconnected", (data) => {
      this.gridEngine.getContainer(`player-${data.target}`)?.destroy();
      this.gridEngine.removeCharacter(`player-${data.target}`);
    });

    this.gridEngine.create(gatTilemap, gridEngineConfig);
    this.gridEngine.setSpeed("player", 5);
    const notions = document.getElementById("modal-section");
    this.gridEngine.positionChangeFinished().subscribe((value: any) => {
      if (value.charId === "player") {
        socket.emit("move", { target: socket.id, position: value.enterTile });
        if (
          gatTilemap.hasTileAt(
            value.enterTile.x,
            value.enterTile.y,
            "Tile Layer 2"
          )
        ) {
          notions!.style.display = "block";
          // console.log("현재 위치 : ", value.enterTile);
        } else {
          notions!.style.display = "none";
        }
        if (
          gatTilemap.hasTileAt(value.enterTile.x, value.enterTile.y, "rooms")
        ) {
          store.dispatch(setRooms(1));
          const visible = document.getElementById("entModal");
          visible!.style.display = "flex";
          this.scene.pause();
        }
        if (
          gatTilemap.hasTileAt(
            value.enterTile.x,
            value.enterTile.y,
            "lecture_1_exit"
          )
        ) {
          this.gridEngine.setPosition("player", { x: 18, y: 31 });
        }
      }
    });
    document.addEventListener("wheel", (e) => {
      if (e.deltaY > 0 && zoom > 0.8) {
        zoom -= 0.1;
      }
      if (e.deltaY < 0 && zoom < 3.2) {
        zoom += 0.1;
      }
      this.cameras.main.setZoom(zoom);
    });
  }
  update(): void {
    const cursors = this.input.keyboard!.createCursorKeys();
    // const move =
    //   cursors.left.isDown ||
    //   cursors.right.isDown ||
    //   cursors.up.isDown ||
    //   cursors.down.isDown;

    // console.log(move);

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
  testModal(data: any) {
    if (data) {
      this.gridEngine.setPosition("player", { x: 94, y: 3 });
      socket.emit("move", { target: this.id, position: { x: 94, y: 3 } });
    } else {
      this.gridEngine.move("player", Direction.UP);
    }
  }
}

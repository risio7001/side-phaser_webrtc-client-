import React, { CSSProperties, useState } from "react";
import phaserRoot from "../core/game";
import InitGame from "../core/main";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { socketRoot } from "./../socket/socket";

interface EntModalProps {
  data?: {};
}

const defaultStyle: CSSProperties = {};

const EntModal: React.FC<EntModalProps> = ({ data }) => {
  const roomNum = useSelector((state: RootState) => state.gameInfo.roomNum);
  const myStream = useSelector((state: RootState) => state.gameInfo.myStream);

  const handleClick = (data: any) => {
    // webRtc 연결 트리거 붙이기
    const socket = socketRoot;
    const visible = document.getElementById("entModal");
    const scene = phaserRoot.scene.keys.InitGame as InitGame;
    scene.scene.resume("InitGame");
    if (data) {
      socket.emit("roomIn", {
        roomName: `lecture-${roomNum}`,
        myStream: myStream,
      });
    }
    scene.testModal(data);
    visible!.style.display = "none";
  };

  return (
    <div
      id="entModal"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      className="text-center hidden absolute top-0 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center"
    >
      <div
        id="inRoom"
        className="min-h-[200px] w-[70%] h-[30%] mx-auto bg-white rounded-xl flex flex-col justify-around"
      >
        <div className="">강의실 - {roomNum} 번 입장하시겠습니까?</div>
        <div className="flex flex-row justify-around">
          <div
            onClick={() => handleClick(true)}
            className="w-[40%] py-2 border rounded-xl"
          >
            YES
          </div>
          <div
            onClick={() => handleClick(false)}
            className="w-[40%] py-2 border rounded-xl"
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntModal;

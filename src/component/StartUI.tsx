import React, { useEffect, useRef, useState } from "react";
import InitScene from "../core/first";
import { store } from "../redux/store";
import { setNickName, setStream } from "../redux/reducers/gameInfo";
import { useNavigate } from "react-router-dom";
import { socketRoot } from "./../socket/socket";
import phaserRoot from "../core/game";

const videoAlt: string = "assets/altCamera.png";
const socket = socketRoot;

const StartUI = () => {
  const [name, setname] = useState("");
  const [id, setId] = useState("");
  const myVideoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const scene = phaserRoot.scene.keys.init as InitScene;

  const submitHandler = () => {
    store.dispatch(setNickName(name));
    scene.scene.start("InitGame", { id: socket.id, name: name });
    navigate("/main");
  };

  useEffect(() => {
    socket.on("setid", (data) => {
      setId(data);
    });
  }, []);

  const initVideoPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (myVideoRef.current) {
          myVideoRef.current.srcObject = stream;
          store.dispatch(setStream(stream));
        }
      })
      .catch((err) => {
        console.log(err.toString());
        if (err.toString().split(":")[0] === "NotFoundError") {
          alert("카메라를 찾을 수 없음");
        }
        if (err.toString().split(":")[0] === "NotAllowedError") {
          alert("카메라 권한 허용 필요");
        }
      });
  };

  return (
    <>
      <div
        id="first-ui"
        className="flex flex-col justify-center items-center h-full w-full "
      >
        <div className="bg-gray-400 border rounded-xl flex flex-col justify-around p-8 h-[50%]">
          <video
            autoPlay={true}
            className="border max-w-[250px] p-3 cursor-pointer relative"
            poster={videoAlt}
            ref={myVideoRef}
            src=""
            onClick={() => initVideoPermission()}
          >
            {/* <div className="absolute top-0 left-0">카메라 권한 허용 필요</div> */}
          </video>
          <div className="inputBox">
            <input
              onChange={(e) => setname(e.target.value)}
              className="text-center rounded-xl py-1"
              placeholder="NAME"
              id="name"
              type="text"
            />
          </div>
          <div
            onClick={() => submitHandler()}
            id={"startBtn"}
            className="rounded-full bg-[#06d6a0] text-white py-1 cursor-pointer"
          >
            START
          </div>
        </div>
      </div>
    </>
  );
};
export default StartUI;

import React, { useCallback, useEffect, useRef, useState } from "react";
import { RootState, store } from "../redux/store";
import { setRooms } from "../redux/reducers/gameInfo";
import { socketRoot } from "../socket/socket";
import { useSelector } from "react-redux";
import SimplePeer from "simple-peer";

interface roomDataProps {
  roomNum: string;
  roomCnt: number;
  userList: Array<string>;
}

const UI = () => {
  const screenShareRef = useRef<HTMLVideoElement>(null);
  const user = useSelector((state: RootState) => state.gameInfo);
  const [screen, setScreen] = useState<any>();
  const [test, setTest] = useState(false);
  const [call, setCall] = useState<any>();
  const [callSignal, setCallSignal] = useState<any>();
  const [peers, setPeers] = useState<any>();

  const socket = socketRoot;

  const [rightBar, setRightBar] = useState(false);
  const [roomData, setRoomData] = useState<roomDataProps>({
    roomNum: "",
    roomCnt: 0,
    userList: [""],
  });

  useEffect(() => {
    navigator.mediaDevices
      .getDisplayMedia()
      .then((stream) => setScreen(stream))
      .catch((err) => console.log(err));

    socket.on("init", (data) => {
      setRoomData(data);
    });
    socket.on("disconnected", (data) => {
      setRoomData(data);
    });
    socket.on("caller", (data) => {
      getSignal(data.signal, data.from);
    });
  }, []);

  const offerPeer = () => {
    let temp: any = {};
    for (const i in roomData.userList) {
      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: screen,
      });

      if (roomData.userList[i] !== socket.id) {
        temp[roomData.userList[i]] = peer;
      }

      temp[roomData.userList[i]]?.on("signal", (data: any) => {
        socket.emit("caller", {
          signalData: data,
          from: socket.id,
          to: roomData.userList[i],
        });
      });
      temp[roomData.userList[i]]?.on("stream", (data: any) => {
        console.log(123123123);
      });
    }
    socket.on("acceptcall", (data) => {
      // console.log(temp[data.id]);
      try {
        temp[data.id].signal(data.data);
        temp[data.id]?.on("stream", (data: any) => {
          console.log(123123123);
        });
      } catch (err) {
        console.log(err);
      }
    });
  };

  const answerPeer = () => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: screen,
    });

    peer.on("signal", (data) => {
      socket.emit("answer", { signal: data, id: socket.id });
    });
  };

  const handleShareScreen = () => {
    const peer1 = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: screen,
    });

    peer1.on("signal", (data: any) => {
      console.log(data);
      socket.emit("caller", {
        signalData: data,
        from: socket.id,
      });
    });

    socket.on("acceptcall", (data) => {
      console.log(data);
      peer1.signal(data);
      // signalConn(peer1, data, "caller");
    });

    peer1.on("stream", (stream) => {
      console.group("ReCall stream");
      console.log(stream);
      console.groupEnd();
      const box = document.querySelector("#test");
      const video = document.createElement("video");
      video.srcObject = stream;
      video.style.width = "300px";
      video.autoplay = true;

      box?.appendChild(video);
    });
  };

  const getSignal = (signal: any, from: any) => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: screen,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: from, id: socket.id });
    });
    peer.on("stream", (stream) => {
      const box = document.querySelector("#test");
      const video = document.createElement("video");
      video.srcObject = stream;
      video.style.width = "300px";
      video.autoplay = true;
      box?.appendChild(video);
    });
    peer.signal(signal);
  };

  const connectPeer = () => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: true,
      stream: screen,
    });
    peer.on("signal", (data) => {
      console.log("push");
      socket.emit("answerCall", { signal: data, to: call });
    });
    peer.on("stream", (stream) => {
      const box = document.querySelector("#test");
      const video = document.createElement("video");
      video.srcObject = stream;
      video.style.width = "300px";
      video.autoplay = true;
      box?.appendChild(video);
    });
    signalConn(peer, callSignal, "answer");
  };

  const signalConn = (peer: any, signal: any, txt: any) => {
    try {
      peer.signal(signal);
    } catch (err) {
      console.log("signal err ", err);
    }
  };

  const handleRightBar = useCallback(() => {
    setRightBar(!rightBar);
  }, []);

  const handlePermission = useCallback(() => {
    if (navigator.mediaDevices.getUserMedia!) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => console.log("pppp", stream))
        .catch((err: PermissionState) => {
          if (err.toString().split(":")[0] === "NotAllowedError") {
            alert("카메라 권한 허용 필요");
          }
        });
    }
  }, []);

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-[90px] bg-[#839aa7] border-t">
        <div className="w-full h-full px-4 py-2 text-white flex flex-row justify-between items-center">
          <div className="border px-2 py-1 rounded-xl">
            유저 : {user.nickname}
          </div>
          <div className="flex flex-row ">
            <div
              className="cursor-pointer ml-4 border px-2 py-1 rounded-xl"
              onClick={handlePermission}
            >
              Permission Test
            </div>
            <div
              className="cursor-pointer ml-4 border px-2 py-1 rounded-xl"
              onClick={offerPeer}
            >
              화면공유
            </div>
            {/* <div
              className="cursor-pointer ml-4 border px-2 py-1 rounded-xl"
              onClick={getSignal}
            >
              연결
            </div> */}
            <div
              className="cursor-pointer ml-4 border px-2 py-1 rounded-xl"
              onClick={handleRightBar}
            >
              Right Bar {rightBar ? "접기" : "열기"}
            </div>
          </div>
        </div>
      </div>
      <div className={`right-bar p-4 ${rightBar ? "right-bar-on" : ""}`}>
        <div className="text-white text-center py-0.5 rounded-xl bg-[#839ac7]">
          총원 : {roomData.roomCnt}
        </div>
        <ul>
          {roomData.userList.map((el: string, index: number) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
      <div id="test" className="absolute top-0 left-0">
        <video ref={screenShareRef} autoPlay src=""></video>
      </div>
    </>
  );
};

export default UI;

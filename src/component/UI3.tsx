import React, { useCallback, useEffect, useRef, useState } from "react";
import { RootState, store } from "../redux/store";
import { setRooms, setSocketID } from "../redux/reducers/gameInfo";
import { socketRoot } from "../socket/socket";
import { useSelector } from "react-redux";
import SimplePeer from "simple-peer";

interface roomDataProps {
  target: any;
  roomNum: string;
  roomCnt: number;
  userList: Array<string>;
}

const UI3 = () => {
  const screenShareRef = useRef<HTMLVideoElement>(null);
  const user = useSelector((state: RootState) => state.gameInfo);
  const [offerPeers, setOfferPeers] = useState<any>({});
  const [answerPeers, setAnswerPeers] = useState<any>({});
  const [id, setID] = useState<any>();
  const [screen, setScreen] = useState<MediaStream>();
  const [peers, setPeers] = useState<any>();
  const [leave, setLeave] = useState<string>();

  const socket = socketRoot;

  const [rightBar, setRightBar] = useState(false);
  const [roomData, setRoomData] = useState<roomDataProps>({
    target: "",
    roomNum: "",
    roomCnt: 0,
    userList: [""],
  });

  useEffect(() => {
    if (leave) {
      peers[leave!].destroy();
      delete peers[`${leave}`]
    }
  }, [leave]);

  useEffect(() => {
    navigator.mediaDevices
      .getDisplayMedia()
      // .getUserMedia({ video: true })
      .then((stream) => {
        setScreen(stream);
      })
      .catch((err) => console.log(err));

    socket.on("inPage", (data) => {
      setID(data);
    });
    socket.on("init", (data) => {
      setRoomData(data);
    });
    socket.on("disconnected", (data) => {
      setLeave(data.target)
      setRoomData(data);
    });
  }, []);

  useEffect(() => {
    if (id) {
      const peer = new SimplePeer();
      const tempPeers = { ...offerPeers };
      tempPeers[id] = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: screen ?? undefined,
      });

      tempPeers[id].on("signal", (data: any) => {
        socket.emit("caller", {
          to: id,
          signalData: data,
          from: socket.id,
        });
      });

      tempPeers[id].on("stream", (stream: any) => {
        const box = document.querySelector("#test");
        const video = document.createElement("video");
        video.id = id;
        video.className = "videoBox"
        video.srcObject = stream;
        video.autoplay = true;
        video.style.width = "300px";
        box?.appendChild(video);
      });

      tempPeers[id].on("close", (data: any) => {
        const video = document.querySelector(`#${id}`);
        video?.remove()
      })

      socket.on("acceptcall", (data: any) => {
        if (tempPeers[data.id]) {
          tempPeers[data.id].signal(data.signal);
        }
      });

      setOfferPeers(tempPeers);
      setPeers({ ...tempPeers });
    }
  }, [id]);

  useEffect(() => {
    if (screen) {
      socket.emit("rtcReady", "HI");
      socket.on("caller", (data) => {
        answerPeer(data.signal, data.from);
      });
    }
  }, [screen]);

  const answerPeer = (signal: any, from: any) => {
    const tempPeer = { ...answerPeers };

    tempPeer[from] = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: screen,
    });

    tempPeer[from].on("signal", (data: any) => {
      socket.emit("answerCall", { to: from, id: socket.id, signal: data });
    });

    tempPeer[from].on("stream", (stream: any) => {
      const box = document.querySelector("#test");
      const video = document.createElement("video");
      video.id = from;
      video.className = "videoBox"
      video.srcObject = stream;
      video.autoplay = true;
      video.style.width = "300px";
      box?.appendChild(video);
    });
    tempPeer[from].on("close", () => {
      console.log("closed22");
      const video = document.querySelector(`#${from}`);
      video?.remove();
    })

    tempPeer[from].signal(signal);
    setAnswerPeers(tempPeer);
    setPeers({ ...tempPeer });
  };

  const shareScreen = () => {
    navigator.mediaDevices.getDisplayMedia().then((el) => setScreen(el));
  };

  const handleRightBar = () => {
    setRightBar(!rightBar);
  };

  return (
    <>
      <footer className="absolute bottom-0 left-0 w-full h-[90px] bg-[#839aa7] border-t">
        <div className="w-full h-full px-4 py-2 text-white flex flex-row justify-between items-center">
          <div className="border px-2 py-1 rounded-xl">
            유저 : {user.nickname}
            <br />
            {socket.id}
          </div>
          <div className="flex flex-row ">
            {/* <div
              className="cursor-pointer ml-4 border px-2 py-1 rounded-xl"
              onClick={shareScreen}
            >
              화면공유
            </div> */}
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
      </footer>
      <aside className={`right-bar p-4 ${rightBar ? "right-bar-on" : ""}`}>
        <div className="text-white text-center py-0.5 rounded-xl bg-[#839ac7]">
          총원 : {roomData.roomCnt}
        </div>
        <ul>
          {roomData.userList.map((el: string, index: number) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </aside>
      <figure id="test" className="absolute top-0 left-0 flex flex-row justify-center">
        {/* <video ref={screenShareRef} autoPlay src=""></video> */}
      </figure>
    </>
  );
};

export default UI3;

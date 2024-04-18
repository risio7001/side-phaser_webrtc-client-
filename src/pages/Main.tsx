import React, { useEffect } from "react";
import UI from "../component/UI";
import Notions from "../component/Notions";
import EntModal from "../component/EntModal";
import Game from "../core/game";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import UI2 from "../component/UI2";
import UI3 from "../component/UI3";

const Main = () => {
  const user = useSelector((state: RootState) => state.gameInfo.nickname);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === "") {
      return navigate("/");
    }

    const game = Game;

    return () => {
      game.destroy(true);
    };
  }, []);
  return (
    <>
      <div className="">
        <UI3 />
      </div>
      <div id="modal-section" className="modal-section hidden">
        <Notions />
      </div>
      <div className="entModal-section">
        <EntModal />
      </div>
    </>
  );
};

export default Main;

import React, { ReactElement } from "react";
import "./styles/styles.css";
import "./styles/phaser-styles.css";

import StartUI from "./component/StartUI";

function App(): ReactElement {
  return (
    <>
      <div id="App" className="App">
        <div
          id="ui-section"
          className="ui-section hidden h-full w-full absolute"
        >
          <StartUI />
        </div>
      </div>
    </>
  );
}

export default App;

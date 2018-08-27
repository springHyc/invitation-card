import React from "react";
import MyImg from "./myImg";

import "./index.css";
import "./page2.css";

export default function Page2() {
  return (
    <div className="section">
      <div id="page">
        <div className="page_container">
          <MyImg
            top={20}
            left={20}
            deg={23}
            src={require("../images/page.png")}
          />
          <MyImg
            top={40}
            left={100}
            deg={340}
            src={require("../images/page2.png")}
          />
          <MyImg
            top={40}
            left={100}
            deg={30}
            src={require("../images/page2.png")}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./index.css";
import "./page2.css";

export default function Page2() {
  return (
    <div className="section">
      <div id="page">
        <video
          src="../../public/main.mp4"
          loop="loop"
          data-autoplay
          data-keepplaying
        />
      </div>
    </div>
  );
}

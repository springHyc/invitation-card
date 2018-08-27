import React from "react";
import "./myImg.css";

export default function MyImg(props) {
  const { top, left, deg, src } = props;
  return (
    <div
      className="img_container"
      style={{
        position: "relative",
        top,
        left,
        transform: `rotate(${deg}deg)`
      }}
    >
      <img src={src} className="img" />
    </div>
  );
}

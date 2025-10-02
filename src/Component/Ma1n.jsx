import React from "react";
import video from "../assets/video.mp4";
import "./Ma1n.css";

const Ma1n = () => {
  return (
    <div className="main">
      <video className="over" src={video} autoPlay loop muted />
    </div>
  );
};

export default Ma1n;

import React from "react";
import "./FullScreenVideoSection.css";

const FullScreenVideoSection = () => {
  const videoSrc = require("../../assets/videos/ygj.mp4")

  return (
    <div className="full-screen-video-section">
      <video className="video" src={videoSrc} autoPlay loop muted controls />
      <div className="video-overlay">
        {/* <h1>Discover Our Craftsmanship</h1>
        <p>Explore the beauty and elegance of our jewelry</p> */}
      </div>
    </div>
  );
};

export default FullScreenVideoSection;

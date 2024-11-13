import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Jewelry Showcase",
      src: "/path-to-your-video/video1.mp4", // Replace with your video path
    },
    {
      id: 2,
      title: "Behind the Scenes",
      src: "/path-to-your-video/video2.mp4", // Replace with your video path
    },
    {
      id: 3,
      title: "Jewelry Making Process",
      src: "/path-to-your-video/video3.mp4", // Replace with your video path
    },
  ];

  return (
    <div className="video-section">
      <h2 className="video-section-title">Our Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-container">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;

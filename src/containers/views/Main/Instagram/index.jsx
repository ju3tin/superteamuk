import React from 'react';
import { useParams } from 'react-router-dom';

const iframeContainerStyle = {
  left: 0,
  width: "25%",
  height: "800px",
  position: "relative",
  border: "0"
};

const iframeStyle = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  border: 'none'
};

function InstagramEmbed() {
  const { videoId } = useParams(); // Extract videoId from URL
  const url = `https://www.instagram.com/p/${videoId}/embed`;

  return (
    <div style={iframeContainerStyle}>
      <iframe
        src={url}
        style={iframeStyle}
        allowFullScreen
        scrolling="no"
        width="100%"
        height="100%"
        allow="encrypted-media;"
      ></iframe>
    </div>
  );
}

export default InstagramEmbed;
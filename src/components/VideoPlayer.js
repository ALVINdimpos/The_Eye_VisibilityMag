
// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  // Path to the video inside the public/assets folder
  const videoPath = process.env.PUBLIC_URL + '/assets/branding.mp4';

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Video Player</h2>
      <video
        width="600"
        controls
        src={videoPath}
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

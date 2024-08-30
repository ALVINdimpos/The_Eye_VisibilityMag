
// src/components/VideoPlayer.js
import React from 'react';
import branding from '../../assets/branding.mp4'; // Import the video file

const VideoPlayer = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Branding</h2>
      <video
        width="600"
        controls
        src={sampleVideo} // Use the imported video source
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;


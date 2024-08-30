
// src/components/VideoPlayer.js
import React from 'react';
import branding from '../../assets/branding.mp4'; // Import the video file

const VideoPlayer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div
        style={{
          width: '410px',
          height: '371px',
          border: 'none',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <video
          width="100%"
          height="100%"
          controls
          src={sampleVideo}
          style={{
            display: 'block',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;

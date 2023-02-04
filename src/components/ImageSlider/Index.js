import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt="slider" />
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageSlider;

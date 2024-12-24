


import React, { useState, useEffect } from "react";
import Bannerimg from "../assets/bnr_1.jpg";
import Bannerimg1 from "../assets/bnr_7.jpg";
import Bannerimg2 from "../assets/bnr_8.jpg";
import Bannerimg3 from "../assets/bnr_9.jpg";

const Gallery = () => {
  
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Bannerimg, Bannerimg1, Bannerimg2, Bannerimg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentImage]}
        alt={`Banner ${currentImage + 1}`}
        className="w-full h-full object-cover rounded-2xl transition-all duration-700 ease-in-out"
      />
      {/* Optional: Add navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() =>
            setCurrentImage((currentImage - 1 + images.length) % images.length)
          }
          className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-100"
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-100"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Gallery;




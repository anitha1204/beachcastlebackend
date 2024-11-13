import React, { useState, useEffect } from 'react';
import logo from '../assets/Asset 1 1.png';
import Bannerimg from "../assets/bnr_1.jpg";
import Bannerimg1 from "../assets/bnr_2.jpg";
import Bannerimg2 from "../assets/bnr_3.jpg";
import Bannerimg3 from "../assets/bnr_4.jpg";
import Bannerimg4 from "../assets/bnr_5.jpg";
import Bannerimg5 from "../assets/bnr_6.jpg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MainImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images to display
  const images = [
    Bannerimg, Bannerimg1, Bannerimg2, Bannerimg3, Bannerimg4, Bannerimg5,
    Bannerimg1, Bannerimg2, Bannerimg3, Bannerimg4, Bannerimg5, Bannerimg,
    Bannerimg2, Bannerimg3, Bannerimg4, Bannerimg5, Bannerimg, Bannerimg1,
    Bannerimg3, Bannerimg4, Bannerimg5, Bannerimg, Bannerimg1, Bannerimg2,
    Bannerimg4, Bannerimg5, Bannerimg, Bannerimg1, Bannerimg2, Bannerimg3,
    Bannerimg5, Bannerimg, Bannerimg1, Bannerimg2, Bannerimg3, Bannerimg4
  ];

  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // useEffect for automatic slide change every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentIndex]);

  // Get the current set of images to be displayed
  const currentImages = images.slice(
    currentIndex * imagesPerPage,
    currentIndex * imagesPerPage + imagesPerPage
  );

  return (
    <>
      {/* Header Section */}
      <section className="mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_180px_140px] gap-4 px-4 lg:mr-[200px]">
          {/* Left Section: Company Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Beach Castle Logo" className="h-20 md:h-[100px] w-auto" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center mt-10">
            <div className="relative flex-shrink-0 overflow-hidden">
              {/* Displaying the first image in the current set */}
              <img
                src={currentImages[0]} // Display only the first image in the current batch
                alt="Banner"
                className="object-cover rounded-2xl p-2 transition-transform transform duration-500 w-[1450px] h-[600px]" // Add a hover effect for animation
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-4 sm:mb-0 mt-10">
            <button onClick={handlePrev} className="flex items-center text-gray-600 hover:text-gray-800">
              <FaArrowLeft className="text-xl" />
              <p className="text-xl mb-2 p-2">Prev</p>
            </button>
            <button onClick={handleNext} className="flex items-center text-gray-600 hover:text-gray-800">
              <p className="text-xl mb-2 p-2">Next</p>
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainImage;

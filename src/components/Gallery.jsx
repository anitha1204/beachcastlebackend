// import React from 'react';
// import Slider from "react-slick";
// import imgpgallery from '../assets/Rectangle 5.png'; 
// import imgpgallery1 from '../assets/Rectangle 8.png'; 
// import imgpgallery2 from '../assets/Rectangle 15.png'; 
// import imgpgallery3 from '../assets/Rectangle 16.png'; 

// const images = [imgpgallery, imgpgallery1, imgpgallery2, imgpgallery3];

// const Gallery = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
// };
 
//   return (
//     <div className="relative w-full h-full overflow-hidden">
//     <Slider {...settings}>
//                     {images.map((image, index) => (
//                         <div key={index} className="w-full h-full">
//                             <img
//                                 src={image}
//                                 alt={`Slide ${index + 1}`}
//                                 className="
//                                     w-full
//                                     object-cover
//                                     h-[653px]                   
//                                     sm:h-[653px]                
//                                     md:h-[600px]                
//                                     lg:h-[700px]               
//                                     xl:h-[775px]                
//                                     2xl:h-[868px]               
//                                     3xl:h-[996px]              
//                                 "
//                             />
//                           </div>
//                        ))}
//                   </Slider>
//     </div>
//   );
// };

// export default Gallery;


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



// import React from "react";

// import imgpgallery from "../assets/Lilac2.jpg";
// import imgpgallery1 from "../assets/Rectangle 8.png";
// import imgpgallery2 from "../assets/Cane1.jpg";
// import imgpgallery3 from "../assets/Plum2.jpg";
// import imgpgallery4 from "../assets/Rectangle 18.png";
// import imgpgallery5 from "../assets/Jade1.jpg";

// const Gallery = () => {
//   // Images for the first row
//   const imagesRow1 = [
//     {
//       id: 1,
//       src: imgpgallery,
//       alt: "Garden pathway with palm trees",
//     },
//     {
//       id: 2,
//       src: imgpgallery1,
//       alt: "White building entrance",
//     },
//     {
//       id: 3,
//       src: imgpgallery2,
//       alt: "Modern kitchen interior",
//     },
//   ];

//   // Images for the second row
//   const imagesRow2 = [
//     {
//       id: 4,
//       src: imgpgallery3,
//       alt: "Garden view",
//     },
//     {
//       id: 5,
//       src: imgpgallery4,
//       alt: "Swimming pool",
//     },
//     {
//       id: 6,
//       src: imgpgallery5,
//       alt: "Another view of swimming pool",
//     },
//   ];

//   return (
//     <section>
//       <div className="w-full mt-16">
//         {/* Gallery Header */}
//         <div className="mb-8 max-w-10xl md:mx-4 px-4 lg:px-8 text-center">
//           <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Gallery</h1>
//           <p className="text-gray-600 text-base lg:text-lg">
//             Featuring top-notch facilities and amenities, including spacious
//             bedrooms, modern kitchens,
//             <br className="hidden md:block" />
//             private gardens, and state-of-the-art security.
//           </p>
//         </div>

//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-[400px_400px_400px_150px] gap-4  p-4 ">
//           {imagesRow1.map((image) => (
//             <div key={image.id} className="overflow-hidden group relative">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-[150px_400px_400px_400px] gap-4 lg:ml-[100px] ml-3">
//           {/* Button visible only on large screens */}
//           <div></div>

//           {/* Display images */}
//           {imagesRow2.map((image) => (
//             <div key={image.id} className="overflow-hidden group relative">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="lg:w-full w-[330px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

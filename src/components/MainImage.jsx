


// import React, { useState, useEffect } from 'react';
// import logo from '../assets/Asset 1 1.png';
// import Bannerimg from "../assets/bnr_1.jpg";
// import Bannerimg1 from "../assets/bnr_7.jpg";
// import Bannerimg2 from "../assets/bnr_8.jpg";
// import Bannerimg3 from "../assets/bnr_9.jpg";
// import Bannerimg4 from "../assets/bnr_2.jpg";
// import Bannerimg5 from "../assets/bnr_3.jpg";
// import Bannerimg6 from "../assets/bnr_4.jpg";
// import Bannerimg7 from "../assets/bnr_5.jpg";

// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { HiLocationMarker, HiPhone } from 'react-icons/hi';
// import { Link } from "react-router-dom";

// const MainImage = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Array of images to display
//   const image = [
//     { img: Bannerimg, heading: "An Iconic Venue on Chennai’s ECR", description: "Beach Castle becomes the quintessential venue for those seeking a blend of heritage charm and premium hospitality." },
//     { img: Bannerimg1, heading: "Where Luxury Meets Tradition", description: " Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa," },
//     { img: Bannerimg2, heading: "Where Luxury Meets Tradition", description: "Our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
//     { img: Bannerimg3, heading: "Where Luxury Meets Tradition", description: "Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa, our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
//     { img: Bannerimg4, heading: "Immerse yourself in the grandeur", description: " of our Chettinad-style villa. Known for its distinctive architectural beauty and rich history." },
//     { img: Bannerimg5, heading: "Discover serenity at Beach Castle.", description: " The perfect blend of nature’s tranquility and luxurious amenities." },
//     { img: Bannerimg6, heading: "Celebrate special moments with", description: " unparalleled elegance. From weddings to events, Beach Castle sets the stage for unforgettable experiences." },
//     { img: Bannerimg7, heading: "Relax, unwind, and rejuvenate", description: " in the luxurious surroundings of Beach Castle. A retreat like no other." },
//     // Repeat the images if needed to cycle
//     { img: Bannerimg1, heading: "Where Luxury Meets Tradition", description: " Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa," },
//     { img: Bannerimg2, heading: "Where Luxury Meets Tradition", description: "Our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
//     { img: Bannerimg3, heading: "Where Luxury Meets Tradition", description: "Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa, our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
//     { img: Bannerimg4, heading: "Immerse yourself in the grandeur", description: " of our Chettinad-style villa. Known for its distinctive architectural beauty and rich history." },
//     { img: Bannerimg5, heading: "Discover serenity at Beach Castle.", description: " The perfect blend of nature’s tranquility and luxurious amenities." },
//     { img: Bannerimg6, heading: "Celebrate special moments with", description: " unparalleled elegance. From weddings to events, Beach Castle sets the stage for unforgettable experiences." },
//     { img: Bannerimg7, heading: "Relax, unwind, and rejuvenate", description: " in the luxurious surroundings of Beach Castle. A retreat like no other." },
//     { img: Bannerimg, heading: "An Iconic Venue on Chennai’s ECR", description: "Beach Castle becomes the quintessential venue for those seeking a blend of heritage charm and premium hospitality." },
//   ];

//   const imagesPerPages = 1; // Only one image per page
//   const totalPage = image.length;

//   const handleNexts = () => {
//     setCurrentImage((prevIndex) => (prevIndex + 1) % totalPage);
//   };

//   const handlePrevs = () => {
//     setCurrentImage((prevIndex) => (prevIndex - 1 + totalPage) % totalPage);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNexts();
//     }, 5000); 

//     return () => clearInterval(intervalId);
//   }, [currentImage]);


//   const currentContent = image[currentImage];

//   return (
//     <>
//       {/* Header Section */}
//       <section className="mt-10">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_150px_300px] gap-4 px-4 lg:mr-[200px]">
//           {/* Left Section: Company Logo */}
//           <div className="flex justify-center md:justify-start">
//             <img src={logo} alt="Beach Castle Logo" className="h-20 md:h-[100px] w-auto" />
//           </div>
//           <div>

//           </div>
//           <div className="text-sm text-center md:text-right ">
//       {/* Location Section */}
//       <div className="flex flex-col  md:items-start space-y-4 mt-2 text-primary ">
        
//         {/* Address Link */}
//         <Link
//           to="https://www.google.com/maps/place/Beach+Castle+Wedding+Venue/@12.892396,80.250995,16z/data=!4m6!3m5!1s0x3a525b55c3d80d49:0xe8476d5b20d07fd3!8m2!3d12.8923963!4d80.250995!16s%2Fg%2F11ln9bcmn7?hl=en&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center md:justify-start space-x-2"
//         >
//           <HiLocationMarker className="text-primary" size={32} />
//           <p className="text-start">13, Sea Shell Avenue, Akkarai, ECR, Chennai - 600119</p>
//         </Link>
        
//         {/* Phone Link */}
//         <Link to="tel:+918841177234" className="flex  space-x-2">
//           <HiPhone className="text-primary" size={24} />
//           <p>(+91) 88388 92623</p>
//         </Link>
        
//       </div>
//     </div>
//         </div>
//       </section>

//       <section>
//         <div className="flex flex-col items-center mt-4">
//           <div className="relative flex-shrink-0 overflow-hidden">
//             {/* Displaying the current image */}
//             <img
//               src={currentContent.img} // Display the current image
//               alt="Banner"
//               className="object-cover rounded-2xl p-2 transition-transform transform duration-500 w-[1450px] h-[600px]" // Add a hover effect for animation
//             />

//             {/* Text Overlay */}
//             <div className="absolute object-cover rounded-xl inset-0 flex flex-col lg:w-[1435px] lg:h-[582px] w-[345px] h-[585px] ml-2 mt-2 items-center justify-center text-white bg-black bg-opacity-40 p-5 lg:mt-2 lg:ml-2">
//               {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white"> */}
//               <h2 className="lg:text-5xl text-2xl font-semibold text-center">{currentContent.heading}</h2>
//               <p className="text-2xl mt-6 text-center w-[750px]">{currentContent.description}</p>
//               <button className="bg-black text-white py-2 px-6 rounded-full  transition mt-4"
//                   onClick={() => {
//                     galleryRef.current?.scrollIntoView({
//                       behavior: "smooth",
//                     });
//                   }}>
//                   Enjoy Now
//                 </button>
//             </div>
//           </div>


//           {/* Navigation Buttons */}
//           <div className="flex justify-center space-x-4 mb-4 sm:mb-0 mt-10">
//             <button onClick={handlePrevs} className="flex items-center text-gray-600 hover:text-gray-800">
//               <FaArrowLeft className="text-xl" />
//               <p className="text-xl mb-2 p-2">Prev</p>
//             </button>
//             <button onClick={handleNexts} className="flex items-center text-gray-600 hover:text-gray-800">
//               <p className="text-xl mb-2 p-2">Next</p>
//               <FaArrowRight className="text-xl" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MainImage;






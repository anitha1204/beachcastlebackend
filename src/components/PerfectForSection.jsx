// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Bannerimg from "../assets/Rectangle 15.png";
// import Bannerimg1 from "../assets/Rectangle 16.png";
// import Bannerimg2 from "../assets/Rectangle 18.png";

// const PerfectForSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const items = [
//     { image: Bannerimg, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
//     { image: Bannerimg1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
//     { image: Bannerimg2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
//     { image: Bannerimg1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
//     { image: Bannerimg2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
//     { image: Bannerimg, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
//     { image: Bannerimg2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
//     { image: Bannerimg, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
//     { image: Bannerimg1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
//   ];

//   const imagesPerPage = 3;
//   const totalPages = Math.ceil(items.length / imagesPerPage);

//   // Handlers for next and previous navigation
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
//   };

//   // Set up the interval for automatic slide change
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNext();
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [currentIndex]); // Add currentIndex as a dependency to reset the interval when it changes

//   const currentItems = items.slice(
//     currentIndex * imagesPerPage,
//     currentIndex * imagesPerPage + imagesPerPage
//   );

//   return (
//     <>
//      <section className="lg:mt-20 px-4 lg:px-0 mt-10">
//   <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_1fr] gap-4 items-center">
//     <div className="md:ml-24 text-center md:text-left">
//       <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
//         This Place is Perfect for Enjoyment
//       </h1>
//     </div>

//     <div className="text-lg space-y-4 text-center md:text-left">
//       <p className="text-primary">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna enim amet risus facilisis mauris lectus.
//         Euismod sed ultrices lobortis tristique pulvinar. Magnis euismod in eget risus.
//       </p>
//       <div>
//         <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
//           Enjoy Now
//         </button>
//       </div>
//     </div>
//   </div>
// </section>


//       <div className="flex flex-col items-center lg:mt-8">
//         <div className="flex flex-col sm:flex-row items-center mt-10 lg:ml-40">
//           <div className='flex justify-center space-x-4 mb-4 sm:mb-0 sm:mr-4 lg:mr-10'>
//             <button 
//               onClick={handlePrev} 
//               className="flex items-center text-gray-600 hover:text-gray-800"
//             >
//               <FaArrowLeft className="text-xl" />
//               <p className='text-xl mb-2 p-2'>Prev</p>
//             </button>
//             <button 
//               onClick={handleNext} 
//               className="flex items-center text-gray-600 hover:text-gray-800"
//             >
//               <p className='text-xl mb-2 p-2'>Next</p>
//               <FaArrowRight className="text-xl" />
//             </button>
//           </div>

//           <div className="flex space-x-4 overflow-x-auto">
//             {currentItems.map((item, index) => (
//               <div key={index} className="text-center">
//                 <img 
//                   src={item.image}
//                   alt={`Slide ${index}`}
//                   className="object-cover rounded-[30px] w-[280px] sm:w-[200px] md:w-[280px] h-[280px] md:h-[330px] lg:w-[380px] lg:h-[350px] p-2"
//                 />
//                 <h3 className="text-2xl font-bold text-gray-700 mt-4 text-start">{item.heading}</h3>
//                 <p className="text-lg text-gray-500 text-start">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PerfectForSection;



import React from "react";

const PerfectForSection = () => {
  return (
    <section>
      <div className="mt-14 px-4">
        <div className="bg-primary py-[85px] relative overflow-hidden h-[376px] text-white px-[100px] rounded-[30px]">
          {/* Heading with 2xl text */}
          <h2 className="text-5xl font-bold mb-4">
            Your Premier Destination for Unforgettable Celebrations
          </h2>
          {/* Paragraph with proper spacing and color */}
          <p className="text-lg leading-relaxed text-gray-200 py-6">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            commodi nisi quibusdam repudiandae illo alias, saepe aut
            reprehenderit? Nihil praesentium, necessitatibus quasi qui error
            repudiandae. Eum id nesciunt excepturi impedit Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Maxime
            commodi nisi quibusdam repudiandae illo alias, saepe aut
            reprehenderit? Nihil praesentium, necessitatibus quasi qui error
            repudiandae. Eum id nesciunt excepturi impedit."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerfectForSection;


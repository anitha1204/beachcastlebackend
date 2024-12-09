


import React from 'react';

const ContactSection = () => {
  return (
    <div className="lg:mt-10">
      {/* Contact Us Section */}
      <footer className="text-primary py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 font-neue">
          {/* Left Section */}
          <div>
            <h2 className="text-lg lg:text-3xl mb-4 text-primary">Contact Us</h2>
            <p className="text-sm md:text-md lg:text-lg mb-8 mt-3 text-gray-500">
              Ready to start planning your unforgettable event? Contact us today to learn more about Beach Castle and to book your date. Our dedicated team is here to assist you in creating the perfect celebration.
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-4 lg:ml-28 font-bold lg:text-end">
            <p className="font-bold">
              <a href="https://beachcastle.co.in/" className="text-primary">
                www.beachcastle.co.in/
              </a>
            </p>
            <p className="font-bold">13, Sea Shell Avenue, Akkarai, ECR, Chennai - 600119</p>
            <p className="font-bold">
              (+91) 88388 92623 | theglasshouseecr@gmail.com
            </p>
          </div>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-sm text-primary font-neue">
        <p className="space-x-6 lg:ml-[130px]">Copyright © 2024 BeachCastle. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactSection;




// import React, { useState, useEffect } from "react";
// import swimmingPoolImg from "../assets/Rectangle 74.png";
// import diningSpaceImg from "../assets/Rectangle 15.png";
// import parkingImg from "../assets/Rectangle 18.png";
// import bedroomImg from "../assets/policiespageimg.png";
// import lawnImg from "../assets/Lawn3.jpg";
// import airConditionedImg from "../assets/Image.png";
// import kitchenImg from "../assets/Rectangle 18.png";
// import theatreImg from "../assets/Courtyard.jpg";

// const ContactSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const amenities = [
//     {
//       name: "Swimming Pool",
//       img: swimmingPoolImg,
//       description:
//         "Enjoy a luxurious swimming experience in our state-of-the-art swimming pool.",
//     },
//     {
//       name: "Dining space",
//       img: diningSpaceImg,
//       description:
//         "Our dining space is perfect for gatherings, offering a comfortable ambiance.",
//     },
//     {
//       name: "On Site Parking",
//       img: parkingImg,
//       description:
//         "Convenient on-site parking for your vehicles, ensuring safety and ease.",
//     },
//     {
//       name: "Luxury Bedroom",
//       img: bedroomImg,
//       description:
//         "Relax in our well-furnished luxury bedrooms with top-notch amenities.",
//     },
//     {
//       name: "Lawn Space",
//       img: lawnImg,
//       description:
//         "Spacious lawns for outdoor events and relaxation in a serene environment.",
//     },
//     {
//       name: "Air-conditioned",
//       img: airConditionedImg,
//       description:
//         "Fully air-conditioned spaces for a comfortable and pleasant experience.",
//     },
//     {
//       name: "Modular Kitchen",
//       img: kitchenImg,
//       description:
//         "Cook or host events in our modern and fully equipped modular kitchen.",
//     },
//     {
//       name: "Private Theatre",
//       img: theatreImg,
//       description:
//         "Enjoy a cinematic experience in our private theatre with premium facilities.",
//     },
//   ];

//   const activeAmenity = amenities[activeIndex];

//   // Automatic slide change every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % amenities.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [amenities.length]);

//   const handleItemClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       {/* Navigation Buttons */}
//       <nav>
//         <div className="flex justify-center items-center space-x-6 py-12 text-lg">
//           {amenities.map((amenity, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 rounded-lg ${
//                 activeIndex === index
//                   ? "bg-gray-700 text-white"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//               onClick={() => handleItemClick(index)}
//             >
//               {amenity.name}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Image and Text Section */}
//       <div className="grid grid-cols-1 md:grid-cols-[40px_870px_460px] gap-5 mt-4 mx-4 md:mx-4">
//         {/* Left Spacer */}
//         <div></div>

//         {/* Image Section */}
//         <div className="flex items-center justify-center">
//           <img
//             src={activeAmenity.img}
//             alt={activeAmenity.name}
//             className="w-full lg:w-[1234.6px] lg:h-[430px] h-80 rounded-3xl object-cover"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="bg-gray-100 p-10 flex flex-col justify-center rounded-lg">
//           <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
//             {activeAmenity.name}
//           </h3>
//           <p className="text-md mb-6 mt-6 mx-2 text-center md:text-left">
//             {activeAmenity.description}
//           </p>
//           <button className="rounded-full lg:h-12 lg:w-full h-10 w-[150px] flex items-center justify-center bg-primary text-gray-50 hover:bg-gray-50 hover:text-primary mx-auto md:mx-0">
//             Enquiry Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactSection;


// import React, { useState, useEffect } from "react";
// import swimmingPoolImg from "../assets/Rectangle 74.png";
// import diningSpaceImg from "../assets/Rectangle 15.png";
// import parkingImg from "../assets/Rectangle 18.png";
// import bedroomImg from "../assets/policiespageimg.png";
// import lawnImg from "../assets/Lawn3.jpg";
// import airConditionedImg from "../assets/Image.png";
// import kitchenImg from "../assets/Rectangle 18.png";
// import theatreImg from "../assets/Courtyard.jpg";

// const ContactSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const amenities = [
//     {
//       name: "Swimming Pool",
//       img: swimmingPoolImg,
//       description:
//         "Enjoy a luxurious swimming experience in our state-of-the-art swimming pool.",
//     },
//     {
//       name: "Dining space",
//       img: diningSpaceImg,
//       description:
//         "Our dining space is perfect for gatherings, offering a comfortable ambiance.",
//     },
//     {
//       name: "On Site Parking",
//       img: parkingImg,
//       description:
//         "Convenient on-site parking for your vehicles, ensuring safety and ease.",
//     },
//     {
//       name: "Luxury Bedroom",
//       img: bedroomImg,
//       description:
//         "Relax in our well-furnished luxury bedrooms with top-notch amenities.",
//     },
//     {
//       name: "Lawn Space",
//       img: lawnImg,
//       description:
//         "Spacious lawns for outdoor events and relaxation in a serene environment.",
//     },
//     {
//       name: "Air-conditioned",
//       img: airConditionedImg,
//       description:
//         "Fully air-conditioned spaces for a comfortable and pleasant experience.",
//     },
//     {
//       name: "Modular Kitchen",
//       img: kitchenImg,
//       description:
//         "Cook or host events in our modern and fully equipped modular kitchen.",
//     },
//     {
//       name: "Private Theatre",
//       img: theatreImg,
//       description:
//         "Enjoy a cinematic experience in our private theatre with premium facilities.",
//     },
//   ];

//   const activeAmenity = amenities[activeIndex];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % amenities.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [amenities.length]);

//   const handleItemClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="">
//       {/* Navigation Buttons */}
//       <nav>
//         <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-4 md:space-x-6 py-6 text-sm sm:text-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-2">
//           {amenities.map((amenity, index) => (
//             <button
//               key={index}
//               className={`px-3 py-2 rounded-lg text-center ${
//                 activeIndex === index
//                   ? "bg-gray-700 text-white"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//               onClick={() => handleItemClick(index)}
//             >
//               {amenity.name}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Image and Text Section */}
//       <div className="grid grid-cols-1 md:grid-cols-[40px_870px_460px] gap-5 mt-4 mx-4 md:mx-4">
//         {/* Left Spacer */}
//         <div></div>

//         {/* Image Section */}
//         <div className="flex items-center justify-center">
//           <img
//             src={activeAmenity.img}
//             alt={activeAmenity.name}
//             className="w-full lg:w-[1234.6px] lg:h-[430px] rounded-3xl object-cover"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="bg-gray-100 p-6 sm:p-10 flex flex-col justify-center rounded-lg">
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left">
//             {activeAmenity.name}
//           </h3>
//           <p className="text-sm sm:text-md mb-4 sm:mb-6 mt-4 sm:mt-6 mx-2 text-center md:text-left">
//             {activeAmenity.description}
//           </p>
//           <button className="rounded-full lg:h-12 lg:w-full h-10 w-[150px] flex items-center justify-center bg-primary text-gray-50 hover:bg-gray-50 hover:text-primary mx-auto md:mx-0">
//             Enquiry Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;


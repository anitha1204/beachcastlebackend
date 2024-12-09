// import React from "react";
// import { FaWifi, FaTv, FaLock, FaShieldAlt } from "react-icons/fa";


// const AmenitiesFacilities = () => {
//   return (
//     <div className="bg-gray-800 text-white py-12">
//       {/* Our Amenities Section */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-semibold mb-4">Our Amenities</h2>
//         <p className="text-gray-300 mb-8">
//           Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens, private gardens, and state-of-the-art security.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
//           <div className="flex flex-col items-center">
//             <FaWifi className="text-4xl mb-2" />
//             <span>Free Wifi</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaTv className="text-4xl mb-2" />
//             <span>Flat Screen TV</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <TbIroningSteam className="text-4xl mb-2" />
//             <span>Ironing Facilities</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaLock className="text-4xl mb-2" />
//             <span>Locker Facility</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaShieldAlt className="text-4xl mb-2" />
//             <span>Security Systems</span>
//           </div>
//         </div>
//       </div>

//       {/* Our Facilities Section */}
//       <div className="text-center">
//         <h2 className="text-4xl font-semibold mb-4">Our Facilities</h2>
//         <p className="text-gray-300 mb-8">
//           Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens, private gardens, and state-of-the-art security.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           <div className="flex flex-col items-center">
//             <img
//               src="https://via.placeholder.com/300"
//               alt="Swimming Pool"
//               className="rounded-lg mb-2"
//             />
//             <span>Swimming Pool</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="https://via.placeholder.com/300"
//               alt="Traditional Style Lawn"
//               className="rounded-lg mb-2"
//             />
//             <span>Traditional Style Lawn</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="https://via.placeholder.com/300"
//               alt="Service Area"
//               className="rounded-lg mb-2"
//             />
//             <span>Service Area</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="https://via.placeholder.com/300"
//               alt="Covered Lawn"
//               className="rounded-lg mb-2"
//             />
//             <span>Covered Lawn</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AmenitiesFacilities;


import React from "react";
import { FaWifi, FaTv, FaLock, FaShieldAlt } from "react-icons/fa";
import { TbIroningSteam } from "react-icons/tb";
import img from '../assets/Rectangle 5.png';
import img1 from '../assets/Lawn1.jpg';
import img2 from '../assets/Service area.jpg';
import img3 from '../assets/Rectangle 8.png';


const AmenitiesFacilities = () => {
  return (
    <div className="bg-primary text-white py-12 mx-4 md:mx-4 rounded-3xl mt-10">
      {/* Our Amenities Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">Our Amenities</h2>
        <p className="text-gray-300 mb-8">
          Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens, private gardens, and state-of-the-art security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <FaWifi className="text-4xl mb-2" />
            <span>Free Wifi</span>
          </div>
          <div className="flex flex-col items-center">
            <FaTv className="text-4xl mb-2" />
            <span>Flat Screen TV</span>
          </div>
          <div className="flex flex-col items-center">
            <TbIroningSteam className="text-4xl mb-2" />
            <span>Ironing Facilities</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLock className="text-4xl mb-2" />
            <span>Locker Facility</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl mb-2" />
            <span>Security Systems</span>
          </div>
        </div>
      </div>

      {/* Our Facilities Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">Our Facilities</h2>
        <p className="text-gray-300 mb-8">
          Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens, private gardens, and state-of-the-art security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={img}
              alt="Swimming Pool"
              className="rounded-lg mb-2 "
            />
            <span>Swimming Pool</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img1}
              alt="Traditional Style Lawn"
              className="rounded-lg mb-2 lg:h-[265px]"
            />
            <span>Traditional Style Lawn</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img2}
              alt="Service Area"
              className="rounded-lg mb-2 lg:h-[265px]"
            />
            <span>Service Area</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img3}
              alt="Covered Lawn"
              className="rounded-lg mb-2 lg:h-[265px]"
            />
            <span>Covered Lawn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesFacilities;

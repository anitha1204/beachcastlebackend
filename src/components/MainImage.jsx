import React from 'react';


const MainImage = () => {
  return (
    <div className="flex justify-center p-4">
      
    </div>
  );
};

export default MainImage;



// import React, { useState } from 'react';
// import logo from '../assets/Asset 1 1.png';
// import MainImage from './MainImage';
// import AboutSection from './AboutSection';
// import  VillaSection from './VillaSection';
// import  OurFacilities from './OurFacilities';
// import  PerfectForSection from './PerfectForSection';
// import  TestimonialsCarousel from './TestimonialsCarousel';
// import ContactSection from './ContactSection';
// import { VscArrowCircleRight, VscArrowCircleDown } from 'react-icons/vsc';

// const Header = () => {

//   const [activeLink, setActiveLink] = useState(null);

//   // Handler for setting the active link
//   const handleClick = (link) => {
//     setActiveLink(link === activeLink ? null : link); // Toggle icon
//   };

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };
//   return (
//     <>
//       {/* Header Section */}
//       <section className="mt-10">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_180px_140px] gap-4">
//         {/* Left Section: Company Logo */}
//          <div className="flex justify-center my-4">
//<img src={logo} alt="Beach Castle Logo" className="h-16 md:h-20 w-auto" /> {/* Scalable logo */}
//</div>


//         {/* Middle Section: Quick Chat */}
//         <div className="text-lg flex items-center space-x-2">
//           <a
//             href="#quick"
//             className="text-gray-400 inline-flex items-center group" 
//             onClick={() => handleClick('quick')}
//           >
//             Quick Chat{' '}
//             {activeLink === 'quick' ? (
//               <VscArrowCircleDown className="ml-1 group-hover:hidden" /> 
//             ) : (
//               <VscArrowCircleRight className="ml-1 group-hover:hidden" /> 
//             )}
//             <VscArrowCircleDown className="ml-1 hidden group-hover:inline" /> 
//           </a>
//         </div>

//         {/* Right Section: Navigation Links */}
//         <div className="text-lg space-y-2">
//           <a
//             href="#about"
//             className="text-gray-400 inline-flex items-center group" 
//             onClick={() => handleClick('about')}
//           >
//             About Us{' '}
//             {activeLink === 'about' ? (
//               <VscArrowCircleDown className="ml-1 group-hover:hidden" />
//             ) : (
//               <VscArrowCircleRight className="ml-1 group-hover:hidden" />
//             )}
//             <VscArrowCircleDown className="ml-1 hidden group-hover:inline" />
//           </a>
//           <a
//             href="#contact"
//             className="text-gray-400 inline-flex items-center group"
//             onClick={() => handleClick('contact')}
//           >
//             Contact Us{' '}
//             {activeLink === 'contact' ? (
//               <VscArrowCircleDown className="ml-1 group-hover:hidden" />
//             ) : (
//               <VscArrowCircleRight className="ml-1 group-hover:hidden" />
//             )}
//             <VscArrowCircleDown className="ml-1 hidden group-hover:inline" />
//           </a>
//           <a
//             href="#gallery"
//             className="text-gray-400 inline-flex items-center group"
//             onClick={() => handleClick('gallery')}
//           >
//             Gallery{' '}
//             {activeLink === 'gallery' ? (
//               <VscArrowCircleDown className="ml-1 group-hover:hidden" />
//             ) : (
//               <VscArrowCircleRight className="ml-1 group-hover:hidden" />
//             )}
//             <VscArrowCircleDown className="ml-1 hidden group-hover:inline" />
//           </a>
//         </div>
//       </div>
//     </section>

//       {/* Main Image Section */}
//       <MainImage />
//       <AboutSection/>
//      <VillaSection/>
//      <OurFacilities/>
//      <PerfectForSection/>
//      <TestimonialsCarousel/>

//      <section>
//      <div className="flex flex-col items-center py-10 bg-white">
//       <h2 className="text-3xl font-serif text-primary mb-8">Enquiry Now</h2>
//       <form className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-3/4" onSubmit={handleSubmit}>
//         {/* Name Input */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//           required
//         />
        
//         {/* Email Input */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//           required
//         />
        
//         {/* Mobile Number Input */}
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//           required
//         />
        
//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-primary text-white py-3 px-20 rounded-lg hover:bg-gray-600 transition w-full lg:w-auto">
//           Submit
//         </button>
//       </form>
//     </div>
//      </section>

//      <ContactSection/>
//     </>
//   );
// };

// export default Header;



// import React from 'react';
// import LuxuryBedroom from '../assets/double-bed.png';
// import SwimmingPool from '../assets/Vector.png';
// import Airconditioned from '../assets/air-conditioner.png';
// import LawnSpace from '../assets/grass.png';
// import ModularKitchen from '../assets/kitchen.png';
// import DiningSpace from '../assets/restaurant.png';
// import PrivateTheatre from '../assets/movie.png';
// import OnsiteParking from '../assets/parking.png';

// import FreeWifi from '../assets/Vector (1).png';
// import FlatScreenTvs from '../assets/Vector (2).png';
// import Securitysystems from '../assets/cctv-camera.png';
// import IriningFacilities from '../assets/washing.png';
// import Lockerfacility from '../assets/locker.png';

// const AboutSection = () => {
//   return (
//     <div className="px-4 md:px-6 lg:px-12 py-8 md:py-12 bg-gray-100">
//       {/* Heading Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-lg sm:text-2xl md:text-3xl font-serif text-primary mb-6">
//           Your Premier Destination for Unforgettable Celebrations
//         </h1>
//         <h2 className="text-lg sm:text-2xl md:text-3xl font-serif text-primary">
//           About Beach Castle
//         </h2>
//       </div>

//       {/* Description Section */}
//       <div className="text-center max-w-6xl mx-auto">
//         <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-12 font-Montserrat">
//           "At Beach Castle, we turn your special occasions into unforgettable experiences. Located on the picturesque East Coast Road (ECR) in Chennai, our opulent venue blends the classic charm of Chettinad-style architecture with contemporary amenities. Spanning a generous 45,000 sq. ft, the property features a vast open lawn and a beautifully appointed 7BHK villa. With a floating capacity of 500 guests and seating for 300, it's an ideal setting for weddings, corporate events, gatherings, and more. Our commitment to outstanding service and elegant surroundings ensures an unparalleled experience for you and your guests."
//         </p>
//       </div>

//       {/* Amenities Section */}
//       <div className="bg-primary text-white py-8 md:py-12 rounded-[50px] w-[95%] mx-auto mb-8">
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 px-4 md:px-6 text-center">
//           {/* Each item contains an icon and a label */}
//           <div className="flex flex-col items-center">
//             <img src={LuxuryBedroom} alt="Luxury Bedroom" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Luxury Bedroom</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={SwimmingPool} alt="Swimming Pool" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Swimming Pool</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={Airconditioned} alt="Air Conditioned" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Air-conditioned</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={LawnSpace} alt="Lawn Space" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Lawn Space</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={ModularKitchen} alt="Modular Kitchen" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Modular Kitchen</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={DiningSpace} alt="Dining Space" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Dining Space</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={PrivateTheatre} alt="Private Theatre" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">Private Theatre</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={OnsiteParking} alt="Onsite Parking" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl font-serif">On site Parking</p>
//           </div>
//         </div>
//       </div>

//       {/* Additional Amenities Section */}
//       <div className="px-4 md:px-6 lg:px-12 py-8 bg-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-lg sm:text-2xl md:text-3xl font-serif text-primary">
//             Our Amenities
//           </h2>
//         </div>

//         <div className="text-center max-w-4xl mx-auto mb-8">
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//             Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens, private <br />gardens, and state-of-the-art security.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 text-center font-serif gap-6">
//           {/* Each item contains an icon and a label */}
//           <div className="flex flex-col items-center">
//             <img src={FreeWifi} alt="Free Wifi" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl text-primary">Free Wifi</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={FlatScreenTvs} alt="Flat Screen Tvs" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl text-primary">Flat Screen Tvs</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={Securitysystems} alt="Security Systems" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl text-primary">Security Systems</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={IriningFacilities} alt="Ironing Facilities" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl text-primary">Ironing Facilities</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img src={Lockerfacility} alt="Locker Facility" className="h-12 w-12 mb-2" />
//             <p className="text-sm md:text-xl text-primary">Locker Facility</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;



// import React from 'react';
// import img from "../assets/Rectangle 5.png"; // Replace with actual image paths
// import img1 from "../assets/Rectangle 6.png";
// import img2 from "../assets/Rectangle 7.png";
// import img3 from "../assets/Rectangle 8.png";

// const OurFacilities = () => {
//     const levels = [
//         {
//             image: img, 
//             title: "SWIMMINC POOL",
           
//         },
//         {
//             image: img1,
//             title: "LAWN SPACE",
           
//         },
//         {
//             image: img2,
//             title: "SERVICE AREA",
           
//         },
//         {
//             image: img3,
//             title: "COVERED LAWN",
            
//         }
//     ];
    
//     return (
//         <div className="px-4 py-10 md:px-16 lg:px-24 ">
//             {/* Eligibility Section */}
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif text-primary mb-4 md:mb-[-10] text-center">Our Facilities</h2>

//             {/* Eligibility Levels Display */}
//             <div className="flex justify-center items-center">
//                 <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-10 mt-6">
//                     {levels.map((level, index) => (
//                         <div key={index} className="text-center">
//                             {/* Center the image horizontally */}
//                             <img 
//                                 src={level.image} 
//                                 alt={level.title} 
//                                 className="w-[270px] h-80 object-cover rounded-xl mx-auto" 
//                             />
//                             {/* Title and Description */}
//                             <div className="p-4">
//                                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg font-butler  text-primary mb-2 md:mb-4">{level.title}</h2>
                                
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurFacilities;
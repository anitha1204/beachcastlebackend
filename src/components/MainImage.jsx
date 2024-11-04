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





// import React, { useState, useEffect, useRef } from 'react';
// import logo from '../assets/Asset 1 1.png';
// import OurFacilities from './OurFacilities';
// import TestimonialsCarousel from './TestimonialsCarousel';
// import ContactSection from './ContactSection';
// import { VscArrowCircleRight, VscArrowCircleDown } from 'react-icons/vsc';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Bannerimg from "../assets/Banglow Beach Castle.jpg";
// import Bannerimg1 from "../assets/Plum2.jpg";
// import Bannerimg2 from "../assets/Hall1.jpg";
// import PoliciesPage from './PoliciesPage';


// import imgpgallery from '../assets/Service area.jpg';
// import imgpgallery1 from '../assets/Pool.jpg';
// import imgpgallery2 from '../assets/Rectangle 64.png';
// import imgpgallery3 from '../assets/Entrance.jpg';
// import imgpgallery4 from '../assets/Black2.jpg';
// import imgpgallery5 from '../assets/Plum3.jpg';


// import Imag from '../assets/Pool.jpg';
// import Imag1 from '../assets/Image.png';

// import Bannerimgs from "../assets/Rectangle 15.png";
// import Bannerimgs1 from "../assets/Rectangle 16.png";
// import Bannerimgs2 from "../assets/Rectangle 18.png";


// import img from '../assets/Rectangle 5.png';
// import img1 from '../assets/Lawn2.jpg';
// import img2 from '../assets/Service area.jpg';
// import img3 from '../assets/Rectangle 8.png';

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const Header = () => {

//   const items = [
//     { image: Bannerimgs, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
//     { image: Bannerimgs1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
//     { image: Bannerimgs2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
//     { image: Bannerimgs1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
//     { image: Bannerimgs2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
//     { image: Bannerimgs, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
//     { image: Bannerimgs2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
//     { image: Bannerimgs, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
//     { image: Bannerimgs1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
//   ];

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

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const galleryRef = useRef(null);
//   const images = [Bannerimg, Bannerimg1, Bannerimg2, Bannerimg1, Bannerimg2, Bannerimg, Bannerimg2, Bannerimg, Bannerimg1];
//   const imagesPerPage = 3;
//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
//   };

//   // useEffect for automatic slide change
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNext();
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [currentIndex]);

//   const currentImages = images.slice(
//     currentIndex * imagesPerPage,
//     currentIndex * imagesPerPage + imagesPerPage
//   );


//   useEffect(() => {
//     const intervalId = setInterval(handleNext, 5000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex, totalPages]);

//   const currentItems = items.slice(
//     currentIndex * imagesPerPage,
//     currentIndex * imagesPerPage + imagesPerPage
//   );


//   const [activeLink, setActiveLink] = useState(null);

//   const handleClick = (link) => {
//     setActiveLink(link === activeLink ? null : link); // Toggle icon
//   };

//   const [formData, setFormData] = useState({
//     userName: '',
//     email: '',
//     mobile: '',
//     enquiry: '',
//   });

//   const navigate = useNavigate();
//   const contactRef = useRef();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     // Basic validation
//     if (!formData.userName || !formData.email || !formData.mobile || !formData.enquiry) {
//       return false;
//     }
//     // Additional validation checks can be added here
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log('Submitting form data:', formData);

//     if (!validateForm()) {
//       console.error('Form validation failed');
//       return; // Prevent submission if validation fails
//     }

//     try {
//       const response = await axios.post('https://beachcastle.onrender.com/api/postdata', formData);
//       console.log('Form submitted successfully:', response.data);

//       // Optionally reset the form
//       setFormData({
//         userName: '',
//         email: '',
//         mobile: '',
//         enquiry: '',
//       });

//       navigate("/thankyou");

//     } catch (error) {
//       console.error('Error submitting form:', error.response ? error.response.data : error.message);
//       console.error('Full error object:', error);
//     }
//   };

  
//   const [showMoreImages, setShowMoreImages] = useState(false);

//   const handleShowMoreImages = () => {
//     setShowMoreImages((prev) => !prev);
//   };



//   return (
//     <>
//       {/* Header Section */}
//       <section className="mt-10">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_180px_140px] gap-4 px-4">
//           {/* Left Section: Company Logo */}
//           <div className="flex justify-center md:justify-start">
//             <img src={logo} alt="Beach Castle Logo" className="h-20 md:h-[100px] w-auto" />
//           </div>

//           {/* Middle Section: Quick Chat */}
//           {/* <div className="text-lg flex items-center justify-center md:justify-start space-x-2">
//             <a
//               href="#quick"
//               className="text-gray-400 inline-flex items-center group"
//               onClick={() => handleClick('quick')}
//             >
//               Quick Chat{' '}
//               {activeLink === 'quick' ? (
//                 <VscArrowCircleDown className="ml-1 group-hover:hidden text-3xl" />
//               ) : (
//                 <VscArrowCircleRight className="ml-1 group-hover:hidden text-3xl" />
//               )}
//               <VscArrowCircleDown className="ml-1 hidden group-hover:inline text-3xl" />
//             </a>
//           </div> */}

//           {/* Right Section: Navigation Links */}
//           {/* <div className="text-lg space-y-2 flex flex-col items-center md:items-start">
//             {['about', 'contact', 'gallery'].map((section) => (
//               <a
//                 key={section}
//                 href={`#${section}`}
//                 className="text-gray-400 inline-flex items-center group"
//                 onClick={() => handleClick(section)}
//               >
//                 {section.charAt(0).toUpperCase() + section.slice(1)} Us{' '}
//                 {activeLink === section ? (
//                   <VscArrowCircleDown className="ml-1 group-hover:hidden text-3xl" />
//                 ) : (
//                   <VscArrowCircleRight className="ml-1 group-hover:hidden text-3xl" />
//                 )}
//                 <VscArrowCircleDown className="ml-1 hidden group-hover:inline text-3xl" />
//               </a>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       {/* Header Section */}
//       <section className="lg:mt-20 mt-10">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-[630px_500px_140px] gap-4 px-4 ">
//           {/* Left Section: Main Title */}
//           <div className='text-center lg:text-start '>
//             <h1 className='text-xl sm:text-2xl md:text-6xl text-primary mb-6'>A Comfortable Resort Experience</h1>
//           </div>

//           {/* Middle Section: Description */}
//           <div className="text-lg flex text-center lg:text-start space-x-2">
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur. Magna enim amet risus facilisis mauris lectus.
//               Euismod sed ultrices lobortis tristique pulvinar. Magnis euismod in eget risus.
//             </p>
//           </div>

//           {/* Right Section: Button */}
//           <div className="text-lg flex items-center justify-center md:justify-start">
//             <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
//               onClick={() => {
//                 galleryRef.current?.scrollIntoView({
//                   behavior: "smooth",
//                 });
//               }}>
//               Enjoy Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Header Section */}
//       <section className="lg:mt-8">
//         <div className="flex flex-col items-center">
//           <div className="flex flex-col sm:flex-row items-center mt-10">
//             <div className="flex space-x-4 overflow-x-auto">
//               {currentImages.map((image, index) => (
//                 <div key={index} className="relative flex-shrink-0">
//                   <img
//                     src={image}
//                     alt={`img ${index}`}
//                     className={`object-cover rounded-2xl p-2 
//                 ${index === 0 ? 'w-[320px] sm:w-[250px] md:w-[300px] h-[330px] md:h-[400px] lg:w-[650px] lg:h-[400px] lg:ml-20'
//                         : index === 1 ? 'w-[250px] sm:w-[200px] md:w-[280px] h-[200px] md:h-[300px] lg:w-[300px] lg:h-[260px]'
//                           : 'w-[300px] sm:w-[180px] md:w-[250px] h-[250px] md:h-[350px] lg:w-[430px] lg:h-[330px]'}`}
//                   />
//                   {/* Conditionally render heading and paragraph only for the second image */}
//                   {index === 1 && (
//                     <div className="mt-4">
//                       <h2 className="lg:text-xl font-bold text-gray-700 text-start">Best Place for Weekend Plans</h2>
//                       <p className="lg:text-sm text-[12px] text-gray-500 mt-2 lg:max-w-[300px] mx-auto text-start max-w-[250px]">
//                         Lorem ipsum dolor sit amet consectetur. Magna enim amet risus facilisis mauris lectus.
//                         Euismod sed ultrices lobortis tristique pulvinar.
//                       </p>
//                       <button className='text-start'
//                         onClick={() => {
//                           galleryRef.current?.scrollIntoView({
//                             behavior: "smooth",
//                           });
//                         }}>See all</button>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center space-x-4 mb-4 sm:mb-0 mt-10">
//             <button onClick={handlePrev} className="flex items-center text-gray-600 hover:text-gray-800">
//               <FaArrowLeft className="text-xl" />
//               <p className="text-xl mb-2 p-2">Prev</p>
//             </button>
//             <button onClick={handleNext} className="flex items-center text-gray-600 hover:text-gray-800">
//               <p className="text-xl mb-2 p-2">Next</p>
//               <FaArrowRight className="text-xl" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About section */}
//       <div className="px-4 md:px-6 lg:px-12  md:py-12 ">
//         {/* Heading Section */}
//         <div className="lg:text-start mb-6 lg:ml-96 text-center">
//           <h1 className="text-xl sm:text-2xl md:text-6xl text-primary mb-6">
//             Your Premier Destination for <br /><span>Unforgettable Celebrations</span>
//           </h1>
//           <h2 className="text-lg sm:text-2xl md:text-2xl font-bold lg:mt-[60px]">
//             About Beach Castle
//           </h2>
//         </div>

//         {/* Description Section */}
//         <div className="lg:text-start lg:max-w-4xl mx-auto lg:mr-[140px] text-center">
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed  font-Montserrat">
//             "At Beach Castle, we turn your special occasions into unforgettable experiences. Located on the picturesque East Coast Road (ECR) in Chennai, our opulent venue blends the classic charm of Chettinad-style architecture with contemporary amenities. Spanning a generous 45,000 sq. ft, the property features a vast open lawn and a beautifully appointed 7BHK villa. With a floating capacity of 500 guests and seating for 300, it's an ideal setting for weddings, corporate events, gatherings, and more. Our commitment to outstanding service and elegant surroundings ensures an unparalleled experience for you and your guests."
//           </p>
//         </div>
//       </div>

//       {/* our features */}
//       <section className=" ">
//         {/* Content Section */}
//         <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-6xl mx-auto ">
//           <div className="  md:max-w-2xl lg:max-w-4xl text-center lg:text-start mt-5">
//             <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-10">
//               Our Features
//             </h1>
//             <p className="text-sm md:text-md lg:text-lg mb-6 mt-4">
//               Immerse yourself in the grandeur of our Chettinad-style villa. Known for its distinctive architectural features
//               and exquisite craftsmanship, the villa combines traditional elegance with modern luxury. Each of the seven bedrooms
//               offers a tranquil retreat, ensuring a comfortable stay for you and your guests.
//             </p>
//             <div className="mt-6 md:mt-0 mb-6 ">
//               <button className="text-white bg-primary py-3 px-9 rounded-[50px] shadow-lg transition-transform duration-300 transform hover:scale-105"
//                 onClick={() => {
//                   contactRef.current?.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                 }}>
//                 ENQUIRY
//               </button>
//             </div>
//           </div>

//           {/* Enquiry Button */}
//           <div className="mt-6 md:mt-0 mb-6 ">
//             <img src={Imag} alt="" className='w-[280px] sm:w-[200px] md:w-[280px] h-[280px] md:h-[400px] lg:w-[1600px] lg:h-[250px] lg:ml-20 rounded-[20px] ' />
//           </div>
//         </div>
//         <div>
//           <img src={Imag1} alt="" className='lg:ml-60 lg:w-[1150px] h-20 lg:h-44  ' />
//         </div>
//       </section>

//       <OurFacilities />

//       {/* <Facilities /> */}
//       <section className="flex flex-col items-center px-4 md:px-10 lg:px-20 bg-white">
//         {/* Heading */}
//         <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-4xl mx-auto lg:ml-20">
//           <div className="md:max-w-2xl lg:max-w-4xl text-center lg:text-start mt-5">
//             <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-10">
//               Our Facilities
//             </h1>
//             <p className="text-[12px] md:text-md lg:text-lg mb-6 mt-4">
//               Immerse yourself in the grandeur of our Chettinad-style villa. Known for its distinctive architectural features
//               and exquisite craftsmanship, the villa combines traditional elegance with modern luxury.
//             </p>
//             {/* <div className="mt-6">
//               <button className="text-white bg-primary py-3 px-9 rounded-[50px] shadow-lg transition-transform duration-300 transform hover:scale-105"
//                 onClick={() => {
//                   galleryRef.current?.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                 }}>
//                 View all
//               </button>
//             </div> */}
//           </div>
//         </div>

//         {/* Images Section */}
//         <div className="flex flex-wrap justify-center gap-6 lg:mt-10">
//           {/* First Image Item - Smaller Size */}
//           {/* <div className="relative group lg:w-60 lg:h-56 overflow-hidden rounded-[30px] mt-16">
//             <img
//               src={img}
//               alt="Swimming Pool"
//               className="w-full h-full object-cover "
//             />
//           </div> */}

//           {/* Other Image Items - Same Size */}
//           {[[img, "Swimming pool"],[img1, "Lawn"], [img2, "Service Area"], [img3, "Covered Lawn"]].map(([image, title], index) => (
//             <div key={index} className="relative group w-64 h-72 overflow-hidden rounded-[30px]">
//               <div className="w-full h-full overflow-hidden rounded-[30px] transition-all duration-300 group-hover:h-60">
//                 <img src={image} alt={`Facility ${index + 1}`} className="w-full h-full object-cover" />
//               </div>
//               <div className="absolute bottom-0 w-full text-center py-2 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//                 <hr className="border-t-2 border-gray-300 mt-2 w-3/4 mx-auto" />
//               </div>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* <PerfectForSection /> */}
//       <section>
//         <div className="lg:mt-20 px-4 lg:px-0 mt-10">
//           <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_1fr] gap-4 items-center">
//             <div className="md:ml-24 text-center md:text-left">
//               <h1 className="text-xl sm:text-2xl md:text-6xl  text-primary leading-tight">
//                 This Place is Perfect for Enjoyment
//               </h1>
//             </div>

//             <div className="text-lg space-y-4 text-center md:text-left">
//               <p className="text-primary">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna enim amet risus facilisis mauris lectus.
//                 Euismod sed ultrices lobortis tristique pulvinar. Magnis euismod in eget risus.
//               </p>
//               <div>
//                 <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
//                   onClick={() => {
//                     galleryRef.current?.scrollIntoView({
//                       behavior: "smooth",
//                     });
//                   }}>
//                   Enjoy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center lg:mt-8">
//           <div className="flex flex-col sm:flex-row items-center mt-10 lg:ml-40">
//             <div className='flex justify-center space-x-4 mb-4 sm:mb-0 sm:mr-4 lg:mr-10'>
//               <button
//                 onClick={handlePrev}
//                 className="flex items-center text-gray-600 hover:text-gray-800"
//               >
//                 <FaArrowLeft className="text-xl" />
//                 <p className='text-xl mb-2 p-2'>Prev</p>
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="flex items-center text-gray-600 hover:text-gray-800"
//               >
//                 <p className='text-xl mb-2 p-2'>Next</p>
//                 <FaArrowRight className="text-xl" />
//               </button>
//             </div>

//             <div className="flex justify-center flex-wrap lg:flex-nowrap">
//               {currentItems.map((item, index) => (
//                 <div key={index} className="text-center mx-4 mb-4 lg:mb-0 lg:w-1/3">
//                   <img
//                     src={item.image}
//                     alt={item.heading}
//                     className="object-cover rounded-[30px] w-full h-[280px] md:h-[330px] lg:h-[350px] p-2"
//                   />
//                   <h3 className="text-2xl font-bold text-gray-700 mt-4 lg:text-start">{item.heading}</h3>
//                   <p className="text-lg text-gray-500 lg:text-start">{item.description}</p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       <PoliciesPage />


//       {/* Gallery section */}
//       <section ref={galleryRef}>
//       <div className="w-full mt-16">
//         <div className="mb-8 max-w-6xl mx-auto px-4 lg:px-8 text-center lg:text-left">
//           <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Gallery</h1>
//           <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//             Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens,
//             <br className="hidden md:block" />
//             private gardens, and state-of-the-art security.
//           </p>
//         </div>

//         {/* First Row with different sizes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 lg:mr-12">
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

//         {/* Second Row with uniform sizes */}
//         <div className="grid grid-cols-1 md:grid-cols-[300px_400px_400px_250px] gap-4 lg:ml-[100px] ml-3">
          // <button
          //   className="mt-20 text-blue-600 hover:text-blue-800 font-medium ml-24 hidden lg:block"
          //   onClick={handleShowMoreImages}
          // >
          //   {showMoreImages ? 'Hide Images' : 'See all Images'}
          // </button>

//           {/* Display images conditionally */}
//           { imagesRow2.map((image) => (
//             <div key={image.id} className="overflow-hidden group relative">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="lg:w-full w-[330px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Third Row with the same layout as the first row, shown conditionally */}
//         {showMoreImages && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 lg:mr-12">
//             {imagesRow1.map((image) => (
//               <div key={image.id} className="overflow-hidden group relative">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>

//       <TestimonialsCarousel />

//       <div className="w-full h-64 lg:h-68 relative mt-10 max-w-7xl mx-auto ">
//         <iframe
//           className="w-full h-full rounded-[30px]"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7422903953833!2d80.25785761428786!3d13.03403599082664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f153edfd75%3A0x75d7f6f979f0ea0e!2sEast%20Coast%20Road%20-%20Sea%20Shell%20Avenue%2C%20Akkarai%2C%20Chennai%2C%20Tamil%20Nadu%20600119!5e0!3m2!1sen!2sin!4v1632428081029!5m2!1sen!2sin"
//           frameBorder="0"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           aria-hidden="false"
//           tabIndex="0"
//           title="Google Map"
//         ></iframe>
//       </div>

//       {/* contact section */}
//       <section ref={contactRef}>
//         <div className="flex flex-col items-center mt-20 bg-white px-4 lg:px-0">
//           <form
//             className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-[1250px] mx-auto"
//             onSubmit={handleSubmit}
//           >
//             <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between">
//               <h2 className="text-primary text-2xl mb-4 lg:mb-0 lg:mr-4 whitespace-nowrap">
//                 Enquiry Now
//               </h2>
//               <div className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto">
//                 {/* Name Input */}
//                 <input
//                   type="text"
//                   name="userName"
//                   placeholder="Name"
//                   value={formData.userName}
//                   onChange={handleChange}
//                   className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//                   required
//                 />

//                 {/* Email Input */}
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//                   required
//                 />

//                 {/* Mobile Number Input */}
//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//                   required
//                 />

//                 {/* Enquiry Input */}
//                 <input
//                   type="text"
//                   name="enquiry"
//                   placeholder="Enquiry For"
//                   value={formData.enquiry}
//                   onChange={handleChange}
//                   className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
//                   required
//                 />

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="bg-primary text-white py-3 px-12 rounded-full hover:bg-gray-600 transition w-full lg:w-auto"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>

//       <ContactSection />
//     </>
//   );
// };

// export default Header;














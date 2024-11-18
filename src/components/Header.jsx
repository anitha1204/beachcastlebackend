



// import React, { useState, useEffect, useRef } from 'react';
// import OurFacilities from './OurFacilities';
// import TestimonialsCarousel from './TestimonialsCarousel';
// import ContactSection from './ContactSection';
// import { VscArrowCircleRight, VscArrowCircleDown } from 'react-icons/vsc';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import PoliciesPage from './PoliciesPage';


// import imgpgallery from '../assets/Black2.jpg';
// import imgpgallery1 from '../assets/Courtyard.jpg';
// import imgpgallery2 from '../assets/Rectangle 64.png';
// import imgpgallery3 from '../assets/Lilac2.jpg';
// import imgpgallery4 from '../assets/Dining.jpg';
// import imgpgallery5 from '../assets/Jade1.jpg';
// import imgpgallery6 from '../assets/Cane1.jpg';


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
// import MainImage from './MainImage';


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
//     {
//       id: 4,
//       src: imgpgallery3,
//       alt: "Modern kitchen interior",
//     },
//   ];

//   const imagesRow2 = [
//     {
//       id: 5,
//       src: imgpgallery4,
//       alt: "Garden view",
//     },
//     {
//       id: 6,
//       src: imgpgallery5,
//       alt: "Swimming pool",
//     },
//     {
//       id: 7,
//       src: imgpgallery6,
//       alt: "Another view of swimming pool",
//     },
//   ];
//   const images = [...imagesRow1, ...imagesRow2];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const galleryRef = useRef(null);
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




//   return (
//     <>
//       <MainImage />
//       {/* About section */}
//       <div className="px-4 md:px-6 lg:px-12  md:py-12 ">
//         {/* Heading Section */}
//         <div className="lg:text-start mb-6 lg:ml-96 text-center">
//           <h1 className="text-xl sm:text-2xl md:text-6xl text-primary mb-6">
//           Celebrate Life’s Biggest <br /><span> Moments in Style</span>
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
//             Every detail of your experience is thoughtfully curated to blend the serene beauty of the seaside with the elegance of traditional charm. From the intricate decor inspired by age-old customs to the warm, welcoming ambiance that resonates with cultural authenticity, we ensure that your special moments are enveloped in an air of timeless grace
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
//             Whether it's a grand wedding ceremony or an intimate gathering, 
//             our venue harmoniously merges the soothing waves of the ocean with a touch of heritage, 
//             creating a setting where modern romance meets classic traditions.
//             </p>

//           </div>
//         </div>

//         {/* Images Section */}
//         <div className="flex flex-wrap justify-center gap-6 lg:mt-10">


//           {/* Other Image Items - Same Size */}
//           {[[img, "Swimming pool"], [img1, "Lawn"], [img2, "Service Area"], [img3, "Covered Lawn"]].map(([image, title], index) => (
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
//               A Place Where Happiness Finds You
//               </h1>
//             </div>

//             <div className="text-lg space-y-4 text-center md:text-left">
//               <p className="text-primary">
//               Every moment spent here is crafted to be unforgettable, from the tranquil sea breeze that
//                welcomes you to the carefully curated experiences that celebrate joy and togetherness.
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
//         <div className=" mt-16">
//           <div className="mb-8 max-w-6xl mx-auto px-4 lg:px-8 text-center lg:text-left">
//             <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Gallery</h1>
//             <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
//               Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens,
//               <br className="hidden md:block" />
//               private gardens, and state-of-the-art security.
//             </p>
//           </div>


//           {/* First Row with different sizes */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 lg:mr-12">
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

//           {/* Second Row with uniform sizes */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:max-w-5xl max-w-7xl mx-auto p-4 lg:mr-40 ">
//             {/* Display images */}
//             {imagesRow2.map((image) => (
//               <div key={image.id} className="overflow-hidden group relative">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-[250px] lg:w-[300px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
//                 />
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <TestimonialsCarousel />

//       <div className="w-full h-64 lg:h-80 relative mt-[150px] lg:mt-10 max-w-7xl mx-auto px-4">
//         <iframe
//           className="w-full h-full rounded-lg shadow-lg"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.775166724868!2d80.24842631482143!3d12.892396390915392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b55c3d80d49%3A0xe8476d5b20d07fd3!2sBeach%20Castle%20Wedding%20Venue!5e0!3m2!1sen!2sin!4v1676436428685!5m2!1sen!2sin"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Beach Castle Wedding Venue Location"
//         />
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





import React, { useState, useEffect, useRef } from 'react';
import OurFacilities from './OurFacilities';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactSection from './ContactSection';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PoliciesPage from './PoliciesPage';


import imgpgallery from '../assets/Black2.jpg';
import imgpgallery1 from '../assets/Courtyard.jpg';
import imgpgallery2 from '../assets/Rectangle 64.png';
import imgpgallery3 from '../assets/Lilac2.jpg';
import imgpgallery4 from '../assets/Dining.jpg';
import imgpgallery5 from '../assets/Jade1.jpg';
import imgpgallery6 from '../assets/Cane1.jpg';


import Imag from '../assets/Pool.jpg';
import Imag1 from '../assets/Image.png';

import Bannerimgs from "../assets/Rectangle 15.png";
import Bannerimgs1 from "../assets/Rectangle 16.png";
import Bannerimgs2 from "../assets/Rectangle 18.png";


import img from '../assets/Rectangle 5.png';
import img1 from '../assets/Lawn2.jpg';
import img2 from '../assets/Service area.jpg';
import img3 from '../assets/Rectangle 8.png';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import MainImage from './MainImage';

import logo from '../assets/Asset 1 1.png';
import Bannerimg from "../assets/bnr_1.jpg";
import Bannerimg1 from "../assets/bnr_7.jpg";
import Bannerimg2 from "../assets/bnr_8.jpg";
import Bannerimg3 from "../assets/bnr_9.jpg";
import Bannerimg4 from "../assets/bnr_2.jpg";
import Bannerimg5 from "../assets/bnr_3.jpg";
import Bannerimg6 from "../assets/bnr_4.jpg";
import Bannerimg7 from "../assets/bnr_5.jpg";



import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Header = () => {

  const items = [
    { image: Bannerimgs, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
    { image: Bannerimgs1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
    { image: Bannerimgs2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
    { image: Bannerimgs1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
    { image: Bannerimgs2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
    { image: Bannerimgs, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
    { image: Bannerimgs2, heading: "Get-Togethers", description: "Enjoy friendly gatherings in an inviting atmosphere." },
    { image: Bannerimgs, heading: "Wedding Events", description: "Celebrate memorable wedding events in a beautiful setting." },
    { image: Bannerimgs1, heading: "Corporate Meetings", description: "Host professional corporate meetings with all amenities." },
  ];

  const imagesRow1 = [
    {
      id: 1,
      src: imgpgallery,
      alt: "Garden pathway with palm trees",
    },
    {
      id: 2,
      src: imgpgallery1,
      alt: "White building entrance",
    },
    {
      id: 3,
      src: imgpgallery2,
      alt: "Modern kitchen interior",
    },
    {
      id: 4,
      src: imgpgallery3,
      alt: "Modern kitchen interior",
    },
  ];

  const imagesRow2 = [
    {
      id: 5,
      src: imgpgallery4,
      alt: "Garden view",
    },
    {
      id: 6,
      src: imgpgallery5,
      alt: "Swimming pool",
    },
    {
      id: 7,
      src: imgpgallery6,
      alt: "Another view of swimming pool",
    },
  ];
  const images = [...imagesRow1, ...imagesRow2];

  const [currentImage, setCurrentImage] = useState(0);
  const image = [
    { img: Bannerimg, heading: "An Iconic Venue on Chennai’s ECR", description: "Beach Castle becomes the quintessential venue for those seeking a blend of heritage charm and premium hospitality." },
    { img: Bannerimg1, heading: "Where Luxury Meets Tradition", description: " Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa," },
    { img: Bannerimg2, heading: "Where Luxury Meets Tradition", description: "Our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
    { img: Bannerimg3, heading: "Where Luxury Meets Tradition", description: "Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa, our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
    { img: Bannerimg4, heading: "Immerse yourself in the grandeur", description: " of our Chettinad-style villa. Known for its distinctive architectural beauty and rich history." },
    { img: Bannerimg5, heading: "Discover serenity at Beach Castle.", description: " The perfect blend of nature’s tranquility and luxurious amenities." },
    { img: Bannerimg6, heading: "Celebrate special moments with", description: " unparalleled elegance. From weddings to events, Beach Castle sets the stage for unforgettable experiences." },
    { img: Bannerimg7, heading: "Relax, unwind, and rejuvenate", description: " in the luxurious surroundings of Beach Castle. A retreat like no other." },
    // Repeat the images if needed to cycle
    { img: Bannerimg1, heading: "Where Luxury Meets Tradition", description: " Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa," },
    { img: Bannerimg2, heading: "Where Luxury Meets Tradition", description: "Our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
    { img: Bannerimg3, heading: "Where Luxury Meets Tradition", description: "Beach Castle embodies a unique blend of tradition and modern comfort. From expansive lawns to a 7BHK villa, our 45,000 sq. ft. estate offers an exquisite setting for weddings, corporate events, and cherished gatherings. Indulge in a coastal venue that combines the charm of the past with contemporary luxury." },
    { img: Bannerimg4, heading: "Immerse yourself in the grandeur", description: " of our Chettinad-style villa. Known for its distinctive architectural beauty and rich history." },
    { img: Bannerimg5, heading: "Discover serenity at Beach Castle.", description: " The perfect blend of nature’s tranquility and luxurious amenities." },
    { img: Bannerimg6, heading: "Celebrate special moments with", description: " unparalleled elegance. From weddings to events, Beach Castle sets the stage for unforgettable experiences." },
    { img: Bannerimg7, heading: "Relax, unwind, and rejuvenate", description: " in the luxurious surroundings of Beach Castle. A retreat like no other." },
    { img: Bannerimg, heading: "An Iconic Venue on Chennai’s ECR", description: "Beach Castle becomes the quintessential venue for those seeking a blend of heritage charm and premium hospitality." },
  ];

  const imagesPerPages = 1; // Only one image per page
  const totalPage = image.length;

  const handleNexts = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % totalPage);
  };

  const handlePrevs = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + totalPage) % totalPage);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNexts();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImage]);


  const currentContent = image[currentImage];

  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // useEffect for automatic slide change
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentIndex]);


  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, totalPages]);

  const currentItems = items.slice(
    currentIndex * imagesPerPage,
    currentIndex * imagesPerPage + imagesPerPage
  );


  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link === activeLink ? null : link); // Toggle icon
  };

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobile: '',
    enquiry: '',
  });

  const navigate = useNavigate();
  const contactRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Basic validation
    if (!formData.userName || !formData.email || !formData.mobile || !formData.enquiry) {
      return false;
    }
    // Additional validation checks can be added here
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting form data:', formData);

    if (!validateForm()) {
      console.error('Form validation failed');
      return; // Prevent submission if validation fails
    }

    try {
      const response = await axios.post('https://beachcastle.onrender.com/api/postdata', formData);
      console.log('Form submitted successfully:', response.data);

      // Optionally reset the form
      setFormData({
        userName: '',
        email: '',
        mobile: '',
        enquiry: '',
      });

      navigate("/thankyou");

    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      console.error('Full error object:', error);
    }
  };




  return (
    <>

      <section className="mt-10 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[720px_370px_300px] gap-4 px-4 lg:mr-[180px]">
          {/* Left Section: Company Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Beach Castle Logo" className="h-20 md:h-[100px] w-auto" />
          </div>
          <div></div>
          <div className="text-sm text-center md:text-right">
            {/* Location Section */}
            <div className="flex flex-col md:items-start space-y-4 mt-2 text-primary">
              {/* Address Link */}
              <Link
                to="https://www.google.com/maps/place/Beach+Castle+Wedding+Venue/@12.892396,80.250995,16z/data=!4m6!3m5!1s0x3a525b55c3d80d49:0xe8476d5b20d07fd3!8m2!3d12.8923963!4d80.250995!16s%2Fg%2F11ln9bcmn7?hl=en&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2"
              >
                <HiLocationMarker className="text-primary" size={32} />
                <p className="text-start">13, Sea Shell Avenue, Akkarai, ECR, Chennai - 600119</p>
              </Link>

              {/* Phone Link */}
              <Link to="tel:+918841177234" className="flex space-x-2">
                <HiPhone className="text-primary" size={24} />
                <p>(+91) 88388 92623</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center mt-4">
          <div className="relative flex-shrink-0 overflow-hidden">
            {/* Displaying the current image */}
            <img
              src={currentContent.img}
              alt="Banner"
              className="object-cover rounded-2xl p-2 transition-transform transform duration-500 h-[180px] lg:w-[1450px] lg:h-[600px]"
            />

            {/* Text Overlay */}
            <div className="absolute object-cover rounded-xl inset-0 flex flex-col w-[305px] h-[585px] ml-2 mt-2 items-center justify-center text-white bg-black bg-opacity-30 p-5 lg:w-[1435px] lg:h-[582px]">
              <h2 className="lg:text-5xl text-3xl font-semibold text-center">{currentContent.heading}</h2>
              <p className="hidden lg:block lg:text-2xl mt-6 text-center lg:w-[750px]">{currentContent.description}</p>
              <button className="text-white bg-black py-3 px-9 rounded-[50px] shadow-lg transition-transform duration-300 transform hover:scale-105 mt-4"
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}>
                ENQUIRY
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-4 sm:mb-0 mt-10">
            <button onClick={handlePrevs} className="flex items-center text-gray-600 hover:text-gray-800 space-x-2 p-2">
              <FaArrowLeft className="text-xl" />
              <p className="text-xl">Prev</p>
            </button>
            <button onClick={handleNexts} className="flex items-center text-gray-600 hover:text-gray-800 space-x-2 p-2">
              <p className="text-xl">Next</p>
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>


      {/* About section */}
      <div className="px-4 md:px-6 lg:px-12  md:py-12 ">
        {/* Heading Section */}
        <div className="lg:text-start mb-6 lg:ml-96 text-center font-neue">
          <h1 className="text-xl sm:text-2xl md:text-6xl text-primary mb-6">
            Celebrate Life’s Biggest <br /><span> Moments in Style</span>
          </h1>
          <h2 className="text-xl md:text-4xl lg:text-3xl lg:mt-[60px] text-primary">
            About Beach Castle
          </h2>
        </div>

        {/* Description Section */}
        <div className="lg:text-start lg:max-w-4xl mx-auto lg:mr-[140px] text-center">
          <p className="text-gray-500 text-sm lg:text-lg mb-6 mt-4 leading-relaxed font-neue">
            "At Beach Castle, we turn your special occasions into unforgettable experiences. Located on the picturesque East Coast Road (ECR) in Chennai, our opulent venue blends the classic charm of Chettinad-style architecture with contemporary amenities. Spanning a generous 45,000 sq. ft, the property features a vast open lawn and a beautifully appointed 7BHK villa. With a floating capacity of 500 guests and seating for 300, it's an ideal setting for weddings, corporate events, gatherings, and more. Our commitment to outstanding service and elegant surroundings ensures an unparalleled experience for you and your guests."
          </p>
        </div>
      </div>

      {/* our features */}
      <section className=" ">
        {/* Content Section */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-6xl mx-auto ">
          <div className="  md:max-w-2xl lg:max-w-4xl text-center lg:text-start mt-5 font-neue">
            <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-8 text-primary">
              Our Features
            </h1>
            <p className="text-sm md:text-md lg:text-lg mb-6 mt-4 text-gray-500">
              Every detail of your experience is thoughtfully curated to blend the serene beauty of the seaside with the elegance of traditional charm. From the intricate decor inspired by age-old customs to the warm, welcoming ambiance that resonates with cultural authenticity, we ensure that your special moments are enveloped in an air of timeless grace
            </p>
            <div className="mt-6 md:mt-0 mb-6 ">
              <button className="text-white bg-primary py-3 px-9 rounded-[50px] shadow-lg transition-transform duration-300 transform hover:scale-105"
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}>
                ENQUIRY
              </button>
            </div>
          </div>

          {/* Enquiry Button */}
          <div className="mt-6 md:mt-0 mb-6 ">
            <img src={Imag} alt="" className='w-[280px] sm:w-[200px] md:w-[280px] h-[280px] md:h-[400px] lg:w-[1600px] lg:h-[250px] lg:ml-20 rounded-[20px] ' />
          </div>
        </div>
        <div>
          <img src={Imag1} alt="" className='lg:ml-60 lg:w-[1150px] h-20 lg:h-44  ' />
        </div>
      </section>

      <OurFacilities />

      {/* <Facilities /> */}
      <section className="flex flex-col items-center px-4 md:px-10 lg:px-20 bg-white">
        {/* Heading */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-4xl mx-auto lg:ml-20">
          <div className="md:max-w-2xl lg:max-w-4xl text-center lg:text-start mt-5 font-neue">
            <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-8 text-primary">
              Our Facilities
            </h1>
            <p className="text-sm md:text-md lg:text-lg mb-8 mt-8 text-gray-500">
              Whether it's a grand wedding ceremony or an intimate gathering,
              our venue harmoniously merges the soothing waves of the ocean with a touch of heritage, creating a setting
              where modern romance meets classic traditions.
            </p>

          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center gap-6 lg:mt-10">


          {/* Other Image Items - Same Size */}
          {[[img, "Swimming pool"], [img1, "Lawn"], [img2, "Service Area"], [img3, "Covered Lawn"]].map(([image, title], index) => (
            <div key={index} className="relative group w-64 h-72 overflow-hidden rounded-[30px]">
              <div className="w-full h-full overflow-hidden rounded-[30px] transition-all duration-300 group-hover:h-60">
                <img src={image} alt={`Facility ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 w-full text-center py-2 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <hr className="border-t-2 border-gray-300 mt-2 w-3/4 mx-auto" />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* <PerfectForSection /> */}
      <section>
        <div className="lg:mt-20 px-4 lg:px-0 mt-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-[700px_1fr] gap-4 items-center">
            <div className="md:ml-24 text-center md:text-left font-neue">
              <h1 className="text-xl sm:text-2xl md:text-6xl  text-primary leading-tight">
                A Place Where Happiness Finds You
              </h1>
            </div>

            <div className="text-lg space-y-4 text-center md:text-left font-neue">
              <p className="text-sm md:text-md lg:text-lg mb-8 text-gray-500">
                Every moment spent here is crafted to be unforgettable, from the tranquil sea breeze that
                welcomes you to the carefully curated experiences that celebrate joy and togetherness.
              </p>
              <div>
                <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
                  onClick={() => {
                    galleryRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>
                  Enjoy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:mt-8">
          <div className="flex flex-col sm:flex-row items-center mt-10 lg:ml-40">
            <div className='flex justify-center space-x-4 mb-4 sm:mb-0 sm:mr-4 lg:mr-10'>
              <button
                onClick={handlePrev}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <FaArrowLeft className="text-xl" />
                <p className='text-xl mb-2 p-2'>Prev</p>
              </button>
              <button
                onClick={handleNext}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <p className='text-xl mb-2 p-2'>Next</p>
                <FaArrowRight className="text-xl" />
              </button>
            </div>

            <div className="flex justify-center flex-wrap lg:flex-nowrap">
              {currentItems.map((item, index) => (
                <div key={index} className="text-center mx-4 mb-4 lg:mb-0 lg:w-1/3">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="object-cover rounded-[30px] w-full h-[280px] md:h-[330px] lg:h-[350px] p-2"
                  />
                  <h3 className="text-lg md:text-4xl lg:text-2xl lg:mb-2 text-primary lg:text-start mt-2">{item.heading}</h3>
                  <p className="text-lg text-gray-500 lg:text-start">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <PoliciesPage />


      {/* Gallery section */}
      <section ref={galleryRef}>
        <div className=" mt-16">
          <div className="mb-8 max-w-6xl mx-auto px-4 lg:px-8 text-center lg:text-left font-neue">
            <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-8 text-primary">Gallery</h1>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens,
              <br className="hidden md:block" />
              private gardens, and state-of-the-art security.
            </p>
          </div>


          {/* First Row with different sizes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 lg:mr-12">
            {imagesRow1.map((image) => (
              <div key={image.id} className="overflow-hidden group relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
                />
              </div>
            ))}
          </div>

          {/* Second Row with uniform sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:max-w-5xl max-w-7xl mx-auto p-4 lg:mr-40 ">
            {/* Display images */}
            {imagesRow2.map((image) => (
              <div key={image.id} className="overflow-hidden group relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[250px] lg:w-[300px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <TestimonialsCarousel />

      <div className="w-full h-64 lg:h-80 relative mt-[150px] lg:mt-10 max-w-7xl mx-auto px-4">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.775166724868!2d80.24842631482143!3d12.892396390915392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b55c3d80d49%3A0xe8476d5b20d07fd3!2sBeach%20Castle%20Wedding%20Venue!5e0!3m2!1sen!2sin!4v1676436428685!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Beach Castle Wedding Venue Location"
        />
      </div>

      {/* contact section */}
      <section ref={contactRef}>
        <div className="flex flex-col items-center mt-20 bg-white px-4 lg:px-0">
          <form
            className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-[1250px] mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between">
              <h2 className="text-primary text-3xl mb-4 lg:mb-0 lg:mr-4 whitespace-nowrap font-neue">
                Enquiry Now
              </h2>
              <div className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto">
                {/* Name Input */}
                <input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  value={formData.userName}
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
                  required
                />

                {/* Email Input */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
                  required
                />

                {/* Mobile Number Input */}
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
                  required
                />

                {/* Enquiry Input */}
                <input
                  type="text"
                  name="enquiry"
                  placeholder="Enquiry For"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2 px-4 w-full lg:w-1/4"
                  required
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-12 rounded-full hover:bg-gray-600 transition w-full lg:w-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Header;
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/Asset 1 1.png";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import PerfectForSection from "./PerfectForSection";
import AmenitiesFacilities from "./AmenitiesFacilities";

import Bannerimg from "../assets/DSC07013.png";
import Bannerimg1 from "../assets/DSC07068.png";
import Bannerimg2 from "../assets/DSC07259.png";
import Bannerimg3 from "../assets/DSC07289.png";
import Bannerimg4 from "../assets/DSC07316.png";

import img from "../assets/Courtyard.jpg";
import img1 from "../assets/Hall1.jpg";

import image1 from "../assets/Rectangle 15.png";
import image2 from "../assets/Rectangle 16.png";
import image3 from "../assets/Rectangle 17.png";
import image4 from "../assets/Rectangle 18.png";


import swimmingPoolImg from "../assets/stage decor.jpg";
import diningSpaceImg from "../assets/dining.webp";
import parkingImg from "../assets/Music.png";
import bedroomImg from "../assets/Make up.jpg";
import lawnImg from "../assets/retuen gift.png";
import airConditionedImg from "../assets/mehandi.jpg";
import theatreImg from "../assets/photography.jpg";

import imgpgallery from "../assets/Lilac2.jpg";
import imgpgallery1 from "../assets/Jade1.jpg";
import imgpgallery2 from "../assets/Black2.jpg";
import imgpgallery3 from "../assets/Plum2.jpg";
import imgpgallery4 from "../assets/bnr_4.jpg";
import imgpgallery5 from "../assets/Cane1.jpg";

import Policies from "./Policies";
import TestimonialsCarousel from './TestimonialsCarousel';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BeachHouse = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const amenities = [
    {
      name: "Wedding Decor",
      img: swimmingPoolImg,
      description:
        "Enjoy a luxurious swimming experience in our state-of-the-art swimming pool.",
    },
    {
      name: "Catering",
      img: diningSpaceImg,
      description:
        "Our dining space is perfect for gatherings, offering a comfortable ambiance.",
    },
    {
      name: "Music",
      img: parkingImg,
      description:
        "Convenient on-site parking for your vehicles, ensuring safety and ease.",
    },
    {
      name: "Make up Artist",
      img: bedroomImg,
      description:
        "Relax in our well-furnished luxury bedrooms with top-notch amenities.",
    },
    {
      name: "Return Gifts",
      img: lawnImg,
      description:
        "Spacious lawns for outdoor events and relaxation in a serene environment.",
    },
    {
      name: "Mehandi",
      img: airConditionedImg,
      description:
        "Fully air-conditioned spaces for a comfortable and pleasant experience.",
    },

    {
      name: "Photography",
      img: theatreImg,
      description:
        "Enjoy a cinematic experience in our private theatre with premium facilities.",
    },
  ];

  const activeAmenity = amenities[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % amenities.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [amenities.length]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const cards = [
    {
      title: "Wedding Events",
      description:
        "Celebrate memorable wedding events in a beautiful setting.",
      image: image1,
    },
    {
      title: "Corporate Meetings",
      description:
        "Host professional corporate meetings with all amenities.",
      image: image2,
    },
    {
      title: "Get-together",
      description:
        "Enjoy friendly gatherings in an inviting atmosphere.",
      image: image3,
    },
    {
      title: "Special Occasion",
      description:
        "Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens.",
      image: image4,
    },
  ];

  const galleryRef = useRef();

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
  ];

  // Images for the second row
  const imagesRow2 = [
    {
      id: 4,
      src: imgpgallery3,
      alt: "Garden view",
    },
    {
      id: 5,
      src: imgpgallery4,
      alt: "Swimming pool",
    },
    {
      id: 6,
      src: imgpgallery5,
      alt: "Another view of swimming pool",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const images = [Bannerimg, Bannerimg1, Bannerimg2, Bannerimg3, Bannerimg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);


    return () => clearInterval(interval);
  }, [images.length]);


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
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          {/* <img
            src={Bannerimg}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          /> */}

          <img
            src={images[currentImage]}
            alt={`Banner ${currentImage + 1}`}
            className="lg:w-full lg:h-full h-[600px] object-cover rounded-2xl transition-all duration-700 ease-in-out"
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
          {/* Logo Section */}
          <div
            className="absolute top-0 bg-white bg-opacity-100 p-2 rounded-b-2xl lg:ml-20 lg:w-[200px] lg:h-[180px] ml-[130px] "

          >
            <Link to="https://maahotels.in">
              <img
                src={logo}
                alt="Logo"
                className="lg:mt-8 lg:ml-6 lg:w-[138.42px] lg:h-[124.33px] w-[100px] h-[70px] mt-4"

              />
            </Link>
          </div>


          {/* Navigation Section */}
          <div className="absolute lg:bg-white lg:bg-opacity-100 rounded-[50px] text-black lg:top-0 top-[300px] lg:ml-[800px] lg:mt-20 ml-[130px]">
            {/* Hidden on laptops, visible on smaller screens */}
            <div className="flex items-center cursor-pointer justify-center lg:hidden">
              <p className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-white mr-28">
                Where Luxury Meets Tradition
              </p>
            </div>

            <nav
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:w-[600px] lg:h-[45px] text-end"
            >
              {/* Quick Chat - Always visible */}
              <div
                className="flex items-center rounded-lg cursor-pointer p-2 lg:justify-center"
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <button className="text-xl whitespace-nowrap lg:text-md lg:text-primary text-white">
                  Quick Chat
                </button>
                <HiOutlineArrowCircleRight className="lg:text-xl text-xl ml-2 lg:text-gray-300 text-white transition-transform duration-300 hover:rotate-90" />
              </div>

              {/* About Us - Hidden on smaller screens */}
              <div className="flex items-center cursor-pointer justify-center hidden lg:flex">
                <button className="text-xl whitespace-nowrap lg:text-md lg:text-primary text-white">
                  About Us
                </button>
                <HiOutlineArrowCircleRight className="lg:text-xl text-xl ml-2 lg:text-gray-300 text-white transition-transform duration-300 hover:rotate-90" />
              </div>

              {/* Contact Us - Hidden on smaller screens */}
              <div
                className="flex items-center cursor-pointer p-2 hidden lg:flex lg:justify-center"
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <button className="text-xl whitespace-nowrap lg:text-md lg:text-primary text-white">
                  Contact Us
                </button>
                <HiOutlineArrowCircleRight className="lg:text-xl text-xl ml-2 lg:text-gray-300 text-white transition-transform duration-300 hover:rotate-90" />
              </div>

              {/* Gallery - Hidden on smaller screens */}
              <div
                className="flex items-center cursor-pointer p-2 hidden lg:flex lg:justify-center"
                onClick={() => {
                  galleryRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <button className="text-xl whitespace-nowrap lg:text-md lg:text-primary text-white">
                  Gallery
                </button>
                <HiOutlineArrowCircleRight className="lg:text-xl text-xl ml-2 lg:text-gray-300 text-white transition-transform duration-300 hover:rotate-90" />
              </div>
            </nav>
          </div>


        </div>
      </section>

      <PerfectForSection />
      {/* ----------------------------------------------- */}

      <div className="grid grid-cols-1 md:grid-cols-[40px_435px_435px_435px] gap-5 mt-4 mx-4 md:mx-4 ">

        <div></div>

        <div className="bg-gray-100 p-10 flex flex-col justify-center rounded-3xl">
          <h3 className="text-2xl md:text-2xl font-semibold text-center md:text-left">
            Perfect For Every Celebrations
          </h3>
          <p className="text-md mb-6 mt-6 mx-2 text-center md:text-left">
            Wedding , Recipections , Birthdays , Anniversaries , Baby showers , Family re unions, Collage re unions , Corporate events.

          </p>
          <button className="rounded-full lg:h-12 lg:w-full h-10 w-[150px] flex items-center justify-center bg-primary text-gray-50  mx-auto md:mx-0"
            onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}>
            Enquiry Now
          </button>
        </div>
        <div className=" flex items-center justify-center ">
          <img
            src={img}
            alt="Slideshow"
            className="w-full lg:w-[1234.6px] lg:h-[430px] h-80 rounded-3xl object-cover"
          />
        </div>

        <div className=" flex items-center justify-center">
          <img
            src={img1}
            alt="Slideshow"
            className="w-full lg:w-[1234.6px] lg:h-[430px] h-80 rounded-3xl object-cover"
          />
        </div>

      </div>

      {/* -------------------------------------------------------- */}
      <nav>
        <div className="flex flex-wrap justify-center items-center lg:ml-40  py-6 text-sm sm:text-lg grid grid-cols-1 sm:grid-cols-2  md:grid-cols-[150px_150px_150px_180px_150px_150px_180px_150px] gap-6">
          {amenities.map((amenity, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-lg text-center ${activeIndex === index
                ? "bg-gray-700 text-white"
                : "text-gray-600 hover:text-gray-900"
                }`}
              onClick={() => handleItemClick(index)}
            >
              {amenity.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Image and Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-[40px_870px_460px] gap-5 mt-4 mx-4 md:mx-4">
        {/* Left Spacer */}
        <div></div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={activeAmenity.img}
            alt={activeAmenity.name}
            className="w-full lg:w-[1234.6px] lg:h-[430px] h-80 rounded-3xl object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="bg-gray-100 p-6 sm:p-10 flex flex-col justify-center rounded-lg">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left">
            {activeAmenity.name}
          </h3>
          <p className="text-sm sm:text-md mb-4 sm:mb-6 mt-4 sm:mt-6 mx-2 text-center md:text-left">
            {activeAmenity.description}
          </p>
          <button className="rounded-full lg:h-12 lg:w-full h-10 w-[150px] flex items-center justify-center bg-primary text-gray-50  mx-auto md:mx-0"
            onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}>
            Enquiry Now
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}

      <div className="border border-primary mt-10 w-full max-w-[1400px] mx-auto overflow-hidden"></div>


      {/* ----------------------------------------------------- */}

      <AmenitiesFacilities />

      {/* ------------------------------------------------------- */}

      <div className=" py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-primary">
            This Place is Perfect Enjoyments for
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Every moment spent here is crafted to be unforgettable, from the tranquil sea breeze that welcomes you to the carefully curated experiences that celebrate joy and togetherness.
          </p>
          <button className="mt-6 px-8 md:px-16 lg:px-[200px] py-3 bg-primary text-white rounded-md"
            onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}>
            Enquiry Now
          </button>
        </div>

        <div className="flex justify-center flex-wrap lg:flex-nowrap">
          {cards.map((cards, index) => (
            <div key={index} className="text-center mx-4 mb-4 lg:mb-0 lg:w-[300px]">
              <img
                src={cards.image}
                alt={cards.title}
                className="object-cover rounded-[30px] w-full h-[280px] md:h-[300px] lg:h-[300px] p-2"
              />
              <h3 className="text-lg md:text-3xl lg:text-2xl lg:mb-2 text-primary lg:text-start mt-2">{cards.title}</h3>
              <p className="text-md text-gray-500 lg:text-start">{cards.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}

      <Policies />

      {/* --------------------------------------------------- */}

      {/* Gallery Header */}
      <section className="" ref={galleryRef}>
        <div className="w-full mt-16" >

          <div className="mb-8 max-w-10xl md:mx-4 px-4 lg:px-8 text-center">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Gallery</h1>
            <p className="text-gray-600 text-base lg:text-lg">
              Featuring top-notch facilities and amenities, including spacious
              bedrooms, modern kitchens,
              <br className="hidden md:block" />
              private gardens, and state-of-the-art security.
            </p>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-[400px_400px_400px_150px] gap-4  p-4 ">
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

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-[150px_400px_400px_400px] gap-4 lg:ml-[100px] ml-3">
            {/* Button visible only on large screens */}
            <div></div>

            {/* Display images */}
            {imagesRow2.map((image) => (
              <div key={image.id} className="overflow-hidden group relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="lg:w-full w-[330px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      <TestimonialsCarousel />

      {/* --------------------------------------------------------------- */}

      <section className='bg-primary text-white py-2 mx-4 md:mx-4 rounded-3xl mt-10'>

        <div className=" h-64 lg:h-[400px] relative mt-[150px] lg:mt-2  px-4">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.775166724868!2d80.24842631482143!3d12.892396390915392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b55c3d80d49%3A0xe8476d5b20d07fd3!2sBeach%20Castle%20Wedding%20Venue!5e0!3m2!1sen!2sin!4v1676436428685!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Beach Castle Wedding Venue Location"
          />
        </div>

        {/* contact section */}


        <section className=" py-12 px-4" ref={contactRef}>
          <div className="container mx-auto">

            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row justify-between items-center gap-6"
            >
              <h2 className="text-white text-lg lg:text-3xl mb-4 lg:mb-0 lg:mr-4 primarypace-nowrap font-neue">
                Quick Enquiry
              </h2>
              {/* Name Input */}
              <input
                type="text"
                name="userName"
                placeholder="Full Name"
                value={formData.userName}
                onChange={handleChange}
                className="border-b-2 border-white bg-transparent text-white outline-none py-2 px-4 w-full lg:w-40"
                required
              />
              {/* Mobile Number Input */}
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="border-b-2 border-white bg-transparent text-white outline-none py-2 px-4 w-full lg:w-40"
                required
              />
              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-white bg-transparent text-white outline-none py-2 px-4 w-full lg:w-40"
                required
              />
              {/* Enquiry Input */}
              <select
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="border-b-2 border-white bg-transparent text-white outline-none py-2 px-4 w-full lg:w-40"
                required
              >
                <option value="" disabled>
                  Enquiry For
                </option>
                <option value="wedding" className=" text-black">Weddings</option>
                <option value="receptions" className=" text-black">Receptions</option>
                <option value="birthdays" className=" text-black">Birthdays</option>
                <option value="anniversaries" className=" text-black">Anniversaries</option>
                <option value="babyShowers" className=" text-black">Baby Showers</option>
                <option value="familyReunions" className=" text-black">Family Reunions</option>
                <option value="collegeReunions" className=" text-black">College Reunions</option>
                <option value="corporateEvents" className=" text-black">Corporate Events</option>
                <option value="weekendGetaways" className=" text-black">Weekend Getaways</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-white text-gray-800 font-semibold py-2 px-8 rounded-lg hover:bg-gray-200 transition"
              >
                Enquiry Now
              </button>
            </form>
          </div>
        </section>

        <div className="lg:mt-10">
          {/* Contact Us Section */}
          <footer className="text-white  py-10">
            <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 font-neue">
              {/* Left Section */}
              <div>
                <h2 className="text-lg lg:text-2xl mb-4 text-white ">Contact Us</h2>
                <p className="text-sm md:text-md lg:text-md mb-8 mt-3 text-white ">
                  Ready to start planning your unforgettable event? Contact us today to learn more about Beach Castle and to book your date. Our dedicated team is here to assist you in creating the perfect celebration.
                </p>
              </div>

              {/* Right Section */}
              <div className="space-y-4 lg:ml-28  lg:text-end">
                <p className="">
                  <a href="https://beachcastle.co.in/" className="text-white ">
                    www.beachcastle.co.in/
                  </a>
                </p>
                <p className="">13, Sea Shell Avenue, Akkarai, ECR, Chennai - 600119</p>
                <p className="">
                  (+91) 88388 92623 | theglasshouseecr@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-sm text-white  font-neue">
              <p className="space-x-6 lg:ml-[120px]">Copyright © 2024 BeachCastle. All rights reserved.</p>
            </div>
          </footer>

        </div>
      </section>

    </>
  );
};

export default BeachHouse;

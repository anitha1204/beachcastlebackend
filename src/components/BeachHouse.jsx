import React, { useState ,useRef} from "react";
import logo from "../assets/Asset 1 1.png";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Bannerimg from "../assets/bnr_1.jpg";
import { Link } from "react-router-dom";
import PerfectForSection from "./PerfectForSection";
import img from '../assets/Rectangle 74.png'
import AmenitiesFacilities from "./AmenitiesFacilities";

import image1 from "../assets/Rectangle 15.png";
import image2 from "../assets/Rectangle 16.png";
import image3 from "../assets/Rectangle 18.png";

import Policies from "./Policies";
import Gallery from "./Gallery";
import TestimonialsCarousel from './TestimonialsCarousel';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BeachHouse = () => {

  const [activeItem, setActiveItem] = useState("Swimming Pool");

  const amenities = [
    "Swimming Pool",
    "Dining space",
    "On Site Parking",
    "Luxury Bedroom",
    "Lawn Space",
    "Air-conditioned",
    "Modular Kitchen",
    "Private Theatre",
  ];

  const cards = [
    {
      title: "Wedding Events",
      description:
        "Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens.",
      image: image1, 
    },
    {
      title: "Corporate Meetings",
      description:
        "Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens.",
      image: image2, 
    },
    {
      title: "Get-together",
      description:
        "Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens.",
      image: image3, 
    },
    {
      title: "Special Occasion",
      description:
        "Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens.",
      image: image3, 
    },
  ];

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
        <img
          src={Bannerimg}
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* Logo Section */}
        <div
          className="absolute top-0 bg-white bg-opacity-100 p-2 rounded-b-2xl ml-20"
          style={{ width: "200px", height: "180px" }}
        >
          <Link to="https://maahotels.in">
            <img
              src={logo}
              alt="Logo"
              className="mt-8 ml-6"
              style={{ width: "138.42px", height: "124.33px" }}
            />
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="absolute lg:bg-white lg:bg-opacity-100 rounded-[50px] text-black lg:top-0 top-[300px] lg:ml-[800px] lg:mt-20 ml-[130px]">
          <nav
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:w-[600px] lg:h-[45px] text-end"
            
          >
            <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center">
              <h2 className="text-md whitespace-nowrap lg:text-md lg:text-primary text-white">
                Quick Chat
              </h2>
              {/* Add rotation effect */}
              <HiOutlineArrowCircleRight className="lg:text-xl text-md ml-2 lg:text-gray-300 transition-transform duration-300 hover:rotate-90" />
            </div>
            <div className="flex items-center cursor-pointer justify-center">
              <h2 className="text-md whitespace-nowrap lg:text-md lg:text-primary text-white">
                About Us
              </h2>
              <HiOutlineArrowCircleRight className="lg:text-xl text-lg ml-2 lg:text-gray-300 transition-transform duration-300 hover:rotate-90" />
            </div>
            <div className="flex items-center cursor-pointer p-2 lg:justify-center">
              <h2 className="text-md whitespace-nowrap lg:text-md lg:text-primary text-white">
                Contact Us
              </h2>
              <HiOutlineArrowCircleRight className="lg:text-xl text-lg ml-2 lg:text-gray-300 transition-transform duration-300 hover:rotate-90" />
            </div>
            <div className="flex items-center cursor-pointer p-2 lg:justify-center">
              <h2 className="text-md whitespace-nowrap lg:text-md lg:text-primary text-white">
                Gallery
              </h2>
              <HiOutlineArrowCircleRight className="lg:text-xl text-lg ml-2 lg:text-gray-300 transition-transform duration-300 hover:rotate-90" />
            </div>
          </nav>
        </div>
      </div>
    </section>

    <PerfectForSection/>

{/* -------------------------------------------------------- */}
    <nav>
    <div className="flex justify-center items-center space-x-6  py-12 text-lg">
      {amenities.map((item, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg ${
            activeItem === item
              ? "bg-gray-700 text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
    </nav>

    {/* -------------------------------------------------------------------- */}

    <div className="grid grid-cols-1 md:grid-cols-[1000px_460px] gap-5 mt-4 mx-4 md:mx-4">
        <div className=" flex items-center justify-center">
          <img
            src={img}
            alt="Slideshow"
            className="w-full lg:w-[1234.6px] lg:h-[430px] rounded-3xl object-cover"
          />
        </div>
        <div className="bg-gray-100 p-10 flex flex-col justify-center rounded-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Swimming Pool
          </h3>
          <p className="text-md mb-6 mt-6 mx-2 text-center md:text-left">
            Global Giants: Uber Eats: Known for its wide range of restaurant
            partnerships and swift delivery times. DoorDash: Popular in the
            United States, offering a variety of food options and delivery
            methods. Grubhub: One of the pioneers in online food ordering, known
            for its user-friendly interface and extensive restaurant network.
           
          </p>
          <button className="rounded-full  h-12 flex items-center justify-center bg-primary text-gray-50 hover:bg-gray-50 hover:text-primary mx-auto md:mx-0">
            Enquiry Now
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}

      <div className="border border-primary mt-10 w-[1400px] ml-14"></div>
      
      {/* ----------------------------------------------------- */}

      <AmenitiesFacilities/>

      {/* ------------------------------------------------------- */}

      <div className=" py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4 text-primary ">
          This Place is Perfect Enjoyments for
        </h1>
        <p className="text-lg text-gray-600">
          Featuring top-notch facilities and amenities, including spacious
          bedrooms, modern kitchens, private gardens, and state-of-the-art
          security.
        </p>
        <button className="mt-6 px-[200px] py-3 bg-primary text-white rounded-md ">
          Enquiry Now
        </button>
      </div>

      <div className="flex justify-center flex-wrap lg:flex-nowrap">
              {cards.map((cards, index) => (
                <div key={index} className="text-center mx-4 mb-4 lg:mb-0 lg:w-1/3">
                  <img
                    src={cards.image}
                    alt={cards.title}
                    className="object-cover rounded-[30px] w-full h-[280px] md:h-[330px] lg:h-[350px] p-2"
                  />
                  <h3 className="text-lg md:text-4xl lg:text-2xl lg:mb-2 text-primary lg:text-start mt-2">{cards.title}</h3>
                  <p className="text-lg text-gray-500 lg:text-start">{cards.description}</p>
                </div>
              ))}
            </div>
    </div>

    {/* ------------------------------------------------------------- */}
     
     <Policies/>

     <Gallery/>

     <TestimonialsCarousel/>

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
     

      <section className=" py-12 px-4"  ref={contactRef}>
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
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
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

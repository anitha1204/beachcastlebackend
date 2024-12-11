import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing from react-icons
import { BiSolidQuoteAltRight } from "react-icons/bi";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      text: " Our visit to the beach villa was pure bliss. The villa’s stunning design, coupled with the breathtaking landscape, offered a perfect escape. We’re grateful to Nishtar sir, Rafica ma'am and the manager for the explaing us every landscape element and the opportunity to experience this paradise. Highly recommended for a serene getaway. Perfect wedding venue and best place to stay with family. It's a great place to spend your holiday overlooking the sea.",
      author: " -  Sharon Sherani Daniel"
    },
    {
      text: "Beautiful coastline scenery! Beach Castle House's magnificent gardens and immaculate coastline captured our hearts. It's a serene retreat in the midst of tropical splendour. A perfect combination of nature and luxury. The environment of Beach Castle House is very stunning.",
      author: " - Div Ya"
    },
    {
      text: "Nice ambience. Chettinadu style and good landscape. Well maintanence.The stunning landscape architecture beautiful garden and delightful staff.Perfect wedding venue and best place to stay with family. It's a great place to spend your holiday overlooking the sea.",
      author: "-  Priya"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative">
      {/* Large quote mark */}
      <div className="flex justify-center mb-8">
        <BiSolidQuoteAltRight size={64} className="text-primary" />
      </div>

      {/* Testimonial content */}
      <div className="relative min-h-[200px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <p className="text-center text-gray-500 text-md md:text-lg lg:text-lg mb-8 max-w-4xl mx-auto font-neue">
              {testimonial.text}
            </p>
            <p className="text-center text-primary text-lg font-neue">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

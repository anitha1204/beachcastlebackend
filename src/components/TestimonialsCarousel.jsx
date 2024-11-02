import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing from react-icons
import { Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      author: "Viki"
    },
    {
      text: "For more details, I recommend checking out their website or contacting them directly to explore what specific amenities they offer.",
      author: "John Doe"
    },
    {
      text: "Premises is incredible. It's maintained very well.",
      author: "Jane Smith"
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
        <Quote size={64} className="text-gray-300" />
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
            <p className="text-center text-gray-700 text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
              {testimonial.text}
            </p>
            <p className="text-center text-gray-500 font-medium">
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

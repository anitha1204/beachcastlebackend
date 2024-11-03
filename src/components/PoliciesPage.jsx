import React from 'react';
import PoliciesPageimg from '../assets/policiespageimg.png';

const PoliciesPage = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-0">
      <div className="max-w-4xl w-full p-6 lg:p-12 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold  text-primary mb-4 lg:mb-6">Our Policies</h1>
        
        <div className="mb-8">
          <p className="text-gray-600 text-base lg:text-lg">
            Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens, private gardens, and state-of-the-art security.
          </p>
        </div>
      </div>

      <div className="max-w-4xl w-full flex justify-center lg:px-4 lg:px-0">
        <img
          src={PoliciesPageimg}
          alt="Policies"
          className="lg:w-full lg:h-auto w-full h-60"
        />
      </div>
    </div>
  );
};

export default PoliciesPage;

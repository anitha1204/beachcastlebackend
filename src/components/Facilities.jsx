// import React from 'react';
// import img from '../assets/Rectangle 5.png';
// import img1 from '../assets/Rectangle 5.png';
// import img2 from '../assets/Rectangle 5.png';
// import img3 from '../assets/Rectangle 5.png';

// const Facilities = () => {
//   return (
//     <section className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20 bg-white">
//       {/* Heading */}
//       <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-4xl mx-auto lg:ml-20">
//         <div className="md:max-w-2xl lg:max-w-4xl text-center lg:text-start mt-5">
//           <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-10">
//             Our Facilities
//           </h1>
//           <p className="text-[12px] md:text-md lg:text-lg mb-6 mt-4">
//             Immerse yourself in the grandeur of our Chettinad-style villa. Known for its distinctive architectural features
//             and exquisite craftsmanship, the villa combines traditional elegance with modern luxury.
//           </p>
//           <div className="mt-6">
//             <button className="text-white bg-primary py-3 px-9 rounded-[50px] shadow-lg transition-transform duration-300 transform hover:scale-105">
//               View all
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Images Section */}
//       <div className="flex flex-wrap justify-center gap-6 mt-10">
//         {/* Individual Image Items with Hover Effect */}
//         <div className="relative group w-60 h-60">
//           <img src={img} alt="Swimming Pool" className="w-full h-full rounded-lg object-cover" />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
//             <h3 className="text-white text-lg">Swimming Pool</h3>
//             <p className="text-white text-sm">A relaxing oasis for a refreshing swim.</p>
//           </div>
//         </div>

//         <div className="relative group w-64 h-72">
//           <img src={img1} alt="Interior Design" className="w-full h-full rounded-lg object-cover" />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
//             <h3 className="text-white text-lg">Interior Design</h3>
//             <p className="text-white text-sm">Elegant interiors with a traditional touch.</p>
//           </div>
//         </div>

//         <div className="relative group w-72 h-60">
//           <img src={img2} alt="Garden Area" className="w-full h-full rounded-lg object-cover" />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
//             <h3 className="text-white text-lg">Garden Area</h3>
//             <p className="text-white text-sm">Lush greenery for peaceful walks.</p>
//           </div>
//         </div>

//         <div className="relative group w-64 h-80">
//           <img src={img3} alt="Service Area" className="w-full h-full rounded-lg object-cover" />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
//             <h3 className="text-white text-lg">Service Area</h3>
//             <p className="text-white text-sm">Modern facilities for all your needs.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;



import React from 'react';
import img from '../assets/Rectangle 5.png';
import img1 from '../assets/Courtyard.jpg';
import img2 from '../assets/Lawn3.jpg';
import img3 from '../assets/Rectangle 8.png';

const Facilities = () => {
  return (
    <section className="flex flex-col items-center px-4 md:px-10 lg:px-20 bg-white">
      {/* Heading */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 max-w-4xl mx-auto lg:ml-20">
        <div className="md:max-w-2xl lg:max-w-4xl text-center lg:text-start mt-5">
          <h1 className="text-xl md:text-4xl lg:text-3xl lg:mb-10">
            Our Facilities
          </h1>
          <p className="text-[12px] md:text-md lg:text-lg mb-6 mt-4">
            Immerse yourself in the grandeur of our Chettinad-style villa. Known for its distinctive architectural features
            and exquisite craftsmanship, the villa combines traditional elegance with modern luxury.
          </p>
          <div className="mt-6">
            <button className="text-white bg-primary py-3 px-9 rounded-[50px] shadow-lg transition-transform duration-300 transform hover:scale-105">
              View all
            </button>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 lg:mt-10">
        {/* First Image Item - Smaller Size */}
        <div className="relative group lg:w-60 lg:h-56 overflow-hidden rounded-[30px] mt-16">
          <img
            src={img}
            alt="Swimming Pool"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Other Image Items - Same Size */}
        {[img1, img2, img3].map((image, index) => (
          <div key={index} className="relative group w-64 h-72 overflow-hidden rounded-[30px]">
            <div className="w-full h-full overflow-hidden rounded-[30px] transition-all duration-300 group-hover:h-60">
              <img
                src={image}
                alt={`Facility ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full text-center py-2  rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-gray-900">
                Service Area
              </h3>
              <hr className="border-t-2 border-gray-300 mt-2 w-3/4 mx-auto" />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Facilities;

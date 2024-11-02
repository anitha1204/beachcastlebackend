// import React from 'react';
// import imag from '../assets/Lawn1.jpg';

// const OurFacilities = () => {
//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 max-w-6xl mx-auto">
//             {/* Image Section */}
//             <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                     src={imag}
//                     alt="Amenities"
//                     className="rounded-[20px] shadow-lg w-full md:w-[460px] h-[330px] lg:mt-28"
//                 />
//             </div>

//             {/* Text and List Section */}
//             <div className="w-full md:w-1/2">
//                 <h2 className="text-2xl font-semibold mb-4 text-primary">Our Amenities</h2>
//                 <p className="text-gray-600 mt-12 mb-12">
//                     Featuring top-notch facilities and amenities, including spacious
//                     bedrooms, modern kitchens, private gardens, and state-of-the-art
//                     security.
//                 </p>

//                 {/* Amenities List */}
//                 <ul className="space-y-4 text-xl">
//                     <div className="group hover:text-block transition-transform duration-300 transform hover:scale-105 font-semibold ">
//                         <li className="flex items-center">
//                             Free Wifi
//                         </li>
//                         <div className="flex-grow border-t border-gray-400 ml-2 group-hover:border-block-500 transition-colors duration-300 mt-4"></div>
//                     </div>

//                     <div className="group hover:text-block-500 transition-transform duration-300 transform hover:scale-105 font-semibold">
//                         <li className="flex items-center font-semibold">
//                             Ironing Facilities
//                         </li>
//                         <div className="flex-grow border-t border-gray-400 ml-2 group-hover:border-block-500 transition-colors duration-300 mt-4"></div>
//                     </div>

//                     <div className="group hover:text-block-500 transition-transform duration-300 transform hover:scale-105 font-semibold">
//                         <li className="flex items-center">
//                             Security systems
//                         </li>
//                         <div className="flex-grow border-t border-gray-400 ml-2 group-hover:border-block-500 transition-colors duration-300 mt-4"></div>
//                     </div>

//                     <div className="group hover:text-block-500 font-semibold transition-transform duration-300 transform hover:scale-105">
//                         <li className="flex items-center">
//                             Locker facility
//                         </li>
//                         <div className="flex-grow border-t border-gray-400 ml-2 group-hover:border-block-500 transition-colors duration-300 mt-4"></div>
//                     </div>

//                     <div className="group hover:text-block-500 font-semibold transition-transform duration-300 transform hover:scale-105">
//                         <li className="flex items-center">
//                             Flat Screen TVs
//                         </li>
//                         {/* <div className="flex-grow border-t border-gray-400 ml-2 group-hover:border-block-500 transition-colors duration-300 mt-4"></div> */}
//                     </div>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default OurFacilities;


import React from 'react';
import imag from '../assets/Lawn1.jpg';

const OurFacilities = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 max-w-6xl mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={imag}
                    alt="Amenities"
                    className="rounded-[20px] shadow-lg w-full max-w-[460px] h-auto lg:mt-28"
                />
            </div>

            {/* Text and List Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Our Amenities</h2>
                <p className="text-gray-600 lg:mt-12 mb-12">
                    Featuring top-notch facilities and amenities, including spacious
                    bedrooms, modern kitchens, private gardens, and state-of-the-art
                    security.
                </p>

                {/* Amenities List */}
                <ul className="space-y-4 text-xl px-6">
                    {[
                        "Free Wifi",
                        "Ironing Facilities",
                        "Security systems",
                        "Locker facility",
                        "Flat Screen TVs"
                    ].map((amenity, index) => (
                        <div key={index} className="group hover:text-primary transition-transform duration-300 transform hover:scale-105 font-semibold">
                            <li className="flex items-center">
                                {amenity}
                            </li>
                            {index < 4 && (
                                <div className="flex-grow border-t border-gray-400 ml-2 group-hover:border-primary transition-colors duration-300 mt-4"></div>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurFacilities;

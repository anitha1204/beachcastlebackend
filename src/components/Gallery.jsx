// import React from 'react';
// import imgpgallery from '../assets/Rectangle 5.png'; 
// import imgpgallery1 from '../assets/Rectangle 8.png'; 
// import imgpgallery2 from '../assets/Rectangle 15.png'; 
// import imgpgallery3 from '../assets/Rectangle 16.png'; 
// import imgpgallery4 from '../assets/Rectangle 18.png'; 
// import imgpgallery5 from '../assets/Rectangle 7.png'; 

// const Gallery = () => {
//   const images = [
//     {
//       id: 1,
//       src: imgpgallery,
//       alt: "Garden pathway with palm trees",
//       className: "col-span-1"
//     },
//     {
//       id: 2,
//       src: imgpgallery1,
//       alt: "White building entrance",
//       className: "col-span-1"
//     },
//     {
//       id: 3,
//       src: imgpgallery2,
//       alt: "Modern kitchen interior",
//       className: "col-span-1"
//     },
//     {
//       id: 4,
//       src: imgpgallery3,
//       alt: "Garden view",
//       className: "col-span-1"
//     },
//     {
//       id: 5,
//       src: imgpgallery4,
//       alt: "Swimming pool",
//       className: "col-span-1"
//     },
//     {
//       id: 6,
//       src: imgpgallery5,
//       alt: "Another beautiful scene",
//       className: "col-span-1"
//     }
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4">
//       <div className="mb-8">
//         <h1 className="text-3xl font-semibold mb-4">Gallery</h1>
//         <p className="text-gray-600">
//           Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens,
//           private gardens, and state-of-the-art security.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {images.map((image) => (
//           <div key={image.id} className={`overflow-hidden group ${image.className}`}>
//             <div className="relative aspect-[4/3]">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium">
//         See all Images
//       </button>
//     </div>
//   );
// };

// export default Gallery;


import React from 'react';
import imgpgallery from '../assets/Rectangle 5.png'; 
import imgpgallery1 from '../assets/Rectangle 8.png'; 
import imgpgallery2 from '../assets/Rectangle 15.png'; 
import imgpgallery3 from '../assets/Rectangle 16.png'; 
import imgpgallery4 from '../assets/Rectangle 18.png'; 
import imgpgallery5 from '../assets/Rectangle 7.png'; 

const Gallery = () => {
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

  return (
    <section ref={galleryRef}>
        <div className="w-full mt-16">
          <div className="mb-8 max-w-6xl mx-auto px-4 lg:px-8 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Gallery</h1>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Featuring top-notch facilities and amenities, including spacious bedrooms, modern kitchens,
              <br className="hidden md:block" />
              private gardens, and state-of-the-art security.
            </p>
          </div>


          {/* First Row with different sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4 lg:mr-12">
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
          <div className="grid grid-cols-1 md:grid-cols-[300px_400px_400px_250px] gap-4 lg:ml-[100px] ml-3">
            {/* Button only visible on lg screens */}
           
              <button className="mt-20 text-blue-600 hover:text-blue-800 font-medium ml-24">
                See all Images
              </button>

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
  );
};

export default Gallery;

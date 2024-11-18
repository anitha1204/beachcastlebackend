// import React from 'react';

// const ContactSection = () => {
//   return (
//     <div className="lg:mt-10 ">


//       {/* Contact Us Section */}
//       <footer className=" text-primary py-10 ">
//         <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
//           {/* Left Section */}
//           <div className="">
//             <h2 className="text-2xl lg:text-3xl mb-4 text-primary">Contact Us</h2>
//             <p className="text-sm md:text-md lg:text-lg mb-8 mt-3 text-gray-500">
//               Ready to start planning your unforgettable event? Contact us today to learn more about Beach Castle and to book your date. Our dedicated team is here to assist you in creating the perfect celebration.
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-4 lg:ml-28 fond-bold lg:text-end">
//             <p className='font-bold '>
//               <a href="https://beachcastle.co.in/" className="text-primary">www.beachcastle.co.in/</a>
//             </p>
//             <p className='font-bold '>13, Sea Shell Avenue, Akkarai, ECR, Chennai - 600119</p>
//             <p className='font-bold '>(+91) 88388 92623 | theglasshouseecr@gmail.com</p>
//           </div>
//         </div>
//       </footer>
//       <div className='flex flex-col md:flex-row justify-between items-center mb-4 text-sm text-primary'>
//         <p className='space-x-6 lg:ml-[130px]'>Copyright © 2024 BeachCastle.All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;


import React from 'react';

const ContactSection = () => {
  return (
    <div className="lg:mt-10">
      {/* Contact Us Section */}
      <footer className="text-primary py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 font-neue">
          {/* Left Section */}
          <div>
            <h2 className="text-lg lg:text-3xl mb-4 text-primary">Contact Us</h2>
            <p className="text-sm md:text-md lg:text-lg mb-8 mt-3 text-gray-500">
              Ready to start planning your unforgettable event? Contact us today to learn more about Beach Castle and to book your date. Our dedicated team is here to assist you in creating the perfect celebration.
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-4 lg:ml-28 font-bold lg:text-end">
            <p className="font-bold">
              <a href="https://beachcastle.co.in/" className="text-primary">
                www.beachcastle.co.in/
              </a>
            </p>
            <p className="font-bold">13, Sea Shell Avenue, Akkarai, ECR, Chennai - 600119</p>
            <p className="font-bold">
              (+91) 88388 92623 | theglasshouseecr@gmail.com
            </p>
          </div>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-sm text-primary font-neue">
        <p className="space-x-6 lg:ml-[130px]">Copyright © 2024 BeachCastle. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactSection;

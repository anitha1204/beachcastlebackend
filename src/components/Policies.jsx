import React from "react";

const Policies = () => {
  return (
    <div className="bg-primary text-white py-16 px-[300px] max-w-10xl md:mx-4 rounded-3xl">
      {/* Two-Column Layout with Divider */}
      <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-12">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-semibold lg:ml-28">Our Policies</h2>
          <div>
            <h3 className="text-xl font-bold mt-10">Sound Policy</h3>
            <p className="text-gray-300">
              As we are situated in a VIP residential area, we have a strict
              policy against loud music and excessive noise.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Decor Policy</h3>
            <p className="text-gray-300">
              Both in-house and external decorators are welcome.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Room Availability</h3>
            <p className="text-gray-300">7 air-conditioned rooms.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Catering Policy</h3>
            <p className="text-gray-300">
              Both in-house and outside caterers are permitted.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-l-2 border-red h-[320px] mt-24"></div>

        {/* Right Column */}
        <div className="flex-1 space-y-6">
        <p className="text-gray-300">
              As we are situated in a VIP residential area, we have a strict
              policy against loud music and excessive noise.
            </p>
          <div>
            <h3 className="text-xl font-bold mt-10">Parking</h3>
            <p className="text-gray-300">
              Valet parking is provided. Ample parking space is available
              on-site.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Event Spaces</h3>
            <p className="text-gray-300">
              Both indoor and outdoor areas are available.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">DJ Policy</h3>
            <p className="text-gray-300">
              An in-house DJ is available; outside DJs are not permitted.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Small Party Venue</h3>
            <p className="text-gray-300">
              Suitable for events with fewer than 50 guests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;

import React from "react";

const Hero2 = () => {
  return (
    <div>
      <div className="container h-[500px] mx-auto flex items-center justify-around gap-3 mb-7">
        <div className="right h-[100%]">
          <img
            className="w-[80%] h- "
            src="https://preview.colorlib.com/theme/bakery2/img/story/story-2.jpg"
          />
        </div>
        <div className="left w-[50%] text-left h-[100%]">
          <h1 className="text-[#222222] text-[2.9rem] text-left mb-[-1rem] font-semibold">
            Honey
          </h1>
          <h1 className="text-[#222222] text-[2.9rem] text-left mb-[0rem] font-semibold">
            Chocolate Pie
          </h1>

          <p className="w-[69%] text-gray-500">
            Who are in extremely love with eco friendly system. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="w-[69%] text-gray-500 mt-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi aliquip consequat.
          </p>
          <button className="bg-[#F42F2C] px-5 py-3 text-white rounded-md mt-2 text-[14px] font-md">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

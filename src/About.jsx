import React from "react";

const About = () => {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: "Playfair Display", serif;
        }
      `}</style>
      <div className="container w-[70%] mx-auto flex items-center justify-around gap-2 mt-40 mb-12">
        <div className="left w-[50%] text-left ">
          <h1 className="text-[#222222] text-[2.9rem] text-left mb-[-1rem] font-semibold mt-[-7rem]">
            About{" "}
          </h1>
          <h1 className="text-[2.9rem] text-left font-semibold">Our Story</h1>
          <p className="w-[69%] text-gray-500">
            Who are in extremely love with eco friendly system. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.{" "}
          </p>
          <p className="w-[69%] text-gray-500 mt-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi aliquip consequat.
          </p>
        </div>
        <div className="right w-[50%]">
          <img src="https://preview.colorlib.com/theme/bakery2/img/story/story-1.jpg" />
        </div>
      </div>
    </>
  );
};

export default About;

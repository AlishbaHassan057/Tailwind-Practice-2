import React from "react";

const Menu = () => {
  return (
    <>
      <div className="container mx-auto w-[70%] ">
        <h1 className="text-5xl text-center font-semibold">Our Menu</h1>
        <h2 className="text-center font-extralight mb-32 text-[13.5px] mt-4">
          EXPLORE
        </h2>
        <div className="container flex items-center justify-between ">
          <div className="right w-[60%] ">
            <h1 className="text-5xl font-semibold">Starter</h1>
            <p
              className="w-[80%] text-gray-500 mt-3
            "
            >
              Who are in extremely love with eco friendly system lorem ipsum
              dolor sit amet, consectetur adipisicing elit
            </p>
            {/* Wonton */}
            <div className="flex font-semibold items-center justify-between w-[80%] text-[1.2rem] mt-10">
              <div className="wonton">
                <h1>Wonton</h1>
              </div>
              <div className="price">
                <h1>$5.00</h1>
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              Usage of the internet is becoming more common due{" "}
            </p>
            <hr className="w-[80%] mt-4"></hr>
            {/* Wonton */}
            <div className="flex font-semibold items-center justify-between w-[80%] text-[1.2rem] mt-5">
              <div className="wonton">
                <h1>Wonton</h1>
              </div>
              <div className="price">
                <h1>$5.00</h1>
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              Usage of the internet is becoming more common due{" "}
            </p>
            <hr className="w-[80%] mt-4"></hr>
            {/* Wonton */}
            <div className="flex font-semibold items-center justify-between w-[80%] text-[1.2rem] mt-5">
              <div className="wonton">
                <h1>Wonton</h1>
              </div>
              <div className="price">
                <h1>$5.00</h1>
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              Usage of the internet is becoming more common due{" "}
            </p>
            <hr className="w-[80%] mt-4"></hr>
            {/* Wonton */}
            <div className="flex font-semibold items-center justify-between w-[80%] text-[1.2rem] mt-5">
              <div className="wonton">
                <h1>Wonton</h1>
              </div>
              <div className="price">
                <h1>$5.00</h1>
              </div>
            </div>
            <p className="text-gray-600 mt-1">
              Usage of the internet is becoming more common due{" "}
            </p>
            <hr className="w-[80%] mt-4"></hr>
          </div>

          <div className="left">
            <img src="https://preview.colorlib.com/theme/bakery2/img/menu.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

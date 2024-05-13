import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://preview.colorlib.com/theme/bakery2/img/slider/slider-1.jpg",
    "https://preview.colorlib.com/theme/bakery2/img/slider/slider-2.jpg",
    "https://preview.colorlib.com/theme/bakery2/img/slider/slider-3.jpg",
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="carousel w-full overflow-hidden">
          <div
            className="carousel-inner flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item flex-shrink-0 w-full">
                <img src={image} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

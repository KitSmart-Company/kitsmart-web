"use client";
import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/58a2c984-91fd-11ef-8673-4a8976bf3116.jpeg", 
  "https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/a954d3a0-8aff-11ef-b70a-deaabc009b13.png",
  "https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/cf623f0d-dced-11ec-99c6-e6270149beaf.jpeg",
  "https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/8ac3a441-5558-11ef-9be0-de62d5e9bd81.jpeg",
];

export function CarouselPlugin() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handleIndicatorClick = (index: any) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: any) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (diff > 50) {
      handlePrev();
      setIsDragging(false);
    } else if (diff < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
       <img
        className={`w-full h-full mb-4 rounded-3xl transition-opacity duration-500 object-cover ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        src="https://ir-3.ozone.ru/s3/cms/e7/t3d/wc1450/1416_100_tochka_vhoda_na_ml_18.png"
      />
      <div className="relative flex items-center gap-3">
        
        <div className="relative m-auto w-full">
          <img
            className={`w-full h-[300px] rounded-3xl transition-opacity duration-500 object-cover ${
              isTransitioning ? "" : ""
            }`}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            onLoad={handleTransitionEnd}
          />

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft color="#7C3AED" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
          >
            <ChevronRight color="#7C3AED" />
          </button>
          
          <div className="flex space-x-2 mt-2 justify-center items-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-8 h-[2px] rounded-full ${
                  currentIndex === index ? "bg-[#7C3AED]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

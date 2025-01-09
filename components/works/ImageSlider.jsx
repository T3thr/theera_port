'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/slides/Uxcoffee/1.png',
    '/slides/Uxcoffee/2.png',
    '/slides/Uxcoffee/3.png',
    '/slides/Uxcoffee/4.png',
    '/slides/Uxcoffee/5.png',
    '/slides/Uxcoffee/6.png',
    '/slides/Uxcoffee/7.png',
    '/slides/Uxcoffee/8.png',
    '/slides/Uxcoffee/9.png',
    '/slides/Uxcoffee/10.png',
    '/slides/Uxcoffee/11.png',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const touchStartXRef = useRef(0);
  const touchCurrentXRef = useRef(0);
  const interactionTimeout = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 20000);
    return () => clearInterval(interval);
  }, []);

  const resetArrowTimeout = () => {
    clearTimeout(interactionTimeout.current);
    setShowArrows(true);
    interactionTimeout.current = setTimeout(() => setShowArrows(false), 1500);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchCurrentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchCurrentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartXRef.current - touchCurrentXRef.current;
    if (deltaX > 50) handleNext();
    if (deltaX < -50) handlePrevious();
    resetArrowTimeout();
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Image Slider */}
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full pb-12">
            <Image src={image} alt={`Slide ${index}`} width={1200} height={800} className="object-cover w-full" />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
}

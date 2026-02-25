'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ images = [] }) {

  const slicedImages = images.slice(1);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!slicedImages.length) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slicedImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slicedImages]);

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? slicedImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slicedImages.length);
  };

  if (!slicedImages.length) return null;

  return (
    <div className="relative w-full">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-2xl">
        {slicedImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`slide-${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 gap-2">
        {slicedImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full ${
              active === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30"
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50">
          ‹
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30"
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50">
          ›
        </span>
      </button>
    </div>
  );
}
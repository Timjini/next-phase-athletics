import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Slide: React.FC = () => {
  const slides = [
    {
      src: "/images/dwain-usain.webp",
      alt: "Dwain Chambers racing against Usain Bolt",
    },
    {
      src: "/images/dwain-race1.jpg",
      alt: "Dwain Chambers coaching athletes",
    },
    {
      src: "/images/dwain-race2.webp",
      alt: "Dwain Chambers in competition",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Debugging: Log current visibility
  useEffect(() => {
    if (isMounted) {
      console.log(`Mobile slide visibility - Current slide: ${currentSlide}`);
    }
  }, [currentSlide, isMounted]);

  if (!isMounted) {
    return (
      <div className="w-full aspect-video bg-gray-200 rounded-lg shadow-2xl flex items-center justify-center">
        <p>Loading slideshow...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            onError={(e) => {
              console.error(`Failed to load image: ${slide.src}`);
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback-image.jpg';
            }}
          />
        </div>
      ))}

      {/* Navigation dots - always visible */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Fallback for debugging */}
      {slides.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <p className="text-black">No slides available</p>
        </div>
      )}
    </div>
  );
};
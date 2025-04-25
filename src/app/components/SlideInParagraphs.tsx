"use client";
import { useState, useEffect } from "react";
import { paragraphs } from "../lib/constants";

const SlideInParagraphs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-advance effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % paragraphs.length);
        setIsVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToParagraph = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setIsVisible(true);
    }, 150); // Faster transition for manual clicks
  };

  return (
    <div className="flex flex-col items-center">
      {/* Paragraph with slide effect */}
      <div className="paragraph-slider min-h-[180px] w-full mb-4">
        <p 
          className={`text-lg text-gray-700 transition-opacity duration-300 w-72 h-84 lg:h-72 lg:w-96 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {paragraphs[activeIndex]}
        </p>
      </div>

      {/* Navigation circles */}
      <div className="flex gap-2">
        {paragraphs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToParagraph(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex 
                ? "bg-yellow-400 scale-125" 
                : "bg-gray-200 scale-100"
            }`}
            aria-label={`Go to paragraph ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideInParagraphs;
import React from 'react';
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover opacity-30"
          src="/images/about-hero.jpg"
          alt="Athletes training"
          height={600}
          width={600}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-yellow-400">NextPhase</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Elevating athletes through science-backed training and championship
          experience
        </p>
      </div>
    </section>
  );
};

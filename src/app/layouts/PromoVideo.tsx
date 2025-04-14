import React from "react";

const PromoVideoSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-wrap items-center bg-gradient-to-b from-[#0046CC] to-[#091F35] justify-center  overflow-hidden">
        <div className=" flex items-center justify-center z-30">
          <div className="text-center px-4">
            <h2 className="text-2xl">
              Greatness isn&apos;t Born <span className="block">— It&apos;s <strong className="text-[#FFD700]">BUILT.</strong></span>
            </h2>
          </div>
        </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Video container */}
      <div className="relative w-full max-w-4xl h-[70vh] mx-auto rounded-lg overflow-hidden shadow-2xl z-20">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-white text-center">
            <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">Promo video</p>
          </div>
        </div>
    </div>
    </section>
  );
};

export default PromoVideoSection;
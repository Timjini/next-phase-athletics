import React, { useState } from "react";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Shadcn modal
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background - Image with optional video overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dwain3.webp"
            alt="Dwain Chambers training athletes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-1" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">NextPhase</span> Presents<br/>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Train with <span className="text-yellow-400">Olympic Legend</span>
            <br />
            <span className="text-yellow-400 mb-4 text-4xl md:text-6xl font-extrabold leading-tight uppercase">Dwain Chambers</span>
          </h2>
          
          <p className="text-xl md:text-xl mb-10 max-w-2xl mx-auto">
            A once-in-a-lifetime camp designed<br/> 
            to elevate your speed, strength,
            and mindset.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camps/xlr8"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Reserve Your Spot Now
            </Link>

            <button
              onClick={() => setIsVideoPlaying(true)}
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full border border-white/30 transition-all duration-300"
            >
              <PlayCircleIcon className="h-6 w-6" />
              Watch Preview
            </button>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
          </div>
        </div>
      </section>

      {/* Shadcn Modal for Video */}
      <Dialog open={isVideoPlaying} onOpenChange={setIsVideoPlaying}>
      <DialogContent className="fixed bg-black/90 z-50 flex items-center justify-center p-4 w-[90vw] h-[90vh] max-w-[1200px] max-h-[800px]">
  <video
    autoPlay
    controls
    className="w-full h-full rounded-lg object-contain"
    onEnded={() => setIsVideoPlaying(false)}
  >
    <source src="/videos/dwain-sprint2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</DialogContent>
</Dialog>
    </>
  );
};

export default HeroSection;

import React, { useState } from 'react';
import Image from 'next/image';
import { PlayIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const MediaSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample media assets
  const galleryImages = [
    { src: '/media/camp-drills.jpg', alt: 'Athletes practicing sprint drills' },
    { src: '/media/dwain-coaching.jpg', alt: 'Dwain Chambers providing one-on-one coaching' },
    { src: '/media/group-training.jpg', alt: 'Group training session at XLR8 camp' },
    { src: '/media/classroom.jpg', alt: 'Classroom session on sports psychology' },
    { src: '/media/finish-line.jpg', alt: 'Athletes crossing finish line during time trials' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Behind</span> the Scenes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an inside look at the XLR8 training experience
          </p>
        </div>

        {/* Video Teaser */}
        <div className="mb-20">
          <div 
            className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setIsVideoPlaying(true)}
          >
            {/* Thumbnail overlay */}
            <Image
              src="/media/teaser-thumbnail.jpg"
              alt="XLR8 Camp teaser video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all group-hover:bg-black/30">
              <div className="bg-yellow-400 p-4 rounded-full">
                <PlayIcon className="h-12 w-12 text-black" />
              </div>
            </div>
            <p className="absolute bottom-6 left-6 text-xl font-medium">Watch the Camp Teaser</p>
          </div>

          {/* Video Modal */}
          {isVideoPlaying && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setIsVideoPlaying(false)}>
              <div className="relative w-full max-w-4xl">
                <button 
                  className="absolute -top-12 right-0 text-white hover:text-yellow-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVideoPlaying(false);
                  }}
                >
                  Close
                </button>
                <video 
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src="/media/xlr8-teaser.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Gallery: Past Camp Moments</h3>
          
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 rounded-xl overflow-hidden mb-4">
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button 
                onClick={prevImage}
                className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-yellow-400' : 'bg-gray-500'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextImage}
                className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Image Caption */}
            <p className="text-center mt-4 text-gray-300">
              {galleryImages[currentImageIndex].alt}
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">Follow the journey <span className="text-yellow-400">@nextphasexlr8</span></p>
          <div className="flex justify-center space-x-6">
            {['Instagram', 'Twitter', 'YouTube'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full font-medium transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
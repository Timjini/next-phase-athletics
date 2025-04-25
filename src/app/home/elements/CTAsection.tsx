import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTASection: React.FC = () => {
  // Sticky CTA visibility state
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  
  // Logo slider setup
  const sliderRef = useRef<HTMLDivElement>(null);
  const logos = [
    { name: 'UK Athletics', src: '/icons/basketball-illustration.png' },
    { name: 'Nike', src: '/icons/confidence-illustration.png' },
    { name: 'BBC Sport', src: '/icons/hockey-illustration.png' },
    { name: 'Olympic Channel', src: '/icons/Lacrosse-illustration.png' },
    { name: 'ESPN', src: '/icons/soccer-illustration.png' },
    { name: 'World Athletics', src: '/icons/track-illustration.png' },
  ];

  // Double the logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > window.innerHeight * 0.5;
      setIsStickyVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll logo slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let scrollAmount = 0;
    const speed = 1.5; // Increased scroll speed

    const animate = () => {
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {/* Main CTA Section */}
            {/* Enhanced Logo Marquee */}
            <div className="bg-gray-900 py-12 overflow-hidden"> {/* Increased padding */}
        <div 
          ref={sliderRef}
          className="flex items-center space-x-16 w-max" // Increased spacing
          style={{ willChange: 'transform' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 px-4"> {/* Added horizontal padding */}
              <div className="relative w-40 h-24"> {/* Larger container */}
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  sizes="(max-width: 768px) 400px, 400px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Speed?
          </h2>
          <div className='mb-4'>
          <span className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Limited spots available for the next XLR8 training camp
          </span>
          </div>
          <Link href="/camps/xlr8" className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
            Join the Camp Now
          </Link>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-black py-4 px-4 shadow-lg transition-transform duration-300 z-50 ${isStickyVisible ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <p className="text-white font-medium text-sm md:text-base">Limited spots remaining</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-full text-sm whitespace-nowrap">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default CTASection;
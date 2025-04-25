import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const AboutCampSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
            About The <span className="text-yellow-500">XLR8 Camp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transformative experience designed by Olympic sprinter <span className='text-2xl uppercase font-extrabold text-yellow-400'>Dwain Chambers</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-12">
            {/* What It Is */}
            <div>
              <h3 className="text-2xl font-bold text-gray-500 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">1</span>
                </span>
                What It Is
              </h3>
              <p className="text-lg text-gray-400">
                An intensive training program that combines elite sprint techniques with 
                mental conditioning. Unlike typical camps, we focus on the complete 
                athlete development - speed mechanics, explosive power, recovery science, 
                and champion mindset training.
              </p>
            </div>

            {/* Who It's For */}
            <div>
              <h3 className="text-2xl font-bold text-gray-500 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">2</span>
                </span>
                Who It&apos;s For
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-lg text-gray-400">
                    <strong>Competitive Athletes:</strong> Track, football, hockey, rugby, basketball, lacrosse, tennis athletes looking to enhance their speed
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-lg text-gray-400">
                    <strong>Athletes:</strong> Middle school, high school , and college.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-lg text-gray-400">
                    <strong>Professional Athletes.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Date/Location/Duration */}
            <div>
              <h3 className="text-2xl font-bold text-gray-500 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">3</span>
                </span>
                Program Details
              </h3>
              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <div className="flex">
                  <div className="font-bold w-28 text-gray-400">Dates:</div>
                  <div>Starting on the June 30th, 2025 (Summer Session)</div>
                </div>
                <div className="flex">
                  <div className="font-bold w-28 text-gray-400">Location:</div>
                  <a className='text-blue-800' href="https://www.google.com/maps?q=Lake+Forest+Academy,+Lake+Forest,+IL" target="_blank" rel="noopener noreferrer">
                  Lake Forest Academy Track, Illinois
                  </a>
                </div>
                <div className="flex">
                  <div className="font-bold w-28 text-gray-400">Duration:</div>
                  <div>4-Day Intensive</div>
                </div>
                <div className="flex">
                  <div className="font-bold w-28 text-gray-400">Capacity:</div>
                  <div>Limited</div>
                </div>
              </div>
            </div>

            {/* What Participants Get */}
            <div>
              <h3 className="text-2xl font-bold text-gray-500 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold">4</span>
                </span>
                What You&apos;ll Get
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-500">
                    <strong>Professional Coaching:</strong> Session with Dwain Chambers, ex-NFL athlete and experienced coaches.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-500">
                    <strong>Care Kit:</strong> XLR8 performance T-shirt, XLR8 water bottler, XLR8 backpack.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-500">
                    <strong>Post-Camp Support:</strong> 12 weeks follow-up program.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial/Quote */}
        <div className="mt-20 bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-400">
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl italic text-gray-800 mb-4">
              &quot;This isn&apos;t just about running faster—it&apos;s about understanding your body&apos;s potential. 
              We&apos;ll break down every element of sprinting and rebuild you as a complete athlete.&quot;
            </p>
            <footer className="font-bold text-gray-500 uppercase text-2xl">— Dwain Chambers</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutCampSection;
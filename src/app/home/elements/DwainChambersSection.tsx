import React from "react";
import Image from "next/image";
import { Slide } from "./Silde";
import Link from "next/link";

const DwainChambersSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 text-white">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
      Train With a <span className="text-yellow-400 uppercase">Legend</span>
    </h2>

    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Image (Left) - Modified for mobile */}
      <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px]">
        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <Slide />
        </div>
      </div>

      {/* Content (Right) */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Why Dwain Chambers? */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            Why Dwain Chambers?
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              One of the fastest sprinters in history (9.87s PB, sub-10 over 50 times).
            </li>
            <li>
              Competed against legends like Usain Bolt in iconic races (2008 London GP).
            </li>
            <li>
              Reigning World Masters Champion & record holder—proving longevity in speed.
            </li>
            <li>
              Trained under 13 elite coaches, distilling the best methods for XLR8 athletes.
            </li>
          </ul>
        </div>

        {/* Why He's the Perfect Mentor */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            Why He&apos;s the Perfect Mentor
          </h3>
          <p className="text-lg">
            Dwain doesn&apos;t just teach speed—he transforms how athletes move, think, and compete. 
            His firsthand experience racing at the highest level (Olympics, World Championships) 
            gives him unparalleled insight into what it takes to break barriers.
          </p>
        </div>

        {/* Quote (if available) */}
        <blockquote className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-400 italic">
          <p className="text-lg">
            &quot;XLR8 isn&apos;t just about running faster—it&apos;s about mastering your body, your mind, 
            and the science of speed. I&apos;m here to pass on everything I&apos;ve learned.&quot;
          </p>
          <p className="mt-2 font-semibold">— Dwain Chambers</p>
        </blockquote>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <Link href="/camps/xlr8" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
        Join XLR8 Now
      </Link>
    </div>
  </div>
</section>
  );
};

export default DwainChambersSection;
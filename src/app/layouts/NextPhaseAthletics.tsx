import React from "react";
import Image from "next/image";
import { CarouselOrientation } from "../components/CarouselOrientation";
import { icons, paragraphs } from "../lib/constants";

const NextPhaseAthletics = () => {
 
  return (
    <section className="bg-gradient-to-b from-[#09131D] to-[#0046CC] min-h-[75vh] pb-12">
      <div className="relative gap-8 items-center py-8 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 glassMorphic">
        <div className="grid grid-cols-2">
          <div className="col-span-1 relative mb-2">
            {icons.slice(3, 6).map((icon, index) => (
              <div
                key={index}
                className="py-2 flex flex-col items-center justify-center"
              >
                <div className="flex justify-center">
                  <Image
                    src={icon.image}
                    alt="Basketball Illustration"
                    className="object-contain"
                    width={200}
                    height={200}
                  />
                </div>
                <span className="uppercase text-center font-bold text-white text-sm  bg-gradient-to-l from-[#02386e] to-[#002366] px-2  rounded-lg ">
                  {icon.title}
                </span>
              </div>
            ))}
          </div>
          <div className="col-span-1 relative mt-6">
            {icons.slice(0, 3).map((icon, index) => (
              <div
                key={index}
                className="py-2 flex flex-col items-center justify-center"
              >
                <div className="flex justify-center">
                  <Image
                    src={icon.image}
                    alt="Basketball Illustration"
                    className="object-contain"
                    width={200}
                    height={200}
                  />
                </div>
                <span className="uppercase text-center font-bold text-white text-sm  bg-gradient-to-l from-[#02386e] to-[#002366] px-2  rounded-lg ">
                  {icon.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="mb-6 text-4xl mt-2  text-center uppercase">
            Speed. Power. Mindset.
          </h2>
          <CarouselOrientation data={paragraphs} />
        </div>
      </div>
    </section>
  );
};

export default NextPhaseAthletics;

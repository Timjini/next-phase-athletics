import React from "react";
import Image from "next/image";
import { CarouselOrientation } from "../components/CarouselOrientation";
import PromoVideo from "../components/PromoVideo";

const NextPhaseAthletics = () => {
  const icons = [
    {
      image: "/images/basketball-illustration.png",
      title: "basketball",
    },
    {
      image: "/images/confidence-illustration.png",
      title: "confidence",
    },
    {
      image: "/images/track-illustration.png",
      title: "track",
    },
    {
      image: "/images/us-football.png",
      title: "football",
    },
    {
      image: "/images/soccer-illustration.png",
      title: "soccer",
    },
    {
      image: "/images/lacrosse-illustration.png",
      title: "lacrosse",
    },
  ];

  const paragraphs = [
    "Every summer, we host immersive speed, agility, and strength camps led by world-class athletes — individuals who have competed at the highest levels and now dedicate their expertise to developing young talent. From middle school to college athletes, our programs are designed to push boundaries, sharpen skills, and elevate mindset.",
    "Whether you're a track athlete chasing speed, a football player craving explosiveness, or a soccer player seeking control and agility, NextPhase delivers the tools, mentorship, and intensity to get you there. Athletes from all sports — basketball, hockey, baseball, lacrosse, cross country and beyond — find their competitive edge in our training systems.",
    "But our mission is bigger than just physical performance. We believe that mental strength, confidence, and consistency are just as vital as the reps you grind through. That’s why we bring a champion’s mindset into every drill, every session, every day.",
    "At NextPhase Athletics, you’re not just working out — you’re leveling up. This is where your next chapter begins. This is where champions start.",
  ];

  return (
    <section className="bg-gradient-to-b from-[#09131D] to-[#0046CC] min-h-screen pb-8">
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
        <PromoVideo />
    </section>
  );
};

export default NextPhaseAthletics;

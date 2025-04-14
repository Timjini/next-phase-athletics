import React from "react";
import Image from "next/image";

const NextPhaseAthletics = () => {
  const icons = [
    "/images/basketball-illustration.png",
    "/images/confidence-illustration.png",
    "/images/track-illustration.png",
    "/images/us-football.png",
    "/images/soccer-illustration.png",
    "/images/lacrosse-illustration.png",
  ];

  return (
    <section className="bg-gradient-to-b from-[#09131D] to-[#0046CC] min-h-screen">
      <div className="relative gap-8 items-center py-8 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 glassMorphic">
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 relative mb-2">
          {icons.slice(3, 6).map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="Basketball Illustration"
              className=""
              width={250}
              height={250}
            />
          ))}
        </div>
        <div className="col-span-1 relative mt-6">
          {icons.slice(0, 3).map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="Basketball Illustration"
              className=""
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="mb-6 text-3xl mt-2 uppercase">Speed. Power. Mindset.</h2>
        <p className="mb-6 font-light md:text-lg pt-2">
         Every summer, we host immersive speed, agility, and strength camps led by world-class athletes — individuals who have competed at the highest levels and now dedicate their expertise to developing young talent. From middle school to college athletes, our programs are designed to push boundaries, sharpen skills, and elevate mindset.
        </p>
        <p className="mb-6 font-light md:text-lg pt-2">
          Whether you&apos;re a track athlete chasing speed, a football player craving explosiveness, or a soccer player seeking control and agility, NextPhase delivers the tools, mentorship, and intensity to get you there. Athletes from all sports — basketball, hockey, baseball, lacrosse, cross country and beyond — find their competitive edge in our training systems.
        </p>
        <p className="mb-6 font-light md:text-lg pt-2">
          But our mission is bigger than just physical performance. We believe that mental strength, confidence, and consistency are just as vital as the reps you grind through. That’s why we bring a champion’s mindset into every drill, every session, every day.
        </p>
        <p className="mb-6 font-light md:text-lg pt-2">
        At NextPhase Athletics, you’re not just working out — you’re leveling up.
        This is where your next chapter begins.
        This is where champions start.
        </p>
      </div>
      </div>
    </section>
  );
};

export default NextPhaseAthletics;

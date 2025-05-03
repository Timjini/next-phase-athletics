import React from "react";
import { HeroSection } from "../components/about/HeroSection";
import { WhoWeAre } from "../components/about/WhoWeAre";
import { PhilosophySection } from "../components/about/PhilosophySection";
import { PastEvent } from "../components/about/PastEvents";
import { TrustIndicator } from "../components/about/TrustIndicator";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhoWeAre />
      <PhilosophySection />
      <PastEvent />
      <TrustIndicator />
    </div>
  );
};

export default AboutPage;

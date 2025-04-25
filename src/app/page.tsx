"use client";
import { useEffect, useState } from "react";
// import { Features } from './layouts/Features';
import { ModernHero } from "./layouts/ModernHero";
import Athletics from "./layouts/NextPhaseAthletics";
import SocialMediaSection from "./layouts/SocialMediaSection";
import Loader from "./components/Loader";
import HeroSection from "./home/elements/HeroSection";
import DwainChambersSection from "./home/elements/DwainChambersSection";
import AboutCampSection from "./home/elements/AboutTheCamp";
import LearningOutcomesSection from "./home/elements/LearningOutcomesSection";
import MediaSection from "./home/elements/MediaSection";
import TeamSupportSection from "./home/elements/TeamSupportSection";
import CTASection from "./home/elements/CTAsection";
// import PromoVideoSection from './layouts/PromoVideo';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <Loader />;
  }

  return (
    <section>
      <HeroSection />
      <DwainChambersSection />
      <AboutCampSection />
      <LearningOutcomesSection />
      <MediaSection />
      <TeamSupportSection />
      <CTASection />
    </section>
  );
}

'use client';
import GradientDivider from './components/GradientDivider';
// import { Features } from './layouts/Features';
import { ModernHero } from './layouts/ModernHero';
import Athletics from './layouts/NextPhaseAthletics';
import SocialMediaSection from './layouts/SocialMediaSection';

export default function Home() {

  return (
    <div>
      <ModernHero />
      <Athletics />
      {/* <Features /> */}
      <GradientDivider />
      <SocialMediaSection />
    </div>
  );
}

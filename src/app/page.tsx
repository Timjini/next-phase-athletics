'use client';
// import { Features } from './layouts/Features';
import { ModernHero } from './layouts/ModernHero';
import Athletics from './layouts/NextPhaseAthletics';
import PromoVideoSection from './layouts/PromoVideo';
import SocialMediaSection from './layouts/SocialMediaSection';

export default function Home() {

  return (
    <div>
      <ModernHero />
      <Athletics />
      {/* <Features /> */}
      <PromoVideoSection />
      <SocialMediaSection />
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
// import { Features } from './layouts/Features';
import { ModernHero } from './layouts/ModernHero';
import Athletics from './layouts/NextPhaseAthletics';
import SocialMediaSection from './layouts/SocialMediaSection';
import Loader from './components/Loader';
// import PromoVideoSection from './layouts/PromoVideo';

export default function Home() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])


  if (!isReady) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <ModernHero />
      <Athletics />
      {/* <PromoVideoSection /> */}
      <SocialMediaSection />
    </div>
  );
}

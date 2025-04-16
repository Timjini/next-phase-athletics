import React from "react";
import MainButton from "./MainButton";
import { useRouter } from 'next/navigation';

const PromoVideoSection = () => {
    const router = useRouter();
  
  return (
    <div className="promoSection relative gap-8 items-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 sm:py-16 lg:px-6 glassMorphic">
            <div className="text-center px-4">
              <h2 className="text-5xl mb-12">
                Greatness isn&apos;t Born <span className="block">— It&apos;s <strong className="text-[#FFD700] text-6xl">BUILT.</strong></span>
              </h2>
              <MainButton title="Join The Camp" onClick={() => router.push('/camps')} />
            </div>
            <div className="mx-auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/A4qRKUEXvxM?si=i9MkI2Ohupb7Wyq3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
    </div>      
  );
};

export default PromoVideoSection;
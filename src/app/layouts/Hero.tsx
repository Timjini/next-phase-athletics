'use client';

import MainButton from "../components/MainButton";
import { useRouter } from 'next/navigation';
import { TextGenerateEffect } from "../components/ui/text-generate-effect";


const Hero = () => {
  const router = useRouter();

    return (
      <div
        className="relative bg-cover bg-right-top min-h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="heroContent p-6 sm:p-10 text-center">
          <h1 className="text-5xl tracking-wider">
            NextPhase
          </h1>
          <h3 className="mt-2 text-xl mb-4">
          <TextGenerateEffect words="Empowering | Next Generation of Champions" />
          </h3>
          <MainButton title="JOIN NOW" onClick={() => router.push('/camps')}/>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
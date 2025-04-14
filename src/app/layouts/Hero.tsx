'use client';

import MainButton from "../components/MainButton";
import { useRouter } from 'next/navigation';


const Hero = () => {
  const router = useRouter();

    return (
      <div
        className="relative bg-cover bg-right-top text-white min-h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className=" p-6 sm:p-10 text-center">
          <h1 className="tracking-wider">
            NEXTPHASE
          </h1>
          <h2 className=" mt-2">
            ATHLETICS
          </h2>
          <h3 className="mt-6">
            Empowering | Next <br className="sm:hidden" />
            Generation of Champions
          </h3>
          <MainButton title="JOIN NOW" onClick={() => router.push('/camps')}/>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
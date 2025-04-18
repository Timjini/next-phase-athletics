'use client';

import React from "react";
import MainButton from "../components/MainButton";
import { useRouter } from 'next/navigation';
import VideoModal from "../components/VideoModal";
// import useFetchCampProgram from "../hooks/useFetchCampProgram";
// import { Skeleton } from "@/components/ui/skeleton"

const PromoVideoSection = () => {
  // const { loading, campProgram } = useFetchCampProgram('xlr8');
  // console.log("camps", campProgram)
  const router = useRouter();

  return (
    <section className="promoSection bg-gradient-to-b from-[#0046CC] to-[#09131D]">

        <div className="min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
          <div className="text-center px-4 md:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-12">
              Greatness isn&apos;t Born <span className="block">— It&apos;s <strong className="text-[#FFD700] text-5xl md:text-6xl">BUILT.</strong></span>
            </h2>
            <MainButton title="Join The Camp" onClick={() => router.push('/camps/xlr8')} />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px]">
              <VideoModal/>
            </div>
          </div>
        </div>
      {/* {loading ? (
        <div className="min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
          <div className="px-4 md:w-1/2">
            <Skeleton className="h-10 w-3/4 mb-6" />
            <Skeleton className="h-10 w-1/2 mb-6" />
            <Skeleton className="h-12 w-48" />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Skeleton className="w-full max-w-[600px] aspect-video" />
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
          <div className="text-center px-4 md:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-12">
              Greatness isn&apos;t Born <span className="block">— It&apos;s <strong className="text-[#FFD700] text-5xl md:text-6xl">BUILT.</strong></span>
            </h2>
            <MainButton title="Join The Camp" onClick={() => router.push('/camps')} />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px]">
              <VideoModal/>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default PromoVideoSection;

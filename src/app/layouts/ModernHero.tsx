"use client";
import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import MainButton from "../components/MainButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function ModernHero() {
  const router = useRouter();
  return (
    <div
      className=" appHero  bg-cover w-full min-h-screen rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <Spotlight />
      <div className="heroContent p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          NextPhase <br />
        </h1>
        <div className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          <TextGenerateEffect words="Empowering | Next Generation of Champions" />
        </div>
        <div>
          <span className=" text-white text-3xl md:text-4xl mb-12 text-center font-bold">
            Greatness isn&apos;t Born{" "}
            <span className="block">
              — It&apos;s{" "}
              <strong className="text-[#FFD700] text-4xl md:text-5xl">
                BUILT.
              </strong>
            </span>
          </span>
        </div>
        <div className="flex flex-row justify-center mx-auto">
          <Link href="/camps/xlr8">
            <Image src="/images/action-button.png" alt="hero icon" width={150} height={150} className="w-64 h-auto mx-auto mb-2" />
          </Link>
        </div>  
      </div>
    </div>
  );
}

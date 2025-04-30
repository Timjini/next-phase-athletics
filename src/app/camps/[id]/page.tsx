'use client';
import React from "react";
import Link from "next/link";
import useFetchCampProgram from "@/app/hooks/useFetchCampProgram";
import Loader from "@/app/components/Loader";
import { CampHeroSection } from "@/app/components/booking/CampHeroSection";
import { Grantee } from "@/app/components/booking/Grantee";
import { MapSection } from "@/app/components/contact/MapSection";
import { CampForm } from "@/app/forms/CampForm";
import { FAQ } from "@/app/components/common/FAQ";
import { BookingFAQ } from "@/app/lib/constants";
import { ContactCta } from "@/app/components/booking/ContactCta";
import { usePathname } from "next/navigation";

export default function BookingPage() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "xlr8";
  const { loading, campProgram } = useFetchCampProgram(slug);

  if (loading) {
    return <Loader />;
  }

  if (!campProgram) {
    return (
      <div className="min-h-screen relative gap-8 items-center px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6  rounded-lg">
        <div>
          <span className=" text-center text-4xl mx-auto mb-4">
            Camp Program not found :|
          </span>
        </div>
        <div>
          <Link href="/">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <CampHeroSection />
      <Grantee />
      {/* <CampDescription /> */}
      <MapSection />
      <div className= "bg-gradient-to-b from-black to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <CampForm campProgram={campProgram} />
        </div>
      </div>
      {/* <BookingForm /> */}
      {/* <Testimonials /> */}
      <FAQ items={BookingFAQ} />
      <ContactCta />
    </div>
  );
};

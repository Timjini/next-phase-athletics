"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BookingForm } from "../forms/BookingForm";
import { Grantee } from "../components/booking/Grantee";
import { Testimonials } from "../components/booking/Testimonials";
import { ContactCta } from "../components/booking/ContactCta";
import { CampHeroSection } from "../components/booking/CampHeroSection";
import { CampDescription } from "../components/booking/CampDescription";
import { CampForm } from "../forms/CampForm";
import { usePathname } from "next/navigation";
import useFetchCampProgram from "../hooks/useFetchCampProgram";
import Loader from "../components/Loader";
import Link from "next/link";
import { FAQ } from "../components/common/FAQ";
import { BookingFAQ } from "../lib/constants";
import { MapSection } from "../components/contact/MapSection";

const CampBookingPage = () => {
  const pathname = usePathname();
  //   const slug = pathname?.split("/").pop() || "xlr8";
  const slug = "xlr8";

  //   const router = useRouter();
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

export default CampBookingPage;

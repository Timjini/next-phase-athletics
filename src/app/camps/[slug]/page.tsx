"use client";

import Image from "next/image";
import { CampForm } from "../../forms/CampForm";
import Loader from "../../components/Loader";
import useFetchCampProgram from "@/app/hooks/useFetchCampProgram";
import MainButton from "@/app/components/MainButton";
import { usePathname, useRouter } from "next/navigation";
import CampDetailsModal from "@/app/components/modals/CampDetailsModal";
import { CampHeroSection } from "@/app/components/booking/CampHeroSection";
import { Grantee } from "@/app/components/booking/Grantee";
import { MapSection } from "@/app/components/contact/MapSection";
import { FAQ } from "@/app/components/common/FAQ";
import { BookingFAQ } from "@/app/lib/constants";
import { ContactCta } from "@/app/components/booking/ContactCta";

export default function Page() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop() || "xlr8";

  const router = useRouter();
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
          <MainButton title="Go Back" onClick={() => router.push("/")} />
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
}

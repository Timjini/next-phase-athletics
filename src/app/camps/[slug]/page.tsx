"use client";

import Image from "next/image";
import { CampForm } from "../../forms/CampForm";
import Loader from "../../components/Loader";
import MapDisplay from "../../components/maps/MapDisplay";
import GoogleMapsWrapper from "../../components/maps/GoogleMapsWrapper";
import useFetchCampProgram from "@/app/hooks/useFetchCampProgram";
import MainButton from "@/app/components/MainButton";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();
  const { loading, campProgram } = useFetchCampProgram("xlr8");

  console.log("campProgram", campProgram)
  
  const location = {
    lat: 48.8566,
    lng: 2.3522,
  };

  if (loading) {
    return <Loader />;
  }

  if (!campProgram) {
    return (
      <div className="min-h-screen relative gap-8 items-center px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6 bg-white rounded-lg">
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
    <GoogleMapsWrapper>
      <div className="relative gap-8 items-center px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6 bg-white rounded-lg">
        <div>
          <CampForm campProgram={campProgram} />
        </div>
        <div>
          <div className="p-4">
            <Image
              src={campProgram.imageUrl || "/images/xlr8.png"}
              alt="XLR8 camp"
              width={600}
              height={600}
            />
            <span className="text-xl font-semibold mb-4">Camps Location</span>
            <MapDisplay
              lat={campProgram.lat || location.lat}
              lng={campProgram.lng || location.lng}
            />
          </div>
        </div>
      </div>
    </GoogleMapsWrapper>
  );
}

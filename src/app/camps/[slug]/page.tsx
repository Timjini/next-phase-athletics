"use client";

import Image from "next/image";
import { CampForm } from "../../forms/CampForm";
import Loader from "../../components/Loader";
import useFetchCampProgram from "@/app/hooks/useFetchCampProgram";
import MainButton from "@/app/components/MainButton";
import { usePathname, useRouter } from "next/navigation";
import CampDetailsModal from "@/app/components/modals/CampDetailsModal";

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
    <section className="bg-gradient-to-b from-black to-blue-900 min-h-[75vh] pb-12 appHero m-0 p-0">
      <div className="campSection lg:mt-8 relative items-center py-8 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid xl:grid-cols-2 sm:py-8 lg:px-6 rounded-lg ">
        <div className="fixed bottom-0 right-0 p-4 z-50">
          <CampDetailsModal description={campProgram?.description || ""} />
        </div>
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {campProgram.title}
          </h1>
          <CampForm campProgram={campProgram} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <div className="w-full max-w-[590px]">
            <Image
              src={campProgram.imageUrl || "/images/xlr8.png"}
              alt="XLR8 camp"
              width={590}
              height={590}
              className="w-full h-auto rounded-[10px] mt-4"
              style={{ border: 0 }}
            />
          </div>

          <div className="w-full max-w-[590px]">
            <div className="mb-4">
              <span className="text-xl font-semibold text-white">
                Location : Lake Forest Academy Track
              </span>
            </div>
            <div className="w-full">
              <iframe
                className="w-full h-[350px] rounded-[10px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${campProgram.lat},${campProgram.lng}&z=15&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

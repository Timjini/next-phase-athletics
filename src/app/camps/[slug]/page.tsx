"use client";

import Image from "next/image";
import { CampForm } from "../../forms/CampForm";
import Loader from "../../components/Loader";
import useFetchCampProgram from "@/app/hooks/useFetchCampProgram";
import MainButton from "@/app/components/MainButton";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop() || 'xlr8'

  const router = useRouter();
  const { loading, campProgram } = useFetchCampProgram(slug);

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.7013010609676!2d-87.86369712374709!3d41.942269461393764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb583c98aafad%3A0x726dc59bcab04523!2s3500%20Martens%20St%2C%20Franklin%20Park%2C%20IL%2060131%2C%20USA!5e0!3m2!1sen!2sde!4v1745182464892!5m2!1sen!2sde"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          />
        </div>
      </div>
    </div>
  );
}

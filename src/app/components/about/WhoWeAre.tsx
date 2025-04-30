import Image from "next/image";
import SlideInParagraphs from "../SlideInParagraphs";

export const WhoWeAre = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <SlideInParagraphs />
          <div className="flex-wrap gap-4 hidden">
            {[
              "5 Olympic medalists",
              "12 Certified coaches",
              "150+ Elite athletes trained",
              "7 Sports specialties",
            ].map((stat) => (
              <div
                key={stat}
                className="bg-yellow-50 px-4 py-2 rounded-full text-yellow-800 font-medium"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-l from-gray-900 to-black">
          <Image
            className="object-contain p-4"
            src="/images/nextPhase-logo-white2.png"
            alt="NextPhase coaching team"
            sizes="(max-width: 768px) 100vw, 50vw"
            height={600}
            width={600}
          />
        </div>
      </div>
    </section>
  );
};

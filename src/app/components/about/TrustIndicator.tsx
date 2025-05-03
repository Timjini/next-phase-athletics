import Image from "next/image";

export const TrustIndicator = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why <span className="text-yellow-400">Trust</span> NextPhase
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Championship Pedigree",
              content:
                "Our coaches have competed and won at Olympic, World Championship, and Diamond League levels.",
            },
            {
              title: "Proven Results",
              content:
                "Athletes see average improvements of 0.3s in 100m times within 12 weeks of training.",
            },
            {
              title: "Holistic Approach",
              content:
                "We develop the complete athlete - speed, strength, nutrition, and mental performance.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mt-16 hidden">
          <h3 className="text-xl font-medium text-center mb-8 text-gray-300">
            Trusted by leading organizations
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              // {
              //   partner: "Chambers For Sport",
              //   logo: "/logos/chambers-for-sport.png",
              // },
              // { partner: "Nike", logo: "/logos/nike.png" },
              // { partner: "BBC Sport", logo: "/logos/bbc-sport.png" },
              // {
              //   partner: "Olympic Channel",
              //   logo: "/logos/olympic-channel.png",
              // },
            ].map(({ partner, logo }) => (
              <div
                key={partner}
                className="h-24 grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={logo}
                  alt={partner}
                  className="h-full w-auto object-contain"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

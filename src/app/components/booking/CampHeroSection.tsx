import Image from "next/image";

export const CampHeroSection = () => {
  const campInfo = {
    title: "Train with Olympic Legend",
    host: "Dwain Chambers",
    subtitle: "Unlock your speed, strength, and champion mindset.",
    nextCamp: "4-Day Intensive | Lake Forest Academy Track",
  }
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-800 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/dwain-chambers-action.jpg"
          alt="Dwain Chambers in action"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
         {campInfo.title}
        </h1>
        <span className="text-yellow-400 mt-4 text-2xl  sm:text-3xl lg:text-4xl uppercase font-bold">{campInfo.host}</span>
        <p className="mt-6 text-xl text-blue-200 max-w-3xl mx-auto">
          {campInfo.subtitle}
        </p>
        <div className="mt-10 bg-yellow-400 hover:bg-yellow-500  font-bold inline-block px-6 py-3 rounded-lg">
          <p className=" font-medium text-black">
            {campInfo.nextCamp}
          </p>
        </div>
      </div>
    </div>
  );
};

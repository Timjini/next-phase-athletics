// data can be fetched from Host table
import React from "react";
import {
  TrophyIcon,
  ClockIcon,
  AcademicCapIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const DwainChambersBio = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black bg-gray-900 text-white">
        <div className="relative w-full h-[80vh]">
          <Image
            className="object-cover opacity-40"
            src="/images/dwain-race2.webp"
            alt="Dwain Chambers sprinting"
            priority
            fill
            sizes="100vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            {/* <Image
              src="/team/coach-Dwain-Chambers.jpg"
              alt="Dwain Chambers portrait"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto mb-6"
              width={400}
              height={400}
            /> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
              <span className="text-yellow-400">Dwain</span> Chambers
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Olympic Sprinter • Performance Coach • World Masters Record Holder
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "9.97s 100m PB",
                "50+ sub-10s races",
                "European Record Holder",
                "World Masters Champion",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-yellow-500 text-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "9.97s", label: "100m Personal Best" },
              { value: "6.42s", label: "60m World Medalist" },
              { value: "20+", label: "Years Elite Experience" },
              { value: "13", label: "World-Class Coaches Trained Under" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Career Highlights */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrophyIcon className="h-8 w-8 text-yellow-500 mr-3" />
                <span>Career Highlights</span>
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  {
                    text: "Youngest British athlete to break 10 seconds in the 100m",
                    class: "font-bold text-gray-800",
                  },
                  {
                    text: "European 100m Record Holder (9.97s held for 8 years)",
                    class: "italic",
                  },
                  {
                    text: "World Junior 100m Record Holder (10.06s)",
                    class: "",
                  },
                  {
                    text: "Competed in 2 Olympic Games (2000, 2012)",
                    class: "underline decoration-yellow-400",
                  },
                  {
                    text: "World Indoor 60m Silver Medalist (2010)",
                    class: "text-sm text-red-600",
                  },
                  {
                    text: "European 100m Champion (2002)",
                    class: "font-medium",
                  },
                  {
                    text: "World Masters 60m Record Holder (6.81s age 46)",
                    class: "text-purple-600",
                  },
                  {
                    text: "Only sprinter to race both Usain Bolt and Asafa Powell in their prime",
                    class: "border-l-4 border-yellow-500 pl-2",
                  },
                  {
                    text: "Only athlete to break 10 seconds in the 100m in 3 separate decades",
                    class: "bg-yellow-50 px-2 py-1 rounded",
                  },
                ].map((item, index) => (
                  <li key={index} className={`flex ${item.class}`}>
                    <span className="text-yellow-500 mr-2">•</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>

            {/* Training Philosophy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BoltIcon className="h-8 w-8 text-yellow-500 mr-3" />
                <span>Training Philosophy</span>
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="text-xl font-medium mb-6">
                  &quot;Speed isn&apos;t just genetics—it&apos;s physics.
                  Perfect the mechanics, and the times will follow.&quot;
                </p>
                <p>
                  Dwain&apos;s approach combines three decades of elite
                  competition with continuous study of biomechanics. Having
                  trained under 13 different world-class coaches including:
                </p>
                <ul className="my-4 space-y-2">
                  {[
                    "Dan Pfaff (9-time Olympic coach)",
                    "John Smith (Maurice Greene's coach)",
                    "Loren Seagrave (speed mechanics pioneer)",
                    "UK Athletics national coaching team",
                  ].map((coach, index) => (
                    <li key={index} className="flex">
                      <span className="text-yellow-500 mr-2">•</span>
                      {coach}
                    </li>
                  ))}
                </ul>
                <p>
                  His methodology focuses on{" "}
                  <strong>efficiency over effort</strong>, teaching athletes to:
                </p>
                <ul className="my-4 space-y-2">
                  {[
                    "Master block clearance and acceleration angles",
                    "Optimize ground contact time",
                    "Develop race-specific strength",
                    "Maintain form under fatigue",
                    "Execute race plans tactically",
                  ].map((point, index) => (
                    <li key={index} className="flex">
                      <span className="text-yellow-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Career Timeline */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-md mb-8 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <ClockIcon className="h-5 w-5 text-yellow-500 mr-2" />
                Career Timeline
              </h3>
              <div className="space-y-4">
                {[
                  { year: "1997", event: "World Junior Record (10.06s)" },
                  { year: "2002", event: "European Champion (9.96s)" },
                  { year: "2003", event: "World Indoor Silver Medal" },
                  { year: "2008", event: "Olympic Games (Beijing)" },
                  { year: "2012", event: "Olympic Games (London)" },
                  { year: "2018", event: "World Masters Record (6.81s)" },
                  { year: "2025", event: "Participation in XLR8 Training" },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="font-bold text-yellow-600 w-12">
                      {item.year}
                    </div>
                    <div className="flex-1 border-l-2 border-yellow-200 pl-4 pb-4">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AcademicCapIcon className="h-5 w-5 text-yellow-500 mr-2" />
                Certifications
              </h3>
              <ul className="space-y-2">
                {[
                  "England Athletics speed coach",
                  "First Aid qualified",
                  "Safe guarding qualified",
                  "Level 3 Personal training qualification ",
                  "DBS qualified",
                ].map((cert, index) => (
                  <li key={index} className="flex">
                    <span className="text-yellow-500 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </section>

            {/* Media */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Featured In
              </h3>
              <div className="space-y-4">
                {[
                  {
                    src: "/logos/bbc-sport.png",
                    alt: "BBC Sport",
                    link: "https://www.bbc.com/sport/athletics/47141466",
                    title:
                      "BBC: Dwain Chambers to race at British Indoor Championships at age 40",
                  },
                  {
                    src: "/logos/espn-logo.webp",
                    alt: "ESPN",
                    link: "http://en.espn.co.uk/olympic-sports/sport/story/149229.html",
                    title: "ESPN: Chambers races against Bolt in London",
                  },
                  {
                    src: "/logos/the-guardian-logo.jpeg",
                    alt: "The Guardian",
                    link: "https://www.theguardian.com/sport/2014/jun/29/dwain-chambers-athletics-british-championships",
                    title:
                      "The Guardian: Dwain Chambers wins a fifth straight British 100m crown at the age of 36",
                  },
                  {
                    src: "/logos/the-telegraph.png",
                    alt: "The Telegraph",
                    link: "https://www.telegraph.co.uk/usain-bolt-worlds-fastest-man/0/a-tangible-sense-of-excitement-dwain-chambers-on-what-its-like-t/",
                    title:
                      "Telegraph: Dwain Chambers on what it's like to race Usain Bolt",
                  },
                ].map((media, index) => (
                  <a
                    key={index}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    aria-label={`Read ${media.title} on ${media.alt}`}
                  >
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={48}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                    <span className="ml-4 text-sm font-medium text-gray-700">
                      {media.title}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Legacy Section */}
        <section className="mt-20 bg-gray-900 text-white rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-yellow-400">Legacy</span> in the Sport
              </h2>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Longevity - competing at elite level for over 15 years",
                  "Versatility - successful at 60m, 100m, and 200m",
                  "Resilience - returning to top form after setbacks",
                  "Innovation - pioneering new training methods",
                  "Mentorship - coaching next generation of sprinters",
                ].map((point, index) => (
                  <li key={index} className="flex">
                    <span className="text-yellow-400 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <Image
                className="object-cover"
                src="/images/dwain-chambers.jpg"
                alt="Dwain Chambers with young athletes"
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DwainChambersBio;

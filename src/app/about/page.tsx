import React from "react";
import {
  TrophyIcon,
  UsersIcon,
  BoltIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover opacity-30"
            src="/images/about-hero.jpg"
            alt="Athletes training"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-yellow-400">NextPhase</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Elevating athletes through science-backed training and championship
            experience
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2015 by former Olympians, NextPhase Athletics is a
              premier training organization specializing in speed development
              and athletic performance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team comprises world-class coaches, sports scientists, and
              rehabilitation specialists united by one goal: helping athletes
              achieve their next-level potential.
            </p>
            <div className="flex flex-wrap gap-4 hidden">
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
          <div className="relative h-full rounded-xl overflow-hidden shadow-xl">
            <Image
              className="w-full h-full object-cover"
              src="/images/nextPhase-logo-white2.png"
              alt="NextPhase coaching team"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-yellow-500">Core</span> Philosophy
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <TrophyIcon className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700">
                To empower athletes of all levels with the tools, knowledge, and
                mindset needed to break through performance barriers and achieve
                sustained excellence in their sport.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <BoltIcon className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700">
                To become the global benchmark for athletic development, where
                cutting-edge sports science meets proven championship experience
                to create the world&apos;s most effective training programs.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Methodology
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <UsersIcon className="h-6 w-6 text-yellow-500" />,
                  title: "Individualized",
                  text: "Custom programs for each athlete",
                },
                {
                  icon: <BoltIcon className="h-6 w-6 text-yellow-500" />,
                  title: "Science-Based",
                  text: "Proven techniques backed by research",
                },
                {
                  icon: <TrophyIcon className="h-6 w-6 text-yellow-500" />,
                  title: "Results-Driven",
                  text: "Measurable performance gains",
                },
                {
                  icon: <CalendarIcon className="h-6 w-6 text-yellow-500" />,
                  title: "Long-Term",
                  text: "Sustainable development focus",
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Our <span className="text-yellow-500">Events</span> & Programs
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Proven track record of successful athlete development initiatives
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "XLR8 Performance Camp June",
              date: "2025",
              description: "Summer Camp: XLR8 training camp for elite athletes",
              image: "/images/xlr8.png",
            },
            {
              title: "XLR8 Performance Camp October",
              date: "2025",
              description: "Year-round development program for youth athletes",
              image: "/images/xlr8.png",
            },
            // {
            //   title: "Champion's Workshop",
            //   date: "2021",
            //   description: "Mental performance training for competitors",
            //   image: "/events/workshop.jpg",
            // },
          ].map((event, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  className="w-full h-full object-cover"
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                    {event.date}
                  </span>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
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
    </div>
  );
};

export default AboutPage;

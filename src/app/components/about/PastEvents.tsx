import React from 'react';
import Image from "next/image";

export const PastEvent = () => {
  return (
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
                style={{ objectFit: "cover" }}
                height={600}
                width={600}
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
  );
};

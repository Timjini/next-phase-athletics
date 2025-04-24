"use client";
import React from "react";
import MapDisplay from "../components/maps/MapDisplay";
import ContactForm from "../forms/ContactForm";
import GoogleMapsWrapper from "../components/maps/GoogleMapsWrapper";

const Contact = () => {
  const location = {
    lat: 48.8566,
    lng: 2.3522,
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09131D] to-[#0046CC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We&apos;d love to hear from you! Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className=" p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Address</p>
                    <p className="text-base text-gray-500">
                      3500 Martens Street
                    </p>
                    <p className="text-base text-gray-500">
                      Franklin Park, IL 60131-2016
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <p className="text-base text-gray-500">(815) 556-8037</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <p className="text-base text-gray-500">info@nxtphs.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

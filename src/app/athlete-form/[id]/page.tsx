"use client";
import React from "react";
import Head from "next/head";
import { AthleteRegistrationForm } from "@/app/forms/AthleteRegistrationForm";
import Link from "next/link";
import useFetchBooking from "@/app/hooks/useFetchBooking";
import { usePathname } from "next/navigation";
import Loader from "@/app/components/Loader";

const Page = () => {
  const pathname = usePathname();
  const token = pathname?.split("/").pop() || "xlr8";
  const { loading, error, booking } = useFetchBooking(token);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-2">Booking Not Found</h2>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800  py-8 px-4 flex flex-col items-center justify-center pt-24">
      <Head>
        <title>Athlete Registration & Health Information Form</title>
      </Head>

      {booking ? (
        <AthleteRegistrationForm booking={booking} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-600">
          <h2 className="text-2xl font-semibold mb-2">Booking Not Found</h2>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;

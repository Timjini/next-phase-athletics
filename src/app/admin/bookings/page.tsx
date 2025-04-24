"use client";

import Loader from "@/app/components/Loader";
import useFetchBookings from "../hooks/useFetchBookings";
import BookingTable from "../_components/ui/BookingTable";

export default function BookingsPage() {
  const { loading, error, bookings } = useFetchBookings();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <BookingTable bookings={bookings} loading={loading} error={error} />
    </div>
  );
}

// components/BookingTable.tsx
"use client";

import { Booking } from "@/app/types/camp";
import { useState, useMemo } from "react";

interface BookingTableProps {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

const BookingTable = ({ bookings, loading, error }: BookingTableProps) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Booking;
    direction: "ascending" | "descending";
  } | null>(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter and sort bookings
  const processedBookings = useMemo(() => {
    let filteredBookings = [...bookings];

    // Apply filter
    if (filter) {
      filteredBookings = filteredBookings.filter((booking) => {
        return (
          booking.athleteName.toLowerCase().includes(filter.toLowerCase()) ||
          booking.email.toLowerCase().includes(filter.toLowerCase()) ||
          // booking.campName.join(" ").toLowerCase().includes(filter.toLowerCase()) ||
          booking.paymentStatus.toLowerCase().includes(filter.toLowerCase())
        );
      });
    }

    // Apply sorting
    if (sortConfig !== null) {
        filteredBookings.sort((a, b) => {
          const aValue = a[sortConfig.key];
          const bValue = b[sortConfig.key];
      
          if (aValue == null) return 1;
          if (bValue == null) return -1;
      
          if (aValue < bValue) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }

    return filteredBookings;
  }, [bookings, filter, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(processedBookings.length / itemsPerPage);
  const paginatedBookings = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedBookings.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, processedBookings]);

  const requestSort = (key: keyof Booking) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key: keyof Booking) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === "ascending" ? " ↑" : " ↓";
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Bookings</h1>
        <input
          type="text"
          placeholder="Filter bookings..."
          className="px-4 py-2 border rounded-lg bg-white"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("athleteName")}
              >
                Athlete Name {getSortIndicator("athleteName")}
              </th>
              {/* <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("campName")}
              >
                Camp {getSortIndicator("campName")}
              </th> */}
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("email")}
              >
                Email {getSortIndicator("email")}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("amount")}
              >
                Amount {getSortIndicator("amount")}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("paymentStatus")}
              >
                Payment Status {getSortIndicator("paymentStatus")}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("status")}
              >
                Status {getSortIndicator("status")}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort("createdAt")}
              >
                Date {getSortIndicator("createdAt")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedBookings.length > 0 ? (
              paginatedBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.athleteName}
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    {booking.campName}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${booking.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.paymentStatus === "PAID"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.status === "CONFIRMED"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingTable;
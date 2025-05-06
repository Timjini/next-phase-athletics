'use client';
import { Booking } from '@/app/types/camp';
import { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiEdit, FiTrash2, FiCheck, FiX, FiRefreshCw, FiDownload, FiPrinter } from 'react-icons/fi';
import useFetchBookings from '../hooks/useFetchBookings';
import { AttendanceStatus, BookingStatus, PaymentStatus } from '@/generated/prisma';


type FilterOptions = {
  campName?: string;
  status?: BookingStatus;
  paymentStatus?: PaymentStatus;
  attended?: AttendanceStatus;
  qrCodeUsed?: boolean;
  searchQuery?: string;
};

export default function BookingsView() {
  const { loading, error, bookings } = useFetchBookings();
  console.log("bookings----->",bookings[0])
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Booking>>({});
  const [localBookings, setBookings] = useState<Booking[]>([]);

  if (!loading && bookings.length > 0 && localBookings.length === 0) {
    setBookings(bookings);
  }

  if (loading) return <div className='p-6 bg-gray-50 min-h-screen'>Loading...</div>;
  if (error) return <div className='p-6 bg-gray-50 min-h-screen'>{error}</div>;
  if (!bookings.length) return <div className='p-6 bg-gray-50 min-h-screen'>Bookings not found</div>;

  // ✅ Filter bookings
  const filteredBookings = localBookings.filter((booking: Booking) => {
    // if (filterOptions.campName && !booking.campName.includes(filterOptions.campName)) return false;
    if (filterOptions.status && booking.status !== filterOptions.status) return false;
    if (filterOptions.paymentStatus && booking.paymentStatus !== filterOptions.paymentStatus) return false;
    if (filterOptions.attended && booking.attended !== filterOptions.attended) return false;
    if (filterOptions.qrCodeUsed !== undefined && booking.qrCodeUsed !== filterOptions.qrCodeUsed) return false;

    if (filterOptions.searchQuery) {
      const query = filterOptions.searchQuery.toLowerCase();
      return (
        booking.athleteName.toLowerCase().includes(query) ||
        booking.email.toLowerCase().includes(query) ||
        booking.phone?.toLowerCase().includes(query) ||
        booking.id.toLowerCase().includes(query) ||
        (booking.stripeId ?? '').toLowerCase().includes(query)
      );
    }

    return true;
  });
  
  const handleStatusUpdate = async (bookingId: string, newStatus: BookingStatus) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setBookings(prev =>
        prev.map(b =>
          b.id === bookingId ? { ...b, status: newStatus } : b
        )
      );
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleEditSubmit = async () => {
    if (!selectedBooking) return;

    // try {
    //   await new Promise(resolve => setTimeout(resolve, 500));
    //   setBookings(prev =>
    //     prev.map(b =>
    //       b.id === selectedBooking.id ? { ...b, ...editForm } : b
    //     )
    //   );
    //   setIsEditing(false);
    //   setSelectedBooking(null);
    // } catch (error) {
    //   console.error('Failed to update booking:', error);
    // }
  };
  // const uniqueCampNames = [...new Set(bookings.flatMap(b => b.campName))];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Bookings Management</h1>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FiDownload className="mr-2" /> Export
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FiPrinter className="mr-2" /> Print
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search bookings by name, email, phone, or ID..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filterOptions.searchQuery || ''}
                onChange={(e) => setFilterOptions({ ...filterOptions, searchQuery: e.target.value })}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiFilter className="mr-2" /> Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Camp Name</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filterOptions.campName || ''}
                    onChange={(e) => setFilterOptions({ ...filterOptions, campName: e.target.value || undefined })}
                  >
                    <option value="">All Camps</option>
                    {uniqueCampNames.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div> */}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Booking Status</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filterOptions.status || ''}
                    onChange={(e) => setFilterOptions({ ...filterOptions, status: e.target.value as BookingStatus || undefined })}
                  >
                    <option value="">All Statuses</option>
                    {Object.values(BookingStatus).map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filterOptions.paymentStatus || ''}
                    onChange={(e) => setFilterOptions({ ...filterOptions, paymentStatus: e.target.value as PaymentStatus || undefined })}
                  >
                    <option value="">All Statuses</option>
                    {Object.values(PaymentStatus).map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Attendance</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filterOptions.attended || ''}
                    onChange={(e) => setFilterOptions({ ...filterOptions, attended: e.target.value as AttendanceStatus || undefined })}
                  >
                    <option value="">All Statuses</option>
                    {Object.values(AttendanceStatus).map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setFilterOptions({})}
                  className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bookings Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center p-12">
              <FiRefreshCw className="animate-spin h-8 w-8 text-blue-500" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Athlete
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Camp/Sessions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Booking Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Attendance
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{booking.athleteName}</div>
                            <div className="text-sm text-gray-500">{booking.email}</div>
                            {booking.phone && <div className="text-sm text-gray-500">{booking.phone}</div>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* <div className="text-sm text-gray-900 font-medium">{booking.campName}</div> */}
                        <div className="text-sm text-gray-500">
                          {booking.campSessions.map(s => s.label).join(', ')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${booking.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                          booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          booking.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.paymentStatus === 'PAID' ? 'bg-green-100 text-green-800' :
                          booking.paymentStatus === 'REFUNDED' ? 'bg-blue-100 text-blue-800' :
                          booking.paymentStatus === 'UNPAID' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {booking.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.attended === 'ATTENDED' ? 'bg-green-100 text-green-800' :
                          booking.attended === 'NO_SHOW' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {booking.attended}
                        </span>
                        {booking.qrCodeUsed && (
                          <span className="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            QR Used
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => {
                              setSelectedBooking(booking);
                              setEditForm({
                                status: booking.status,
                                paymentStatus: booking.paymentStatus,
                                attended: booking.attended,
                              });
                              setIsEditing(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit"
                          >
                            <FiEdit />
                          </button>
                          {booking.status !== 'CANCELLED' && (
                            <button
                              onClick={() => handleStatusUpdate(booking.id, 'CANCELLED' as BookingStatus)}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel"
                            >
                              <FiX />
                            </button>
                          )}
                          {booking.status !== 'CONFIRMED' && (
                            <button
                              onClick={() => handleStatusUpdate(booking.id, 'CONFIRMED' as BookingStatus)}
                              className="text-green-600 hover:text-green-900"
                              title="Confirm"
                            >
                              <FiCheck />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {isEditing && selectedBooking && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Edit Booking</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Booking Status</label>
                    <select
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      value={editForm.status || selectedBooking.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value as BookingStatus })}
                    >
                      {Object.values(BookingStatus).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                    <select
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      value={editForm.paymentStatus || selectedBooking.paymentStatus}
                      onChange={(e) => setEditForm({ ...editForm, paymentStatus: e.target.value as PaymentStatus })}
                    >
                      {Object.values(PaymentStatus).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Attendance Status</label>
                    <select
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      value={editForm.attended || selectedBooking.attended}
                      onChange={(e) => setEditForm({ ...editForm, attended: e.target.value as AttendanceStatus })}
                    >
                      {Object.values(AttendanceStatus).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEditSubmit}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

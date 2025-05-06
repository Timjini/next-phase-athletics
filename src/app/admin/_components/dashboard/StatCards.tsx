import { Booking } from "@/app/types/camp";
import React from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { format, addDays } from 'date-fns';


type StatCardsProps = {
    bookings: Booking[];
  };

  type Rating = {
    camp: string;
    average: number;
    count: number;
  };

type User = {
    id: string;
    name: string;
    email: string;
    signUpDate: Date;
  };

const StatCards: React.FC<StatCardsProps> = ({ bookings }) => {
    const totalBookings = bookings.length;
    const currentBookings = bookings.filter(b => b.status === 'PENDING').length;
    const completedBookings = bookings.filter(b => b.status === 'CONFIRMED').length;
    const upcomingBookings = bookings.filter(b => b.status === 'CANCELLED').length;

    const paidRevenue = bookings.filter(b => b.paymentStatus === 'PAID').reduce((sum, b) => sum + b.amount, 0);
    const pendingRevenue = bookings.filter(b => b.paymentStatus === 'UNPAID').reduce((sum, b) => sum + b.amount, 0);
    const overdueRevenue = bookings.filter(b => b.paymentStatus === 'REFUNDED').reduce((sum, b) => sum + b.amount, 0);

  
    const totalRevenue = bookings.reduce((sum, booking) => sum + booking.amount, 0);

    const ratings: Rating[] = [
        { camp: 'Summer Adventure', average: 4.8, count: 24 },
        { camp: 'Winter Sports', average: 4.5, count: 18 },
        { camp: 'Spring Break', average: 4.2, count: 15 },
      ];
    
      const users: User[] = [
        { id: '1', name: 'John Doe', email: 'john@example.com', signUpDate: addDays(new Date(), -2) },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', signUpDate: addDays(new Date(), -1) },
        { id: '3', name: 'Mike Johnson', email: 'mike@example.com', signUpDate: new Date() },
      ];

    const popularCamps = [...ratings].sort((a, b) => b.count - a.count).slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Bookings */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
            <h3 className="text-2xl font-bold text-gray-800">
              {totalBookings}
            </h3>
          </div>
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FiCalendar size={24} />
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <span className="text-green-600 flex items-center">
            <FiCheckCircle className="mr-1" /> {currentBookings} Current
          </span>
          <span className="text-blue-600 flex items-center">
            <FiClock className="mr-1" /> {upcomingBookings} Upcoming
          </span>
          <span className="text-gray-600 flex items-center">
            <FiCheckCircle className="mr-1" /> {completedBookings} Completed
          </span>
        </div>
      </div>

      {/* Total Revenue */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <h3 className="text-2xl font-bold text-gray-800">
              ${totalRevenue.toFixed(2)}
            </h3>
          </div>
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FiDollarSign size={24} />
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <span className="text-green-600">${paidRevenue.toFixed(2)} Paid</span>
          <span className="text-yellow-600">
            ${pendingRevenue.toFixed(2)} Pending
          </span>
          <span className="text-red-600">
            ${overdueRevenue.toFixed(2)} Overdue
          </span>
        </div>
      </div>

      {/* New Users */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">New Users</p>
            <h3 className="text-2xl font-bold text-gray-800">{users.length}</h3>
          </div>
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <FiUsers size={24} />
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Latest: {users[0]?.name} ({format(users[0]?.signUpDate, "MMM d")})
        </div>
      </div>

      {/* Average Rating */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              Avg. Satisfaction
            </p>
            <h3 className="text-2xl font-bold text-gray-800">
              {ratings.reduce((sum, r) => sum + r.average, 0) /
                ratings.length || 0}
              /5
            </h3>
          </div>
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FiStar size={24} />
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Top camp: {popularCamps[0]?.camp} ({popularCamps[0]?.average}/5)
        </div>
      </div>
    </div>

  );
};

export default StatCards;

"use client";

import { useAdminUser } from "@/app/context/AdminUserContext";
import React from 'react';
import { FiCalendar, FiDollarSign, FiUsers, FiStar, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { format, addDays } from 'date-fns';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Types
type Booking = {
  id: string;
  type: 'current' | 'completed' | 'upcoming';
  customer: string;
  camp: string;
  date: Date;
  amount: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
};

type User = {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
};

type Session = {
  id: string;
  name: string;
  date: Date;
  capacity: number;
  enrolled: number;
};

type Rating = {
  camp: string;
  average: number;
  count: number;
};

// Sample data
const bookings: Booking[] = [
  { id: '1', type: 'current', customer: 'John Doe', camp: 'Summer Adventure', date: new Date(), amount: 120, paymentStatus: 'paid' },
  { id: '2', type: 'completed', customer: 'Jane Smith', camp: 'Winter Sports', date: addDays(new Date(), -5), amount: 150, paymentStatus: 'paid' },
  { id: '3', type: 'upcoming', customer: 'Mike Johnson', camp: 'Spring Break', date: addDays(new Date(), 7), amount: 100, paymentStatus: 'pending' },
  { id: '4', type: 'upcoming', customer: 'Sarah Williams', camp: 'Summer Adventure', date: addDays(new Date(), 14), amount: 120, paymentStatus: 'pending' },
  { id: '5', type: 'current', customer: 'David Brown', camp: 'Fall Retreat', date: new Date(), amount: 90, paymentStatus: 'overdue' },
];

const users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', signUpDate: addDays(new Date(), -2) },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', signUpDate: addDays(new Date(), -1) },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', signUpDate: new Date() },
];

const upcomingSessions: Session[] = [
  { id: '1', name: 'Summer Adventure', date: addDays(new Date(), 7), capacity: 20, enrolled: 15 },
  { id: '2', name: 'Spring Break', date: addDays(new Date(), 10), capacity: 15, enrolled: 8 },
  { id: '3', name: 'Fall Retreat', date: addDays(new Date(), 14), capacity: 25, enrolled: 12 },
];

const ratings: Rating[] = [
  { camp: 'Summer Adventure', average: 4.8, count: 24 },
  { camp: 'Winter Sports', average: 4.5, count: 18 },
  { camp: 'Spring Break', average: 4.2, count: 15 },
];

const Dashboard: React.FC = () => {
  const user = useAdminUser();
  // Calculate stats
  const totalBookings = bookings.length;
  const currentBookings = bookings.filter(b => b.type === 'current').length;
  const completedBookings = bookings.filter(b => b.type === 'completed').length;
  const upcomingBookings = bookings.filter(b => b.type === 'upcoming').length;

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.amount, 0);
  const paidRevenue = bookings.filter(b => b.paymentStatus === 'paid').reduce((sum, b) => sum + b.amount, 0);
  const pendingRevenue = bookings.filter(b => b.paymentStatus === 'pending').reduce((sum, b) => sum + b.amount, 0);
  const overdueRevenue = bookings.filter(b => b.paymentStatus === 'overdue').reduce((sum, b) => sum + b.amount, 0);

  const popularCamps = [...ratings].sort((a, b) => b.count - a.count).slice(0, 3);

  // Chart data
  const revenueChartData = {
    labels: ['Paid', 'Pending', 'Overdue'],
    datasets: [
      {
        label: 'Revenue by Status',
        data: [paidRevenue, pendingRevenue, overdueRevenue],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const ratingsChartData = {
    labels: ratings.map(r => r.camp),
    datasets: [
      {
        label: 'Average Rating',
        data: ratings.map(r => r.average),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Bookings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
              <h3 className="text-2xl font-bold text-gray-800">{totalBookings}</h3>
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
              <h3 className="text-2xl font-bold text-gray-800">${totalRevenue.toFixed(2)}</h3>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <FiDollarSign size={24} />
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-green-600">${paidRevenue.toFixed(2)} Paid</span>
            <span className="text-yellow-600">${pendingRevenue.toFixed(2)} Pending</span>
            <span className="text-red-600">${overdueRevenue.toFixed(2)} Overdue</span>
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
            Latest: {users[0]?.name} ({format(users[0]?.signUpDate, 'MMM d')})
          </div>
        </div>

        {/* Average Rating */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg. Satisfaction</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {ratings.reduce((sum, r) => sum + r.average, 0) / ratings.length || 0}/5
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Breakdown</h3>
          <div className="h-64">
            <Pie data={revenueChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Camp Ratings</h3>
          <div className="h-64">
            <Bar data={ratingsChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FiCalendar className="mr-2" /> Upcoming Sessions
          </h3>
          <div className="space-y-4">
            {upcomingSessions.map(session => (
              <div key={session.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{session.name}</h4>
                    <p className="text-sm text-gray-500">{format(session.date, 'MMM d, yyyy')}</p>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {session.enrolled}/{session.capacity}
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(session.enrolled / session.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FiUsers className="mr-2" /> Recent Users & Bookings
          </h3>
          <div className="space-y-4">
            {users.map(user => (
              <div key={user.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">{format(user.signUpDate, 'MMM d')}</span>
                </div>
              </div>
            ))}
            {bookings.slice(0, 2).map(booking => (
              <div key={booking.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">{booking.customer}</h4>
                    <p className="text-sm text-gray-500">{booking.camp}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-medium">${booking.amount}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                      booking.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Camps */}
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FiStar className="mr-2" /> Popular Camps
          </h3>
          <div className="space-y-4">
            {popularCamps.map((camp, index) => (
              <div key={camp.camp} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-gray-500 font-medium mr-3">{index + 1}.</span>
                    <div>
                      <h4 className="font-medium text-gray-800">{camp.camp}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={`${i < Math.floor(camp.average) ? 'text-yellow-500 fill-current' : 'text-gray-300'} w-4 h-4`} 
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({camp.count})</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {camp.average.toFixed(1)}/5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
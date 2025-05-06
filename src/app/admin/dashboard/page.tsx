"use client";

import { useAdminUser } from "@/app/context/AdminUserContext";
import React from 'react';
import { FiCalendar, FiDollarSign, FiUsers, FiStar, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { format, addDays } from 'date-fns';
import StatCards from "../_components/dashboard/StatCards";

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
import { Booking } from "@/app/types/camp";
import ChartRow from "../_components/dashboard/ChartRow";

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
  {
    id: '1', status: 'CANCELLED', campName: ['Summer Adventure'], createdAt: new Date(), amount: 120, paymentStatus: 'PAID',
    session: [],
    athleteName: "",
    email: "",
    phone: null,
    acceptedTerms: false,
    attended: "PENDING",
    qrCodeData: null,
    qrCodeUrl: null,
    tShirtSize: null,
    subscribeToProgram: null,
    token: null,
    updatedAt: new Date('2025-02-05')
  },
  {
    id: '2', status: 'CONFIRMED', campName: ['Winter Sports'], createdAt: addDays(new Date(), -5), amount: 150, paymentStatus: 'PAID',
    session: [],
    athleteName: "",
    email: "",
    phone: null,
    acceptedTerms: false,
    attended: "PENDING",
    qrCodeData: null,
    qrCodeUrl: null,
    tShirtSize: null,
    subscribeToProgram: null,
    token: null,
    updatedAt: new Date('2025-02-05')
  },
  {
    id: '3', status: 'PENDING', campName: ['Spring Break'], createdAt: addDays(new Date(), 7), amount: 100, paymentStatus: 'UNPAID',
    session: [],
    athleteName: "",
    email: "",
    phone: null,
    acceptedTerms: false,
    attended: "PENDING",
    qrCodeData: null,
    qrCodeUrl: null,
    tShirtSize: null,
    subscribeToProgram: null,
    token: null,
    updatedAt: new Date('2025-02-05')
  },
  {
    id: '4', status: 'PENDING', campName: ['Summer Adventure'], createdAt: addDays(new Date(), 14), amount: 120, paymentStatus: 'UNPAID',
    session: [],
    athleteName: "",
    email: "",
    phone: null,
    acceptedTerms: false,
    attended: "PENDING",
    qrCodeData: null,
    qrCodeUrl: null,
    tShirtSize: null,
    subscribeToProgram: null,
    token: null,
    updatedAt: new Date('2025-02-05')
  },
  {
    id: '5', status: 'CANCELLED', campName: ['Fall Retreat'], createdAt: new Date(), amount: 90, paymentStatus: 'REFUNDED',
    session: [],
    athleteName: "",
    email: "",
    phone: null,
    acceptedTerms: false,
    attended: "PENDING",
    qrCodeData: null,
    qrCodeUrl: null,
    tShirtSize: null,
    subscribeToProgram: null,
    token: null,
    updatedAt: new Date('2025-02-05')
  },
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

const popularCamps = [...ratings].sort((a, b) => b.count - a.count).slice(0, 3);




const Dashboard: React.FC = () => {
  const user = useAdminUser();
  // Calculate stats

  return (
    <div className="bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      <StatCards bookings={bookings} />
      <ChartRow bookings={bookings} />

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
                    {/* <h4 className="font-medium text-gray-800">{booking.customer}</h4>
                    <p className="text-sm text-gray-500">{booking.camp}</p> */}
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-medium">${booking.amount}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.paymentStatus === 'PAID' ? 'bg-green-100 text-green-800' :
                      booking.paymentStatus === 'UNPAID' ? 'bg-yellow-100 text-yellow-800' :
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
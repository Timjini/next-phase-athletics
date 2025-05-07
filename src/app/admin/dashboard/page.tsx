'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import useFetchCamps from '../hooks/useFetchCamps';
import useFetchBookings from '../hooks/useFetchBookings';
import BookingChart from '../_components/dashboard/BookingChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const { loading, error, camps } = useFetchCamps();
  const { bookings } = useFetchBookings();
  console.log("bookings---->",bookings)
  const bookedSlots = bookings?.filter(
    (booking) => booking.status === 'PENDING' || booking.status === 'CONFIRMED'
  ).length || 0;

  // Step 1: Create map from camp label to slug
  const labelToSlugMap: { [label: string]: string } = {};
  camps?.forEach(camp => {
    labelToSlugMap[camp.label] = camp.slug;
  });

  // Step 2: Initialize camp registration counts
  const campRegistrations: { [slug: string]: number } = {};
  camps?.forEach(camp => {
    campRegistrations[camp.slug] = 0;
  });

  // Step 3: Count bookings per camp (by slug)
  bookings?.forEach((booking) => {
    const raw = JSON.parse(booking.rawData || '{}');
    const campLabel = raw?.camp;
    const campSlug = labelToSlugMap[campLabel];
    if (campSlug && campRegistrations[campSlug] !== undefined) {
      campRegistrations[campSlug]++;
    }
  });

  const totalSessions = camps?.length || 0;
  const totalSlots = totalSessions * 100;
  const availableSlots = totalSlots - bookedSlots;

  const barData = {
    labels: ['Available', 'Booked'],
    datasets: [
      {
        label: 'Slots Overview',
        data: [availableSlots, bookedSlots],
        backgroundColor: ['#60a5fa', '#f87171'],
      },
    ],
  };

  const sessionLabels = camps?.flatMap(camp =>
    camp.sessions?.map(session => session.label) || []
  ) || [];
  
  const availableSlotsPerSession = camps?.flatMap(camp =>
    camp.sessions?.map(session => session.availableSlots) || []
  ) || [];
  
  const doughnutData = {
    labels: sessionLabels,
    datasets: [
      {
        label: 'Available Slots per Session',
        data: availableSlotsPerSession,
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  };
  

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">XLR8 Camp Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h3 className="text-lg font-semibold mb-2">Slot Availability</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h3 className="text-lg font-semibold mb-2">Camp Registration Distribution</h3>
          <BookingChart bookings={bookings} />
        </div>
      </div>

      <div className="bg-white shadow rounded-2xl p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Summary</h3>
        <ul className="text-gray-700 space-y-1">
          <li>Total Sessions: {totalSessions}</li>
          <li>Total Slots: {totalSlots}</li>
          <li>Booked Slots: {bookedSlots}</li>
          <li>Available Slots: {availableSlots}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

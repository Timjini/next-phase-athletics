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
import { Bar, Pie } from 'react-chartjs-2';


type StatCardsProps = {
    bookings: Booking[];
  };
  type Rating = {
    camp: string;
    average: number;
    count: number;
  };

const ChartRow: React.FC<StatCardsProps> = ({ bookings }) => {

    const ratings: Rating[] = [
        { camp: 'Summer Adventure', average: 4.8, count: 24 },
        { camp: 'Winter Sports', average: 4.5, count: 18 },
        { camp: 'Spring Break', average: 4.2, count: 15 },
      ];
    
    const paidRevenue = bookings.filter(b => b.paymentStatus === 'PAID').reduce((sum, b) => sum + b.amount, 0);
    const pendingRevenue = bookings.filter(b => b.paymentStatus === 'UNPAID').reduce((sum, b) => sum + b.amount, 0);
    const overdueRevenue = bookings.filter(b => b.paymentStatus === 'REFUNDED').reduce((sum, b) => sum + b.amount, 0);

    const popularCamps = [...ratings].sort((a, b) => b.count - a.count).slice(0, 3);


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
  );
};

export default ChartRow;

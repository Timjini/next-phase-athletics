import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { format, isWithinInterval, startOfWeek, endOfWeek, parseISO } from 'date-fns';
import { Booking } from '@/app/types/camp';

interface BookingChartProps {
  bookings: Booking[];
}

export default function BookingChart({ bookings }: BookingChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const [startDate, setStartDate] = useState(() => format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(() => format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'));

  useEffect(() => {
    if (!chartRef.current || !bookings.length) return;

    // Filter bookings to only PAID and within selected date range
    const filtered = bookings.filter(b => {
      if (b.paymentStatus !== 'PAID') return false;
      const createdAt = format(new Date(b.createdAt), 'yyyy-MM-dd');
      return isWithinInterval(createdAt, {
        start: parseISO(startDate),
        end: parseISO(endDate),
      });
    });

    // Count bookings per date
    const countsByDate = filtered.reduce((acc, booking) => {
      const date = format(new Date(booking.createdAt), 'yyyy-MM-dd');
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedDates = Object.keys(countsByDate).sort();
    const counts = sortedDates.map(date => countsByDate[date]);

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: sortedDates,
        datasets: [
          {
            label: 'Paid Bookings',
            data: counts,
            backgroundColor: 'rgba(34, 197, 94, 0.5)',
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.raw}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Bookings',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [bookings, startDate, endDate]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Paid Registration Analytics</h2>

      <div className="mb-4 flex gap-4 items-center">
        <label className="text-sm font-medium text-gray-700">
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="ml-2 border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <label className="text-sm font-medium text-gray-700">
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="ml-2 border border-gray-300 rounded px-2 py-1"
          />
        </label>
      </div>

      <div className="h-80">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

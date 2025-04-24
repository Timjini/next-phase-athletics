import { useState, useEffect } from 'react';
import { Booking } from '@/app/types/camp';

const useFetchBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/admin/bookings`);

        if (!response.ok) {
          throw new Error('Bookings not found');
        }

        const data: Booking[] = await response.json();
        setBookings(data);
      } catch (err) {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);
  
  return { loading, error, bookings };
};

export default useFetchBookings;

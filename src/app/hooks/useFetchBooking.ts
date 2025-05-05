"use client";

import { useState, useEffect } from 'react';
import { Booking } from '../types/camp';

const useFetchBooking = (token: string) => {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/booking`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error('Camp program not found');
        }

        const data: Booking = await response.json();
        setBooking(data);
      } catch (err) {
        setError('Failed to fetch camp program');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
        fetchBooking();
    }
  }, [token]);
  
  return { loading, error, booking };
};

export default useFetchBooking;

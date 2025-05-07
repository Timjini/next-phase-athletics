import { useState, useEffect } from 'react';
import { CampProgram } from '@/app/types/camp';

const useFetchCamps = () => {
  const [camps, setCamps] = useState<CampProgram[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCamps = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/admin/camps`);

        if (!response.ok) {
          throw new Error('Bookings not found');
        }

        const data: CampProgram[] = await response.json();
        setCamps(data);
      } catch (err) {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchCamps();
  }, []);
  
  return { loading, error, camps };
};

export default useFetchCamps;

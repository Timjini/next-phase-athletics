"use client";

import { useState, useEffect } from 'react';
import { CampProgram } from '../types/camp';

const useFetchCampProgram = (slug: string) => {
  const [campProgram, setCampProgram] = useState<CampProgram | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampProgram = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/camps`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        });

        if (!response.ok) {
          throw new Error('Camp program not found');
        }

        const data: CampProgram = await response.json();
        setCampProgram(data);
      } catch (err) {
        setError('Failed to fetch camp program');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCampProgram();
    }
  }, [slug]);
  
  return { loading, error, campProgram };
};

export default useFetchCampProgram;

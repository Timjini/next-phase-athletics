import { useState, useEffect } from 'react';

const useFetchCampProgram = (slug: string) => {
  const [campProgram, setCampProgram] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampProgram = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/camps/${slug}`);

        if (!response.ok) {
          throw new Error('Camp program not found');
        }

        const data = await response.json();
        setCampProgram(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCampProgram();
    }
  }, [slug]);  // Refetch when `slug` changes

  return { loading, error, campProgram };
};

export default useFetchCampProgram;

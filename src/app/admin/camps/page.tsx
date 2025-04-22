"use client";
import { useEffect, useState } from 'react';
import { CampProgram, columns } from './columns';
import { DataTable } from './data-table';
import Loader from '@/app/components/Loader';

async function getData(): Promise<CampProgram[]> {
  const res = await fetch('/api/camps');
  if (!res.ok) {
    throw new Error('Failed to fetch camps');
  }
  const data = await res.json();
  return data;
}

export default function Page() {
  const [data, setData] = useState<CampProgram[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto py-10 px-2 lg:px-24">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

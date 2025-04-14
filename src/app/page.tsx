'use client';

import { useRouter } from 'next/navigation';
import MainButton from './components/MainButton';
import Hero from './layouts/Hero';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Hero />
      <MainButton title="Hi" onClick={() => router.push('/camps')} />
    </div>
  );
}

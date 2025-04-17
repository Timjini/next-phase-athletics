'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const saveSubmission = async () => {
      if (!sessionId) return;

      try {
        const res = await fetch('/api/save-submission', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId }),
        });

        if (!res.ok) throw new Error('Failed to save submission');
        
        console.log('Submission saved successfully');
      } catch (error) {
        console.error('Error saving submission:', error);
      }
    };

    if (sessionId) saveSubmission();
  }, [sessionId]);

  return <h1 className="text-3xl font-bold">Thanks for registering! 🎉</h1>;
}
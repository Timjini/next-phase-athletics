'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isSaving, setIsSaving] = useState(true);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    const saveSubmission = async () => {
      if (!sessionId) {
        setSaveError('No session ID found');
        setIsSaving(false);
        return;
      }

      try {
        const res = await fetch('/api/save-submission', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId }),
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.error || 'Failed to save submission');
        }
        
        const data = await res.json();
        console.log('Submission saved with ID:', data.submissionId);
      } catch (error: unknown) {
        console.error('Error saving submission:', error);
        setSaveError(error);
      } finally {
        setIsSaving(false);
      }
    };

    saveSubmission();
  }, [sessionId]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Thanks for registering! 🎉</h1>
      
      {isSaving ? (
        <div className="text-lg">Saving your registration details...</div>
      ) : saveError ? (
        <div className="text-red-500">
          <p>We received your payment but couldn&apos;t save your details.</p>
          <p>Please contact support with this reference: {sessionId}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p>Your registration has been confirmed!</p>
          <p>We&apos;ve sent a confirmation email with details about your camp.</p>
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="font-semibold">Reference ID: {sessionId}</p>
          </div>
        </div>
      )}
    </div>
  );
}
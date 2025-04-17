'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type PaymentConfirmationResult = {
  loading: boolean;
  error: string | null;
  sessionId: string | null;
};

export const usePaymentConfirmation = (): PaymentConfirmationResult => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        setLoading(true);
        
        if (!sessionId) {
          throw new Error('No session ID found');
        }

        const response = await fetch('/api/confirm-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        await response.json();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    confirmPayment();
  }, [sessionId]);

  return { loading, error, sessionId };
};
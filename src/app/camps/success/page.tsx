'use client';

import MainButton from '@/app/components/MainButton';
import { usePaymentConfirmation } from '../../hooks/usePaymentConfirmation';

export default function SuccessPage() {
  const { loading, error } = usePaymentConfirmation();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        {/* Success Icon */}

        {loading ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Verifying Payment...
            </h2>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        ) : error ? (
        <div className="mx-auto mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6L18 18M18 6L6 18" />
                </svg>
              </div>
              <div className="space-y-4">
                <span className="text-2xl font-bold text-red-600 mb-4">
                  Verification Failed
                </span>
                <p className="text-gray-600">{error}</p>
              </div>
            </div>
        ) : (
          <div className="mx-auto mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <span className="text-3xl font-bold text-green-600 mb-4">
                    Payment Successful! 🎉
                  </span>
                  <p className="text-gray-600 mb-6 text-lg">
                    Thank you for your purchase! Your transaction was completed successfully.
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    A confirmation email has been sent to your registered address.
                  </p>
                </div>
              </div>
        )}
        <MainButton title="Return to Home" onClick={() => window.location.href = '/'} />
      </div>
    </div>
  );
}
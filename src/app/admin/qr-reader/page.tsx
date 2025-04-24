"use client";

import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { toast } from 'sonner';

export default function QRScannerPage() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [apiResponse, setApiResponse] = useState(null);

  const processScan = async (decodedText: string) => {
    try {
      setIsLoading(true);
      
      // Show loading toast      
      const response = await fetch('/api/admin/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scanData: decodedText }),
      });
      
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      setApiResponse(data);

      toast.success('Scan processed successfully!');
            
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process scan';
      
      // Show error toast
      toast.error(errorMessage);
      
      console.error('Error processing scan:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Clear all timeouts on unmount
  useEffect(() => {
    return () => {
      const timeoutId = errorTimeoutRef.current;
      if (timeoutId) clearTimeout(timeoutId);
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, []);

  const startScanner = async () => {
    setScanResult(null);
    setIsLoading(true);
    setIsScanning(true);

    try {
      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        rememberLastUsedCamera: true,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
        disableFlip: true
      };

      scannerRef.current = new Html5QrcodeScanner(
        "qr-scanner-container",
        config,
        false
      );

      let lastErrorTime = 0;
      const errorThrottleTime = 2000;

      scannerRef.current.render(
        (decodedText) => {
          if (decodedText?.trim()) {
            setScanResult(decodedText);
            stopScanner();
            processScan(decodedText);
          }
        },
        (error) => {
          const now = Date.now();
          if (now - lastErrorTime > errorThrottleTime) {
            lastErrorTime = now;
            console.log('Scanning... (normal operation)');
          }
        }
      );
    } catch (err) {
      toast.error('Failed to initialize scanner');
      console.error('Scanner initialization failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const stopScanner = () => {
    setIsScanning(false);
    if (scannerRef.current) {
      scannerRef.current.clear()
        .then(() => {
          scannerRef.current = null;
        })
        .catch(err => {
          toast.error('Error stopping scanner');
          console.error(err);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Add Toaster component at the root of your page */}
      
      <h1 className="text-2xl font-bold mb-6">Scan QR for Attendance</h1>

      {isLoading && (
        <div className="mb-4 p-4 bg-blue-50 rounded">
          <p>Initializing scanner...</p>
        </div>
      )}

      {scanResult && (
        <div className="mb-4 p-4 bg-green-50 rounded max-w-md">
          <span className="font-semibold text-gray-600">Scanned Result:</span>
          <p className="mt-2 break-all">{scanResult}</p>
          <button 
            onClick={() => {
              setScanResult(null);
              startScanner();
            }}
            className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Scan Again
          </button>
        </div>
      )}

      <div
        id="qr-scanner-container"
        className={`w-full max-w-md mb-4 ${isScanning ? '' : 'hidden'}`}
      />

      <div className="flex gap-4">
        {!isScanning ? (
          <button
            onClick={startScanner}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? 'Starting...' : 'Start Scanner'}
          </button>
        ) : (
          <button
            onClick={stopScanner}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Stop Scanner
          </button>
        )}
      </div>

      <div className="mt-6 text-sm text-gray-600 max-w-md text-center">
        <p className="font-medium">Scanning Tips:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Hold your device steady</li>
          <li>Ensure the QR code is well-lit</li>
          <li>Position the code within the scanner box</li>
          <li>Move closer if the code is too small</li>
        </ul>
      </div>
    </div>
  );
}
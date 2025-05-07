"use client";

import { useEffect, useRef, useState } from "react";
import {
  Html5QrcodeScanner,
  Html5QrcodeScanType,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { toast } from "sonner";
import { formatDate } from "@/app/utils/dateUtils";

export default function QRScannerPage() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  interface ApiResponse {
    campName: string;
    session: {
      startDate: string;
      endDate: string;
    };
    athleteName?: string;
    tShirtSize?: string;
    paymentStatus?: string;
    message?: string;
  }

  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const processScan = async (decodedText: string) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/admin/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scanData: decodedText }),
      });

      const result = await response.json();

      if (!response.ok) {
        const message = result.message || `Error ${response.status}`;
        if (response.status === 400) {
          toast(message, {
            style: { backgroundColor: "#facc15", color: "#000" }, // yellow style
          });
        } else {
          toast.error(message);
        }
        return;
      }

      setApiResponse(result);
      toast.success(result.message || "Scan processed successfully!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to process scan";
      toast.error(errorMessage);
      console.error("Error processing scan:", err);
    } finally {
      setIsLoading(false);
    }
  };


  // Clear all timeouts on unmount
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const localTimeoutId = errorTimeoutRef.current;
      if (localTimeoutId) {
        clearTimeout(localTimeoutId);
      }
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, []);

  const requestCameraPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Camera permission granted');
      startScanner();
    } catch (err) {
      console.error('Camera permission denied or error:', err);
      toast.error('Camera permission is required to scan QR codes.');
    }
  };
  
  useEffect(() => {
    requestCameraPermission();
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
        disableFlip: true,
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
            console.log("Scanning... (normal operation)");
          }
        }
      );
    } catch (err) {
      toast.error("Failed to initialize scanner");
      console.error("Scanner initialization failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const stopScanner = () => {
    setIsScanning(false);
    if (scannerRef.current) {
      scannerRef.current
        .clear()
        .then(() => {
          scannerRef.current = null;
        })
        .catch((err) => {
          toast.error("Error stopping scanner");
          console.error(err);
        });
    }
  };

  console.log("API Response:", apiResponse);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          QR Attendance Scanner
        </h1>
        <p className="text-gray-500">
          Scan participant QR codes to mark attendance
        </p>
      </div>

      {/* Scanner Status */}
      {isLoading && (
        <div className="mb-6 w-full max-w-md border border-blue-100 rounded-lg p-4 flex items-center">
          <div className="animate-spin h-5 w-5 text-blue-500 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <span className="text-blue-800">Initializing scanner...</span>
        </div>
      )}

      {/* Scan Results */}
      {scanResult && (
        <div className="mb-6 w-full max-w-md rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="bg-green-400 px-4 py-3 border-b border-green-100">
            <h2 className="font-semibold text-green-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Attendance Recorded
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Camp</p>
                {/* <p className="text-gray-800">{apiResponse?.campName}</p> */}
                <p className="text-sm text-gray-500">
                  {formatDate(apiResponse?.session.startDate || "")} -{" "}
                  {formatDate(apiResponse?.session.endDate || "")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Participant
                  </p>
                  <p className="text-gray-800">{apiResponse?.athleteName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">T-Shirt</p>
                  <p className="text-gray-800">{apiResponse?.tShirtSize}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Payment Status
                </p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    apiResponse?.paymentStatus === "PAID"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {apiResponse?.paymentStatus}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setScanResult(null);
                startScanner();
              }}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Scan Another Code
            </button>
          </div>
        </div>
      )}

      {/* Scanner Container */}
      <div
        id="qr-scanner-container"
        className={`w-full max-w-md mb-6 rounded-xl overflow-hidden ${
          isScanning ? "" : "hidden"
        }`}
      />

      {/* Controls */}
      <div className="flex gap-4 w-full max-w-md">
        {!isScanning ? (
          <button
            onClick={startScanner}
            disabled={isLoading}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Preparing...
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Start Scanner
              </>
            )}
          </button>
        ) : (
          <button
            onClick={stopScanner}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-sm transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg>
            Stop Scanner
          </button>
        )}
      </div>

      {/* Tips */}
      <div className="mt-8 w-full max-w-md bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <span className="text-sm font-medium text-gray-900 mb-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Scanning Tips
        </span>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Hold your device steady about 6-12 inches from the code
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ensure good lighting - avoid glare or shadows
          </li>
          <li className="flex items-start">
            <svg
              className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Center the QR code in the scanner frame
          </li>
        </ul>
      </div>
    </div>
  );
}

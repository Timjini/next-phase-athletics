'use client'
import React, { useState, useEffect } from 'react';
import { LoadScript, Libraries } from '@react-google-maps/api';

const LIBRARIES: Libraries = ['places', 'geometry'];

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

type Props = {
  children: React.ReactNode;
};

const GoogleMapsWrapper: React.FC<Props> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
    }
  }, []);

  return isLoaded ? (
    <>{children}</>
  ) : (
    <LoadScript googleMapsApiKey={API_KEY} libraries={LIBRARIES}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapsWrapper;

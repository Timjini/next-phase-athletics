'use client';
import React from 'react';
import { LoadScript, Libraries } from '@react-google-maps/api';

const LIBRARIES: Libraries = ['places', 'geometry'];
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

type Props = {
  children: React.ReactNode;
};

const GoogleMapsWrapper: React.FC<Props> = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={LIBRARIES}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapsWrapper;
